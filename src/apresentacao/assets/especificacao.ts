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
            valorPadrao: 'nao',
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
            valorPadrao: 'nao',
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
            id: 'naoComprovacaoDaDeficiencia',
            tipo: 'opcao',
            titulo: 'Não comprovação da deficiência',
            subtitulo: 'Espécie: 87 - Tipo Processo: Recurso Ordinário',
            valorPadrao: 'nao',
            opcoes: [
                {
                    id: 'nao',
                    label: 'Não',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    texto: [
                        {
                            categoria: 'elementos',
                            texto: ' ',
                        },
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
                            categoria: 'elementos',
                            texto: 'A parte recorrente submeteu-se o requerente à avaliação social e médica, às quais decidiram pela não comprovação da deficiência contida nos §§ 2º e 10 do art. 20 da Lei 8.742/93.',
                        },
                        {
                            categoria: 'recurso',
                            texto: 'Irresignada com a decisão da Autarquia, recorre a parte interessado a esta Corte Administrativa pleiteando a concessão do benefício.',
                        },
                        {
                            categoria: 'diligencias',
                            texto: 'A perícia médica federal efetuou a reanálise da avaliação elaborada pelo INSS e decidiu manter a pontuação apurada pelas avaliações social e médica do INSS.',
                        },
                        {
                            categoria: 'merito',
                            texto: `A Constituição Federal instituiu o benefício assistencial ao deficiente e ao idoso nos seguintes termos: 
“Art. 203. A assistência social será prestada a quem dela necessitar, independentemente da contribuição à seguridade social, e tem por objetivos: (...) 
V - a garantia de um salário mínimo de benefício mensal à pessoa portadora de deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção ou de tê-la provida por sua família, conforme dispuser a lei.”

A Lei nº 8.742, de 7 de dezembro de 1993 normatizou a matéria, fazendo constar do caput e parágrafos 1º a 3º do seu art. 20:  
“Art. 20.  O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011)
(...)
§ 2º  Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.  (Redação dada pela Lei nº 13.146, de 2015) 
(…)
§ 10.  Considera-se impedimento de longo prazo, para os fins do § 2o deste artigo, aquele que produza efeitos pelo prazo mínimo de 2 (dois) anos.      (Inclído pela Lei nº 12.470, de 2011)”

O benefício assistencial previsto no artigo 203, V, da Constituição Federal atende situações de hipossuficiência envolvendo pessoa idosa e pessoa portadora de deficiência, incapazes de prover ao próprio sustento ou de tê-lo provido pela própria família. Pressupõe o preenchimento dos seguintes requisitos: a) condição de deficiente (incapacidade para o trabalho e para a vida independente) ou idoso (neste caso, considerando-se, desde 1º de janeiro de 2004, a idade de 65 anos); e b) situação de risco social (estado de miserabilidade, hipossuficiência econômica ou situação de desamparo) do recorrente e de sua família. Entende-se como incapaz de prover a sua manutenção, aquele cuja renda mensal "per capita" é inferior a ¼ (um quarto) do salário mínimo, como dispõe o § 3º, do art. 20, Lei nº 8.742/93. `,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `No caso em tela, o INSS deferiu o requisito de situação de risco social, uma vez que a renda per capta do grupo familiar é menor que ¼ do salário mínimo vigente no requerimento do benefício.
Todavia, a análise social e médica verificou que o grau de deficiência constatado não cumpre o requisito de deficiência insculpido nos §§ 2º e 10 do art. 20 da Lei 8.742/93.
Ainda, as avaliações social e médica foram reanalisadas pela perícia médica desta Corte Administrativa, que por sua fez manteve a decisão autárquica.
Deste modo, não restam comprovados os requisitos relativos à deficiência.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `BENEFÍCIO INDEFERIDO POR NÃO COMPROVAR A DEFICIÊNCIA, NÃO PREENCHENDO OS REQUISITOS DOS § §2º E 10 ARTIGO 20 DA LEI 8.742/93.`,
                        },
                    ],
                },
            ],
        },
        {
            id: 'ntepPmfFavoravel',
            tipo: 'opcao',
            titulo: 'NTEP - PMF favorável',
            subtitulo: 'Espécie: 91 - Tipo Processo: Recurso Ordinário',
            valorPadrao: 'nao',
            opcoes: [
                {
                    id: 'nao',
                    label: 'Não',
                    ramificacao: {
                        irPara: 'avançar',
                    },
                    texto: [
                        {
                            categoria: 'elementos',
                            texto: ' ',
                        },
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
                            categoria: 'elementos',
                            texto: 'A perícia médica federal reconheceu o nexo técnico.',
                        },
                        {
                            categoria: 'recurso',
                            texto: 'Irresignada com a decisão administrativa da Autarquia, recorre a empresa interessada a esta Corte Administrativa requerendo que a prestação <especie> seja reconhecida como não decorrente de acidente de trabalho.',
                        },
                        {
                            categoria: 'diligencias',
                            texto: 'Houve reanálise pela perícia médica federal, que por sua vez ratificou a existência do nexo técnico.',
                        },
                        {
                            categoria: 'merito',
                            texto: `Regulamenta o Decreto 3.048/99:
“Art. 337.  O acidente do trabalho será caracterizado tecnicamente pela Perícia Médica Federal, por meio da identificação do nexo causal entre o trabalho e o agravo.
§ 1º O setor de benefícios do Instituto Nacional do Seguro Social reconhecerá o direito do segurado à habilitação do benefício acidentário.
§ 2º Será considerado agravamento do acidente aquele sofrido pelo acidentado quanto estiver sob a responsabilidade da reabilitação profissional.
§ 3o  Considera-se estabelecido o nexo entre o trabalho e o agravo quando se verificar nexo técnico epidemiológico entre a atividade da empresa e a entidade mórbida motivadora da incapacidade, elencada na Classificação Internacional de Doenças - CID em conformidade com o disposto na Lista C do Anexo II deste Regulamento. (Redação dada pelo Decreto nº 6.957, de 2009)
§ 4o  Para os fins deste artigo, considera-se agravo a lesão, doença, transtorno de saúde, distúrbio, disfunção ou síndrome de evolução aguda, subaguda ou crônica, de natureza clínica ou subclínica, inclusive morte, independentemente do tempo de latência. (Incluído pelo Decreto nº 6.042, de 2007).
 § 5º  Reconhecidos pela Perícia Médica Federal a incapacidade para o trabalho e o nexo causal entre o trabalho e o agravo, na forma prevista no § 3º, serão devidas as prestações acidentárias a que o beneficiário tiver direito.    (Redação dada pelo Decreto nº 10.410, de 2020)
§ 6º  A Perícia Médica Federal deixará de aplicar o disposto no § 3º quando demonstrada a inexistência de nexo causal entre o trabalho e o agravo, sem prejuízo do disposto nos § 7º e § 12.   (Redação dada pelo Decreto nº 10.410, de 2020)
§ 7o  A empresa poderá requerer ao INSS a não aplicação do nexo técnico epidemiológico ao caso concreto mediante a demonstração de inexistência de correspondente nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)
§ 8o  O requerimento de que trata o § 7o poderá ser apresentado no prazo de quinze dias da data para a entrega, na forma do inciso IV do art. 225, da GFIP que registre a movimentação do trabalhador, sob pena de não conhecimento da alegação em instância administrativa. (Incluído pelo Decreto nº 6.042, de 2007).
§ 9º  Caracterizada a impossibilidade de atendimento ao disposto no § 8º, motivada pelo não conhecimento tempestivo do diagnóstico do agravo, o requerimento de que trata o § 7º poderá ser apresentado no prazo de quinze dias, contado da data em que a empresa tomar ciência da decisão a que se refere o § 5º.    (Redação dada pelo Decreto nº 10.410, de 2020)
§ 10.  Juntamente com o requerimento de que tratam os §§ 8o e 9o, a empresa formulará as alegações que entender necessárias e apresentará as provas que possuir demonstrando a inexistência de nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)
§ 11.  A documentação probatória poderá trazer, entre outros meios de prova, evidências  técnicas circunstanciadas e tempestivas à exposição do segurado, podendo ser produzidas no âmbito de programas de gestão de risco, a cargo da empresa, que possuam responsável técnico legalmente habilitado. (Incluído pelo Decreto nº 6.042, de 2007).
§ 12.  O INSS informará ao segurado sobre a contestação da empresa para que este, querendo, possa impugná-la, obedecendo, quanto à produção de provas, ao disposto no § 10, sempre que a instrução do pedido evidenciar a possibilidade de reconhecimento de inexistência do nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)
§ 13.  Da decisão do requerimento de que trata o § 7o cabe recurso, com efeito suspensivo, por parte da empresa ou, conforme o caso, do segurado ao Conselho de Recursos da Previdência Social, nos termos dos arts. 305 a 310. (Incluído pelo Decreto nº 6.042, de 2007).”

