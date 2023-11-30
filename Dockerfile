FROM node:18-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


FROM node:18-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --prod
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node","dist/index"]