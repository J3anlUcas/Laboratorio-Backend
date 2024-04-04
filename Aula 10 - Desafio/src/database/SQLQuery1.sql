USE Laboratorio;

CREATE TABLE tbl_Uf
(
    ID_UF integer PRIMARY KEY IDENTITY,
    Nome varchar (19),
    Sigla varchar(2)
);

INSERT INTO tbl_Uf (Nome, Sigla) VALUES ('Acre', 'AC');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Alagoas', 'AL');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Amapá', 'AP');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Amazonas', 'AM');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Bahia', 'BA');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Ceará', 'CE');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Distrito Federal', 'DF');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Espírito Santo', 'ES');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Goiás', 'GO');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Maranhão', 'MA');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Mato Grosso', 'MT');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Mato Grosso do Sul', 'MS');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Minas Gerais', 'MG');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Pará', 'PA');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Paraíba', 'PB');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Paraná', 'PR');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Pernambuco', 'PE');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Piauí', 'PI');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Rio de Janeiro', 'RJ');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Rio Grande do Norte', 'RN');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Rio Grande do Sul', 'RS');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Rondônia', 'RO');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Roraima', 'RR');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Santa Catarina', 'SC');
INSERT tbl_Uf (Nome, Sigla) VALUES ('São Paulo', 'SP');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Sergipe', 'SE');
INSERT tbl_Uf (Nome, Sigla) VALUES ('Tocantins', 'TO');

SELECT * FROM tbl_Uf;

CREATE TABLE tbl_Clientes
(
    ID_CLIENTE integer PRIMARY KEY IDENTITY,
    Nome NVARCHAR(100),
    Sexo CHAR(1), -- Supondo que o sexo será representado por um único caractere (M/F)
    CPF VARCHAR(11), -- CPF no formato XXXXXXXXXXX (sem símbolos)
    Data_Nascimento DATE,--Data a ser criada
    
    DataCriacao_Registro DATETIME DEFAULT GETDATE(), --função que grava automaticamente a data
    
    ID_UF INT FOREIGN KEY REFERENCES tbl_UF (ID_UF)
);

SELECT * FROM tbl_Clientes;

CREATE TABLE tbl_Produtos
(
    ID_PRODUTO integer PRIMARY KEY IDENTITY,
    Modelo NVARCHAR(100),
    Marca NVARCHAR(100),
    Valor INT,
);

SELECT * FROM tbl_Produtos;

CREATE TABLE tbl_Compras
(
    ID_COMPRA integer PRIMARY KEY IDENTITY,
    Data_Compra DATE,
    Quantidade INT,
    ID_Produto INT FOREIGN KEY REFERENCES tbl_Produtos (ID_Produto),
    ID_Cliente INT FOREIGN KEY REFERENCES tbl_Clientes (ID_Cliente)
);

SELECT * FROM tbl_Compras;