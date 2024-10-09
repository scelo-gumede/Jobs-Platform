# Use the official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (including nodemon)
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Start the application using nodemon
CMD ["npx", "nodemon", "server.ts"]  # Change to your main server file if different

