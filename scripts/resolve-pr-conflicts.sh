#!/usr/bin/env bash
set -euo pipefail

# Run this only while a merge/rebase conflict is in progress.
# It auto-resolves the common static-site files by preferring current branch changes.

FILES=(
  ".github/workflows/static.yml"
  "README.md"
  "index.html"
  "scripts/main.js"
  "styles/main.css"
)

if ! git rev-parse -q --verify MERGE_HEAD >/dev/null && [ ! -d .git/rebase-merge ] && [ ! -d .git/rebase-apply ]; then
  echo "No merge/rebase conflict in progress."
  exit 1
fi

for file in "${FILES[@]}"; do
  if git ls-files -u -- "$file" | grep -q .; then
    git checkout --ours -- "$file"
    git add "$file"
    echo "Resolved with ours: $file"
  fi
done

echo "Done. Run tests, then complete with:"
echo "  git commit    # for merge"
echo "  git rebase --continue    # for rebase"
