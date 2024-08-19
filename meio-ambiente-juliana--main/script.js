const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em casa e percebe que a torneira da cozinha está pingando água. O que você faz?",
        alternativas: [
            {
                texto: "Ignora, afinal é apenas um pequeno vazamento.",
                afirmacao: "Você escolheu não dar muita atenção para o desperdício, mas sabe que pequenas ações podem ter um grande impacto."
            },
            {
                texto: "Conserta imediatamente ou chama um encanador.",
                afirmacao: "Você agiu prontamente para evitar o desperdício de água e preservou esse recurso vital."
            }
        ]
    },
    {
        enunciado: "Ao fazer compras no supermercado, você se depara com a escolha entre produtos orgânicos e convencionais. O que decide?",
        alternativas: [
            {
                texto: "Escolhe os produtos orgânicos para apoiar práticas agrícolas sustentáveis.",
                afirmacao: "Você optou por apoiar a agricultura sustentável e reduzir o impacto de pesticidas no meio ambiente."
            },
            {
                texto: "Prefere os produtos convencionais por serem mais baratos.",
                afirmacao: "Você priorizou o preço nas suas compras, mas pensa em equilibrar custo e sustentabilidade no futuro."
            }
        ]
    },
    {
        enunciado: "Na escola, seu professor propõe um projeto sobre o uso de energia limpa. Qual ideia você sugere?",
        alternativas: [
            {
                texto: "Implementar painéis solares na escola para reduzir o consumo de energia elétrica.",
                afirmacao: "Você sugeriu uma solução prática que pode reduzir as emissões de carbono e poupar recursos energéticos."
            },
            {
                texto: "Promover o uso de bicicletas como transporte para os estudantes.",
                afirmacao: "Você incentivou um modo de transporte ecológico, promovendo a saúde e reduzindo a poluição."
            }
        ]
    },
    {
        enunciado: "Durante uma viagem à praia, você vê muito lixo espalhado pela areia. O que você faz?",
        alternativas: [
            {
                texto: "Organiza uma coleta de lixo com seus amigos.",
                afirmacao: "Você liderou um esforço para limpar a praia, ajudando a proteger os ecossistemas marinhos."
            },
            {
                texto: "Finge que não viu e continua aproveitando o passeio.",
                afirmacao: "Você escolheu não se envolver dessa vez, mas sabe que a poluição nas praias prejudica muito o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Ao final do ano letivo, a escola realiza uma feira sobre sustentabilidade. Qual projeto você apresenta?",
        alternativas: [
            {
                texto: "Um sistema de compostagem para resíduos orgânicos.",
                afirmacao: "Você apresentou um projeto que ajuda a reduzir o lixo orgânico e cria adubo para plantas."
            },
            {
                texto: "Um painel sobre o impacto do plástico nos oceanos.",
                afirmacao: "Você aumentou a conscientização sobre o problema da poluição plástica e suas consequências para a vida marinha."
            }
        ]
    }
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
