FROM node:22-bullseye-slim AS builder
WORKDIR /app

COPY package*.json ./

COPY docs/package*.json docs/

WORKDIR /app/docs

RUN rm -rf node_modules package-lock.json dist .storybook/storybook-static .cache && \
    npm cache clean --force

RUN npm install
RUN npm rebuild

WORKDIR /app
COPY . .

WORKDIR /app/docs
RUN npm run build-storybook

FROM node:22-bullseye-slim AS runner
WORKDIR /app
COPY --from=builder /app/docs/storybook-static ./storybook-static

RUN npm install -g http-server
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 80
CMD ["http-server", "storybook-static", "-p", "80"]
