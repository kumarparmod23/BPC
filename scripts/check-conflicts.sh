#!/usr/bin/env bash
set -euo pipefail

if rg -n "^(<<<<<<<|=======|>>>>>>>)" -S . --glob '!*.png' --glob '!.git/**'; then
  echo "❌ Merge conflict markers detected. Resolve conflicts before deploying."
  exit 1
fi

echo "✅ No merge conflict markers detected."
