   const botoes = document.querySelectorAll("button");
        
        botoes.forEach(botao => {
            botao.addEventListener("click", function () {
                const span = botao.querySelector("span");
                let valor = Number(span.textContent);
                
                // Verifica se o botão já foi clicado antes usando dataset
                const jaClicou = botao.dataset.clicado === "true";

                if (!jaClicou) {
                    // Se NÃO clicou ainda: soma 1 e marca como clicado
                    span.textContent = valor + 1;
                    botao.dataset.clicado = "true";
                    botao.classList.add("ativo"); // Opcional: muda o visual do botão
                } else {
                    // Se JÁ clicou antes: subtrai 1 (remove o voto) e desmarca
                    span.textContent = valor - 1;
                    botao.dataset.clicado = "false";
                    botao.classList.remove("ativo");
                }
            });
        });

        const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

        btnTemaEscuro.addEventListener("click", mudaTema);

        function mudaTema () {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}
        