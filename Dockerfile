FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Azure App Service 포트에 맞춤
EXPOSE 8080

CMD ["npm", "start"]