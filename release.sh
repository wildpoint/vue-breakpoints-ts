#!/usr/bin/env bash
set -e

yarn publish --no-git-tag-version --new-version $1

git add -A
git commit -a -m "Version v$1"
git tag "v$1"
git push
