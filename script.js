const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
   {
       enunciado: "Quais são os principais desafios técnicos enfrentados na implementação em larga escala de energia solar?",
       alternativas: [
           {
               texto: "Armazenamento de energia e eficiência de conversão",
         
           },
           {
               texto: "Segurança nuclear e custo de construção",
             
           }
       ]
   },
   {
       enunciado: "Quais são os principais benefícios ambientais da energia eólica offshore em comparação com a energia eólica terrestre?",
       alternativas: [
           {
               texto: "Redução das emissões de gases de efeito estufa e menor impaacto visual",
             
           },
           {
               texto: "Maior eficiência de geração de energia e custos operacionais mais baixos",
             
           }
       ]
   },
   {
       enunciado: "Qual o papel das baterias de íon-lítio na integração de energias renováveis na rede elétrica?",
       alternativas: [
           {
               texto: "Armazenamento de energia para mitigar a intermitência das fontes renováveis",
             
           },
           {
               texto: "Aumento da capacidade de geração de energia renovável através de tecnologias de armazenamento em larga escala",
             
           }
       ]
   },
 
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();

