FROM node:17

# Working dir
WORKDIR /usr/src/app

# Copy files from Build
COPY package*.json ./

# Install Globals
RUN npm install prettier -g

# Install Files
RUN npm install
RUN npm install -g pm2
RUN npm install express --save
RUN npm install dotenv
RUN npm install body-parser
RUN npm install mocha chai
RUN npm install jest supertest --save-dev

# Copy SRC
COPY . .


# Open Port
EXPOSE 3000

# Docker Command to Start Service
CMD [ "node", "start" ]
