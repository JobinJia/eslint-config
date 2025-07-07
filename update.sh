#!/bin/zsh

source ~/.zshrc

set -e

proxy_on

BASE_BRANCH="main"

UPSTREAM_URL="https://github.com/antfu/eslint-config.git"

if ! git remote get-url upstream >/dev/null 2>&1; then
  echo "🔧 添加 upstream 远程地址：$UPSTREAM_URL"
  git remote add upstream "$UPSTREAM_URL"
else
  echo "✅ upstream 已存在，跳过添加"
fi

echo "🔄 获取 upstream 最新代码..."
git fetch upstream

echo "🌿 切换到分支：$BASE_BRANCH"
git checkout "$BASE_BRANCH"

echo "📦 Merge 到 upstream/$BASE_BRANCH"
git merge upstream/"$BASE_BRANCH"

echo "🚀 推送到 origin/$BASE_BRANCH"
git push origin "$BASE_BRANCH"

echo "✅ 同步完成！你的 Fork 已是最新。"
