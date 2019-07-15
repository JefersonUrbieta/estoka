CREATE SEQUENCE comum.seq_categoria
INCREMENT BY 1
  START WITH 1
NO MAXVALUE
NO MINVALUE
CACHE 1;

create table comum.tb_categoria
(
    ca_id integer NOT NULL,
    ca_nome varchar(20) not null,
    ca_descricao varchar(255)
);

ALTER TABLE comum.tb_categoria
  ADD CONSTRAINT pk_categoria PRIMARY KEY (ca_id);

comment on table comum.tb_categoria is 'armazena as categorias do sistema.';
comment on column comum.tb_categoria.ca_id is 'código gerado automaticamente que identifica uma categoria.';
comment on column comum.tb_categoria.ca_nome is 'nome da categoria.';
comment on column comum.tb_categoria.ca_descricao is 'descricao da categoria.';
