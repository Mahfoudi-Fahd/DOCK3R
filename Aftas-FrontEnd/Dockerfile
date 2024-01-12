FROM node:20-alpine as angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --force
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=angular /app/dist/ /usr/share/nginx/html
