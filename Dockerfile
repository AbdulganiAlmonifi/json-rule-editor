FROM node:10.15.3-alpine
RUN addgroup app && adduser app -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]