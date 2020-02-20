FROM registry.pinsvc.net/mirror/node:8
WORKDIR /flight-international-admin-ui
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD [ "npm", "run" ,"start:prod" ]
