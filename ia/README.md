

client = OpenAI(api_key="SUA_API_KEY")

resposta = client.images.generate(
    model="gpt-image-1",
    prompt="Um robô futurista caminhando em uma cidade cyberpunk, estilo realista",
    size="1024x1024"
)

imagem_base64 = resposta.data[0].b64_json

with open("imagem.txt", "w") as arquivo:
    arquivo.write(imagem_base64)

print("Imagem gerada com sucesso!") 
HTML: 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Gerador de Imagens IA</title>
</head>
<body>

<h2>Gerador de Imagens com IA</h2>

<input type="text" id="prompt" placeholder="Descreva a imagem">
<button onclick="gerarImagem()">Gerar</button>

<script>
function gerarImagem() {
    const prompt = document.getElementById("prompt").value;
    alert("Descrição enviada: " + prompt);
    // Aqui você faria uma requisição para um servidor
    // que chama uma API de geração de imagens.
}
</script>

</body>
</html>
