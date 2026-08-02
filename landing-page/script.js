document.addEventListener("DOMContentLoaded", () => {

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }


  const form = document.getElementById("formOrcamento");
  const feedback = document.getElementById("formFeedback");
  const botao = form?.querySelector("button");


  function mensagem(texto, tipo) {

    if (!feedback) return;

    feedback.textContent = texto;
    feedback.setAttribute("data-state", tipo);

  }


  if (!form) {
    console.error("Formulário não encontrado");
    return;
  }



  form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const dados = {

      nome: form.querySelector('[name="nome"]').value.trim(),

      email: form.querySelector('[name="email"]').value.trim(),

      telefone: form.querySelector('[name="telefone"]').value.trim(),

      produto: form.querySelector('[name="produto"]').value,

      mensagem: form.querySelector('[name="mensagem"]').value.trim()

    };



    if (!dados.nome || !dados.email || !dados.telefone) {

      mensagem(
        "Preencha nome, e-mail e telefone.",
        "erro"
      );

      return;

    }



    try {


      botao.disabled = true;


      mensagem(
        "Enviando solicitação...",
        "enviando"
      );



      const resposta = await fetch(

        "COLE_AQUI_O_WEBHOOK_N8N",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify(dados)

        }

      );



      if (!resposta.ok) {

        throw new Error("Erro no envio");

      }



      mensagem(

        "Solicitação enviada com sucesso! Em breve entraremos em contato.",

        "sucesso"

      );


      form.reset();



    } catch (erro) {


      console.error(erro);


      mensagem(

        "Não foi possível enviar agora. Tente novamente.",

        "erro"

      );


    } finally {


      botao.disabled = false;


    }


  });


});
