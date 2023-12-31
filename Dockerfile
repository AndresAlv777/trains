FROM node:18-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile


FROM node:18-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --prod
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node","dist/main"]