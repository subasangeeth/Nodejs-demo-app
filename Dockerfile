FROM node:18-bullseye-slim

WORKDIR /app

COPY . .

EXPOSE 8081


CMD ["node","app.js"]
