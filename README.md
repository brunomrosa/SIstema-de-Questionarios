# Sistema de Questionários

## Para rodar o backend você precisa seguir os passos abaixo

##### A aplicação utiliza PostGRES, por isso utilizaremos Docker para rodar um container utilize o comando abaixo

##### docker run -d -e POSTGRES_USER=agrotools -e POSTGRES_PASSWORD=agrotools -e POSTGRES_DB=agrotools -p 5432:5432 --name agrotools postgres:10 

Após isso, na pasta do projeto **renomeie o arquivo .env.example para .env e substitua o campo DB_HOST no arquivo .env para o ip do Docker** 
(por padrão é localhost, mas caso você tenha alterado ele utilize o ip que você definiu)
**Por padrão as credenciais de acesso do banco serão: usuário, senha e schema: agrotools**

## Rode os seguintes comando DENTRO da pasta backend 

- 1 - Rodar yarn OU npm install
- 2 - Rodar yarn sequelize db:migrate OU npx sequelize db:migrate
- 3 - Rodar yarn sequelize db:seed:all OU npx sequelize db:seed:all  
- 4 - yarn dev OU npx run dev

## Agora o backend já está rodando, após isso dentro da pasta frontend: 
- 1 - Rode yarn OU npm install
- 2 - Rode yarn start OU npm run start
Por padrão será criado um usuário com o email example@example.com e senha 123456, mas você pode criar outro.