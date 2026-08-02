document.addEventListener("DOMContentLoaded", () => {

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }


  const menuToggle = document.getElementById("menuToggle");
  const menuPrincipal = document.getElementById("menuPrincipal");


  if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", () => {

      const aberto = menuPrincipal.classList.toggle("aberto");

      menuToggle.setAttribute(
        "aria-expanded",
        aberto
      );

    });

  }



  const botoesProduto = document.querySelectorAll("[data-produto]");
  const selectProduto = document.getElementById("produto");


  botoesProduto.forEach(botao => {

    botao.addEventListener("click", () => {

      const produto = botao.dataset.produto;

      if (selectProduto && produto) {
        selectProduto.value = produto;
      }

    });

  });


});
