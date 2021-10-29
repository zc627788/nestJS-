FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app1

COPY package*.json ./

# 要使用npm，先指定一个国内的源
RUN npm config set registry https://registry.npm.taobao.org

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build


COPY --from=development /usr/src/app1/dist ./dist

CMD ["node", "dist/main"]