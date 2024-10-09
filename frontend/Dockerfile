# Stage 1: Build the application
FROM node:16-alpine as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build output to Nginx's public directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port Nginx is listening on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
