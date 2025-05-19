# Gunakan image Node.js resmi
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json .
RUN npm install

# Copy semua file project
COPY . .

# Expose port (default React: 3000)
EXPOSE 5173

# Jalankan aplikasi
CMD ["npm", "start"]