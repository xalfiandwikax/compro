FROM node:18-alpine

WORKDIR /app

# Pertama copy package.json untuk optimalisasi cache
COPY package*.json ./

# Install dependencies secara eksplisit termasuk mongoose
RUN npm install mongoose express --save

# Copy semua file
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]