# Usar uma imagem base do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de definição de pacotes
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar os arquivos do projeto para o container
COPY . .

# Compilar TypeScript para JavaScript
RUN npm run build

# Gerar o cliente Prisma (se estiver usando Prisma)
RUN npx prisma generate

# Comando para executar a aplicação
CMD ["npm", "start"]