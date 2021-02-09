FROM node:12-alpine

# Add our configuration files and scripts
WORKDIR /app
ADD ./src /app/src
ADD ./package.json /app/package.json
RUN npm install
EXPOSE 3000

ENTRYPOINT ["/nodejs/bin/npm", "start"]
