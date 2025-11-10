# ---- Base image ----
FROM node:20-alpine

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency files first for caching
COPY pnpm-lock.yaml* package.json ./

# Install dependencies
RUN pnpm install

# Copy source
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Run the Vite dev server on all interfaces (so it's accessible from host)
CMD ["pnpm", "run", "dev", "--host"]