export interface GabaritoDTO {
    titulo: string;
    subtitulo?: string;
    questoes: QuestaoDTO[];
}

export interface QuestaoDTO {
    id: string;
    tipo: 'opcao';
    titulo: string;
    opcoes?: OpcoesDescricaoDTO;
}

interface OpcoesDescricaoDTO {
    tipo: 'uma resposta' | 'várias respostas';
    valores: OpcaoValorDTO[];
    adicionarOutrasOpcoes?: boolean;
}

interface OpcaoValorDTO {
    id: string;
    label: string;
    variaveis?: VariavelDTO[];
    texto?: TextoDTO[];
    ramificacao: RamificacaoDTO;
}

interface VariavelDTO {
    id: string;
    label: string;
    tipo: string;
}

interface TextoDTO {
    categoria: string;
    texto: string;
}

interface RamificacaoDTO {
    tipo: 'avançar' | string;
}
