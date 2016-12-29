#!/bin/bash

cd build
git init
git add -A
git commit -m "Site updated: $(date)"

echo "push to github"
git push -u https://$GH_TOKEN@github.com/gasolin/gasolin.github.io.git HEAD:master --force --quiet
echo "done"
