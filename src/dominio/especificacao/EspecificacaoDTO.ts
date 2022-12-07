export interface EspecificacaoDTO {
    id: string;
    titulo: string;
    subtitulo?: string;
    questoes: QuestaoDTO[];
    templates: Template[];
}

export interface Template {
    id: string;
    titulo: string;
    texto: string;
}

export interface QuestaoDTO {
    id: string;
    tipo: 'opcao' | 'selecao';
    titulo: string;
    subtitulo?: string;
    opcoes?: OpcaoValorDTO[];
    valorPadrao?: string;
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
