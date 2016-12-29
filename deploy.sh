#!/bin/bash

cd build
git init
git add -A
git commit -m "Site updated: $(date)"

git push -u https://$GH_TOKEN@github.com/gasolin/gasolin.github.io.git HEAD:gh-pages --force
