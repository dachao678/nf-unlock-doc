#!/usr/bin
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Qinhank/nf-unlock-doc.git
else
  msg='来自github action的自动部署'
  githubUrl=https://${GITHUB_TOKEN}@github.com/Qinhank/nf-unlock-doc.git
  git config --global user.name "hankqin"
  git config --global user.email "hankqin@github.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
ls

# 更新到服务器
echo ${ID_RSA} > nf_doc
chomd 400 nf_doc
ssh -i nf_doc ${USER}@${HOST} "cd /nf-unlock-doc && git pull"
rm -rf nf_doc
