#!/bin/bash
set -e

BLOG_DIR="/Users/noders/Documents/jay/blog"
OUTPUT_DIR="$BLOG_DIR/output"

echo "==> Ghost 시작 중..."
cd "$BLOG_DIR"
GHOST_NODE_VERSION_CHECK=false ghost start 2>/dev/null || true
sleep 3

echo "==> 기존 output 폴더 삭제..."
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

echo "==> wget으로 사이트 크롤 중..."
cd "$OUTPUT_DIR"
wget \
  --recursive \
  --no-clobber \
  --page-requisites \
  --html-extension \
  --convert-links \
  --no-parent \
  --domains localhost \
  --quiet \
  --show-progress \
  http://localhost:2368

echo "==> 크롤 완료. 파일 위치: $OUTPUT_DIR/localhost:2368/"

echo "==> gh-pages 브랜치에 배포 중..."
cd "$BLOG_DIR"

# 현재 브랜치 저장
CURRENT_BRANCH=$(git branch --show-current)

# gh-pages 브랜치로 전환 (없으면 orphan으로 생성)
git checkout gh-pages 2>/dev/null || git checkout --orphan gh-pages

# 기존 tracked 파일 모두 삭제
git rm -rf . 2>/dev/null || true

# output 파일 복사
cp -r "$OUTPUT_DIR/localhost:2368/." .

# output 폴더 자체 삭제 (불필요)
rm -rf output 2>/dev/null || true

git add -A
git commit -m "deploy: update static blog $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages

echo ""
echo "==> 배포 완료!"
echo "==> URL: https://JaeYoung0.github.io/test-bk-blog/"

# 원래 브랜치로 복귀
git checkout "$CURRENT_BRANCH"
