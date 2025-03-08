FROM node:20-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

ARG NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api
ENV NEXT_PUBLIC_BASE_API_URL=${NEXT_PUBLIC_BASE_API_URL}

ENV BASE_API_URL=http://server:5000/api

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]