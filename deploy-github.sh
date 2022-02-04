###
 # @Author: Vinton
 # @Date: 2022-01-23 16:00:12
 # @Description: file content
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

bash deploy.sh

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:vintonHuang/vintonHuang.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -