
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the server code to the working directory
COPY . .

# Expose the port on which the server will run
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
