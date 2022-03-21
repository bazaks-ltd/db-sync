# syntax=docker/dockerfile:1

FROM node:16.14.1-alpine
ENV NODE_ENV=production
RUN apk add --no-cache openssh
RUN addgroup -S dbsync_g && adduser -S dbsync_u -G dbsync_g
USER dbsync_u
RUN mkdir -p "/home/dbsync_u/.ssh" && "touch /home/dbsync_u/.ssh/config"
WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN node index.js pgpass