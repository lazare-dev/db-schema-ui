# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the React app files into the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the React app runs on
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "start"]
