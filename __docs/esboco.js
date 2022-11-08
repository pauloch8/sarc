const sard = {
    especie: {
        id: "especie",
        tipo: "opçao",
        rotulo: "Espécie",
        opcoes: {
            tipo: "uma resposta", 
            valores: [
                {
                    label: "31 - Auxílio Doença", 
                    texto: {
                        descricao: "Auxílio Doença"
                    }
                },
                {
                    label: "91 - Auxílio Acidente", 
                    texto: {
                        descricao: "Auxílio Acidente"
                    }
                },
                {
                    label: "25 - Auxílio Reclusão", 
                    texto: {
                        descricao: "Auxílio Reclusão",
                        voto: "O Auxílio-Reclusão é benefício devido aos dependentes do segurado de baixa renda que tenha sido submetido a reclusão em regime fechado.",
                        ementa: "AUXÍLIO-RECLUSÃO. PRETENDE A PARTE RECORRENTE A REFORMA DA DECISÃO QUE INDEFERIU O BENEFÍCIO DE QUE INDEFERIU O BENEFÍCIO DE AUXÍLIO-RECLUSÃO, O QUE NÃO ENTEN+A1:E3APRESENTOU CERTIDÃO JUDICIAL QUE ATESTE O RECOLHIMENTO EFETIVO À PRISÃO, E QUE ESPECIFIQUE DESDE QUANDO ESTÁ NESSE REGIME, O QUE NÃO ATENDE AO TEOR DO ART. 80, §1º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO."
                    }
                }
            ]
        },
    },
    tipoDeRecurso: {
        id: "tipoDeRecurso",
        tipo: "opçao",
        rotulo: "Tipo do Recurso",
        opcoes: {
            tipo: "uma resposta",
            valores: [
                {label: "Recurso Ordinário", ramificacao: {tipo: "avançar"}},
                {label: "Recurso Especial", ramificacao: {tipo: "avançar"}},
                {label: "PUJ em caso concreto", ramificacao: {tipo: "avançar"}},
                {label: "Embargos dee declaração", ramificacao: {tipo: "avançar"}},
            ]
        },
    },
    admissibilidade: {
        id: "admissibilidade",
        tipo: "opçao",
        rotulo: "Admissibilidade",
        opcoes: {
            tipo: "uma resposta",
            valores: [
                {
                    label: "Recurso Tempestivo sem registro da ciência", 
                    texto: {
                        descricao: "tempestivamente interposto",
                        relatorio: "Não há registro da ciência da decisão recorrida",
                        voto: "O presente recurso é tempestivo em razão de inexistir registro o processo da ciência da parte recorrente, nos termos Art. 28 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS).",
                        ementa: "TEMPESTIVIDADE EM RAZÃO DA AUSÊNCIA DO REGISTRO DE CIÊNCIA, CONFORME ART. 28 DO RICRPS."
                    }, 
                    ramificacao: {tipo:"avançar"},
                },
                {
                    label: "Recurso Tempestivo com registro da ciência", 
                    variaveis: [
                        {id: "dataRegistroDecisao", label: "Data de registro da decisão", tipo: "data"},
                        {id: "dataInterposicaoRecurso", label: "Data da interposição do recurso", tipo: "data"},
                    ],
                    texto: {
                        relatorio: `Há registro da ciência da decisão em ${dataRegistroDecisao}, e a interposição do presente recurso ocorreu em ${dataInterposicaoRecurso}.`,
                        voto: "O presente recurso é tempestivo em razão da interposição do recurso ocorrer no prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS).",
                        ementa: "TEMPESTIVIDADE COMPROVADA, CONFORME ART. 31 DO RICRPS."
                    }, 
                    ramificacao: {tipo:"avançar"},
                },
                {
                    label: "Recurso Intempestivo", 
                    variaveis: [
                        {id: "dataRegistroDecisao", label: "Data de registro da decisão", tipo: "data"},
                        {id: "dataInterposicaoRecurso", label: "Data da interposição do recurso", tipo: "data"},
                    ],
                    texto: {
                        relatorio: `Há registro da ciência da decisão em XX/XX/XXXX, e a interposição do presente recurso ocorreu em YY/YY/YYYY.`,
                        voto: "O presente recurso é intempestivo em razão da interposição do recurso ocorrer após o prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS). Ainda, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade.",
                        ementa: "INTEMPESTIVIDADE, CONFORME ART. 31 DO RICRPS."
                    }, 
                    ramificacao: {tipo:"avançar"},
                },
                {
                    label: "Recurso Intempestivo - relevada", 
                    variaveis: [
                        {id: "dataRegistroDecisao", label: "Data de registro da decisão", tipo: "data"},
                        {id: "dataInterposicaoRecurso", label: "Data da interposição do recurso", tipo: "data"},
                    ],
                    texto: {
                        relatorio: `Há registro da ciência da decisão em XX/XX/XXXX, e a interposição do presente recurso ocorreu em YY/YY/YYYY.`,
                        voto: "O presente recurso é intempestivo em razão da interposição do recurso ocorrer após o prazo fixado pelo Art. 31 da Portaria MDSA nº 116/2017, que aprova o Regimento Interno do CRPS (RICRPS). Todavia, como se verifica no corpo do voto, restou demonstrada de forma inequívoca a liquidez e a certeza do direito da parte, razão pela qual proponho à composição julgadora a relevação da intempestividade.",
                        ementa: "INTEMPESTIVIDADE RELEVADA, CONFORME INCISO II DO ART. 16 DO RICRPS."
                    }, 
                    ramificacao: {tipo:"avançar"},
                },
            ]
        }
    },
    motivoDoIndeferimento: {
        id: "motivo",
        tipo: "opçao",
        rotulo: "Motivo do Indeferimento",
        opcoes: {
            tipo: "várias respostas",
            adicionarOutrasOpcoes: true,
            valores: [
                {label: "Cessação por motivo médico"},
                {label: "Parecer contrário PM"},
                {label: "NTEP"}
            ]
        }
    },
    procuradores: {
        tipo: "lista",
        rotulo: "Procuradores",
        pergunta: "Há procurador constituído?",
        opcional: true,
        itens: [
            {label: "Nome", tipo: "texto"},
            {label: "OAB", tipo: "texto", opcional: true},
        ],
        texto: {
            ementa: `A parte recorrente esta devidamente representada por: ${itens}`
        }
    },
    pontosControversos: {
        tipo: "opção",
        busca: true,
    },
    decisao: {}
}


const acordao = `
RELATÓRIO

Trata-se de ${tipoDeRecurso.descricao} interposto pelo(a) recorrente acima citado(a) em face do indeferimento do ${especie.descricao} por ${motivoDoIndeferimento}

${relatorio}

VOTO

${voto}

EMENTA

${ementa}

`