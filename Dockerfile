FROM alpine:latest 

WORKDIR /app

COPY . .

EXPOSE 8081

CMD ["node","app.js"]