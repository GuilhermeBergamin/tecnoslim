
document.addEventListener("btn-secondarytwo", () => {
    // Obtém uma referência para o botão
    const resetButton = document.getElementById("resetButton");

    // Adiciona um ouvinte de evento de clique ao botão
    resetButton.addEventListener("click", () => {
        // Recarrega a página
        location.reload();
    });
});