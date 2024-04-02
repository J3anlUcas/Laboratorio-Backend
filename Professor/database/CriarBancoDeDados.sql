IF OBJECT_ID('tbl_Uf', 'U') IS NOT NULL
BEGIN
    DROP TABLE tbl_Uf;
END;

IF OBJECT_ID('tbl_Compras', 'U') IS NOT NULL
BEGIN
    DROP TABLE tbl_Compras;
END;

IF OBJECT_ID('tbl_Clientes', 'U') IS NOT NULL
BEGIN
    DROP TABLE tbl_Clientes;
END;

IF OBJECT_ID('tbl_Produtos', 'U') IS NOT NULL
BEGIN
    DROP TABLE tbl_Produtos;
END;

CREATE TABLE tbl_Uf
(
    ID_UF integer PRIMARY KEY IDENTITY,
    Nome varchar (19),
    Sigla varchar(2)

);


CREATE TABLE tbl_Clientes
(
    ID_CLIENTE integer PRIMARY KEY IDENTITY,
    Nome NVARCHAR(100),
    Sexo CHAR(1), -- Supondo que o sexo será representado por um único caractere (M/F)
    CPF VARCHAR(11), -- CPF no formato XXXXXXXXXXX (sem símbolos)
    Data_Nascimento DATE,--Data a ser criada
    
    DataCriacao_Registro DATETIME DEFAULT GETDATE(), --função que grava automaticamente a data
    
    ID_UF INT FOREIGN KEY REFERENCES tbl_UF (ID_UF)
)


CREATE TABLE tbl_Produtos
(
    ID_PRODUTO integer PRIMARY KEY IDENTITY,
    Modelo NVARCHAR(100),
    Marca NVARCHAR(100),
    Valor INT,
)

CREATE TABLE tbl_Compras
(
    ID_COMPRA integer PRIMARY KEY IDENTITY,
    Data_Compra DATE,
    Quantidade INT,
    ID_Produto INT FOREIGN KEY REFERENCES tbl_Produtos (ID_Produto),
    ID_Cliente INT FOREIGN KEY REFERENCES tbl_Clientes (ID_Cliente)
)