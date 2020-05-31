#!/bin/bash

git remote -v
read -p "Ok?"
git add .
git commit -m "gitUpdate"
git fetch
git pull
git push origin master

