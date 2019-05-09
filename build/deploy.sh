#! /bin/bash

current_path="../dist/*"
target_path="/srv/www/admin/"
# 打包项目
npm run build
# 删除原文件
rm -rf $target_path
# 创建目录
mkdir $target_path
# 复制文件
cp -ri $current_path $target_path