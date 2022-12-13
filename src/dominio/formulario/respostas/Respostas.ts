export type RespostaDeFormulario = {
    id: string;
    respostasQuestoes: RespostaDeQuestao[];
};

export type RespostaDeQuestao = {
    id: string;
    resposta: RespostaDeOpcao[];
};

export type RespostaDeOpcao = {
    id: string;
    variaveis?: RespostaDeVariavel[];
};

export type RespostaDeVariavel = {
    id: string;
    resposta: string;
};
