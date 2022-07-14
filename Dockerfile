# Base Image
FROM node:16.15.0 as builder

# Make app directory and set working directory
RUN mkdir -p /usr/apps/waffler
WORKDIR /usr/apps/waffler

# Add node_modules bin directory to path
ENV PATH /usr/apps/waffler/node_modules/.bin:$PATH

# Copy source code
COPY . .
# Install dependencies
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=builder /usr/apps/waffler/build .

EXPOSE 8080