O Diploma Previdenciário regulamenta que a Perícia Médica Federal – PMF -  tem competência para determinar se uma incapacidade decorre ou não do trabalho. Para isso, precisa relacionar o agravo (incapacidade laboral) com a Classificação Internacionais de Doenças dispostas no Anexo II, Lista “C”.
Tal procedimento foi realizado pela PMF e, por haver o enquadramento legal, foi concedida a espécie acidentária.
Não há a necessidade de vistoria técnica em razão do Decreto 3.048/99 ser taxativo quanto as doenças que têm origem no trabalho.`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Na fase recursal, o órgão da PMF retificou o entendimento anterior, demonstrando que não há nexo entre a incapacidade e o trabalho exercido.
Deste modo, deve a espécie ser considerada previdenciária, e não acidentária.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `A RELAÇÃO ENTRE A PATOLOGIA INCAPACITANTE E O LABOR É CARACTERIZADO PELA PERÍCIA MÉDICA, CONFORME ARTIGO 337 DO DECRETO 3.048/99. SENDO A PERÍCIA DESFAVORÁVEL QUANTO AO NEXO, NÃO HÁ COMPROVAÇÃO. DEVE A ESPÉCIE SER REVISTA DE ACIDENTÁRIA PARA PREVIDENCIÁRIA.`,
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
            valorPadrao: 'nao',
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
        '<p><strong>RELATÓRIO</strong></p><p><strong>1- Introdução, Contextualização</strong></p><p>Trata-se de <strong>${tipoDeRecurso.padrao}</strong> interposto pela parte recorrente acima citada em face da decisão do <strong>${especie.descricao}</strong> acima citado que a considerou apto às atividades laborativas.&nbsp;</p><p><strong>2- Elementos pertinentes à espécie</strong></p><p>${acaoJudicial.elementos}</p><p>${naoComprovacaoDaDeficiencia.elementos}</p><p>${ntepPmfFavoravel.elementos}</p><p><strong>3- Pontos Controversos</strong></p><p><strong>4- Sintese do recurso</strong></p><p>${incapacidadePmfFavoravel.recurso}</p><p>${incapacidadePmfContrario.recurso}</p><p>${naoComprovacaoDaDeficiencia.recurso}</p><p>${ntepPmfFavoravel.recurso}</p><p><strong>5-Diligencias</strong></p><p>${incapacidadePmfFavoravel.diligencias}</p><p>${incapacidadePmfContrario.diligencias}</p><p>${naoComprovacaoDaDeficiencia.diligencias}</p><p>${ntepPmfFavoravel.diligencias}</p><p><strong>6- Fechamento</strong></p><p>${admissibilidade.relatorio}</p><p>${procurador.relatorio}</p><p><strong>VOTO</strong></p><p><strong>7- Introdução, Contextualizacao</strong></p><p>${admissibilidade.voto}</p><p><strong>ADMISSIBILIDADE</strong></p><p><strong>8- Admissibilidade</strong></p><p><strong>MÉRITO</strong></p><p><strong>9- Mérito - Requisitos para a prestação</strong></p><p>${acaoJudicial.merito}</p><p>${incapacidadePmfFavoravel.merito}</p><p>${incapacidadePmfContrario.merito}</p><p>${naoComprovacaoDaDeficiencia.merito}</p><p>${ntepPmfFavoravel.merito}</p><p><strong>10- Pontos controversos</strong></p><p><strong>CASO CONCRETO</strong></p><p><strong>11- Caso Concreto</strong></p><p>${acaoJudicial.casoConcreto}</p><p>${incapacidadePmfFavoravel.casoConcreto}</p><p>${incapacidadePmfContrario.casoConcreto}</p><p>${naoComprovacaoDaDeficiencia.casoConcreto}</p><p>${ntepPmfFavoravel.casoConcreto}</p><p><strong>DECISÃO</strong></p><p><strong>12-Conclusão</strong></p><p><strong>EMENTA</strong></p><p>${admissibilidade.ementa}</p><p>${acaoJudicial.ementa}</p><p>${incapacidadePmfFavoravel.ementa}</p><p>${incapacidadePmfContrario.ementa}</p><p>${naoComprovacaoDaDeficiencia.ementa}</p><p>${ntepPmfFavoravel.ementa}</p>',
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
