CREATE DATABASE Escola;

USE Escola;

CREATE TABLE Alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    turma VARCHAR(20),
    email VARCHAR(100)
);

INSERT INTO Alunos (nome, idade, turma, email)
VALUES
('Ana Silva', 16, '2ºA', 'ana@email.com'),
('João Souza', 17, '3ºB', 'joao@email.com'),
('Maria Oliveira', 15, '1ºC', 'maria@email.com');

SELECT * FROM Alunos;
