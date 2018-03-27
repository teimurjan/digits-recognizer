#!/usr/bin/env bash

react-scripts build
cd build

cp index.html ../../backend/app/templates/
cp -R static ../../backend/app/
cp service-worker.js ../../backend/app/static
cp favicon.ico ../../backend/app/static

cd ..