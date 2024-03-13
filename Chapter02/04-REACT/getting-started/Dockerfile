FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN rm -rf node_modules
RUN npm i

COPY . .

EXPOSE 5173/tcp

CMD ["npm","run","dev"]