const express = require("express");

const app = express();
app.use(express.json());

let alunos = [];
let idAtual = 1;

// Cadastrar aluno
app.post("/alunos", (req, res) => {
    const { nome, idade, turma } = req.body;

    if (!nome || !idade || !turma) {
        return res.status(400).json({
            mensagem: "Preencha todos os campos."
        });
    }

    if (idade < 14) {
        return res.status(400).json({
            mensagem: "O aluno deve ter pelo menos 14 anos."
        });
    }

    const aluno = {
        id: idAtual++,
        nome,
        idade,
        turma
    };

    alunos.push(aluno);

    res.status(201).json(aluno);
});

// Listar alunos
app.get("/alunos", (req, res) => {
    res.json(alunos);
});

// Buscar aluno por ID
app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
        });
    }

    res.json(aluno);
});

// Atualizar aluno
app.put("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { nome, idade, turma } = req.body;

    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
        });
    }

    aluno.nome = nome || aluno.nome;
    aluno.idade = idade || aluno.idade;
    aluno.turma = turma || aluno.turma;

    res.json(aluno);
});

// Excluir aluno
app.delete("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = alunos.findIndex(a => a.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
        });
    }

    alunos.splice(indice, 1);

    res.json({
        mensagem: "Aluno removido com sucesso."
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
