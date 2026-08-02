document.addEventListener("DOMContentLoaded", () => {


  // Ano atual no rodapé

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }



  // Formulário Netlify

  const form = document.getElementById("formOrcamento");


  if (!form) return;



  form.addEventListener("submit", async (event) => {


    event.preventDefault();


    const botao =
      form.querySelector("button[type='submit']");


    botao.disabled = true;

    botao.textContent = "Enviando...";



    const dados =
      new FormData(form);



    try {


      const resposta =
        await fetch("/", {

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
          "Falha no envio"
        );

      }



      alert(
        "Solicitação enviada com sucesso! Em breve entraremos em contato."
      );



      form.reset();



    } catch (erro) {


      console.error(
        erro
      );


      alert(
        "Não foi possível enviar agora. Tente novamente."
      );



    } finally {


      botao.disabled = false;

      botao.textContent =
        "Enviar solicitação";


    }


  });



});
