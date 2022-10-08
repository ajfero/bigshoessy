FROM nginx:1.23.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/big-shoes-sy /usr/share/nginx/html