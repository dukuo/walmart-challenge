### STAGE 1: Build ###
FROM node:12.16.3 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
FROM hoosin/alpine-nginx-nodejs:latest
COPY --from=build /usr/src/app/.next /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
# COPY ./.env /usr/share/nginx/html/.env

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
