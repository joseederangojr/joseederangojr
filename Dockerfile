FROM node:12-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf /etc/hosts
COPY config/.nginx/nginx.conf /etc/nginx/conf.d
COPY /etc/hosts /etc/hosts
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
