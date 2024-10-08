FROM node


COPY package-lock.json package-lock.json
COPY package.json package.json
COPY nodemon.json nodemon.json
COPY tsconfig.json tsconfig.json
COPY src src


RUN npm install


CMD ["npm", "start"]
