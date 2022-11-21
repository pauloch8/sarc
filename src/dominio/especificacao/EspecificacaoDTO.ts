export interface EspecificacaoDTO {
    id: string;
    titulo: string;
    subtitulo?: string;
    questoes: QuestaoDTO[];
    template: string;
}

export interface QuestaoDTO {
    id: string;
    tipo: 'opcao' | 'selecao';
    titulo: string;
    opcoes?: OpcaoValorDTO[];
}

export interface OpcaoValorDTO {
    id: string;
    label: string;
    variaveis?: VariavelDTO[];
    texto: TextoDTO[];
    ramificacao: RamificacaoDTO;
}

interface VariavelDTO {
    id: string;
    label: string;
    tipo: string;
}

export interface TextoDTO {
    categoria: string;
    texto: string;
}

interface RamificacaoDTO {
    irPara: 'avançar' | 'fim do formulário' | string;
}
