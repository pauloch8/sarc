import { GabaritoDTO } from '@/dominio/gabarito/GabaritoDTO';

export const gabarito: GabaritoDTO = {
    titulo: 'Gerador de Acórdão',
    questoes: [
        {
            id: 'especie',
            tipo: 'opcao',
            rotulo: 'Espécie',
            opcoes: {
                tipo: 'uma resposta',
                valores: [
                    {
                        id: 'b31',
                        label: '31 - Auxílio Doença',
                        texto: [
                            {
                                categoria: 'descricao',
                                texto: 'Auxílio Doença',
                            },
                        ],
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                    {
                        id: 'b91',
                        label: '91 - Auxílio Acidente',
                        texto: [
                            {
                                categoria: 'descricao',
                                texto: 'Auxílio Acidente',
                            },
                        ],
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                    {
                        id: 'b25',
                        label: '25 - Auxílio Reclusão',
                        texto: [
                            {
                                categoria: 'descricao',
                                texto: 'Auxílio Reclusão',
                            },
                            {
                                categoria: 'voto',
                                texto: 'O Auxílio-Reclusão é benefício devido aos dependentes do segurado de baixa renda que tenha sido submetido a reclusão em regime fechado.',
                            },
                            {
                                categoria: 'ementa',
                                texto: 'AUXÍLIO-RECLUSÃO. PRETENDE A PARTE RECORRENTE A REFORMA DA DECISÃO QUE INDEFERIU O BENEFÍCIO DE QUE INDEFERIU O BENEFÍCIO DE AUXÍLIO-RECLUSÃO, O QUE NÃO ENTEN+A1:E3APRESENTOU CERTIDÃO JUDICIAL QUE ATESTE O RECOLHIMENTO EFETIVO À PRISÃO, E QUE ESPECIFIQUE DESDE QUANDO ESTÁ NESSE REGIME, O QUE NÃO ATENDE AO TEOR DO ART. 80, §1º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.',
                            },
                        ],
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                ],
            },
        },
        {
            id: 'tipoDeRecurso',
            tipo: 'opcao',
            rotulo: 'Tipo do Recurso',
            opcoes: {
                tipo: 'uma resposta',
                valores: [
                    {
                        id: 'ro',
                        label: 'Recurso Ordinário',
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 're',
                        label: 'Recurso Especial',
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 'puj',
                        label: 'PUJ em caso concreto',
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 'emb',
                        label: 'Embargos de declaração',
                        ramificacao: { tipo: 'avançar' },
                    },
                ],
            },
        },
        {
            id: 'admissibilidade',
            tipo: 'opcao',
            rotulo: 'Admissibilidade',
            opcoes: {
                tipo: 'uma resposta',
                valores: [
                    {
                        id: 'temp',
                        label: 'Recurso Tempestivo sem registro da ciência',
                        texto: [
                            {
                                categoria: 'descricao',
                                texto: 'tempestivamente interposto',
                            },
                            {
                                categoria: 'relatorio',
                                texto: 'Não há registro da ciência da decisão recorrida',
                            },
                            {
                                categoria: 'voto',
                                texto: 'O presente recurso é tempestivo em razão de inexistir registro o processo da ciência da parte recorrente, nos termos Art. 28 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS).',
                            },
                            {
                                categoria: 'ementa',
                                texto: 'TEMPESTIVIDADE EM RAZÃO DA AUSÊNCIA DO REGISTRO DE CIÊNCIA, CONFORME ART. 28 DO RICRPS.',
                            },
                        ],
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 'temp-cien',
                        label: 'Recurso Tempestivo com registro da ciência',
                        variaveis: [
                            {
                                id: 'dataRegistroDecisao',
                                label: 'Data de registro da decisão',
                                tipo: 'data',
                            },
                            {
                                id: 'dataInterposicaoRecurso',
                                label: 'Data da interposição do recurso',
                                tipo: 'data',
                            },
                        ],
                        texto: [
                            {
                                categoria: 'relatorio',
                                texto: 'Há registro da ciência da decisão em {dataRegistroDecisao}, e a interposição do presente recurso ocorreu em {dataInterposicaoRecurso}.',
                            },
                            {
                                categoria: 'voto',
                                texto: 'O presente recurso é tempestivo em razão da interposição do recurso ocorrer no prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS).',
                            },
                            {
                                categoria: 'ementa',
                                texto: 'TEMPESTIVIDADE COMPROVADA, CONFORME ART. 31 DO RICRPS.',
                            },
                            {
                                categoria: '',
                                texto: '',
                            },
                            {
                                categoria: '',
                                texto: '',
                            },
                        ],
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 'intemp',
                        label: 'Recurso Intempestivo',
                        variaveis: [
                            {
                                id: 'dataRegistroDecisao',
                                label: 'Data de registro da decisão',
                                tipo: 'data',
                            },
                            {
                                id: 'dataInterposicaoRecurso',
                                label: 'Data da interposição do recurso',
                                tipo: 'data',
                            },
                        ],
                        texto: [
                            {
                                categoria: 'relatorio',
                                texto: 'Há registro da ciência da decisão em XX/XX/XXXX, e a interposição do presente recurso ocorreu em YY/YY/YYYY.',
                            },
                            {
                                categoria: 'voto',
                                texto: 'O presente recurso é intempestivo em razão da interposição do recurso ocorrer após o prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS). Ainda, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade.',
                            },
                            {
                                categoria: 'ementa',
                                texto: 'INTEMPESTIVIDADE, CONFORME ART. 31 DO RICRPS.',
                            },
                            {
                                categoria: '',
                                texto: '',
                            },
                            {
                                categoria: '',
                                texto: '',
                            },
                        ],
                        ramificacao: { tipo: 'avançar' },
                    },
                    {
                        id: 'intemp-relev',
                        label: 'Recurso Intempestivo - relevada',
                        variaveis: [
                            {
                                id: 'dataRegistroDecisao',
                                label: 'Data de registro da decisão',
                                tipo: 'data',
                            },
                            {
                                id: 'dataInterposicaoRecurso',
                                label: 'Data da interposição do recurso',
                                tipo: 'data',
                            },
                        ],
                        texto: [
                            {
                                categoria: 'relatorio',
                                texto: 'Há registro da ciência da decisão em XX/XX/XXXX, e a interposição do presente recurso ocorreu em YY/YY/YYYY.',
                            },
                            {
                                categoria: 'voto',
                                texto: 'O presente recurso é intempestivo em razão da interposição do recurso ocorrer após o prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS). Todavia, como se verifica no corpo do voto, restou demonstrada de forma inequívoca a liquidez e a certeza do direito da parte, razão pela qual proponho à composição julgadora a relevação da intempestividade.',
                            },
                            {
                                categoria: 'ementa',
                                texto: 'INTEMPESTIVIDADE RELEVADA, CONFORME INCISO II DO ART. 16 DO RICRPS.',
                            },
                        ],
                        ramificacao: { tipo: 'avançar' },
                    },
                ],
            },
        },
        {
            id: 'motivo',
            tipo: 'opcao',
            rotulo: 'Motivo do Indeferimento',
            opcoes: {
                tipo: 'várias respostas',
                adicionarOutrasOpcoes: true,
                valores: [
                    {
                        id: 'medico',
                        label: 'Cessação por motivo médico',
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                    {
                        id: 'pm',
                        label: 'Parecer contrário PM',
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                    {
                        id: 'ntep',
                        label: 'NTEP',
                        ramificacao: {
                            tipo: 'avançar',
                        },
                    },
                ],
            },
        },
        // {
        //     tipo: 'lista',
        //     rotulo: 'Procuradores',
        //     pergunta: 'Há procurador constituído?',
        //     opcional: true,
        //     itens: [
        //         { label: 'Nome', tipo: 'texto' },
        //         { label: 'OAB', tipo: 'texto', opcional: true },
        //     ],
        //     texto: {
        //         ementa: `A parte recorrente esta devidamente representada por: {itens}`,
        //     },
        // },
        // {
        //     rotulo: 'Pontos Controversos',
        //     tipo: 'opção',
        //     busca: true,
        // },
    ],
};
