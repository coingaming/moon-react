FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY docs/package*.json docs/

WORKDIR /app/docs

RUN npm install

WORKDIR /app

COPY . .

ENV NODE_ENV production
WORKDIR /app/docs
RUN npm run build-storybook

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/docs/storybook-static ./storybook-static

RUN npm install -g http-server
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 80 6006
CMD ["http-server", "storybook-static", "-p", "6006"]