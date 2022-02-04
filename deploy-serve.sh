###
 # @Author: Vinton
 # @Date: 2022-02-04 17:12:06
 # @Description: file content
### 
set -e

bash deploy.sh

scp -r /Users/mr.yellow/DianChuTechnology/个人博客网站/vuepress/docs/.vuepress/dist/ root@119.91.210.216:/data/web/
