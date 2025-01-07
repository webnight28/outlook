#Sample Dockerfile for NodeJS Apps

FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /GGEEREFfegr657577

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "node", "server.js" ]
