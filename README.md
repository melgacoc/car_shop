# Locadora de automóveis

## Aplicação
Uma API para gerenciar uma locadora de automoveis.

## Tecnologias
Este projeto foi construído utilizando as seguintes tecnologias

![Typescript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mongobd Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


## Funcionalidades
Este projeto foi construído utilizando as seguintes tecnologias

### Carros
Modelo de request <br>
model : obrigatorio : string <br>
year : obrigatorio : number <br>
color : obrigatorio : string <br>
buyValue: obrigatorio : number <br>
doorsQty : obrigatorio : number <br>
seatsQty : obrigatorio : number <br>
status : opicional : boolean <br>
<br>
<br>
POST (/cars): Adiciona um novo carro <br>
GET (/cars): Lista todos os carros <br>
GET (/cars/id): Lista um carro especifico <br> 
PUT (/cars/id): Atualiza um carro especifico <br>
DELETE(/cars/id): Deleta um carro <br>

### Motos
Modelo de request <br>
model : obrigatorio : string <br>
year : obrigatorio : number <br>
color : obrigatorio : string <br>
buyValue: obrigatorio : number <br>
category : obrigatorio : number | street -1 | custom - 2 | trail -3 <br>
engineCapacity : obrigatorio : number <br>
status : opicional : boolean <br>
<br>
<br>
POST (/motorcycles): Adiciona uma novo moto <br>
GET (/motorcycles): Lista todos as motos <br>
GET (/motorcycles/id): Lista uma moto especifica <br> 
PUT (/motorcycles/id): Atualiza uma moto especifica <br>
DELETE(/motorcycles/id): Deleta uma moto <br>

### 
---
## Instalação
Crie e suba a imagem do docker: `docker-compose up -d`
`docker exec -it car_shop bash`

Instale as dependências: `npm install`

Suba a aplicação: `npm start`
