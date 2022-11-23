import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export const especificacao: EspecificacaoDTO = {
    titulo: 'Gerador de Acórdão',
    id: 'gerador-de-acordao',
    questoes: [
        {
            id: 'especie',
            tipo: 'opcao',
            titulo: 'Espécie',
            opcoes: [
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
                        irPara: 'avançar',
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
                        irPara: 'avançar',
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
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'acaoJudicial',
            tipo: 'opcao',
            titulo: 'Ação judicial com mesmo objeto',
            subtitulo: 'No caso de Recurso Ordinário',
            opcoes: [
                {
                    id: 'nao',
                    label: 'Não',
                    ramificacao: { irPara: 'avançar' },
                    texto: [
                        {
                            categoria: 'elementos',
                            texto: ' ',
                        },
                        {
                            categoria: 'merito',
                            texto: ` `,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: ` `,
                        },
                        {
                            categoria: 'ementa',
                            texto: ``,
                        },
                    ],
                },
                {
                    id: 'sim',
                    label: 'Sim',
                    ramificacao: { irPara: 'avançar' },
                    variaveis: [
                        {
                            id: 'numAcaoJudicial',
                            label: 'Nº da ação judicial',
                            tipo: 'texto',
                        },
                    ],
                    texto: [
                        {
                            categoria: 'elementos',
                            texto: 'Ingressou com ação judicial ${numAcaoJudicial} com mesmo objeto deste recurso administrativo.\nApós análise, é inequívoca a similaridade da causa petendi entre o processo administrativo e judicial.',
                        },
                        {
                            categoria: 'merito',
                            texto: `Normatiza a Lei 8.213/91:
“Art. 126.  Compete ao Conselho de Recursos da Previdência Social julgar: 
I - recursos das decisões do INSS nos processos de interesse dos beneficiários; 
II - contestações e recursos relativos à atribuição, pelo Ministério da Economia, do Fator Acidentário de Prevenção aos estabelecimentos das empresas;
III - recursos das decisões do INSS relacionados à comprovação de atividade rural de segurado especial de que tratam os arts. 38-A e 38-B, ou demais informações relacionadas ao CNIS de que trata o art. 29-A desta Lei.   (Incluído pela Lei nº 13.846, de 2019)

§ 3º A propositura de ação que tenha por objeto idêntico pedido sobre o qual versa o processo administrativo importa renúncia ao direito de recorrer na esfera administrativa e desistência do recurso interposto.” (destaquei)

No mesmo sentido, dispõe o Decreto 3.048/99:
“Art. 307.  A propositura pelo interessado de ação judicial que tenha por objeto idêntico pedido sobre o qual verse o processo administrativo importará renúncia ao direito de contestar e recorrer na esfera administrativa, com a consequente desistência da contestação ou do recurso interposto.  (Redação dada pelo Decreto nº 10.410, de 2020).`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Sendo a questão objeto de discussão na esfera judiciária, esta Corte Administrativa perde a sua competência para decidir a matéria. Incorreu o recorrente no disposto pelo Diploma Previdenciário, renunciando tacitamente ao recurso administrativo.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `POSSUI AÇÃO JUDICIAL COM MESMO OBJETO DESTE RECURSO ADMINISTRATIVO. INCOMPETÊNCIA DESTA CORTE PARA CONHECER O MÉRITO, POR FORÇA DO § 3º DO ART. 126 DA LEI 8.213/91 E ARTIGO 307 DO DECRETO 3.048/99.`,
                        },
                    ],
                },
            ],
        },
        {
            id: 'incapacidadePmfFavoravel',
            tipo: 'opcao',
            titulo: 'Incapacidade - PMF favorável',
            subtitulo: 'Espécie: 31/91 - Tipo Processo: Recurso Ordinário',
            opcoes: [
                {
                    id: 'nao',
                    label: 'Não',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    texto: [
                        {
                            categoria: 'recurso',
                            texto: ' ',
                        },
                        {
                            categoria: 'diligencias',
                            texto: ' ',
                        },
                        {
                            categoria: 'merito',
                            texto: ` `,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: ` `,
                        },
                        {
                            categoria: 'ementa',
                            texto: ` `,
                        },
                    ],
                },
                {
                    id: 'sim',
                    label: 'Sim',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    variaveis: [
                        {
                            id: 'dataNovaCessacao',
                            label: 'Nova cessação',
                            tipo: 'data',
                        },
                    ],
                    texto: [
                        {
                            categoria: 'recurso',
                            texto: 'Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando pleiteando o pagamento da prestação previdenciária.',
                        },
                        {
                            categoria: 'diligencias',
                            texto: 'Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da incapacidade laborativa fixando a nova data da cessação ${dataNovaCessacao}.',
                        },
                        {
                            categoria: 'merito',
                            texto: `Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `No caso dos autos, a pretensão do recorrente encontra alicerce no parecer da perícia médica oficial.
Há o cumprimento do requisito da incapacidade, devendo a prestação ser prorrogada na data fixada pela PMF.
Dessa forma, faz jus à percepção da prestação do auxílio incapacidade laborativa previsto no art. 71 do Decreto 3.048/99, sendo procedente o pedido.
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. EXISTÊNCIA DE INCAPACIDADE LABORATIVA. PRESTAÇÃO PRORROGADA CONFORME PARECER MÉDICO FEDERAL. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                    ],
                },
            ],
        },
        {
            id: 'incapacidadePmfContrario',
            tipo: 'opcao',
            titulo: 'Incapacidade - PMF contrário',
            subtitulo: 'Espécie: 31/91 - Tipo Processo: Recurso Ordinário',
            opcoes: [
                {
                    id: 'nao',
                    label: 'Não',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    texto: [
                        {
                            categoria: 'recurso',
                            texto: ' ',
                        },
                        {
                            categoria: 'diligencias',
                            texto: ' ',
                        },
                        {
                            categoria: 'merito',
                            texto: ` `,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: ` `,
                        },
                        {
                            categoria: 'ementa',
                            texto: ` `,
                        },
                    ],
                },
                {
                    id: 'sim',
                    label: 'Sim',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    texto: [
                        {
                            categoria: 'recurso',
                            texto: 'Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando pleiteando o pagamento da prestação previdenciária.',
                        },
                        {
                            categoria: 'diligencias',
                            texto: 'Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela inexistência da incapacidade laborativa.',
                        },
                        {
                            categoria: 'merito',
                            texto: `Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `No caso dos autos, a pretensão da recorrente encontra obstáculo no preenchimento do requisito da incapacidade, pois, as perícias médicas realizadas concluíram pela inexistência de incapacidade laborativa, não havendo óbice para que a parte recorrente desenvolva suas atividades habituais.
Também, em parecer técnico devidamente fundamento, a Perícia Médica Federal verificou a inexistência da incapacidade laborativa.
Dessa forma, ausente o requisito específico da incapacidade laboral, não faz jus à percepção do benefício de auxílio-doença, previsto no art. 59 da Lei 8.213/91, sendo improcedente o pedido.
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. INEXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL DESTA CORTE ADMINISTRATIVA. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                    ],
                },
            ],
        },
        {
            id: 'tipoDeRecurso',
            tipo: 'opcao',
            titulo: 'Tipo do Recurso',
            valorPadrao: 'ro',
            opcoes: [
                {
                    id: 'ro',
                    label: 'Recurso Ordinário',
                    ramificacao: { irPara: 'avançar' },
                    texto: [
                        { categoria: 'padrao', texto: 'Recurso Ordinário' },
                    ],
                },
                {
                    id: 're',
                    label: 'Recurso Especial',
                    ramificacao: { irPara: 'avançar' },
                    texto: [{ categoria: 'padrao', texto: 'Recurso Especial' }],
                },
                {
                    id: 'puj',
                    label: 'PUJ em caso concreto',
                    ramificacao: { irPara: 'avançar' },
                    texto: [
                        { categoria: 'padrao', texto: 'PUJ em caso concreto' },
                    ],
                },
                {
                    id: 'emb',
                    label: 'Embargos de declaração',
                    ramificacao: { irPara: 'avançar' },
                    texto: [
                        {
                            categoria: 'padrao',
                            texto: 'Embargos de declaração',
                        },
                    ],
                },
            ],
        },
        {
            id: 'procurador',
            tipo: 'opcao',
            titulo: 'Procurador',
            subtitulo: 'Existe procurador constituído?',
            valorPadrao: 'nao',
            opcoes: [
                {
                    id: 'sim',
                    label: 'Sim',
                    variaveis: [
                        {
                            id: 'nome',
                            label: 'Nome do procurador',
                            tipo: 'texto',
                        },
                        {
                            id: 'oab',
                            label: 'OAB',
                            tipo: 'texto',
                        },
                    ],
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: 'A parte recorrente está devidamente representada por ${nome} (OAB nº ${oab}).',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'nao',
                    label: 'Não',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: ' ',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'admissibilidade',
            tipo: 'opcao',
            titulo: 'Admissibilidade',
            valorPadrao: 'temp',
            opcoes: [
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
                    ramificacao: { irPara: 'avançar' },
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
                            categoria: 'descricao',
                            texto: 'Tempestivo com registro da ciência',
                        },
                        {
                            categoria: 'relatorio',
                            texto: 'Há registro da ciência da decisão em ${dataRegistroDecisao}, e a interposição do presente recurso ocorreu em ${dataInterposicaoRecurso}.',
                        },
                        {
                            categoria: 'voto',
                            texto: 'O presente recurso é tempestivo em razão da interposição do recurso ocorrer no prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS).',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'TEMPESTIVIDADE COMPROVADA, CONFORME ART. 31 DO RICRPS.',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
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
                            categoria: 'descricao',
                            texto: 'Intempestivo',
                        },
                        {
                            categoria: 'relatorio',
                            texto: 'Há registro da ciência da decisão em ${dataRegistroDecisao}, e a interposição do presente recurso ocorreu em ${dataInterposicaoRecurso}.',
                        },
                        {
                            categoria: 'voto',
                            texto: 'O presente recurso é intempestivo em razão da interposição do recurso ocorrer após o prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS). Ainda, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade.',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'INTEMPESTIVIDADE, CONFORME ART. 31 DO RICRPS.',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
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
                            categoria: 'descricao',
                            texto: 'Intempestivo - relevada',
                        },
                        {
                            categoria: 'relatorio',
                            texto: 'Há registro da ciência da decisão em ${dataRegistroDecisao}, e a interposição do presente recurso ocorreu em ${dataInterposicaoRecurso}.',
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
                    ramificacao: { irPara: 'avançar' },
                },
            ],
        },
        // {
        //     id: 'motivo',
        //     tipo: 'selecao',
        //     titulo: 'Motivo do Indeferimento',
        //     opcoes: [
        //         {
        //             id: 'medico',
        //             label: 'Cessação por motivo médico',
        //             ramificacao: {
        //                 irPara: 'avançar',
        //             },
        //             texto: [
        //                 {
        //                     categoria: 'padrão',
        //                     texto: 'Cessação por motivo médico',
        //                 },
        //             ],
        //         },
        //         {
        //             id: 'pm',
        //             label: 'Parecer contrário PM',
        //             ramificacao: {
        //                 irPara: 'avançar',
        //             },
        //             texto: [
        //                 {
        //                     categoria: 'padrão',
        //                     texto: 'Parecer contrário PM',
        //                 },
        //             ],
        //         },
        //         {
        //             id: 'ntep',
        //             label: 'NTEP',
        //             ramificacao: {
        //                 irPara: 'avançar',
        //             },
        //             texto: [
        //                 {
        //                     categoria: 'padrão',
        //                     texto: 'NTEP',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     tipo: 'lista',
        //     titulo: 'Procuradores',
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
        //     titulo: 'Pontos Controversos',
        //     tipo: 'opção',
        //     busca: true,
        // },
    ],
    template:
        '<p><strong>RELATÓRIO</strong></p><p><strong>1- Introdução, Contextualização</strong></p><p>Trata-se de <strong>${tipoDeRecurso.padrao}</strong> interposto pela parte recorrente acima citada em face da decisão do <strong>${especie.descricao}</strong> acima citado que a considerou apto às atividades laborativas.&nbsp;</p><p><strong>2- Elementos pertinentes à espécie</strong></p><p>${acaoJudicial.elementos}</p><p><strong>3- Pontos Controversos</strong></p><p><strong>4- Sintese do recurso</strong></p><p>${incapacidadePmfFavoravel.recurso}</p><p>${incapacidadePmfContrario.recurso}</p><p><strong>5-Diligencias</strong></p><p>${incapacidadePmfFavoravel.diligencias}</p><p>${incapacidadePmfContrario.diligencias}</p><p><strong>6- Fechamento</strong></p><p>${admissibilidade.relatorio}</p><p>${procurador.relatorio}</p><p><strong>VOTO</strong></p><p><strong>7- Introdução, Contextualizacao</strong></p><p>${admissibilidade.voto}</p><p><strong>ADMISSIBILIDADE</strong></p><p><strong>8- Admissibilidade</strong></p><p><strong>MÉRITO</strong></p><p><strong>9- Mérito - Requisitos para a prestação</strong></p><p>${acaoJudicial.merito}</p><p>${incapacidadePmfFavoravel.merito}</p><p>${incapacidadePmfContrario.merito}</p><p><strong>10- Pontos controversos</strong></p><p><strong>CASO CONCRETO</strong></p><p><strong>11- Caso Concreto</strong></p><p>${acaoJudicial.casoConcreto}</p><p>${incapacidadePmfFavoravel.casoConcreto}</p><p>${incapacidadePmfContrario.casoConcreto}</p><p><strong>DECISÃO</strong></p><p><strong>12-Conclusão</strong></p><p><strong>EMENTA</strong></p><p>${admissibilidade.ementa}</p><p>${acaoJudicial.ementa}</p><p>${incapacidadePmfFavoravel.ementa}</p><p>${incapacidadePmfContrario.ementa}</p>',
    // templates: [
    //     {
    //         id: 'relatorio',
    //         titulo: 'Relatório',
    //         texto: '',
    //     },
    //     {
    //         id: 'voto',
    //         titulo: 'Voto',
    //         texto: '',
    //     },
    //     {
    //         id: 'ementa',
    //         titulo: 'Ementa',
    //         texto: '',
    //     },
    // ],
};
