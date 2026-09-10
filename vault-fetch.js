const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const vaultAddr = process.env.VAULT_ADDR || "http://10.0.0.4:8200";
const roleId = process.env.VAULT_ROLE_ID;
const secretId = process.env.VAULT_SECRET_ID;
const vaultToken = process.env.VAULT_TOKEN;
const secretPath = process.env.VAULT_SECRET_PATH || "landing-frontend/development";
const envFile = process.env.VAULT_ENV_FILE || "/tmp/vault.env";

function request(url, options, data) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const req = protocol.request(url, options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        } else {
          reject(new Error(`Status ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on("error", reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function resolveToken() {
  if (vaultToken) return vaultToken;
  if (!roleId || !secretId) {
    throw new Error("VAULT_TOKEN or VAULT_ROLE_ID and VAULT_SECRET_ID are required");
  }
  const loginRes = await request(
    `${vaultAddr}/v1/auth/approle/login`,
    { method: "POST", headers: { "Content-Type": "application/json" } },
    { role_id: roleId, secret_id: secretId },
  );
  if (!loginRes.auth?.client_token) {
    throw new Error("Vault AppRole login did not return a client token");
  }
  return loginRes.auth.client_token;
}

async function fetchSecrets() {
  const clientToken = await resolveToken();
  const mounts = ["secrets", "secret"];
  let secrets;
  for (const mount of mounts) {
    try {
      const secretRes = await request(`${vaultAddr}/v1/${mount}/data/${secretPath}`, {
        method: "GET",
        headers: { "X-Vault-Token": clientToken },
      });
      secrets = secretRes.data?.data;
      if (secrets) break;
    } catch {
      try {
        const secretRes = await request(`${vaultAddr}/v1/${mount}/${secretPath}`, {
          method: "GET",
          headers: { "X-Vault-Token": clientToken },
        });
        secrets = secretRes.data?.data ?? secretRes.data;
        if (secrets) break;
      } catch {
        // try next mount
      }
    }
  }
  if (!secrets) {
    throw new Error("No secrets found in response");
  }

  let envContent = "";
  for (const [key, value] of Object.entries(secrets)) {
    envContent += `${key}="${value}"\n`;
  }
  fs.mkdirSync(path.dirname(envFile), { recursive: true });
  fs.writeFileSync(envFile, envContent, { mode: 0o600 });
  console.log(`Secrets written to ${path.resolve(envFile)}`);
}

fetchSecrets().catch((err) => {
  console.error("Error fetching secrets from Vault:", err.message);
  process.exit(1);
});
