# Baixando imagem do node com a seguinte versão
FROM node:18-alpine3.20
# cria uma pasta dentro da imagem para rodar o projeto
WORKDIR /usr/src/app
# Copia todo o meu diretório para dentro da pasta criada acima
COPY . .
# Instala NPM
RUN npm install
# roda meu script criado em package.json
RUN npm run build
# Porta que meu servidor esta rodando
EXPOSE 3333
# roda meu script de start
CMD ["npm", "run", "start"]