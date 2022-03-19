# syntax=docker/dockerfile:1

FROM node:16.14.1-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

CMD [ "node", "index.js", "pgpass" ]
