FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
EXPOSE 5000
CMD [ "npx", "serve", "build" ]