# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY front/package*.json ./

# Install project dependencies
RUN npm install

# Copy project files into the docker image
COPY front/ .

# Build the app for production
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]