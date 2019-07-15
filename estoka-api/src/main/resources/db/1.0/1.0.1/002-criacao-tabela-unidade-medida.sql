CREATE SEQUENCE comum.seq_unidade_medida
INCREMENT BY 1
  START WITH 1
NO MAXVALUE
NO MINVALUE
CACHE 1;

create table comum.tb_unidade_medida
(
    un_id integer NOT NULL,
    un_nome varchar(20) not null,
    un_descricao varchar(255)
);

ALTER TABLE comum.tb_unidade_medida
  ADD CONSTRAINT pk_unidade_medida PRIMARY KEY (un_id);

comment on table comum.tb_unidade_medida is 'armazena as unidades medidas do sistema.';
comment on column comum.tb_unidade_medida.un_id is 'código gerado automaticamente que identifica uma unidade medida.';
comment on column comum.tb_unidade_medida.un_nome is 'nome da unidade medida.';
comment on column comum.tb_unidade_medida.un_descricao is 'descricao da unidade medida.';
