<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Alunos</title>

<style>
    body{
        font-family: Arial, sans-serif;
        background:#f4f4f4;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }

    .container{
        background:#fff;
        padding:20px;
        border-radius:10px;
        width:320px;
        box-shadow:0 0 10px rgba(0,0,0,0.2);
    }

    h2{
        text-align:center;
    }

    input{
        width:100%;
        padding:10px;
        margin:8px 0;
        border:1px solid #ccc;
        border-radius:5px;
    }

    button{
        width:100%;
        padding:10px;
        background:#007BFF;
        color:white;
        border:none;
        border-radius:5px;
        cursor:pointer;
    }

    button:hover{
        background:#0056b3;
    }
</style>
</head>

<body>

<div class="container">
    <h2>Cadastro de Alunos</h2>

    <form>
        <input type="text" placeholder="Nome">
        <input type="number" placeholder="Idade">
        <input type="text" placeholder="Turma">
        <input type="email" placeholder="E-mail">

        <button type="submit">Cadastrar</button>
    </form>
</div>

</body>
</html>
