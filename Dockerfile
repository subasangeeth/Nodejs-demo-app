FROM node:18 

WORKDIR /app

COPY . .

EXPOSE 8081

CMD ["node","app.js"]