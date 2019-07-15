CREATE SEQUENCE comum.seq_fornecedor
INCREMENT BY 1
  START WITH 1
NO MAXVALUE
NO MINVALUE
CACHE 1;

create table comum.tb_fornecedor
(
    fo_id integer NOT NULL,
    fo_nome varchar(100) not null,
    fo_cnpj varchar(20) not null,
    fo_telefone varchar(20) not null,
    fo_email varchar(100) not null,
    fo_observacoes varchar(255)
);

ALTER TABLE comum.tb_fornecedor
  ADD CONSTRAINT pk_fornecedor PRIMARY KEY (fo_id);

comment on table comum.tb_fornecedor is 'armazena os fornecedores do sistema.';
comment on column comum.tb_fornecedor.fo_id is 'código gerado automaticamente que identifica um fornecedor.';
comment on column comum.tb_fornecedor.fo_nome is 'nome do fornecedor.';
comment on column comum.tb_fornecedor.fo_cnpj is 'cnpj do fornecedor.';
comment on column comum.tb_fornecedor.fo_telefone is 'telefone do fornecedor.';
comment on column comum.tb_fornecedor.fo_email is 'email do fornecedor.';
comment on column comum.tb_fornecedor.fo_observacoes is 'observacoes do fornecedor.';
