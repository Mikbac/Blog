FROM node:14-alpine as builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=builder /app/dist/Blog /usr/share/nginx/html
