# Build stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Add non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose port for development server
EXPOSE 8080

# Change ownership of /app folder and node_modules
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Start the development server
CMD ["npm", "run", "dev"]

