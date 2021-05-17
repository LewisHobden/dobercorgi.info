FROM node:alpine

ENV NODE_ENV=production

RUN mkdir -p /app
COPY . /app

ENV NUXT_PORT 5000
ENV HOST 0.0.0.0
EXPOSE 5000

CMD ["yarn", "start"]
