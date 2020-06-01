#!/bin/bash

git remote -v
read -p "Ok?" yn
case $yn in
    [Nn]* ) exit;;
    [YySs\n]* ) break;;
esac
git add .
git commit -m "gitUpdate"
git fetch
git pull
git push origin master

