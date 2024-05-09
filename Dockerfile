# Build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build -- --prod

# Serve stage
FROM nginx:stable-alpine
COPY --from=build /app/dist/ProEventos-App /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
