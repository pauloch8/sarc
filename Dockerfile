FROM node:18.16.0-slim

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "null" ]