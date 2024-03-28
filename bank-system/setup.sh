#!/bin/bash

# Run the necessary npm commands
curl -sL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

npm install -g npm@latest

npm install -g create-vite

npm install

npm run build

npm run generate-mix-manifest

php artisan serve --host=0.0.0.0 --port=8080

wait