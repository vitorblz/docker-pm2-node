FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm install pm2 -g
# pmhttps://pm2.io/docs/runtime/integration/transpilers/
RUN pm2 install typescript

WORKDIR /home/node/app