const perguntas = document.querySelectorAll('.faq-question');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const itemAtual = pergunta.parentElement;

        perguntas.forEach(p => {
            const item = p.parentElement;

            if (item !== itemAtual) {
                item.classList.remove('active');
            }
        });

        itemAtual.classList.toggle('active');
    });
});