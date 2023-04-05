export interface EspecificacaoDTO {
    id: string;
    titulo: string;
    subtitulo?: string;
    listaQuestoes: Array<QuestaoDTO>;
    listaModelos: ModeloDTO[];
}

export interface ModeloDTO {
    id: string;
    titulo: string;
    texto: string;
}

export interface QuestaoDTO {
    id: string;
    tipo: 'opcao' | 'selecao';
    titulo: string;
    subtitulo?: string;
    opcoes: OpcaoValorDTO[];
    valorPadrao?: string;
}

export interface OpcaoValorDTO {
    id: string;
    titulo: string;
    listaVariaveis?: VariavelDTO[];
    listaTextos: TextoDTO[];
    ramificacao?: RamificacaoDTO;
}

export interface VariavelDTO {
    id: string;
    titulo: string;
    tipo: string;
}

export interface TextoDTO {
    categoria: string;
    texto: string;
}

interface RamificacaoDTO {
    irPara: 'avançar' | 'fim do formulário' | string;
}
