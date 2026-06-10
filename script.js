const mensagens = [
    "🌱 Cada planta cultivada ajuda a construir um futuro mais verde.",
    "💚 Sustentabilidade começa com pequenas ações diárias.",
    "🌎 Uma horta sustentável contribui para um planeta melhor.",
    "🍅 Produzir seu próprio alimento é cuidar da saúde e do meio ambiente.",
    "♻️ Reutilizar materiais reduz o desperdício e protege a natureza."
];

function mostrarMensagem() {
    const indice = Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").textContent =
        mensagens[indice];
}
