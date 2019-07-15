# Tarefa

Esta vai ser uma tarefa de criação de algumas telas

## 1 - Criar tela de listagem e cadastro de produto

Esta tela sera responsavel por cadastrar um produto no sistema, com estoque para poder ser controlado depois

Esta tela deve ter o cadastro das seguintes telas
- Nome
- Codigo
- Fornecedor
- Categoria
- Unidade de medida
- Valor de custo
- Valor de venda
- Estoque atual
- Estoque minimo

### No backend
- Crie uma package para as classes do **produto**
- Crie as classes de Service, Bo, Repository e entidade do **produto**
- Crie o script de criação da tabela de **produto**
    
### No frontend
- Crie uma pasta para as telas do **produto**
- Adicione as telas do produto no arquivo routes
- Altere as telas de produto para buscar dados do backend

## 2 - Criar tela de listagem e cadastro de cliente
Esta tela será responsavel por cadastrar um cliente que depois será usado para realizar uma venda

Esta tela deve ter o cadastro das seguintes telas
- Nome
- Telefone
- E-mail
- Observações

### No backend
- Crie uma package para as classes do **cliente**
- Crie as classes de Service, Bo, Repository e entidade do **cliente**
- Crie o script de criação da tabela de **cliente**
    
### No frontend
- Crie uma pasta para as telas do **cliente**
- Adicione as telas do produto no arquivo routes
- Altere as telas de produto para buscar dados do backend

## 3 - Criar tela de listagem e cadastro de forma de pagamento
Esta tela sera responsavel por criar uma forma de pagamento que depois sera usado durante a venda

Esta tela deve ter o cadastro das seguintes campos
- Nome
- Observações

### No backend
- Crie uma package para as classes do **forma de pagamento**
- Crie as classes de Service, Bo, Repository e entidade do **forma de pagamento**
- Crie o script de criação da tabela de **forma de pagamento**
    
### No frontend
- Crie uma pasta para as telas do **forma de pagamento**
- Adicione as telas do produto no arquivo routes
- Altere as telas de produto para buscar dados do backend

## 4 - Criar tela de listagem e cadastro de vendas
Esta tela realizara uma venda de um cliente e os produtos que seram comprados teram seus dados de estoque subtraidos

Esta tela deve ter o cadastro das seguintes campos
- Data
- Valor
- Cliente
- Forma de pagamento
- Lista de produtos
    - Quantidade
- Observações

### No backend
- Crie uma package para as classes do **venda**
- Crie as classes de Service, Bo, Repository e entidade do **venda**
- Crie o script de criação da tabela de **venda**
- Apos salvar uma venda deve ser debitar do estoque de produto a quantidade vendida
    
### No frontend
- Crie uma pasta para as telas do **venda**
- Adicione as telas do produto no arquivo routes
- Altere as telas de produto para buscar dados do backend

-----

© Copyright 2019 - All rights reserved | Todos os direitos Reservados

__Jeferson Urbieta__
