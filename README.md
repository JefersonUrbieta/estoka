# Estoka

Aplicação de controle de estoque simples

## Arquitetura

Este projeto é dividido em 2 grandes módulos/entregáveis: 
 - __Estoka-api__: responsável por fornecer sua API Rest tanto para o seu próprio frontend quanto para aplicações externas (Spring Boot e Java 8).
 - __Estoka-app__: frontend principal deste sistema contendo as principais telas de manutenção (Vuejs).

## Como desenvolver

### Backend

Para subir o backend **estoka-api** voce precisa abri o projeto em sua idea prefirida e importa-lo como um projeto maven

#### Baixe as dependencias
Execute o **mvn install** dentro da idea para que sejão baixadas as dependencias

#### Como subir a Api pela IDE
Para subir a API, utilize o *Run Configurations* através da classe `estoka-api/src/main/java/br/com/juns/estoka/EstokaApplication` 
e com o botão direito, acesse a opção 'Create EstokaApplication'. Isso vai criar uma configuração do Run Configurations. 
Em seguida, adicione as variáveis de ambiente contidas no arquivo `.variables.env` como variaveis de ambiente 
da configuração recentemente criada.

### Frontend

#### Baixe as dependencias
Execute o **npm install** dentro da pasta **estoka-app** para baixar as dependencias atraves do npm


#### Como subir o frontend pela IDE
Para subir os projetos de frontend pela IDE, basta rodar o comando `npm run serve`.

-----

© Copyright 2019 - All rights reserved | Todos os direitos Reservados

__Jeferson Urbieta__
