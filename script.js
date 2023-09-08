const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");

    itemList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
      }
    });

const sobre = document.getElementById("sobre");
const perguntas = document.getElementById("perguntas");
const bolao = document.getElementById("bolao");
const recebidos = document.getElementById("recebidos");
const conteudo = document.getElementById("conteudo");



sobre.addEventListener("click", function(){
    conteudo.innerHTML = "<h2> Sobre <p>Fiz esse site para quem quiser me ajudar ou saber mais sobre o bebê, conseguir acompanhar :) <br> Joaquim irá nascer em Novembro ou Dezembro!</big></p></h2>"
});

perguntas.addEventListener("click", function(){
    conteudo.innerHTML = "<h2> Perguntas Frequentes </h2><big> <big> <p>P: Quantos meses de gestação? <br> R: 7 meses. <br><br>P: Qual vai ser o nome dele? <br> R: Joaquim, mas a gente chama de Kim, Quinzinho e Jojo!<br><br>P: E quando ele nasce?<br>R:Eu completo 40 semanas a partir do dia 19/11.<br> Temos um bolão para ver quem vai acertar a data e se você quiser participar, mande seu palpite para: quediavounascer@mail.com<br><br>P:Posso mandar Pix ao invés de comprar o presente?<br>R:Pode sim, é só falar comigo no whatsapp que eu passo a chave e tá tudo certo!Sei que não é todo mundo que vai ter tempo pra escolher/comprar presente!!<br><br>P:Cliquei nos nomes na página inicial e o link não abriu pra comprar!<br>R:Os nomes na página inicial não são links, são apenas uma lista pra sugestão de presentes!Os links vão estar na aba Links de compra e são apenas sugestões, você não precisa necessariamente comprar o que eu coloquei, aquilo é so uma guia para quem tá perdido sobre o que comprar!</p>"
});

bolao.addEventListener("click",function(){
    conteudo.innerHTML= "<h2>Palpites:<p> Michel -19/11 <br> Brenda - 20/11 <br> Rafael - 21/11 <br> Raquel - 27/11 <br>Francisco - 13/12 <br>Rebeca - 03/12 <br> Janine - 15/11 <br> Leticya - 13/11</p><p>Mande o seu para: quediavounascer@mail.com </p></h2><big><big>"
});

recebidos.addEventListener("click",function(){
    conteudo.innerHTML = "<h1><big><big><big><big><big><big><big><big>Em Breve!</h1>"
})