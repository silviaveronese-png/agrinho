<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agrinho - Campo e Cidade</title>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: #f4f4f4;
    text-align: center;
}

header {
    background: #2e8b57;
    color: white;
    padding: 20px;
}

.container {
    padding: 30px;
}

img {
    width: 300px;
    border-radius: 10px;
}

button {
    background: #2e8b57;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #246b45;
}

#mensagem {
    margin-top: 20px;
    font-size: 20px;
    color: #333;
}
</style>
</head>
<body>

<header>
    <h1>Agrinho 2025</h1>
    <h2>Campo e Cidade: Uma Parceria Essencial</h2>
</header>

<div class="container">
    <p>
        O campo produz alimentos, matérias-primas e energia.
        A cidade transforma, distribui e consome esses produtos.
        Juntos, constroem um futuro sustentável.
    </p>

    <button onclick="mostrarMensagem()">
        Descobrir Importância
    </button>

    <div id="mensagem"></div>
</div>

<script>
function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "🌱 O campo alimenta a cidade e a cidade apoia o desenvolvimento do campo. Juntos somos mais fortes!";
}
</script>

</body>
</html>
