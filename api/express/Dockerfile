FROM node

MAINTAINER Thomas Hull

COPY app/ api/app
COPY package.json api/
RUN cd api && npm install

WORKDIR /api

EXPOSE 3000

CMD ["npm", "start"]
