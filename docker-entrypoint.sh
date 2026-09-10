#!/bin/sh
set -e

VAULT_ENV_FILE="${VAULT_ENV_FILE:-/tmp/vault.env}"

if [ -n "$VAULT_TOKEN" ] || { [ -n "$VAULT_ROLE_ID" ] && [ -n "$VAULT_SECRET_ID" ]; }; then
  echo "Fetching secrets from Vault..."
  VAULT_ENV_FILE="$VAULT_ENV_FILE" node vault-fetch.js
  if [ -f "$VAULT_ENV_FILE" ]; then
    echo "Loading Vault secrets into environment..."
    set -a
    while IFS= read -r line || [ -n "$line" ]; do
      case "$line" in
        ''|\#*) continue ;;
      esac
      key=${line%%=*}
      raw=${line#*=}
      val=$(printf '%s' "$raw" | sed -e 's/^"//' -e 's/"$//')
      export "$key=$val"
    done < "$VAULT_ENV_FILE"
    set +a
  fi
fi

exec "$@"
