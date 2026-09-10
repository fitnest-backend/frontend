#!/bin/sh
set -e

if [ -n "$VAULT_TOKEN" ] || { [ -n "$VAULT_ROLE_ID" ] && [ -n "$VAULT_SECRET_ID" ]; }; then
  echo "Fetching secrets from Vault..."
  node vault-fetch.js
  if [ -f .env.local ]; then
    echo "Loading .env.local into environment..."
    set -a
    while IFS= read -r line || [ -n "$line" ]; do
      case "$line" in
        ''|\#*) continue ;;
      esac
      key=${line%%=*}
      raw=${line#*=}
      val=$(printf '%s' "$raw" | sed -e 's/^"//' -e 's/"$//')
      export "$key=$val"
    done < .env.local
    set +a
  fi
fi

exec "$@"
