// Função para reiniciar a página
const reiniciarPagina = () => {
    window.location.reload();
};

// Adicione um evento de clique ao botão de cadastrar
const btnCad = document.getElementById('btn-fech');
btnCad.addEventListener('click', reiniciarPagina);
