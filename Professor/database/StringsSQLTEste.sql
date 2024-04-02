-- Inserir cliente com UF

DECLARE @NomeCliente NVARCHAR(100) = 'Maria';
DECLARE @Sexo CHAR(1) = 'F';
DECLARE @CPF VARCHAR(14) = '12345678900';
DECLARE @DataNascimento DATE = '1990-05-15';
DECLARE @SiglaUF CHAR(2) = 'SP';  -- Supondo que queremos associar o cliente ao estado de São Paulo

-- Verificar se a UF existe na tabela tbl_UF
IF EXISTS (SELECT 1 FROM tbl_UF WHERE Sigla = @SiglaUF)
BEGIN
    -- Inserir o cliente com a UF correspondente
    INSERT INTO tbl_Clientes (Nome, Sexo, CPF, Data_Nascimento,  ID_UF)
    SELECT @NomeCliente, @Sexo, @CPF, @DataNascimento, ID_UF 
    FROM tbl_UF 
    WHERE Sigla = @SiglaUF;
END
ELSE
BEGIN
    -- Se a UF não existir, exibir uma mensagem de erro ou fazer outra ação
    PRINT 'A sigla de UF especificada não existe na tabela tbl_UF.';
END;

