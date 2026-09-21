# syntax=docker/dockerfile:1
FROM node:25.8.0-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

FROM node:25.8.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

COPY --from=builder /app/dist/electrolysis ./dist/electrolysis
EXPOSE 8080
CMD ["node", "dist/electrolysis/server/server.mjs"]
