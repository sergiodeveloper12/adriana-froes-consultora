document.addEventListener("DOMContentLoaded", () => {


  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }



  const form = document.getElementById("formOrcamento");


  if (!form) {
    console.log("Formulário não encontrado");
    return;
  }



  form.addEventListener("submit", async (event) => {


    event.preventDefault();


    const botao = form.querySelector("button");


    if (botao) {
      botao.disabled = true;
      botao.textContent = "Enviando...";
    }



    const dados = new FormData(form);



    try {


      const resposta = await fetch("/", {

        method: "POST",

        headers: {
          "Content-Type":
          "application/x-www-form-urlencoded"
        },


        body:
        new URLSearchParams(dados).toString()


      });



      if (!resposta.ok) {

        throw new Error(
          "Erro no envio"
        );

      }



      alert(
        "Solicitação enviada com sucesso!"
      );


      form.reset();



    } catch (erro) {


      console.error(
        erro
      );


      alert(
        "Erro ao enviar formulário."
      );



    } finally {


      if (botao) {

        botao.disabled = false;
        botao.textContent =
        "Enviar solicitação";

      }


    }


  });


});
