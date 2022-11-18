export type RespostaDeFormulario = {
    id: string;
    respostasQuestoes: RespostaDeQuestaoDeOpcoes[];
};

export type RespostaDeQuestaoDeOpcoes = {
    id: string;
    resposta: RespostaDeOpcao;
};

export type RespostaDeOpcao = {
    id: string;
    variaveis?: RespostaDeVariavel[];
};

export type RespostaDeVariavel = {
    id: string;
    resposta: string;
};
