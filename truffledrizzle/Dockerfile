FROM node:10

ENV HOME=/var/www/html
WORKDIR $HOME
ENV PATH $HOME/node_modules/.bin:$PATH
COPY package*.json $HOME/

RUN npm install -g truffle --unsafe-perm=true --allow-root --silent
RUN npm config set bin-links true

RUN npm install
COPY . $HOME/
