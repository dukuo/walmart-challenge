FROM mhart/alpine-node:11.1.0
RUN mkdir /search-engine-app
WORKDIR /search-engine-app
RUN apk update && apk upgrade && apk add --no-cache bash git
COPY . /search-engine-app/
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]