FROM alpine:latest 

WORKDIR /app

COPY . .

expose 8081

CMD ["node","app.js"]