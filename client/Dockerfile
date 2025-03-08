FROM node:20-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

ARG NEXT_PUBLIC_API_URL

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]