const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece a IA?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "A opção de fazer pesquisas na IA deve ser por:",
        alternativas: [
            "Pergunta simples",
            "Prompt"
        ]
    },
    {
        enunciado: "Para solicitar uma imagem na IA, qual seria a melhor pergunta!",
        alternativas: [
            "Quero uma imagem de um cachorro",
            "Imagem de um cachorro, com coleira verde, rabo pequeno, da raça Buldogue-campeiro"
        ]
    },
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();