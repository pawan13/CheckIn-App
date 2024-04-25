FROM node:18.19.0-slim

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

# Set a working directory in the container
WORKDIR /usr/src/app

# Copy package file from current directory to /usr/src/app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code from current directory to /usr/src/app
COPY . .

RUN npm run build

EXPOSE 4001

CMD [ "npm", "run", "server" ]