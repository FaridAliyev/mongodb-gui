# Use the official Node.js 18 image as the build stage
FROM node:18 AS build-stage

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve globally
RUN npm install -g serve

# Copy the rest of the application to the working directory
COPY . .

# Build the application for production
RUN npm run build:production

# Command to run the application using serve
CMD ["serve", "-s", "build", "-l", "6066"]