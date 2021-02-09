FROM node:12-alpine

# Add our configuration files and scripts
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000

ENTRYPOINT ["/nodejs/bin/npm", "start"]
