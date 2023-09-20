FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app/api

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 4000

CMD ["npm", "run", "dev"];

