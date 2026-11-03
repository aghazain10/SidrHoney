#!/bin/bash
set -euo pipefail

# Resolve Node/npm/pm2 from nvm. A non-interactive SSH session does not source
# ~/.bashrc, so without this the script fails with "npm: command not found".
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -d "$NVM_DIR/versions/node" ]; then
    NODE_BIN="$(ls -d "$NVM_DIR"/versions/node/*/bin 2>/dev/null | sort -V | tail -1)"
    [ -n "$NODE_BIN" ] && export PATH="$NODE_BIN:$PATH"
fi

cd "$(dirname "$0")"

echo "Pulling latest frontend code..."
git pull --ff-only origin main

echo "Installing npm dependencies..."
npm install

echo "Building production bundle..."
npm run build

echo "Restarting frontend process..."
pm2 restart sdrhoney-frontend --update-env

echo "Frontend deploy complete."
