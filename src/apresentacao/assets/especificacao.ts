import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export const especificacao: EspecificacaoDTO = {
    titulo: 'Gerador de Acórdão',
    id: 'gerador-de-acordao',
    questoes: [
        {
            id: 'tipoDeRecurso',
            tipo: 'opcao',
            titulo: 'Tipo do Recurso',
            valorPadrao: 'ro',
            opcoes: [
                {
                    id: 'ro',
                    label: 'Recurso Ordinário',
                    ramificacao: { irPara: 'especie-ro' },
                    texto: [
                        { categoria: 'padrao', texto: 'Recurso Ordinário' },
                    ],
                },
                {
                    id: 're',
                    label: 'Recurso Especial',
                    ramificacao: { irPara: 'especie-re' },
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
            id: 'especie-ro',
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
                        {
                            categoria: 'voto',
                            texto: ' ',
                        },
                        {
                            categoria: 'ementa',
                            texto: ' ',
                        },
                    ],
                    ramificacao: {
                        irPara: 'motivo-ro-b31',
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
                        {
                            categoria: 'voto',
                            texto: ' ',
                        },
                        {
                            categoria: 'ementa',
                            texto: ' ',
                        },
                    ],
                    ramificacao: {
                        irPara: 'motivo-ro-b91',
                    },
                },
                {
                    id: 'b87',
                    label: '87 - BPC à pessoa com deficiência',
                    texto: [
                        {
                            categoria: 'descricao',
                            texto: 'BPC à pessoa com deficiência',
                        },
                        {
                            categoria: 'voto',
                            texto: ' ',
                        },
                        {
                            categoria: 'ementa',
                            texto: ' ',
                        },
                    ],
                    ramificacao: {
                        irPara: 'motivo-ro-b87',
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
                        irPara: 'procurador',
                    },
                },
            ],
        },
        {
            id: 'motivo-ro-b31',
            tipo: 'opcao',
            titulo: 'Motivo do indeferimento',
            opcoes: [
                {
                    id: 'acaoJudicial',
                    label: 'Ação judicial com mesmo objeto',
                    ramificacao: { irPara: 'procurador' },
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
<p>“Art. 126.  Compete ao Conselho de Recursos da Previdência Social julgar: 
I - recursos das decisões do INSS nos processos de interesse dos beneficiários; 
II - contestações e recursos relativos à atribuição, pelo Ministério da Economia, do Fator Acidentário de Prevenção aos estabelecimentos das empresas;<br />
III - recursos das decisões do INSS relacionados à comprovação de atividade rural de segurado especial de que tratam os arts. 38-A e 38-B, ou demais informações relacionadas ao CNIS de que trata o art. 29-A desta Lei.   (Incluído pela Lei nº 13.846, de 2019)</p>

<p>§ 3º A propositura de ação que tenha por objeto idêntico pedido sobre o qual versa o processo administrativo importa renúncia ao direito de recorrer na esfera administrativa e desistência do recurso interposto.” (destaquei)</p>

<p>No mesmo sentido, dispõe o Decreto 3.048/99:<br />
“Art. 307.  A propositura pelo interessado de ação judicial que tenha por objeto idêntico pedido sobre o qual verse o processo administrativo importará renúncia ao direito de contestar e recorrer na esfera administrativa, com a consequente desistência da contestação ou do recurso interposto.  (Redação dada pelo Decreto nº 10.410, de 2020).</p>`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Sendo a questão objeto de discussão na esfera judiciária, esta Corte Administrativa perde a sua competência para decidir a matéria. Incorreu o recorrente no disposto pelo Diploma Previdenciário, renunciando tacitamente ao recurso administrativo.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `POSSUI AÇÃO JUDICIAL COM MESMO OBJETO DESTE RECURSO ADMINISTRATIVO. INCOMPETÊNCIA DESTA CORTE PARA CONHECER O MÉRITO, POR FORÇA DO § 3º DO ART. 126 DA LEI 8.213/91 E ARTIGO 307 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'recurso',
                            texto: '',
                        },
                        {
                            categoria: 'diligencias',
                            texto: '',
                        },
                    ],
                },
                {
                    id: 'incapacidadePmfFavoravel',
                    label: 'Incapacidade - PMF favorável',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.<br/>
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:<br/>
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `No caso dos autos, a pretensão do recorrente encontra alicerce no parecer da perícia médica oficial.
Há o cumprimento do requisito da incapacidade, devendo a prestação ser prorrogada na data fixada pela PMF.<br/>
Dessa forma, faz jus à percepção da prestação do auxílio incapacidade laborativa previsto no art. 71 do Decreto 3.048/99, sendo procedente o pedido.<br/>
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. EXISTÊNCIA DE INCAPACIDADE LABORATIVA. PRESTAÇÃO PRORROGADA CONFORME PARECER MÉDICO FEDERAL. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'elementos',
                            texto: ' ',
                        },
                    ],
                },
                {
                    id: 'incapacidadePmfContrario',
                    label: 'Incapacidade - PMF contrário',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `
Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.<br/>
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:<br/>
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `
No caso dos autos, a pretensão da recorrente encontra obstáculo no preenchimento do requisito da incapacidade, pois, as perícias médicas realizadas concluíram pela inexistência de incapacidade laborativa, não havendo óbice para que a parte recorrente desenvolva suas atividades habituais.<br/>
Também, em parecer técnico devidamente fundamento, a Perícia Médica Federal verificou a inexistência da incapacidade laborativa.<br/>
Dessa forma, ausente o requisito específico da incapacidade laboral, não faz jus à percepção do benefício de auxílio-doença, previsto no art. 59 da Lei 8.213/91, sendo improcedente o pedido.
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. INEXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL DESTA CORTE ADMINISTRATIVA. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'elementos',
                            texto: ' ',
                        },
                    ],
                },
            ],
        },
        {
            id: 'motivo-ro-b87',
            tipo: 'opcao',
            titulo: 'Motivo do indeferimento',
            opcoes: [
                {
                    id: 'acaoJudicial',
                    label: 'Ação judicial com mesmo objeto',
                    ramificacao: { irPara: 'procurador' },
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
<p>“Art. 126.  Compete ao Conselho de Recursos da Previdência Social julgar: 
I - recursos das decisões do INSS nos processos de interesse dos beneficiários; 
II - contestações e recursos relativos à atribuição, pelo Ministério da Economia, do Fator Acidentário de Prevenção aos estabelecimentos das empresas;<br />
III - recursos das decisões do INSS relacionados à comprovação de atividade rural de segurado especial de que tratam os arts. 38-A e 38-B, ou demais informações relacionadas ao CNIS de que trata o art. 29-A desta Lei.   (Incluído pela Lei nº 13.846, de 2019)</p>

<p>§ 3º A propositura de ação que tenha por objeto idêntico pedido sobre o qual versa o processo administrativo importa renúncia ao direito de recorrer na esfera administrativa e desistência do recurso interposto.” (destaquei)</p>

<p>No mesmo sentido, dispõe o Decreto 3.048/99:<br />
“Art. 307.  A propositura pelo interessado de ação judicial que tenha por objeto idêntico pedido sobre o qual verse o processo administrativo importará renúncia ao direito de contestar e recorrer na esfera administrativa, com a consequente desistência da contestação ou do recurso interposto.  (Redação dada pelo Decreto nº 10.410, de 2020).</p>`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Sendo a questão objeto de discussão na esfera judiciária, esta Corte Administrativa perde a sua competência para decidir a matéria. Incorreu o recorrente no disposto pelo Diploma Previdenciário, renunciando tacitamente ao recurso administrativo.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `POSSUI AÇÃO JUDICIAL COM MESMO OBJETO DESTE RECURSO ADMINISTRATIVO. INCOMPETÊNCIA DESTA CORTE PARA CONHECER O MÉRITO, POR FORÇA DO § 3º DO ART. 126 DA LEI 8.213/91 E ARTIGO 307 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'recurso',
                            texto: ' ',
                        },
                    ],
                },
                {
                    id: 'naoComprovacaoDaDeficiencia',
                    label: 'Não comprovação da deficiência',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `
<p>A Constituição Federal instituiu o benefício assistencial ao deficiente e ao idoso nos seguintes termos: <br/>
“Art. 203. A assistência social será prestada a quem dela necessitar, independentemente da contribuição à seguridade social, e tem por objetivos: (...) <br/>
V - a garantia de um salário mínimo de benefício mensal à pessoa portadora de deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção ou de tê-la provida por sua família, conforme dispuser a lei.</p>”

<p>A Lei nº 8.742, de 7 de dezembro de 1993 normatizou a matéria, fazendo constar do caput e parágrafos 1º a 3º do seu art. 20:  <br/>
“Art. 20.  O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011)<br/>
(...)<br/>
§ 2º  Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.  (Redação dada pela Lei nº 13.146, de 2015) <br/>
(...)<br/>
§ 10.  Considera-se impedimento de longo prazo, para os fins do § 2o deste artigo, aquele que produza efeitos pelo prazo mínimo de 2 (dois) anos.      (Inclído pela Lei nº 12.470, de 2011)”</p>

<p>O benefício assistencial previsto no artigo 203, V, da Constituição Federal atende situações de hipossuficiência envolvendo pessoa idosa e pessoa portadora de deficiência, incapazes de prover ao próprio sustento ou de tê-lo provido pela própria família. Pressupõe o preenchimento dos seguintes requisitos: a) condição de deficiente (incapacidade para o trabalho e para a vida independente) ou idoso (neste caso, considerando-se, desde 1º de janeiro de 2004, a idade de 65 anos); e b) situação de risco social (estado de miserabilidade, hipossuficiência econômica ou situação de desamparo) do recorrente e de sua família. Entende-se como incapaz de prover a sua manutenção, aquele cuja renda mensal "per capita" é inferior a ¼ (um quarto) do salário mínimo, como dispõe o § 3º, do art. 20, Lei nº 8.742/93.</p>`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `
No caso em tela, o INSS deferiu o requisito de situação de risco social, uma vez que a renda per capta do grupo familiar é menor que ¼ do salário mínimo vigente no requerimento do benefício.<br/>
Todavia, a análise social e médica verificou que o grau de deficiência constatado não cumpre o requisito de deficiência insculpido nos §§ 2º e 10 do art. 20 da Lei 8.742/93.<br/>
Ainda, as avaliações social e médica foram reanalisadas pela perícia médica desta Corte Administrativa, que por sua fez manteve a decisão autárquica.<br/>
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
            id: 'motivo-ro-b91',
            tipo: 'opcao',
            titulo: 'Motivo do indeferimento',
            opcoes: [
                {
                    id: 'acaoJudicial',
                    label: 'Ação judicial com mesmo objeto',
                    ramificacao: { irPara: 'procurador' },
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
<p>“Art. 126.  Compete ao Conselho de Recursos da Previdência Social julgar: 
I - recursos das decisões do INSS nos processos de interesse dos beneficiários; 
II - contestações e recursos relativos à atribuição, pelo Ministério da Economia, do Fator Acidentário de Prevenção aos estabelecimentos das empresas;<br />
III - recursos das decisões do INSS relacionados à comprovação de atividade rural de segurado especial de que tratam os arts. 38-A e 38-B, ou demais informações relacionadas ao CNIS de que trata o art. 29-A desta Lei.   (Incluído pela Lei nº 13.846, de 2019)</p>

<p>§ 3º A propositura de ação que tenha por objeto idêntico pedido sobre o qual versa o processo administrativo importa renúncia ao direito de recorrer na esfera administrativa e desistência do recurso interposto.” (destaquei)</p>

<p>No mesmo sentido, dispõe o Decreto 3.048/99:<br />
“Art. 307.  A propositura pelo interessado de ação judicial que tenha por objeto idêntico pedido sobre o qual verse o processo administrativo importará renúncia ao direito de contestar e recorrer na esfera administrativa, com a consequente desistência da contestação ou do recurso interposto.  (Redação dada pelo Decreto nº 10.410, de 2020).</p>`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Sendo a questão objeto de discussão na esfera judiciária, esta Corte Administrativa perde a sua competência para decidir a matéria. Incorreu o recorrente no disposto pelo Diploma Previdenciário, renunciando tacitamente ao recurso administrativo.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `POSSUI AÇÃO JUDICIAL COM MESMO OBJETO DESTE RECURSO ADMINISTRATIVO. INCOMPETÊNCIA DESTA CORTE PARA CONHECER O MÉRITO, POR FORÇA DO § 3º DO ART. 126 DA LEI 8.213/91 E ARTIGO 307 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'recurso',
                            texto: ' ',
                        },
                        {
                            categoria: 'diligencias',
                            texto: ' ',
                        },
                    ],
                },
                {
                    id: 'incapacidadePmfFavoravel',
                    label: 'Incapacidade - PMF favorável',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.<br/>
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:<br/>
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `No caso dos autos, a pretensão do recorrente encontra alicerce no parecer da perícia médica oficial.
Há o cumprimento do requisito da incapacidade, devendo a prestação ser prorrogada na data fixada pela PMF.<br/>
Dessa forma, faz jus à percepção da prestação do auxílio incapacidade laborativa previsto no art. 71 do Decreto 3.048/99, sendo procedente o pedido.<br/>
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. EXISTÊNCIA DE INCAPACIDADE LABORATIVA. PRESTAÇÃO PRORROGADA CONFORME PARECER MÉDICO FEDERAL. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                    ],
                },
                {
                    id: 'incapacidadePmfContrario',
                    label: 'Incapacidade - PMF contrário',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `
Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 7º do art. 53 da Portaria MDSA 116/2017.<br/>
Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:<br/>
“Art. 71.  O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.” (grifo nosso)`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `
No caso dos autos, a pretensão da recorrente encontra obstáculo no preenchimento do requisito da incapacidade, pois, as perícias médicas realizadas concluíram pela inexistência de incapacidade laborativa, não havendo óbice para que a parte recorrente desenvolva suas atividades habituais.<br/>
Também, em parecer técnico devidamente fundamento, a Perícia Médica Federal verificou a inexistência da incapacidade laborativa.<br/>
Dessa forma, ausente o requisito específico da incapacidade laboral, não faz jus à percepção do benefício de auxílio-doença, previsto no art. 59 da Lei 8.213/91, sendo improcedente o pedido.
Por ordem do inciso I do § 2º do art. 30 da Portaria MDSA 116/2017, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. INEXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL DESTA CORTE ADMINISTRATIVA. ARTIGO 71 DO DECRETO 3.048/99.`,
                        },
                        {
                            categoria: 'elementos',
                            texto: ` `,
                        },
                    ],
                },
                {
                    id: 'ntepPmfFavoravel',
                    label: 'NTEP - PMF favorável',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: `
<p>Regulamenta o Decreto 3.048/99:<br/>
“Art. 337.  O acidente do trabalho será caracterizado tecnicamente pela Perícia Médica Federal, por meio da identificação do nexo causal entre o trabalho e o agravo.<br/>
§ 1º O setor de benefícios do Instituto Nacional do Seguro Social reconhecerá o direito do segurado à habilitação do benefício acidentário.<br/>
§ 2º Será considerado agravamento do acidente aquele sofrido pelo acidentado quanto estiver sob a responsabilidade da reabilitação profissional.<br/>
§ 3o  Considera-se estabelecido o nexo entre o trabalho e o agravo quando se verificar nexo técnico epidemiológico entre a atividade da empresa e a entidade mórbida motivadora da incapacidade, elencada na Classificação Internacional de Doenças - CID em conformidade com o disposto na Lista C do Anexo II deste Regulamento. (Redação dada pelo Decreto nº 6.957, de 2009)<br/>
§ 4o  Para os fins deste artigo, considera-se agravo a lesão, doença, transtorno de saúde, distúrbio, disfunção ou síndrome de evolução aguda, subaguda ou crônica, de natureza clínica ou subclínica, inclusive morte, independentemente do tempo de latência. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
 § 5º  Reconhecidos pela Perícia Médica Federal a incapacidade para o trabalho e o nexo causal entre o trabalho e o agravo, na forma prevista no § 3º, serão devidas as prestações acidentárias a que o beneficiário tiver direito.    (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 6º  A Perícia Médica Federal deixará de aplicar o disposto no § 3º quando demonstrada a inexistência de nexo causal entre o trabalho e o agravo, sem prejuízo do disposto nos § 7º e § 12.   (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 7o  A empresa poderá requerer ao INSS a não aplicação do nexo técnico epidemiológico ao caso concreto mediante a demonstração de inexistência de correspondente nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 8o  O requerimento de que trata o § 7o poderá ser apresentado no prazo de quinze dias da data para a entrega, na forma do inciso IV do art. 225, da GFIP que registre a movimentação do trabalhador, sob pena de não conhecimento da alegação em instância administrativa. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
§ 9º  Caracterizada a impossibilidade de atendimento ao disposto no § 8º, motivada pelo não conhecimento tempestivo do diagnóstico do agravo, o requerimento de que trata o § 7º poderá ser apresentado no prazo de quinze dias, contado da data em que a empresa tomar ciência da decisão a que se refere o § 5º.    (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 10.  Juntamente com o requerimento de que tratam os §§ 8o e 9o, a empresa formulará as alegações que entender necessárias e apresentará as provas que possuir demonstrando a inexistência de nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 11.  A documentação probatória poderá trazer, entre outros meios de prova, evidências  técnicas circunstanciadas e tempestivas à exposição do segurado, podendo ser produzidas no âmbito de programas de gestão de risco, a cargo da empresa, que possuam responsável técnico legalmente habilitado. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
§ 12.  O INSS informará ao segurado sobre a contestação da empresa para que este, querendo, possa impugná-la, obedecendo, quanto à produção de provas, ao disposto no § 10, sempre que a instrução do pedido evidenciar a possibilidade de reconhecimento de inexistência do nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 13.  Da decisão do requerimento de que trata o § 7o cabe recurso, com efeito suspensivo, por parte da empresa ou, conforme o caso, do segurado ao Conselho de Recursos da Previdência Social, nos termos dos arts. 305 a 310. (Incluído pelo Decreto nº 6.042, de 2007).”</p>

<p>O Diploma Previdenciário regulamenta que a Perícia Médica Federal – PMF -  tem competência para determinar se uma incapacidade decorre ou não do trabalho. Para isso, precisa relacionar o agravo (incapacidade laboral) com a Classificação Internacionais de Doenças dispostas no Anexo II, Lista “C”.<br/>
Tal procedimento foi realizado pela PMF e, por haver o enquadramento legal, foi concedida a espécie acidentária.<br/>
Não há a necessidade de vistoria técnica em razão do Decreto 3.048/99 ser taxativo quanto as doenças que têm origem no trabalho.</p>`,
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
                {
                    id: 'ntepPmfContrario',
                    label: 'NTEP - PMF contrário',
                    ramificacao: {
                        irPara: 'procurador',
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
                            texto: 'Houve reanálise pela perícia médica federal, que por sua vez retificou a existência do nexo técnico, e fundamenta pela transformação da espécie em previdenciário (B31).',
                        },
                        {
                            categoria: 'merito',
                            texto: `
<p>Regulamenta o Decreto 3.048/99:<br/>
“Art. 337.  O acidente do trabalho será caracterizado tecnicamente pela Perícia Médica Federal, por meio da identificação do nexo causal entre o trabalho e o agravo.<br/>
§ 1º O setor de benefícios do Instituto Nacional do Seguro Social reconhecerá o direito do segurado à habilitação do benefício acidentário.<br/>
§ 2º Será considerado agravamento do acidente aquele sofrido pelo acidentado quanto estiver sob a responsabilidade da reabilitação profissional.<br/>
§ 3o  Considera-se estabelecido o nexo entre o trabalho e o agravo quando se verificar nexo técnico epidemiológico entre a atividade da empresa e a entidade mórbida motivadora da incapacidade, elencada na Classificação Internacional de Doenças - CID em conformidade com o disposto na Lista C do Anexo II deste Regulamento. (Redação dada pelo Decreto nº 6.957, de 2009)<br/>
§ 4o  Para os fins deste artigo, considera-se agravo a lesão, doença, transtorno de saúde, distúrbio, disfunção ou síndrome de evolução aguda, subaguda ou crônica, de natureza clínica ou subclínica, inclusive morte, independentemente do tempo de latência. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
 § 5º  Reconhecidos pela Perícia Médica Federal a incapacidade para o trabalho e o nexo causal entre o trabalho e o agravo, na forma prevista no § 3º, serão devidas as prestações acidentárias a que o beneficiário tiver direito.    (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 6º  A Perícia Médica Federal deixará de aplicar o disposto no § 3º quando demonstrada a inexistência de nexo causal entre o trabalho e o agravo, sem prejuízo do disposto nos § 7º e § 12.   (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 7o  A empresa poderá requerer ao INSS a não aplicação do nexo técnico epidemiológico ao caso concreto mediante a demonstração de inexistência de correspondente nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 8o  O requerimento de que trata o § 7o poderá ser apresentado no prazo de quinze dias da data para a entrega, na forma do inciso IV do art. 225, da GFIP que registre a movimentação do trabalhador, sob pena de não conhecimento da alegação em instância administrativa. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
§ 9º  Caracterizada a impossibilidade de atendimento ao disposto no § 8º, motivada pelo não conhecimento tempestivo do diagnóstico do agravo, o requerimento de que trata o § 7º poderá ser apresentado no prazo de quinze dias, contado da data em que a empresa tomar ciência da decisão a que se refere o § 5º.    (Redação dada pelo Decreto nº 10.410, de 2020)<br/>
§ 10.  Juntamente com o requerimento de que tratam os §§ 8o e 9o, a empresa formulará as alegações que entender necessárias e apresentará as provas que possuir demonstrando a inexistência de nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 11.  A documentação probatória poderá trazer, entre outros meios de prova, evidências  técnicas circunstanciadas e tempestivas à exposição do segurado, podendo ser produzidas no âmbito de programas de gestão de risco, a cargo da empresa, que possuam responsável técnico legalmente habilitado. (Incluído pelo Decreto nº 6.042, de 2007).<br/>
§ 12.  O INSS informará ao segurado sobre a contestação da empresa para que este, querendo, possa impugná-la, obedecendo, quanto à produção de provas, ao disposto no § 10, sempre que a instrução do pedido evidenciar a possibilidade de reconhecimento de inexistência do nexo entre o trabalho e o agravo. (Redação dada pelo Decreto nº 6.939, de 2009)<br/>
§ 13.  Da decisão do requerimento de que trata o § 7o cabe recurso, com efeito suspensivo, por parte da empresa ou, conforme o caso, do segurado ao Conselho de Recursos da Previdência Social, nos termos dos arts. 305 a 310. (Incluído pelo Decreto nº 6.042, de 2007).”</p>

<p>O Diploma Previdenciário regulamenta que a Perícia Médica Federal – PMF -  tem competência para determinar se uma incapacidade decorre ou não do trabalho. Para isso, precisa relacionar o agravo (incapacidade laboral) com a Classificação Internacionais de Doenças dispostas no Anexo II, Lista “C”.<br/>
Tal procedimento foi realizado pela PMF e, por haver o enquadramento legal, foi concedida a espécie acidentária.<br/>
Não há a necessidade de vistoria técnica em razão do Decreto 3.048/99 ser taxativo quanto as doenças que têm origem no trabalho.</p>`,
                        },
                        {
                            categoria: 'casoConcreto',
                            texto: `Na fase recursal, o órgão da PMF manteve o entendimento anterior ante a existência de nexo entre a incapacidade e o trabalho exercido.<br/>
Deste modo, mantemos o ato denegatório do INSS e a existência do nexo técnico, devendo a espécie continuar sendo acidentária.`,
                        },
                        {
                            categoria: 'ementa',
                            texto: `A RELAÇÃO ENTRE A PATOLOGIA INCAPACITANTE E O LABOR É CARACTERIZADO PELA PERÍCIA MÉDICA FEDERAL, CONFORME ARTIGO 337 DO DECRETO 3.048/99. SENDO A PERÍCIA FAVORÁVEL QUANTO AO NEXO, ESTÁ COMPROVADO.`,
                        },
                    ],
                },
            ],
        },
        {
            id: 'especie-re',
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
                        {
                            categoria: 'voto',
                            texto: ' ',
                        },
                        {
                            categoria: 'ementa',
                            texto: ' ',
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
                        {
                            categoria: 'voto',
                            texto: ' ',
                        },
                        {
                            categoria: 'ementa',
                            texto: ' ',
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
            id: 'procurador',
            tipo: 'opcao',
            titulo: 'Procurador',
            subtitulo: 'Existe procurador constituído?',
            valorPadrao: 'nao',
            opcoes: [
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
        {
            id: 'pontos-controversos',
            tipo: 'selecao',
            titulo: 'Pontos Controversos',
            selecoes: [
                {
                    id: 'carencia',
                    label: 'Carência',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>CARÊNCIA NAS PRESTAÇÕES</p><p>Assim normatiza o Decreto nº 3.048/99 sobre carência<br>"Art. 29. A concessão das prestações pecuniárias do Regime Geral de Previdência Social, ressalvado o disposto no art. 30, depende dos seguintes períodos de carência:<br>I - doze contribuições mensais, nos casos de auxílio por incapacidade temporária e aposentadoria por incapacidade permanente; e&nbsp;<br>II - cento e oitenta contribuições mensais, nos casos de aposentadoria programada, por idade do trabalhador rural e especial;<br>III - dez contribuições mensais, no caso de salário-maternidade, para as seguradas contribuinte individual, especial e facultativa, respeitado o disposto no § 2º do art. 93 e no inciso II do art. 101.<br>IV - vinte e quatro contribuições mensais, no caso de auxílio-reclusão."</p><p>Para que seja possível a concessão da referida prestação, dado o caráter contributivo da Previdência Social, é imprescindível que o segurado tenha vertido, em vida, a quantidade mínima de MM contribuições mensais.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>No caso em tela, verifica-se que a parte recorrente possui o total de NN contribuições mensais, razão pela qual [não] cumpre com o requisito carência.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>CARÊNCIA EXIGIDA DE MM CONTRIBUIÇÕES MENSAIS, REQUISITO [NÃO] CUMPRIDO PELA PARTE RECORRENTE.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'carencia-doencao-nao-isenta',
                    label: 'Carência – Doença não isenta carência',
                    variaveis: [
                        {
                            id: 'tipo-segurado',
                            label: 'Tipo de Segurado',
                            tipo: 'texto',
                        },
                        {
                            id: 'inicio-qualidade-segurado',
                            label: 'Data início da qualidade de Segurado',
                            tipo: 'texto',
                        },
                        {
                            id: 'fim-qualidade-segurado',
                            label: 'Data fim da qualidade de Segurado',
                            tipo: 'texto',
                        },
                    ],
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – o início das contribuições na qualidade de segurado ${tipo-segurado} a partir de ${inicio-qualidade-segurado} até o ${fim-qualidade-segurado} [ou evento gerador], num total de NN contribuições apuradas pelo INSS.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>ISENÇÃO DE CARÊNCIA NO BENEFÍCIO POR INCAPACIDADE</p><p>Há situações em que o Decreto Previdenciário determina a isenção de carência para o Auxílio Incapacidade Temporária, nos seguintes termos:<br>“Art. 30. Independe de carência a concessão das seguintes prestações:<br>(...)<br>III - auxílio por incapacidade temporária e aposentadoria por incapacidade permanente nos casos de acidente de qualquer natureza ou causa e de doença profissional ou do trabalho e nos casos de segurado que, após filiar-se ao RGPS, seja acometido de alguma das doenças ou afecções especificadas em lista elaborada pelos Ministérios da Saúde e da Economia, atualizada a cada três anos, de acordo com os critérios de estigma, deformação, mutilação, deficiência ou outro fator que lhe confira especificidade e gravidade que mereçam tratamento particularizado;”<br>(...)<br>§ 2º &nbsp;Até que seja elaborada a lista de doenças ou afecções a que se refere o inciso III do caput, independerá de carência a concessão de auxílio por incapacidade temporária e de aposentadoria por incapacidade permanente ao segurado que, após filiar-se ao RGPS, seja acometido por alguma das seguintes doenças:<br>I - tuberculose ativa;<br>II - hanseníase;<br>III - alienação mental;<br>IV - esclerose múltipla;<br>V - hepatopatia grave;<br>VI - neoplasia maligna;<br>VII - cegueira;<br>VIII - paralisia irreversível e incapacitante;<br>IX - cardiopatia grave;<br>X - doença de Parkinson;<br>XI - espondiloartrose anquilosante;<br>XII - nefropatia grave;<br>XIII - estado avançado da doença de Paget (osteíte deformante);<br>XIV - síndrome da imunodeficiência adquirida (aids); ou<br>XV - contaminação por radiação, com base em conclusão da medicina especializada.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A doença que acomete a parte recorrente não decorre de acidente para que isente de carência. Também, não está elencada no rol de patologias graves que assegurem a isenção, entabuladas no § 2º do Art. 30 do Decreto nº 3.048/99.</p><p>A doença que acomete a parte recorrente decorre de [ACIDENTE/DOENÇA] que isenta de carência[, pois está elencada no rol de patologias graves que assegurem a isenção, entabuladas no § 2º do Art. 30 do Decreto nº 3.048/99].</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>NÃO GOZA DE ISENÇÃO DE CARÊNCIA EM RAZÃO DA INCAPACIDADE &nbsp;TER ORIGEM EM ACIDENTE OU DOENÇA ESPECIFICADA NO § 2º DO ART. 30. DO DECRETO Nº 3.048/99.</p><p>GOZA DE ISENÇÃO DE CARÊNCIA EM RAZÃO DA INCAPACIDADE TER ORIGEM EM [ACIDENTE/DOENÇA ESPECIFICADA NA NORMA REGULAMENTADORA], NOS TERMOS DO ART. 30. DO DECRETO Nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'auxilio-reclusao-certidao',
                    label: 'Auxílio-Reclusão - certidão carcerária',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Houve apresentação pela parte recorrente da comprovação da reclusão em regime fechado a partir de XX/XX/XXXX.</p><p>Foi emitida exigência para apresentar Certidão Judicial, referente ao regime de reclusão e a data da prisão, mas esta não foi devidamente atendida pela parte recorrente.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Sobre a comprovação do recolhimento ao cárcere, normatiza o Decreto nº 3.048/99:<br>"Art. 116. &nbsp;O auxílio-reclusão, cumprida a carência prevista no inciso IV do caput do art. 29, será devido, nas condições da pensão por morte, aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado que não receber remuneração da empresa nem estiver em gozo de auxílio por incapacidade temporária, de pensão por morte, de salário-maternidade, de aposentadoria ou de abono de permanência em serviço. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>(...)<br>§ 2º &nbsp;O requerimento do auxílio-reclusão será instruído com certidão judicial que ateste o recolhimento efetivo à prisão e será obrigatória a apresentação de prova de permanência na condição de presidiário para a manutenção do benefício."</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'A PARTE RECORRENTE [NÃO] APRESENTOU A CERTIDÃO JUDICIAL QUE ATESTA O RECOLHIMENTO EFETIVO À PRISÃO EM REGIME FECHADO, NOS TERMOS DO § 2º DO ART. 116 DO DECRETO Nº 3.048/99.',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado',
                    label: 'Perda da qualidade de segurado',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].</p><p>Não há comprovação nos autos de mais de 120 contribuições mensais, anteriores a perda desta qualidade, ou a comprovação de desemprego por órgão do Ministério do Trabalho e Previdência.</p><p>Há a comprovação de mais de 120 contribuições mensais sem a perda da qualidade de segurado, antes de XX/XX/XXXX.<br>Nos termos do evento X, há a comprovação da condição de desemprego por meio do [recebimento de seguro desemprego/inscrição cadastral no Sistema Nacional de Emprego - SINE].</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Sobre a manutenção da qualidade de segurado no evento gerador, normatiza o Decreto nº 3.048/99:<br>"Art. 13. Mantém a qualidade de segurado, independentemente de contribuições:<br>&nbsp; &nbsp; &nbsp; &nbsp;I - sem limite de prazo, o segurado que estiver em gozo de benefício, exceto na hipótese de auxílio-acidente;<br>&nbsp; &nbsp; &nbsp; II - até doze meses após a cessação de benefício por incapacidade ou das contribuições, observado o disposto nos § 7º e § 8º e no art. 19-E;<br>&nbsp; &nbsp; &nbsp; &nbsp;III - até doze meses após cessar a segregação, o segurado acometido de doença de segregação compulsória;<br>&nbsp; &nbsp; &nbsp; &nbsp;IV - até doze meses após o livramento, o segurado detido ou recluso;<br>&nbsp; &nbsp; &nbsp; &nbsp;V - até três meses após o licenciamento, o segurado incorporado às Forças Armadas para prestar serviço militar; e<br>&nbsp; &nbsp; &nbsp; &nbsp;VI - até seis meses após a cessação das contribuições, o segurado facultativo.<br>§ 1º &nbsp;O prazo do inciso II será prorrogado para até vinte e quatro meses, se o segurado já tiver pago mais de cento e vinte contribuições mensais sem interrupção que acarrete a perda da qualidade de segurado.<br>&nbsp; &nbsp; &nbsp; &nbsp;§ 2º &nbsp;O prazo do inciso II ou do § 1º será acrescido de doze meses para o segurado desempregado, desde que comprovada essa situação por registro no órgão próprio do Ministério do Trabalho e Emprego."</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>PERDA DA QUALIDADE DE SEGURADO EM YY/YY/YYYY. NÃO CONSTAM MAIS DE 120 CONTRIBUIÇÕES MENSAIS OU COMPROVAÇÃO DE DESEMPREGO POR ÓRGÃO DO MINISTÉRIO DO TRABALHO E PREVIDÊNCIA QUE JUSTIFIQUEM A ESTENÇÃO DESTA QUALIDADE. NA DATA DO EVENTO GERADOR ZZ/ZZ/ZZZZ NÃO GOZAVA MAIS DA MANUTENÇÃO DESTA QUALIDADE, CONFORME REQUER O ART. 13 DO DECRETO Nº 3.048/99.</p><p>QUALIDADE DE SEGURADO ESTENDIDA POR COMPROVAR MAIS DE 120 CONTRIBUIÇÕES MENSAIS [E/OU] COMPROVAÇÃO DE DESEMPREGO POR ORGÃO DO MINISTÉRIO DO TRABALHO E PREVIDÊNCIA. TODAVIA, NA DATA DO EVENTO GERADOR ZZ/ZZ/ZZZZ NÃO GOZAVA MAIS DA MANUTENÇÃO DESTA QUALIDADE. COM ISSO, NA DATA DO EVENTO GERADOR ZZ/ZZ/ZZZZ GOZAVA DA MANUTENÇÃO DESTA QUALIDADE, INTELIGÊNCIA DO ART. 13 DO DECRETO Nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-18-06-2019-hoje',
                    label: 'Perda da qualidade de segurado - com reingresso - 18/06/2019 - hoje',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza o Decreto nº 3.048/99:<br>"Art. 27-A. &nbsp;Na hipótese de perda da qualidade de segurado, para fins da concessão dos benefícios de auxílio por incapacidade temporária, de aposentadoria por incapacidade permanente, de salário-maternidade e de auxílio-reclusão, as contribuições anteriores à perda somente serão computadas para fins de carência depois que o segurado contar, a partir da nova filiação ao RGPS, com metade do número de contribuições exigidas para o cumprimento do período de carência definido no art. 29. "<br>Observando o texto normativo, em razão da espécie pleiteada exigir a carência de LL contribuições, verifica-se a necessidade cumprir com metade da carência a partir da nova filiação, precisamente MM contribuições mensais, para que as contribuições anteriores a perda da qualidade possam ser computadas para efeito de carência.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO ART. 27-A DO DECRETO Nº 3.048/99, AS CONTRIBUIÇÕES ANTERIORES A PERDA DA QUALIDADE DE SEGURADO MERECEM SER COMPUTADAS, CUMPRINDO-SE COM O REQUISITO CARÊNCIA IMPOSTO PELO ART. 25 DA LEI Nº 8.213/91.</p><p>QUANTIDADE ESTA INFERIOR À METADE DA CARÊNCIA IMPOSTA PELO ART. 27-A DO DECRETO Nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-até-01-07-2016-e-05-11-2016-05-01-2017',
                    label: 'Perda da qualidade de segurado - com reingresso - até 01/07/2016 e 05/11/2016 - 05/01/2017',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza o Decreto nº 3.048/99:<br>"Art. 27-A. &nbsp;Na hipótese de perda da qualidade de segurado, para fins da concessão dos benefícios de auxílio por incapacidade temporária, de aposentadoria por incapacidade permanente, de salário-maternidade e de auxílio-reclusão, as contribuições anteriores à perda somente serão computadas para fins de carência depois que o segurado contar, a partir da nova filiação ao RGPS, com metade do número de contribuições exigidas para o cumprimento do período de carência definido no art. 29. "<br>Observando o texto normativo, em razão da espécie pleiteada exigir a carência de LL contribuições, verifica-se a necessidade cumprir com metade da carência a partir da nova filiação, precisamente MM contribuições mensais, para que as contribuições anteriores a perda da qualidade possam ser computadas para efeito de carência.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO ART. 27-A DO DECRETO Nº 3.048/99, AS CONTRIBUIÇÕES ANTERIORES A PERDA DA QUALIDADE DE SEGURADO MERECEM SER COMPUTADAS, CUMPRINDO-SE COM O REQUISITO CARÊNCIA IMPOSTO PELO ART. 25 DA LEI Nº 8.213/91.</p><p>QUANTIDADE ESTA INFERIOR À METADE DA CARÊNCIA IMPOSTA PELO ART. 27-A DO DECRETO Nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-08-07-2016-04-11-2016',
                    label: 'Perda da qualidade de segurado - com reingresso - 08/07/2016 - 04/11/2016',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza a Lei nº 8.213/91, alterada pela Medida Provisória nº 739/2016, vigente na data do evento gerador:<br>"Art. 27. &nbsp;Para cômputo do período de carência, serão consideradas as contribuições:<br>Parágrafo único. &nbsp;No caso de perda da qualidade de segurado, para efeito de carência para a concessão dos benefícios de auxílio-doença, de aposentadoria por invalidez e de salário-maternidade, o segurado deverá contar, a partir da nova filiação à Previdência Social, com os períodos previstos nos incisos I e III do caput do art. 25."<br>Observando o texto normativo, verifica-se a necessidade cumprir integralmente a carência de MM contribuições mensais a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO PARÁGRAFO ÚNICO DO ART. 27 DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 739/2016, A PARTE RECORRENTE CUMPRE COM A CARÊNCIA INTEGRAL IMPOSTA PELO ART. 25 DA LEI Nº 8.213/91.</p><p>NÃO COMPROVA A CARÊNCIA INTEGRAL DO ARTIGO 25 DA LEI PREVIDENCIÁRIA APÓS A NOVA FILIAÇÃO, CONFORME IMPOSIÇÃO DO ART. 27 DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 739/2016.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-06-01-2017-26-06-2017',
                    label: 'Perda da qualidade de segurado - com reingresso - 06/01/2017 – 26/06/2017',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza a Lei nº 8.213/91, alterada pela Medida Provisória nº 767/2017, vigente na data do evento gerador:<br>"Art. 27-A. &nbsp;No caso de perda da qualidade de segurado, para efeito de carência para a concessão dos benefícios de auxílio-doença, de aposentadoria por invalidez e de salário-maternidade, o segurado deverá contar, a partir da nova filiação à Previdência Social, com os períodos previstos nos incisos I e III do caput do art. 25."<br>Observando o texto normativo, verifica-se a necessidade cumprir integralmente a carência de MM contribuições mensais a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO ART. 27-A DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 767/2017, A PARTE RECORRENTE CUMPRE COM A CARÊNCIA INTEGRAL IMPOSTA PELO ART. 25 DA LEI Nº 8.213/91.</p><p>NÃO COMPROVA A CARÊNCIA INTEGRAL DO ARTIGO 25 DA LEI PREVIDENCIÁRIA APÓS A NOVA FILIAÇÃO, CONFORME IMPOSIÇÃO DO ART. 27-A DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 767/2017.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-27-06-2017-17-01-2019',
                    label: 'Perda da qualidade de segurado - com reingresso - 27/06/2017 - 17/01/2019',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza a Lei nº 8.213/91, alterada pela Lei 13.457/2017, vigente na data do evento gerador:<br>"Art. 27-A. &nbsp;No caso de perda da qualidade de segurado, para efeito de carência para a concessão dos benefícios de que trata esta Lei, o segurado deverá contar, a partir da nova filiação à Previdência Social, com metade dos períodos previstos nos incisos I e III do caput do art. 25 desta Lei."<br>Observando o texto normativo, em razão da espécie pleiteada exigir a carência de LL contribuições, verifica-se a necessidade cumprir com metade da carência a partir da nova filiação, precisamente MM contribuições mensais, para que as contribuições anteriores a perda da qualidade possam ser computadas para efeito de carência.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>"REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO ART. 27-A DA LEI 8.213/91, COM REDAÇÃO DADA PELA LEI Nº 13.457/2017, AS CONTRIBUIÇÕES ANTERIORES A PERDA DA QUALIDADE DE SEGURADO MERECEM SER COMPUTADAS, CUMPRINDO-SE COM O REQUISITO CARÊNCIA IMPOSTO PELO ART. 25 DA LEI Nº 8.213/91.</p><p>QUANTIDADE ESTA INFERIOR À METADE DA CARÊNCIA IMPOSTA PELO ART. 27-A DA LEI 8.213/91, COM REDAÇÃO DADA PELA LEI Nº 13.457/2017."</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-18-01-2019-17-06-2019',
                    label: 'Perda da qualidade de segurado - com reingresso - 18/01/2019 – 17/06/2019',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Consta no Cadastro Nacional do Seguro Social – CNIS – a última contribuição em XX/XX/XXXX na condição de [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo/ beneficiário de auxílio incapacidade temporária/ segregado compulsório/ segurado recluso/ licenciado das Forças Armadas].<br>Tempos depois, em WW/WW/WWWW, filiou-se como [segurado empregado/avulso/doméstico/especial/contribuinte individual/ facultativo] e recolheu até [DII/dt óbito/dt reclusão/dt maternidade], perfazendo N contribuições a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza a Lei nº 8.213/91, alterada pela Medida Provisória nº 871/2019, vigente na data do evento gerador:<br>"Art. 27-A. Na hipótese de perda da qualidade de segurado, para fins da concessão dos benefícios de auxílio-doença, de aposentadoria por invalidez, de salário-maternidade e de auxílio-reclusão, o segurado deverá contar, a partir da data da nova filiação à Previdência Social, com os períodos integrais de carência previstos nos incisos I, III e IV do caput do art. 25."<br>Observando o texto normativo, verifica-se a necessidade cumprir integralmente a carência de MM contribuições mensais a partir da nova filiação.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não apresentou a a certidão judicial comprovando a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>REINGRESSO APÓS A PERDA DA QUALIDADE DE SEGURADO. APÓS A PERDA DA QUALIDADE, A PARTE RECORRENTE REINGRESSOU AO RGPS COMO [TIPO SEGURADO] E VERTEU N CONTRIBUIÇÕES PARA EFEITO DE CARÊNCIA.</p><p>EM RAZÃO DA QUANTIDADE DE CONTRIBUIÇÕES ATENDER AO ART. 27-A DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 871/2019, A PARTE RECORRENTE CUMPRE COM A CARÊNCIA INTEGRAL IMPOSTA PELO ART. 25 DA LEI Nº 8.213/91.</p><p>NÃO COMPROVA A CARÊNCIA INTEGRAL DO ARTIGO 25 DA LEI PREVIDENCIÁRIA APÓS A NOVA FILIAÇÃO, CONFORME IMPOSIÇÃO DO ART. 27-A DA LEI 8.213/91, ALTERADO PELA MEDIDA PROVISÓRIA 871/2019.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'ctps',
                    label: 'CTPS',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Deixou o INSS de considerar os seguintes vínculos da CTPS nº XXXX, série xxxx, expedida em xx/xx/xxxx, fls XX/XX:<br>- XX/XX/XXXX, fl. XX, empresa XXXXXXXX [, com contribuição sindical fls. XX, alteração de salário fls XX];<br>- XX/XX/XXXX, fl. XX, empresa XXXXXXXX [, com contribuição sindical fls. XX, alteração de salário fls XX];</p><p>[Pergunta: Há defeito formal que lhe comprometa a fidedignidade? Qual {não está em ordem cronológica/ há rasura/ não é contemporaneo}<br>Não há registro no processo de defeito formal na referida CTPS, já que os registros existentes estão em ordem cronológica, contemporâneos e sem rasuras.<br>Consta no processo que há [rasura/extemporaneidade/falta de cronologicidade] na referida CTPS.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Regulamenta o Decreto 3.048/99:<br>“Art. 19-B. &nbsp;Na hipótese de não constarem do CNIS as informações sobre atividade, vínculo, remunerações ou contribuições, ou de haver dúvida sobre a regularidade das informações existentes, o período somente será confirmado por meio da apresentação de documentos contemporâneos dos fatos a serem comprovados, com menção às datas de início e de término e, quando se tratar de trabalhador avulso, à duração do trabalho e à condição em que tiver sido prestada a atividade.<br>§ 1º &nbsp;Além dos dados constantes do CNIS a que se refere o art. 19, observada a forma de filiação do trabalhador ao RGPS, os seguintes documentos serão considerados para fins de comprovação do tempo de contribuição de que trata o caput, desde que contemporâneos aos fatos a serem comprovados:&nbsp;<br>I - carteira profissional ou Carteira de Trabalho e Previdência Social; “</p><p>Na mesma linha é o Enunciado 2 do CRPS:<br>“Não se indefere benefício sob fundamento de falta de recolhimento de contribuição previdenciária quando a responsabilidade tributária não competir ao segurado.<br>(...)<br>II - Não é absoluto o valor probatório da Carteira de Trabalho e Previdência Social (CTPS), mas é possível formar prova suficiente para fins previdenciários se esta não tiver defeito formal que lhe comprometa a fidedignidade, salvo existência de dúvida devidamente fundamentada.”<br>Observando o texto regulamentador e a jurisprudência consolidada desta Corte Administrativa, verifica-se que a Carteira de Trabalho forma prova de tempo de contribuição desde que inexista defeito formal que lhe comprometa a fidedignidade, devendo possuir traços de confiabilidade, como não ter rasuras, guardar a devida cronologicidade dos fatos e a devida contemporaneidade.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>Em razão da CTPS nº 78031 (fls. 7/14), série 35-RS, expedida em 19/10/1987 (fls. 7/8 da CTPS), possuir registro de contribuição sindical para o ano de 1988 (fls. 22/23 da CTPS), e estar em ordem cronológica, sem rasuras e contemporâneo, deve ser computado ao tempo de contribuição, nos termos do inciso I do § 1º do At. 19-B do Decreto nº 3.048/99, interpretado pelo inciso II do Enunciado 2 do CRPS.</p><p>Em razão da CTPS nº 78031 (fls. 7/14), série 35-RS, expedida em 19/10/1987 (fls. 7/8 da CTPS) [não estar em ordem cronológica / possuir rasuras/ ser expedida posterior ao término do contrato de trabalho (extemporâneo)], não deve ser reconhecida como prova nem ser computada ao tempo de contribuição, nos termos do inciso I do § 1º do At. 19-B do Decreto nº 3.048/99, interpretado pelo inciso II do Enunciado 2 do CRPS.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>CARTEIRA DE TRABALHO É PROVA DE VÍNCULO EMPREGATÍCIO PARA FINS DE TEMPO DE CONTRIBUIÇÃO CONFORME INCISO I DO §1º DO ART. 19-B DO DECRETO 3.048/99. INEXISTINDO DEFEITO FORMAL QUE LHE COMPROMETA A FIDEDIGNIDADE, A CTPS FORMA PROVA, INTELIGÊNCIA DO INCISO II DO ENUNCIADO 2 DO CRPS. NO CASO EM TELA, A CTPS APRESENTADA N]AP POSSUI DEFEITO FORMAL, ESTA OS VÍNCULOS ANOTADOS EM ORDEM CRONOLÓGCA, SEM RASURAS E CONTEMPORÂNEOS.</p><p>CARTEIRA DE TRABALHO É PROVA DE VÍNCULO EMPREGATÍCIO PARA FINS DE TEMPO DE CONTRIBUIÇÃO CONFORME INCISO I DO §1º DO ART. 19-B DO DECRETO 3.048/99. INEXISTINDO DEFEITO FORMAL QUE LHE COMPROMETA A FIDEDIGNIDADE, A CTPS FORMA PROVA, INTELIGÊNCIA DO INCISO II DO ENUNCIADO 2 DO CRPS. NO CASO, HÁ EVIDENTE [RASURA/EXTEMPORANEIDADE/FALTA DE CRONOLOGICIDADE NAS ANOTAÇÕES]</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'auxilio-reclusao-regime-fechado',
                    label: 'Auxílio-Reclusão - regime fechado',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Houve apresentação pela parte recorrente da comprovação da reclusão em regime fechado a partir de XX/XX/XXXX.</p><p>Consta nos autos que o segurado foi submetido à reclusão em regime [aberto/semiaberto].</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Sobre a comprovação do recolhimento ao cárcere, normatiza o Decreto nº 3.048/99:<br>"Art. 116. &nbsp;O auxílio-reclusão, cumprida a carência prevista no inciso IV do caput do art. 29, será devido, nas condições da pensão por morte, aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado que não receber remuneração da empresa nem estiver em gozo de auxílio por incapacidade temporária, de pensão por morte, de salário-maternidade, de aposentadoria ou de abono de permanência em serviço."</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>A parte recorrente apresentou a certidão judicial comprovando a reclusão em regime fechado e, em razão de comprovar a qualidade de dependente, a qualidade de segurado e a carência, faz jus à prestação requerida, nos termos do Art. 116 do Decreto nº 3.048/99.</p><p>A parte recorrente não comprova a reclusão em regime fechado, motivo pela qual não cumpre com o requisito imposto no Art. 116 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>O AUXÍLIO-RECLUSÃO SERÁ DEVIDO AOS DEPENDENTES DO SEGURADO RECLUSO EM REGIME FECHADO, POR FORÇA DO. ART. 116. &nbsp;DO DECRETO Nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'loas-renda-per-capita-indeferimento',
                    label: 'LOAS - RENDA PER CAPITA - INDEFERIMENTO',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O INSS indeferiu o benefício em razão da renda per capita ser igual/superior a um quarto do salário mínimo.</p><p>[EXISÊNCIA DE PARECER TÉCNICO DO ASSISTENTE SOCIAL COMPROVANDO A MISERABILIDADE SUBJETIVA]<br>Em sede de diligência preliminar, foi solicitado um Parecer do Assistente Social do INSS, ev. XX, para aferir o grau de miserabilidade do grupo familiar. O parecer técnico traz a informação de que a recorrente [não] se encontra em vulnerabilidade ou risco social[ por comprometimento da renda].</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A Lei nº 8.742, de 7 de dezembro de 1993 normatizou a matéria, fazendo constar do caput e parágrafos 1º a 3º do seu art. 20: &nbsp;<br>“Art. 20. &nbsp;O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.<br>§ 1o &nbsp;Para os efeitos do disposto no caput, a família é composta pelo requerente, o cônjuge ou companheiro, os pais e, na ausência de um deles, a madrasta ou o padrasto, os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, desde que vivam sob o mesmo teto. (Redação dada pela Lei nº 12.435, de 2011)<br>§ 2o &nbsp;Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.<br>§ 3º &nbsp;Observados os demais critérios de elegibilidade definidos nesta Lei, terão direito ao benefício financeiro de que trata o caput deste artigo a pessoa com deficiência ou a pessoa idosa com renda familiar mensal per capita igual ou inferior a 1/4 (um quarto) do salário-mínimo.”<br>A comprovação da condição de hipossuficiência econômica, ou seja, não possuir meios de prover a própria manutenção, como está disposto no caput do artigo 20.<br>A interpretação a ser utilizada a esta espécie de benefício deve ser conduzida pela busca da conciliação entre o postulado constitucional do mínimo existencial, inciso III do art. 1º da Constituição da República que tutela a dignidade da pessoa humana, e o propósito maior da LOAS, expresso no seu art. 4º, III, é dizer, o "respeito à dignidade do cidadão, à sua autonomia e ao seu direito a benefícios e serviços de qualidade, bem como à convivência familiar e comunitária, vedando-se qualquer comprovação vexatória de necessidade".&nbsp;<br>Tal observância se deve ao primeiro princípio da Assistência Social insculpido no artigo 4º da Lei 8.742/93, litteris:<br>“Art. 4º A assistência social rege-se pelos seguintes princípios:<br>I - supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica;”</p><p>Ademais, inexiste no § 3º do art. 20 da LOAS a terminologia “somente se” ou “apenas se” de modo a restringir miserabilidade a este texto.<br>Estabelecidas tais premissas, o requisito pobreza disposto no § 3º do artigo 20 da LOAS deve ser entendido como um limite objetivo, presumindo que todos cuja renda per capita seja menor que um quarto do salário mínimo estejam nessa condição. Passa-se a ser um critério objetivo uma vez que todas as pessoas cuja renda per capita seja igual ou inferior a um quarto do salário mínimo estão em condições de hipossuficiência, automaticamente.<br>Contudo, é possível ser hipossuficiente econômico possuindo renda per capita superior a este limite, não sendo o § 3º do artigo 20 da LOAS o único critério válido. Outros fatores podem ser considerados para a constatação do estado de pobreza, sendo admitidos outros meios de prova. A avaliação da pobreza do grupo familiar, na hipótese da superação daquele limite, não deve ser procedida abstratamente, e sim avaliada caso a caso. Nessa linha, deverá ser considerada a real situação econômica e de penúria da família, levando-se em conta as despesas com medicação, alimentação, taxas, impostos e também analisando-se as condições de moradia e a necessidade de constante atendimento ao requerente, para só então concluir-se se a renda familiar auferida afigura-se insuficiente para o seu sustento.</p><p>[EXISÊNCIA DE PARECER TÉCNICO DO ASSISTENTE SOCIAL COMPROVANDO A MISERABILIDADE SUBJETIVA]<br>O Parecer Técnico foi lavrado por servidor profissional Assistente Social, e seu parecer tem fé pública. Serve, portanto, como prova por força do artigo 369 do Código de Processo Civil, nos termos “As partes têm o direito de empregar todos os meios legais, bem como os moralmente legítimos, ainda que não especificados neste Código, para provar a verdade dos fatos em que se funda o pedido ou a defesa e influir eficazmente na convicção do juiz.”, aplicável em razão da permissão do artigo 71 do Regimento do CRPS, a saber “Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública Federal”.<br>Para finalizar, esta é a linha do entendimento firmado pelo Conselho Pleno do Conselho de Recursos do Seguro Social:<br>"Da atenta leitura do divulgado dessume-se que a Procuradoria do INSS, a quem compete representar a entidade previdenciária em juízo, defendeu - e com sucesso - a tese de que o critério objetivo de aferição de miserabilidade previsto no art. 20, § 32, da Lei n2 8.742, de 07.12.1993 não é absoluto, devendo ser aplicando com temperança, especialmente nos casos em que laudo socioeconômico atestar a vulnerabilidade social e miserabilidade do interessado.<br>[...]<br>Ora, se a PFE/INSS sustenta em juízo - e com êxito - que laudo socioeconômico é requisito necessário para afastar o critério objetivo de miserabilidade previsto na lei de regência e esse laudo faz-se presente nos autos atestando a miserabilidade do interessado, não pode a autarquia previdenciária, por lealdade processual, defender em sede administrativa a imperatividade do comando do art. 20, § 32, da Lei n2 8.742, de 07.12.1993, enquanto que na esfera do Poder Judiciário adota outro procedimento e<br>sustenta que a aludida normatização não á absoluta e pode ser afastada mediante a juntada de parecer socioeconômico informando o estado de miserabilidade da parte interessada e da respectiva família."<br>(RECLAMAÇÃO AO CONSELHO PLENO, Nº 44232.283381/2014-16, Voto Divergente Vencedor Rel. PAULO SÉRGIO DE C. COSTA RIBEIRO, CONSELHO LENO DO CONSELHO DE RECURSOS DO SEGURO SOCIAL, Resolução 28/2018, 29 mai. 2018)</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>[CUMPRE COM CRITÉRIOS OBJETIVOS]<br>Todavia, a contar da DER, a condição de miserabilidade restou comprovada pelos critérios objetivos, pois não há vínculos ou remunerações no Cadastro Nacional do Seguro Social – CNIS – nem no Sistema Único de Benefícios – SUB. Assim, não há comprovadamente que o recorrente tenha fonte de renda igual superior ao ¼ do salário mínimo, conforme preceitua o § 3º da LOAS.<br>&nbsp; &nbsp; &nbsp; &nbsp;Deste modo, é certo que a negativa deste benefício viola princípios constitucionais sensíveis e, principalmente, o objetivo da Lei Orgânica da Assistência Social, pois está comprovado no processo que o requerente não possui meios de prover a própria manutenção, muito menos tê-la provida por sua família, conforme determina os parágrafos 1º e 3º do artigo 20 da LOAS, razão pela qual faz jus ao benefício a partir da DER.</p><p><br>[NÃO CUMPRE COM CRITÉRIOS OBJETIVOS]<br>[PERGUNTA: O REQUERENTE POSSUI RENDA?]<br>A parte recorrente [não] tem meios de prover a própria manutenção, uma vez que [não] há vínculos ou remunerações no Cadastro Nacional do Seguro Social – CNIS – [nem] no Sistema Único de Benefícios – SUB [que comprovem a renda]. Sua família possui a renda percapita de R$ XXXX, a qual supera o limite legal de renda previsto no art. 20, § 3º da Lei 8.742/93 . Portanto, conforme determina o caput do artigo 20 da LOAS, não faz jus ao benefício.</p><p><br>[EXISÊNCIA DE PARECER TÉCNICO DO ASSISTENTE SOCIAL &nbsp;MISERABILIDADE SUBJETIVA]<br>No caso em tela, a condição de pobreza restou analisada pelo Assistente Social que constatou, na residência do recorrente, condições de pobreza a quyal justifica a concessão da prestação nos termos da Resolução 28/2018 do Conselho Pleno, em entendimento do §3º do Art. 20 da Lei nº 8.742/93.</p><p>A parte recorrente não se encontra em risco ou vulnerabilidade sociais, conforme a prova fomada pelo parecer técnico do Asistente Social, arrolada nos autos.<br>Portanto, conforme determina o caput do artigo 20 da LOAS, não faz jus ao benefício.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>HÁ COMPROVADA MISERABILIDADE E NÃO EXISTE REMUNERAÇÃO NO CNIS OU NO SUB [HÁ RENDA RECEBIDA PELO RECORRENTE / HÁ RENDA RECEBIDA POR INTEGRANTE DO GRUPO FAMILIAR, O QUAL SUPERA O VALOR DE UM QUARTO DO SALÁRIO-MÍNIMO VIGENTE]. REQUERENTE [NÃO SE] ENQUADRA [-SE] NO ARTIGO 20 DA LEI 8.742/93 [NÃO] FAZENDO JUS À CONCESSÃO DO BENEFÍCIO ASSISTENCIAL.</p><p>CONSTATAÇÃO IN LOCU FEITO POR SERVIDOR DO INSS DE QUE A PARTE RECORRENTE VIVE EM CONDIÇÕES DE VULNERABILIDADE SOCIAL. PARECER TÉCNICO EMITIDO POR SERVIDOR PÚBLICO PROFISSIONAL DO SERVIÇO SOCIAL TEM FÉ PÚBLICA E SERVE COMO PROVA DE POBREZA POR FORÇA DO ARTIGO 369 DO CPC E ARTIGO 71 DO REGIMENTO DO CRPS, CONSOANTE ENTENDIMENTO DO CONSELHO PLENO NA RESOLUÇÃO 28/2018.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'tempo-especial-profissional-da-saude',
                    label: 'TEMPO ESPECIAL - PROFISSIONAL DA SAÚDE',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>- XX/XX/XXX à XX/XX/XXX – formulário [PPP/SB40/DIRBEN8030] da empresa XXXXXXX, fls. XX/XX, com exposição a agentes biológicos “XXXXXXX”, cuja descrição da atividade é “XXXXXX”.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>DO ENQUADRAMENTO A AGENTE BIOLÓGICO</p><p>Normatiza o Decreto nº 3.048/99 sobre o reconhecimento da especialidade em critérios qualitativos:<br>“Art. 68. A relação dos agentes nocivos químicos, físicos, biológicos ou associação de agentes prejudiciais à saúde ou à integridade física, considerados para fins de concessão de aposentadoria especial, consta do Anexo IV.§ 1º &nbsp;A Secretaria Especial de Previdência e Trabalho do Ministério da Economia promoverá a elaboração de estudos com base em critérios técnicos e científicos para atualização periódica do disposto no Anexo IV.<br>§ 2º &nbsp;A avaliação qualitativa de riscos e agentes prejudiciais à saúde será comprovada pela descrição: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>I - das circunstâncias de exposição ocupacional a determinado agente ou associação de agentes prejudiciais à saúde presentes no ambiente de trabalho durante toda a jornada de trabalho; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>II - de todas as fontes e possibilidades de liberação dos agentes mencionados no inciso I;<br>III - dos meios de contato ou exposição dos trabalhadores, as vias de absorção, a intensidade da exposição, a frequência e a duração do contato.<br>(…)<br>ANEXO IV<br>CÓDIGO 3.0.1 - MICROORGANISMOS E PARASITAS INFECTO-CONTAGIOSOS VIVOS E SUAS TOXINAS<br>a) trabalhos em estabelecimentos de saúde em contato com pacientes portadores de doenças infecto-contagiosas ou com manuseio de materiais contaminados;<br>b) trabalhos com animais infectados para tratamento ou para o preparo de soro, vacinas e outros produtos;<br>c) trabalhos em laboratórios de autópsia, de anatomia e anátomo-histologia;<br>d) trabalho de exumação de corpos e manipulação de resíduos de animais deteriorados;<br>e) trabalhos em galerias, fossas e tanques de esgoto;<br>f) esvaziamento de biodigestores;<br>g) coleta e industrialização do lixo.”</p><p>Observando o texto regulamentador, verifica-se que algumas atividades desempenhadas, código 3.0.1 podem ser caracterizadas com exposição a agentes biológicos, desde que a descrição da atividade, circunstâncias, possibilidades de liberação dos agentes, além dos meios de contato ou exposição do trabalhador.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>Para os períodos de XXXXXXXX [não] é possível constatar pela descrição da atividade a exposição aos agentes biológicos nos termos do código 3.0.1 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>PERÍODOS DECLARADOS COMO ESPECIAIS EXPOSTOS A AGENTES BIOLÓGICOS [NÃO] ENCONTRAM ASSENTO NO CÓDIGO 3.0.1 DO DECRETO 3.048/99.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'loas-renda-per-capita-suspensao-pelo-mob',
                    label: 'LOAS - RENDA PER CAPITA - SUSPENSÃO PELO MOB',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em síntese, o INSS decidiu pela suspensão do benefício em razão do [recebimento de benefício/comprovação de remuneração] pelo [próprio recorrente/integrante do membro familiar - nome do membro], razão pela qual se superou o critério objetivo de renda per capita para R$ XXXX.</p><p>Em síntese, o INSS decidiu pela suspensão do benefício em razão da falta de inscrição no Cadastro Único do Governo Federal - CadÚnico.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Normatiza o Decreto 6.214/07:<br>"Art. 47. &nbsp;O Benefício de Prestação Continuada será suspenso nas seguintes hipóteses:<br>I - superação das condições que deram origem ao benefício, previstas nos art. 8º e art. 9º;<br>II - identificação de irregularidade na concessão ou manutenção do benefício;<br>III - não inscrição no CadÚnico após o fim do prazo estabelecido em ato do Ministro de Estado do Desenvolvimento Social;<br>IV - não agendamento da reavaliação da deficiência até a data limite estabelecida em convocação;<br>V - identificação de inconsistências ou insuficiências cadastrais que afetem a avaliação da elegibilidade do beneficiário para fins de manutenção do benefício, conforme o disposto em ato do Ministro de Estado do Desenvolvimento Social; ou&nbsp;<br>VI - identificação de outras irregularidades."<br>Portanto, independentemente da existência de má-fé ou erro da administração, sendo nítido o registro, no CNIS, de remunerações que superaram o limite legal de renda, prevista no art. 20, § 3º da Lei 8.742/93, a devolução de valores recebidos indevidamente é obrigatória, por não se admitir perdão de dívida em desfavor do erário, nos moldes do Parecer CONJUR 616/2010:<br>"Questão 15. A boa-fé do segurado é fator impeditivo para a restituição de valores de benefícios equivocadamente concedidos ou majorados administrativamente, por força de errônea interpretação da norma?<br>88. No âmbito do RGPS, para que fique delineada a situação de pagamento de benefício indevido, no todo ou em parte, é necessário que o fato fique comprovado em sede de Processo Administrativo no qual deve ser assegurada ampla defesa e contraditório ao beneficiário, por força da garantia constitucional ao devido processo legal (artigo 5º, inciso LIV, da Constituição).<br>89. Por outro lado, a legislação em vigor não permite o perdão da dívida ao segurado recebedor de benefício indevido, mesmo se ficar caracterizada sua boa-fé. Permite-se apenas o parcelamento do débito ou a sua consignação, quando o beneficiário for recebedor de outro benefício do INSS. É o que se extrai da leitura do artigo 115, inciso II e § 1º, da LBPS.<br>90. O Regulamento da Previdência Social, no seu artigo 154, contém alguns parâmetros mais detalhados sobre como proceder ao ressarcimento do erário."<br>Na hipótese de o beneficiário permanecer com direito ao recebimento do Benefício de Prestação Continuada ou estar em usufruto de outro benefício previdenciário regularmente concedido pelo INSS, poderá devolver o valor indevido de forma parcelada, em tantas parcelas quantas forem necessárias à liquidação do débito.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>No caso em tela, verifica-se que&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>APURAÇÃO DE IRREGULARIDADE. COMPROVAÇÃO DE [recebimento de benefício/comprovação de remuneração] PELO [próprio recorrente/integrante do membro familiar - nome do membro], CONFORME ART. 47, I DO DECRETO 6.214/07.</p><p>INDEPENDENTEMENTE DA EXISTÊNCIA DE MÁ-FÉ OU ERRO DA ADMINISTRAÇÃO, A DEVOLUÇÃO DE VALORES RECEBIDOS INDEVIDAMENTE É OBRIGATÓRIA, POR NÃO SE ADMITIR PERDÃO DE DÍVIDA EM DESFAVOR DO ERÁRIO, NOS MOLDES DO PARECER CONJUR 616/2010, EM SUA QUESTÃO 15.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'beneficio-com-indicios-de-irregularidade-com-devolução-valores-e-sem-parcelamento',
                    label: 'Benefício com Indícios de irregularidade – com devolução valores e SEM parcelamento',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , haja vista não concordar com a decisão do INSS que determinou a suspensão &nbsp;do Benefício de Prestação Continuada da Assistência Social ao idoso (NB 88/_________ ), de que está em gozo desde _________ , por indícios de superação da renda per capita familiar.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a parte recorrente a reforma da decisão que que determinou a suspensão do Benefício de Prestação Continuada da Assistência Social ao idoso, todavia entendo que a suspensão deveria ter sido mantida pelo INSS. Primeiro porque o restabelecimento de benefício suspenso só é admitido após análise do mérito do recurso, na forma do art. 47, §9º do Decreto 6.214/07, o que, segundo a norma, não deveria ocorrer antes do acórdão proferido por esta Junta de Recursos, na forma do art. 29, parágrafo único do Regimento Interno do Conselho de Recursos da Previdência Social: Decreto 6.214/07 Art. 47 [...] § 9º O benefício será restabelecido caso o recurso interposto ao CRSS seja provido, sendo devidos os valores desde a suspensão do benefício, respeitado o teor da decisão. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Incluído pelo Decreto nº 9.462, de 2018) Regimento Interno do Conselho de Recursos da Previdência Social Art. 29. Denomina-se Recurso Ordinário aquele interposto pelo interessado, segurado ou beneficiário da Seguridade Social, em face de decisão proferida pelo INSS, dirigido às Juntas de Recursos do CRSS, observada a competência regimental. Parágrafo único. Considera-se decisão de primeira instância recursal os acórdãos proferidos pelas Juntas de Recursos, exceto em matéria de alçada, na forma definida pelo neste Regimento, hipótese em que a decisão será de única instância. Segundo, porque já está comprovada a divergência nas informações prestadas pela recorrente, que, _____ . Assim, já está claro que não existe uma coerência entre as informações prestadas pela própria parte interessada. Portanto, ante ao exposto, entendo que a pessoa declarante deve se sujeitar às penas previstas em lei, na forma do art. 13 do Decreto 6.214/07, em virtude de sua omissão, cabendo a cessação do benefício, na forma do art. 48, III do Decreto 6.214/07, e a cobrança dos valores recebidos indevidamente, por não se admitir perdão de dívida em desfavor do erário, nos moldes dos Pareceres do MPAS/CJ N°2.467/2001 e 2.445/2001: Decreto 6.214/07 Art. 13. &nbsp;As informações para o cálculo da renda familiar mensal per capita serão declaradas no momento da inscrição da família do requerente no CadÚnico, ficando o declarante sujeito às penas previstas em lei no caso de omissão de informação ou de declaração falsa. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Redação dada pelo Decreto nº 8.805, de 2016) &nbsp; &nbsp; &nbsp; &nbsp;(Vigência) Art. 48. &nbsp;O benefício será cessado: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pelo Decreto nº 9.462, de 2018) [...] III - quando o recurso ao CRSS não for provido. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pelo Decreto nº 9.462, de 2018) PARECER/MPAS/CJ N°2.467/2001 Recomendação PR/SP nº 10/2000. INTERESSADO: Ministério Público Federal em São Paulo/SP. ASSUNTO: Descontos em pagamentos de benefícios previdenciários pelo INSS. EMENTA: Direito constitucional e previdenciário. Valores indevidamente pagos pelo INSS a beneficiários da previdência social. Culpa da administração. Responsabilidade civil do servidor (artigo 159 do código civil c/c artigos 121 e 122 da Lei nº 8.112/90). Enriquecimento sem causa do beneficiário. Necessidade de ressarcimento ao erário, ainda que verificada a boa-fé do favorecido. Faculdade de cobrança do débito pela administração diretamente do beneficiário ou do servidor responsável ou de ambos ao mesmo tempo. Renda mensal inferior ao salário mínimo. Restituição das quantias pagas impropriamente, mediante descontos mensais nos benefícios em manutenção. Previsão legal (art. 115, inciso II, da Lei nº 8.213/91). Constitucionalidade; -Parecer normativo; APROVADO pelo Ministro dia 10/05/2001.Publicado na íntegra no DOU de 14/05/2001. - Em vigor. &nbsp;PARECER/MPAS/CJ N° 2.445/2001 Processo nº 35546.000085/96-00; LOAS. EMENTA: Concessão indevida de benefício assistencial. Restituição dos valores ao INSS. Direito constitucional e previdenciário. Assistência social. Concessão imprópria de benefício por culpa da administração. Inexistência de previsão na Lei orgânica da assistência social (Lei 8.742, de 07/DEZ/93), quanto à restituição dos valores pagos indevidamente pelo INSS. Enriquecimento sem causa do beneficiário. Violação de princípios constitucionais da administração pública. Prejuízo ao erário. Apuração do erro e cobrança do débito. Necessidade; - Parecer normativo; APROVADO pelo Ministro dia 25/04/2001. Publicado na íntegra no DOU de 04/05/2001; - Em vigor Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '<p>Pretende a parte recorrente a reforma da decisão que determinou a suspensão do Benefício de Prestação Continuada da Assistência Social, o que entendo ser possível, a contar de ______ (p. _ ), a partir de quando atualizou o cadastro único, estando, agora, como única integrante do grupo familiar. Por outro lado, antes disso, também entendo que a manutenção se deu de forma irregular, ante a superação da renda familiar, motivo pelo qual foi corretamente suspenso,&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL. FICOU DEMONSTRADA A SUPERAÇÃO DAS CONDIÇÕES QUE DERAM ORIGEM A CONCESSÃO DO BENEFÍCIO, DEVENDO SER MANTIDA A CESSAÇÃO, NA FORMA DO ART. 21 DA LEI 8.742/93 E ART. 48, III DO DECRETO 6.214/07. A FILHA SOLTEIRA DA BENEFICIÁRIA, E INTEGRANTE DE SEU GRUPO FAMILIAR, POSSUI EMPRESA REGISTRADA EM SEU NOME, O QUE ENFRAQUECE O CRITÉRIO DE VULNERABILIDADE E MISERABILIDADE DO GRUPO, NA FORMA DO ART. 20, §11 DA LEI 8.213/91. HÁ, AINDA, O REGISTRO DE CONTRIBUIÇÃO SOBRE SALÁRIO DE CONTRIBUIÇÃO NO VALOR DE UM SALÁRIO MÍNIMO, NA CONDIÇÃO DE CONTRIBUINTE INDIVIDUAL, O QUE PRESSUPÕE O EXERCÍCIO DE ATIVIDADE REMUNERADA, NA FORMA DO ART. 11, V E SUAS ALÍNEAS. O RECEBIMENTO DE RENDA INTEGRA A RENDA MENSAL BRUTA FAMILIAR, MESMO QUE ADVINDA DO MERCADO INFORMAL OU AUTÔNOMO, NA FORMA DO ART. 4º DO DECRETO 6.214/07. &nbsp;NÃO FICOU COMPROVADA, DE FORMA CONSISTENTE, A MÁ-FÉ DA BENEFICIÁRIA, MAS, QUANTO À DEVOLUÇÃO DE VALORES, ACOMPANHO O ENTENDIMENTO DE QUE NÃO É POSSÍVEL O PERDÃO DA DÍVIDA, AINDA QUE SEM PROVA DE MÁ-FÉ SENDO ESSES OS TERMOS DA QUESTÃO 15 DO PARECER CONJUR/MPS Nº 616/2010. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-cadunico-atualizado',
                    label: 'Benefício de prestação continuada - Cadúnico atualizado',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______ , haja vista não concordar com a decisão do INSS que determinou a suspensão do Benefício de Prestação Continuada da Assistência Social (NB _______ ), de que está em gozo desde _______ &nbsp;a _______ , por não atendimento a convocação do posto (p. _______ ). Em consulta as bases governamentais, a ultima atualização do cadastro único se deu em _______ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a parte recorrente a reforma da decisão que determinou a cessação do Benefício de Prestação Continuada da Assistência Social, de que esteve em gozo desde _______ &nbsp;a _______ , por pendência de inscrição do cadastro único (p. _______ ), o que entendo ser possível mediante prova de atualização do referido cadastro, em _______ . Assim, o benefício deve ser reativado, desde então, na forma do art. 12, §2º, art.47, §9º do Decreto 6.214/07: Art. 12. São requisitos para a concessão, a manutenção e a revisão do benefício as inscrições no Cadastro de Pessoas Físicas - CPF e no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico. (Redação dada pelo Decreto nº 8.805, de 2016) (Vigência) [...] § 2º O benefício será concedido ou mantido apenas quando o CadÚnico estiver atualizado e válido, de acordo com o disposto no Decreto nº 6.135, de 26 de junho de 2007 . Redação dada pelo Decreto nº 9.462, de 2018) [...] Art. 47. O Benefício de Prestação Continuada será &nbsp;suspenso nas seguintes hipóteses: (Redação dada pelo Decreto nº 9.462, de 2018) III - não inscrição no CadÚnico após o fim do prazo estabelecido em ato do Ministro de Estado do Desenvolvimento Social; &nbsp;(Incluído pelo Decreto nº 9.462, de 2018) [...] § 9º O benefício será restabelecido caso o recurso interposto ao CRSS seja provido, sendo devidos os valores desde a suspensão do benefício, respeitado o teor da decisão. (Incluído pelo Decreto nº 9.462, de 2018)Pelo exposto, conheço do recurso e voto no sentido de DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. SUSPENSAO DO BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL. PENDÊNCIA DE INSCRIÇÃO DO CADASTRO ÚNICO. PROVA DE ATUALIZAÇÃO DO REFERIDO CADASTRO. ASSIM, O BENEFÍCIO DEVE SER REATIVADO, NA FORMA DO ART. 12, §2º, ART.47, §9º DO DECRETO 6.214/07. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-irregularidade-idoso-com-loas-devolução-atividade-contribuinte-individual-filho-solteiro',
                    label: 'Benefício de prestação continuada - Irregularidade - idoso com loas - devolução - atividade contribuinte individual filho solteiro',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por &nbsp;_________ , por suas procuradoras (p. ___ ), haja vista não concordar com a decisão do INSS que determinou a cessação do benefício de Benefício de Prestação Continuada da Assistência Social &nbsp;(NB: &nbsp;_________ ), de que esteve em gozo de _________ a _________, por superação da renda familiar, em decorrência da renda de _________ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a interessada a reativação do benefício, todavia entendo que a suspensão deve ser mantida, pois, em que pese a renda do esposo ser desconsiderada, por se tratar de beneficiário idoso, de benefício não superior ao salário mínimo, a filha solteira, da beneficiária, e integrante de seu grupo familiar, possui empresa registrada em seu nome, o que constitui impedimento para manutenção do benefício, pois enfraquece o critério de vulnerabilidade e miserabilidade do grupo, na forma do art. 20, §11 da Lei 8.213/91. &nbsp;Além disso, há registro de contribuição sobre salário de contribuição no valor de um salário mínimo, na condição de contribuinte individual, o que pressupõe o exercício de atividade remunerada, na forma do art. 11, V e suas alíneas. Assim, como o recebimento de renda integra a renda mensal bruta familiar, mesmo que advinda do mercado informal ou autônomo, na forma do art. 4º do Decreto 6.214/07. Quanto as despesas alegadas, em busca de flexibilizar o critério da renda, observei que a declaração da secretaria municipal de saúde atesta a venda de três dos cinco medicamentos na versão genérica e dos outros dois, o fornecimento pelo Estado de Minas Gerais (p. __ ), o que, portanto, não é suficiente para pleiteada flexibilização da renda. Ao final, portanto, entendo que ficou demonstrada a superação das condições que deram origem a concessão do benefício, devendo ser mantida a cessação, na forma do art. 21 da Lei 8.742/93 e art. 48, III do Decreto 6.214/07. Quanto ao pedido de afastamento da cobrança, pela minha análise, &nbsp;não ficou comprovada a má-fé da beneficiária, todavia acompanho o entendimento de que não é possível o perdão da dívida em favor do erário, ainda que sem prova de má-fé, permitindo-se apenas o parcelamento do débito ou a sua consignação, quando o beneficiário for recebedor de outro benefício do INSS, sendo esses os termos da Questão 15 do Parecer CONJUR/MPS nº 616/2010. Por todo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO, determinando a cessação do benefício e a determinação de devolução dos valores.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL AO IDOSO. FICOU DEMONSTRADA A SUPERAÇÃO DAS CONDIÇÕES QUE DERAM ORIGEM A CONCESSÃO DO BENEFÍCIO, DEVENDO SER MANTIDA A SUSPENSÃO, NA FORMA DO ART. 21 DA LEI 8.742/93 E ART. 48, III DO DECRETO 6.214/07. NÃO FICOU COMPROVADA, DE FORMA CONSISTENTE, A MÁ-FÉ DA BENEFICIÁRIA, MAS, QUANTO À DEVOLUÇÃO DE VALORES, ACOMPANHO O ENTENDIMENTO DE QUE NÃO É POSSÍVEL O PERDÃO DA DÍVIDA, AINDA QUE SEM PROVA DE MÁ-FÉ SENDO ESSES OS TERMOS DA QUESTÃO 15 DO PARECER CONJUR/MPS Nº 616/2010. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-deficiencia-nao-atende',
                    label: 'Benefício de prestação continuada - Deficiência NÃO ATENDE',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: 'Recurso interposto por ______ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social à pessoa com deficiência (NB: 87/______ ), requerido em ______ , por não atendimento ao critério de deficiência (p. ______ ). Feito o relato, foi concluído pela necessidade de reavaliação médica do estado de saúde da recorrente na data do requerimento, em 09/03/2018, pela Perícia Médica Federal, nos moldes do art. 40-B da Lei 8.742/93 c/c PROVIMENTO Nº 3, DE 5 DE MAIO DE 2020 do CRPS (p. ______ ). Em grau de recurso, segundo a perícia médica federal, não há novos elementos para modificar o entendimento, mantendo-se o não preenchimento de requisitos que definem a pessoa com deficiência para fins de acesso ao BPC (p. ______ ).',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a parte recorrente a reforma da decisão que indeferiu o Benefício de Prestação Continuada da Assistência Social à pessoa com deficiência, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, não existe deficiência. Assim, o indeferimento está em conformidade com o art. 20, §2º da Lei 8.742/93: Art. 20. O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011) (Vide Lei nº 13.985, de 2020) [...] § 2o Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas. (Redação dada pela Lei nº 13.146, de 2015) (Vigência) [...] Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL À PESSOA COM DEFICIÊNCIA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO EXISTE DEFICIÊNCIA. ASSIM, O INDEFERIMENTO ESTÁ EM CONFORMIDADE COM O ART. 20, §2º DA LEI 8.742/93RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'benefício-de-prestacao-continuada-renda-nao-atende',
                    label: 'Benefício de prestação continuada - Renda NÃO ATENDE',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por &nbsp;________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social (NB: ________ ), requerido em ________ &nbsp;(data de entrada do requerimento- DER), por renda per capita superior ao limite legal (p. ________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a interessada a reforma da decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social ao idoso, todavia o indeferimento será mantido, pois, conforme cadastro único atualizado em ________ , consta grupo familiar composto por ________ , e renda de R$ ________ &nbsp;(p. ________ ), o que não atende o teor do artigo 20 da Lei 8.742/93: Art. 20. O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011) (Vide Lei nº 13.985, de 2020) § 1o Para os efeitos do disposto no caput, a família é composta pelo requerente, o cônjuge ou companheiro, os pais e, na ausência de um deles, a madrasta ou o padrasto, os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, desde que vivam sob o mesmo teto. (Redação dada pela Lei nº 12.435, de 2011) [...] § 3º Observados os demais critérios de elegibilidade definidos nesta Lei, terão direito ao benefício financeiro de que trata o caput deste artigo a pessoa com deficiência ou a pessoa idosa com renda familiar mensal per capita igual ou inferior a 1/4 (um quarto) do salário-mínimo. (Redação dada pela Lei nº 14.176, de 2021) Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL. MANTIDO O INDEFERIMENTO. RENDA PER CAPITA SUPERIOR AO LIMITE LEGAL.ARTIGO 20, §1º E 3º DA LEI 8.742/93. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'carência-–-cômputo-de-benefício-por-incapacidade',
                    label: 'Carência – Cômputo de benefício por incapacidade',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões recursais, insurgiu-se contra o indeferimento, alegando ter direito ao benefício mediante o computo da integralidade dos períodos contributivos, bem como daqueles de que esteve em gozo de auxílio-doença (p. &nbsp;);</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A parte recorrente pretende a reforma da decisão mediante o cômputo dos períodos em que esteve em gozo de auxílio-doença, todavia, esses períodos só podem ser considerados, quando estão intercalados com período contributivo, sendo esses os termos do art. 55, II da Lei 8.213/91 e do art.19-C, §1º do Decreto 3.048/99: Art. 55. O tempo de serviço será comprovado na forma estabelecida no Regulamento, compreendendo, além do correspondente às atividades de qualquer das categorias de segurados de que trata o art. 11 desta Lei, mesmo que anterior à perda da qualidade de segurado: [...] II - o tempo intercalado em que esteve em gozo de auxílio-doença ou aposentadoria por invalidez; [...] Art. 19-C. &nbsp;Considera-se tempo de contribuição o tempo correspondente aos períodos para os quais tenha havido contribuição obrigatória ou facultativa ao RGPS, dentre outros, o período: &nbsp;(Incluído pelo Decreto nº 10.410, de 2020) § 1º &nbsp;Será computado o tempo intercalado de recebimento de benefício por incapacidade, na forma do disposto no inciso II do caput do art. 55 da Lei nº 8.213, de 24 de julho de 1991, exceto para efeito de carência. &nbsp; &nbsp; &nbsp;(Incluído pelo Decreto nº 10.410, de 2020) Na redação antes do Decreto 10.410/2020, o período de auxílio-doença também deveria estar &nbsp;intercalado, veja: Art. 60. Até que lei específica discipline a matéria, são contados como tempo de contribuição, entre outros: &nbsp; (Revogado pelo Decreto nº 10.410, de 2020). IX - o período em que o segurado esteve recebendo benefício por incapacidade por acidente do trabalho, intercalado ou não; &nbsp; &nbsp;(Revogado pelo Decreto nº 10.410, de 2020). Seguindo um entendimento semelhante, o STF também só admite o cômputo do auxílio-doença quando ele estiver intercalado com períodos de atividade: Tema 1.125 do STF “É constitucional o cômputo, para fins de carência, do período no qual o segurado esteve em gozo do benefício de auxílio-doença, desde que intercalado com atividade laborativa”. No caso da recorrente, observei que os períodos de benefício não estão intercalados, não havendo qualquer reforma a ser feita na decisão, com base na fundamentação supra. Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR IDADE. PRETENDE COMPUTAR OS PERÍODOS EM QUE ESTEVE EM GOZO DE AUXÍLIO-DOENÇA. PERÍODOS NÃO INTERCALADOS COM CONTRIBUIÇÃO. PRETENSAO NÃO ENCONTRA AMPARO NA LEGISLAÇÃO PREVIDENCIÁRIA. ART. 55, II DA LEI 8.213/91 E DO ART.19-C, §1º DO DECRETO 3.048/99 E TEMA 1.125 DO STF. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'cnis-complementacao-recolhimento-plano-simplificado',
                    label: 'CNIS - complementação recolhimento plano simplificado',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Aposentadoria por tempo de contribuição (NB: _________), requerido em _________, por terem sido apurados __ anos, __ meses e __ dias até o requerimento (p. _________ ). Conforme despacho indeferitório, os recolhimentos efetuados sob alíquota de _ % foram desconsiderados para efeito de tempo de contribuição (p. _________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. O recorrente busca a reforma da decisão mediante computo da integralidade de seus períodos contributivos, todavia observei que há presença do indicador “IREC-LC123 - Recolhimento no Plano Simplificado de Previdência Social (LC 123/2006)” de _________ &nbsp;a _________, todavia esses recolhimentos não são considerados para efeito de concessão de aposentadoria por tempo de contribuição, nos moldes do art.21, § 2º da Lei 8.213/91: Lei nº 8.212, de 24 de julho de 1991 Art. 21. [...] § 2º No caso de opção pela exclusão do direito ao benefício de aposentadoria por tempo de contribuição, a alíquota de contribuição incidente sobre o limite mínimo mensal do salário de contribuição será de: I - 11% (onze por cento), no caso do segurado contribuinte individual, ressalvado o disposto no inciso II, que trabalhe por conta própria, sem relação de trabalho com empresa ou equiparado e do segurado facultativo, observado o disposto na alínea b do inciso II deste parágrafo; II - 5% cinco por cento): [...] b) do segurado facultativo sem renda própria que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencente a família de baixa renda. [...] No caso, em sede de recurso e, em busca da reforma da decisão, apresentou as declarações anuais do Simples Nacional referente aos anos de _________ &nbsp;a _________ (p. _________ ), o que não modifica a conclusão de que o computo desses períodos é indevido para efeito da aposentadoria por tempo de contribuição, e nesse caso, a Lei 8212/91 determina o complemento da contribuição, o que não se vislumbra no caso em análise. Art. 21 [...] § 3o O segurado que tenha contribuído na forma do § 2o deste artigo e pretenda contar o tempo de contribuição correspondente para fins de obtenção da aposentadoria por tempo de contribuição ou da contagem recíproca do tempo de contribuição a que se refere o art. 94 da Lei no 8.213, de 24 de julho de 1991, deverá complementar a contribuição mensal mediante recolhimento, sobre o valor correspondente ao limite mínimo mensal do salário-de-contribuição em vigor na competência a ser complementada, da diferença entre o percentual pago e o de 20% (vinte por cento), acrescido dos juros moratórios de que trata o § 3o do art. 5o da Lei no 9.430, de 27 de dezembro de 1996. &nbsp;(Redação dada pela Lei nº 12.470, de 2011) (Produção de efeito) Assim, é de se ver que o recorrente não implementa os requisitos para concessão do benefício de aposentadoria por tempo de contribuição comum, seja desde a DER ou mediante sua reafirmação, nos termos do que exige o art. 56 do Decreto 3.048/99: Decreto 3.048/99 Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. &nbsp;[...] Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. NO CASO DE OPÇÃO PELA EXCLUSÃO DO DIREITO AO BENEFÍCIO DE APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO, A ALÍQUOTA DE CONTRIBUIÇÃO INCIDENTE SOBRE O LIMITE MÍNIMO MENSAL DO SALÁRIO DE CONTRIBUIÇÃO SERÁ DE 11% (ONZE POR CENTO). O SEGURADO QUE PRETENDA CONTAR O TEMPO DE CONTRIBUIÇÃO CORRESPONDENTE PARA FINS DE OBTENÇÃO DA APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO, DEVERÁ COMPLEMENTAR A CONTRIBUIÇÃO MENSAL MEDIANTE RECOLHIMENTO. COMPLEMENTAÇÃO NÃO REALIZADA. A APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO SERÁ DEVIDA AO SEGURADO APÓS TRINTA E CINCO ANOS DE CONTRIBUIÇÃO, SE HOMEM, OU TRINTA ANOS, SE MULHER. ART. 56 DECRETO 3.048/99, ART. 21, § 2ºE 3º DA LEI 8212/91.RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'cnis-salario-de-contribuicao-inferior-ao-mínimo',
                    label: 'CNIS - salário de contribuição inferior ao mínimo',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Aposentadoria por tempo de contribuição (NB: _________), requerido em _________, por terem sido apurados __ anos, __ meses e __ dias até o requerimento (p. _________ ). Conforme despacho indeferitório, os recolhimentos efetuados sobre salário de contribuição inferior ao mínimo foram desconsiderados para efeito de tempo de contribuição (p. _________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o Benefício de Aposentadoria por tempo de contribuição, pretendendo o cômputo integral de seu tempo de contribuição, todavia, em conferência, observou-se que ele efetuou diversos recolhimentos sobre salário inferior ao mínimo. Todavia, nesse aspecto, a legislação é clara no sentido de que o salário de contribuição informado para fins de cálculo da guia deve respeitar o salário-mínimo vigente, na forma do art. 214 do Decreto 3.048/99. Veja: Decreto 3.048/99 Art. 214. Entende-se por salário-de-contribuição: [...] &nbsp;§ 3º O limite mínimo do salário-de-contribuição corresponde: [...] II - para os segurados empregado, inclusive o doméstico, e trabalhador avulso, ao piso salarial legal ou normativo da categoria ou, inexistindo este, ao salário mínimo, tomado no seu valor mensal, diário ou horário, conforme o ajustado e o tempo de trabalho efetivo durante o mês. &nbsp;(Incluído pelo Decreto nº 3.265, de 1999) [...] Portanto, não atendendo às exigências da lei quanto aos recolhimentos, na forma da redação do art. 19, § 2º, do Decreto nº 3.048/99, não se aceitam vínculos irregulares sem a apresentação dos documentos cabíveis. Art. 19. Os dados constantes do Cadastro Nacional de Informações Sociais - CNIS relativos a vínculos, remunerações e contribuições valem como prova de filiação à previdência social, tempo de contribuição e salários-de-contribuição [...]§ 5º Não constando do CNIS informações sobre contribuições ou remunerações, ou havendo dúvida sobre a regularidade do vínculo, motivada por divergências ou insuficiências de dados relativos ao empregador, ao segurado, à natureza do vínculo, ou a procedência da informação, esse período respectivo somente será confirmado mediante a apresentação pelo segurado da documentação comprobatória solicitada pelo INSS. (Incluído pelo Decreto nº 6.722, de 2008). Por todo o exposto, o recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcritos abaixo: Decreto 3.048/99 Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007). Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. A LEGISLAÇÃO É CLARA NO SENTIDO DE QUE O SALÁRIO DE CONTRIBUIÇÃO INFORMADO PARA FINS DE CÁLCULO DA GUIA DEVE RESPEITAR O SALÁRIO-MÍNIMO VIGENTE, NA FORMA DO ART. 214 DO DECRETO 3.048/99. TEMPO INSUFICIENTE. O BENEFÍCIO DE APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO NÃO É DEVIDO SEM PROVA DO EFETIVO EXERCÍCIO DA ATIVIDADE E DA IMPLEMENTAÇÃO DO TEMPO MÍNIMO DE CONTRIBUIÇÃO (DEC. 3.048/99, ART. 56). RECURSO CONHECIDO E NEGADO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'cnis-com-indicios-de-irregularidade-recolhimento-como-facultativo-baixa-renda-pendente-de-analise',
                    label: 'CNIS com indícios de irregularidade - recolhimento como facultativo baixa renda pendente de análise',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS - Cadastro Nacional de Informações Sociais – há registro de recolhimentos com marca de irregularidade de _________ a _________ , em _________ e de _________ a _________ , por “RECOLHIMENTO FACULTATIVO BAIXA RENDA NÃO VALIDADE/HOMOLOGADO” sigla PREC-FBR.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal.A parte recorrente busca a reforma da decisão mediante o acolhimento da integralidade de seus períodos contributivos, todavia observei que existem diversos recolhimentos com marca de irregularidade, sendo vedado o computo de períodos sob os quais recaia dúvida acerca de sua regularidade, na forma do art. 29-A, §5º da Lei 8.213/91:Art. 29-A. O INSS utilizará as informações constantes no Cadastro Nacional de Informações Sociais – CNIS sobre os vínculos e as remunerações dos segurados, para fins de cálculo do salário-de-benefício, comprovação de filiação ao Regime Geral de Previdência Social, tempo de contribuição e relação de emprego. (Redação dada pela Lei Complementar nº 128, de 2008)[...]§ 5o Havendo dúvida sobre a regularidade do vínculo incluído no CNIS e inexistência de informações sobre remunerações e contribuições, o INSS exigirá a apresentação dos documentos que serviram de base à anotação, sob pena de exclusão do período. (Incluído pela Lei Complementar nº 128, de 2008) [...]No que se refere aos recolhimentos efetuados na condição de facultativa, de acordo com o art. 21 da Lei nº 8.212, de 24 de julho de 1991, o facultativo de baixa renda deve comprovar que atende aos critérios da legislação para o reconhecimento de referida condição, o que não o fez:Lei nº 8.212, de 24 de julho de 1991Art. 21. [...]§ 2º No caso de opção pela exclusão do direito ao benefício de aposentadoria por tempo de contribuição, a alíquota de contribuição incidente sobre o limite mínimo mensal do salário de contribuição será de:I - 11% (onze por cento), no caso do segurado contribuinte individual, ressalvado o disposto no inciso II, que trabalhe por conta própria, sem relação de trabalho com empresa ou equiparado e do segurado facultativo, observado o disposto na alínea b do inciso II deste parágrafo;II - 5% (cinco por cento):[...]b) do segurado facultativo sem renda própria que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencente a família de baixa renda.[...]§ 4º Considera-se de baixa renda, para os fins do disposto na alínea b do inciso II do § 2º deste artigo, a família inscrita no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico cuja renda mensal seja de até 2 (dois) salários mínimos.” (NR)Por todo o exposto, a recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcrito abaixo: Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007).Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. A CONCESSÃO DA APOSENTADORIA POR TEMPO DE SERVIÇO DEPENDE DE 180 CONTRIBUIÇÕES MENSAIS E 35 (TRINTA E CINCO) ANOS DE IDADE, SE HOMEM, E 30 (TRINTA), SE MULHER. ART. 56 DO DECRETO 3.048/99. NO QUE SE REFERE AOS RECOLHIMENTOS EFETUADOS NA CONDIÇÃO DE FACULTATIVA, DE ACORDO COM O ART. 21 DA LEI Nº 8.212, DE 24 DE JULHO DE 1991, O FACULTATIVO DE BAIXA RENDA DEVE COMPROVAR QUE ATENDE AOS CRITÉRIOS DA LEGISLAÇÃO PARA O RECONHECIMENTO DE REFERIDA CONDIÇÃO, O QUE NÃO O FEZ. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'cnis-com-indicios-de-irregularidade-recolhimento-extemporaneo-lei-e-regimento-intenro-oportunidade-de-producao-de-prova',
                    label: 'CNIS com indícios de irregularidade - recolhimento extemporâneo - lei e regimento intenro - oportunidade de produção de prova',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS - Cadastro Nacional de Informações Sociais- há registro de extemporaneidade nas contribuições de ___ a _______ , _______ , _______ &nbsp;a_______ . Emitida exigência para regularização (p. Exigência para regularização (p. ___ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal.O recorrente pretende a reforma da decisão que indeferiu o Benefício de Aposentadoria por tempo de contribuição, todavia, em análise do processo, confirmei que ele não apresentou os documentos exigidos para regularização das diversas competências com marca de extemporaneidade, tampouco alegações referentes à matéria do processo, o que poderia ter feito até antes da sessão de julgamento, nos moldes do art. 37 do Regimento Interno do CRPS:Art. 37 [...]§ 1º O interessado poderá juntar documentos, atestados, exames complementares e pareceres médicos, requerer diligências e perícias e aduzir alegações referentes à matéria objeto do processo até antes do início da sessão de julgamento, hipótese em que será avaliada a necessidade de conferir direito de vista à parte contrária para ciência e manifestação.Além disso, foram emitidas exigências para apresentação de documentos, mas ela não o fez, motivo pelo qual não há elementos para reforma da decisão anterior, nos termos do art. 35, §2º do mesmo Regimento:Art. 35 [...] § 2º Uma vez interposto o recurso, o não cumprimento pelo interessado, de exigência ou providência que a ele incumbiriam, e para a qual tenha sido devidamente intimado, não implica em desistência tácita ou renúncia ao direito de recorrer, devendo o processo ser julgado no estado em que se encontra, arcando o interessado com o ônus de sua inércia.Nesse caso, a legislação previdenciária veda que sejam considerados quaisquer recolhimentos sob os quais recaia dúvida acerca de sua regularidade, nos termos do art. 29-A, §5º da Lei 8.213/91:Art. 29-A. O INSS utilizará as informações constantes no Cadastro Nacional de Informações Sociais – CNIS sobre os vínculos e as remunerações dos segurados, para fins de cálculo do salário-de-benefício, comprovação de filiação ao Regime Geral de Previdência Social, tempo de contribuição e relação de emprego. (Redação dada pela Lei Complementar nº 128, de 2008)[...] § 3o &nbsp;A aceitação de informações relativas a vínculos e remunerações inseridas extemporaneamente no CNIS, inclusive retificações de informações anteriormente inseridas, &nbsp;fica condicionada à comprovação dos dados ou das divergências apontadas, conforme critérios definidos em regulamento. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Incluído pela Lei Complementar nº 128, de 2008)§ 5o Havendo dúvida sobre a regularidade do vínculo incluído no CNIS e inexistência de informações sobre remunerações e contribuições, o INSS exigirá a apresentação dos documentos que serviram de base à anotação, sob pena de exclusão do período. (Incluído pela Lei Complementar nº 128, de 2008) [...]Por todo o exposto, o recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcritos abaixo:Decreto 3.048/99Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007).Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. OPORTUNIZADA A COMPLEMENTAÇÃO DA DOCUMENTAÇÃO, O PRAZO DECORREU SEM MANIFESTAÇÃO DA PARTE INTERESSADA. EXISTE PREVISÃO REGIMENTAL QUE PERMITE A APRESENTAÇÃO DE ALEGAÇÕES E DOCUMENTOS REFERENTES A MATÉRIA DO PROCESSO ATÉ ANTES DO INÍCIO DA SESSÃO DE JULGAMENTO. A DESPEITO DESSAS DUAS OPORTUNIDADES, NÃO HOUVE QUALQUER ALEGAÇÃO DA RECORRENTE, MOTIVO PELO QUAL O PROCESSO SERÁ JULGADO NO ESTADO EM QUE SE ENCONTRA, NA FORMA DO ART. 35, §2º DO REGIMENTO INTERNO DO CONSELHO DE RECURSOS DO SEGURO SOCIAL. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'contagem-reciproca-tempo-especial',
                    label: 'Contagem recíproca – Tempo especial',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o reconhecimento de tempo especial para o intervalo de (XX/XX/XXXX). O período foi averbado pelo INSS para fins de contagem recíproca, em vista da apresentação da CTC (Certidão de Tempo de Contribuição) expedida por __________________. Foi apresentado Perfil Profissiográfico Previdenciário – PPP para o intervalo averbado, no cargo de ________, indicada a exposição a(os) agente(s) nocivo(s) ______________.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende o(a) interessado(a) o reconhecimento de tempo especial para o intervalo de (XX/XX/XXXX), o qual foi averbado pelo INSS para fins de contagem recíproca mediante a apresentação da CTC (Certidão de Tempo de Contribuição) expedida por __________________, com a atividade prestada no cargo de ____________. Para o tempo especial, foi apresentado Perfil Profissiográfico Previdenciário - PPP.</p><p><br>O pedido de reconhecimento do tempo especial ora averbado esbarra na proibição prevista nos termos do inciso I, do artigo 96, da Lei nº 8.213/91 e inciso I, do artigo 127, do Decreto nº 3.048/99, além de expressa vedação contida no inciso IV, do artigo 11, da Portaria Ministerial nº 154/2008.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'contribuinte-individual-e-facultativo-primeiro-recolhimento-em-dia-apos-perda-qualidade-segurado-carencia-ci-e-facultativo',
                    label: 'Contribuinte individual e facultativo – primeiro recolhimento em dia;após perda qualidade segurado - carencia - ci e facultativo',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A parte recorrente não concorda com a decisão do INSS, alegando ter direito a concessão do benefício de ________ , todavia observou-se que, após ________ , a interessada perdeu a qualidade de segurada em ________, nos termos do art. 15 da Lei 8.213/91:Art. 15. Mantém a qualidade de segurado, independentemente de contribuições: [...] II - até 12 (doze) meses após a cessação das contribuições, o segurado que deixar de exercer atividade remunerada abrangida pela Previdência Social ou estiver suspenso ou licenciado sem remuneração; [...]§ 4º A perda da qualidade de segurado ocorrerá no dia seguinte ao do término do prazo fixado no Plano de Custeio da Seguridade Social para recolhimento da contribuição referente ao mês imediatamente posterior ao do final dos prazos fixados neste artigo e seus parágrafos.Após isso, há registros outros recolhimentos na condição de contribuinte individual da seguinte forma: &nbsp;________ .Portanto, &nbsp;houve o implemento de ________ contribuições para efeito de carência, pois o contribuinte individual e o facultativo devem comprovar o primeiro recolhimento em dia para fins de cômputo do período recolhido para fins de carência, na forma do art. 27-A da Lei 8.213/91:Art. 27. Para cômputo do período de carência, serão consideradas as contribuições: (Redação dada pela Lei Complementar nº 150, de 2015)I - referentes ao período a partir da data de filiação ao Regime Geral de Previdência Social (RGPS), no caso dos segurados empregados, inclusive os domésticos, e dos trabalhadores avulsos; (Redação dada pela Lei Complementar nº 150, de 2015)II - realizadas a contar da data de efetivo pagamento da primeira contribuição sem atraso, não sendo consideradas para este fim as contribuições recolhidas com atraso referentes a competências anteriores, no caso dos segurados contribuinte individual, especial e facultativo, referidos, respectivamente, nos incisos V e VII do art. 11 e no art. 13. (Redação dada pela Lei Complementar nº 150, de 2015)Portanto, não atendendo às exigências da lei quanto aos recolhimentos, não é dado ao órgão julgador reconhecer recolhimentos irregulares para fins de reingresso ao Regime Geral de Previdência social, tampouco para fins de carência, na forma do art. 19, § 2º, do Decreto nº 3.048/99:Art. 19. Os dados constantes do Cadastro Nacional de Informações Sociais - CNIS relativos a vínculos, remunerações e contribuições valem como prova de filiação à previdência social, tempo de contribuição e salários-de-contribuição[...]§ 5º Não constando do CNIS informações sobre contribuições ou remunerações, ou havendo dúvida sobre a regularidade do vínculo, motivada por divergências ou insuficiências de dados relativos ao empregador, ao segurado, à natureza do vínculo, ou a procedência da informação, esse período respectivo somente será confirmado mediante a apresentação pelo segurado da documentação comprobatória solicitada pelo INSS. (Incluído pelo Decreto nº 6.722, de 2008). Por todo o exposto, entendo que não houve implemento da carência, na forma do art. 25 e 27-A da Lei 8213/91: Art. 25. A concessão das prestações pecuniárias do Regime Geral de Previdência Social depende dos seguintes períodos de carência, ressalvado o disposto no art. 26: Art. 25. A concessão das prestações pecuniárias do Regime Geral de Previdência Social depende dos seguintes períodos de carência, ressalvado o disposto no art. 26: I - auxílio-doença e aposentadoria por invalidez: 12 (doze) contribuições mensais; II - aposentadoria por idade, aposentadoria por tempo de serviço e aposentadoria especial: 180 contribuições mensais. (Redação dada pela Lei nº 8.870, de 1994) III - salário-maternidade para as seguradas de que tratam os incisos V e VII do caput do art. 11 e o art. 13 desta Lei: 10 (dez) contribuições mensais, respeitado o disposto no parágrafo único do art. 39 desta Lei; e (Redação dada pela Lei nº 13.846, de 2019)IV - auxílio-reclusão: 24 (vinte e quatro) contribuições mensais. (Incluído pela Lei nº 13.846, de 2019) Art. 27-A Na hipótese de perda da qualidade de segurado, para fins da concessão dos benefícios de auxílio-doença, de aposentadoria por invalidez, de salário-maternidade e de auxílio-reclusão, o segurado deverá contar, a partir da data da nova filiação à Previdência Social, com metade dos períodos previstos nos incisos I, III e IV do caput do art. 25 desta Lei. (Redação dada pela Lei nº 13.846, de 2019) Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PERDA DA QUALIDADE DE SEGURADO. PARA FAZER JUS AO BENEFÍCIO DO AUXÍLIO DOENÇA, O SEGURADO DEVE ATENDER TODOS OS PRESSUPOSTOS NECESSÁRIOS QUANDO DO REINGRESSO. NÃO É DADO AO ÓRGÃO JULGADOR RECONHECER RECOLHIMENTOS FEITOS FORA DA ÉPOCA PRÓPRIA. DECISÃO FUNDAMENTADA NOS ART. 25 E 27- A DA LEI 8213/91. ART. 19, § 2º DO DECRETO 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'doméstico-filiacao',
                    label: 'Doméstico – Filiação',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________. O vínculo está anotado na CTPS (Carteira de Trabalho e da Previdência Social) n.º_____, emitida em _______ (fls.).</p><p><br>O período de (XX/XX/XXXX) não foi considerado sob o fundamento da ausência do recolhimento previdenciário e da não comprovação da vinculação de empregado(a) doméstico(a) até a DER (Data de Entrada do Requerimento).</p><p>Em recurso, o(a) requerente busca a concessão / revisão do benefício para o cômputo do intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido para fins previdenciários o intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________.</p><p>O vínculo empregatício está anotado de forma contemporânea na CTPS nº, em ordem lógica e cronológica e com anotações internas, de acordo com o artigo 19-B, do Decreto n° 3.048/99.</p><p>É possível computar para a carência o período laborado como empregado doméstico mesmo sem a contribuição previdenciária, ou havendo falhas ou recolhida de forma extemporânea, quando o benefício a ser concedido é de valor mínimo, aplicando-se ao caso os termos do artigo 36, da Lei nº 8.213/91.</p><p>Sobre a necessidade de se encontrar vinculado(a) como empregado(a) doméstico(a) até a DER, o entendimento predominante no Conselho Pleno é no sentido da “Desnecessidade de demonstração de filiação ao RGPS como empregada doméstica na data de entrada do requerimento (DER) para obtenção de benefício de menor valor sem comprovação de contribuições”, conforme se extraí das Resoluções de números 20/2019, 21/2019, 42/2019 E 08/2020. Ademais, prever os incisos III e IV, do ENUNCIADO nº 02/2019, do CRPS:</p><p>ENUNCIADO 2<br>(...).<br>III - A concessão de benefícios no valor mínimo ao segurado empregado doméstico independe de prova do recolhimento das contribuições, inclusive a primeira sem atraso, desde que atendidos os demais requisitos legais exigidos, exceto para fins de contagem recíproca.<br>IV - O vínculo do segurado como empregado doméstico será computado para fins de carência, ainda que esteja filiado ao Regime Geral de Previdência Social (RGPS) em categoria diversa na Data de Entrada do Requerimento (DER).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMPREGADO DOMÉSTICO. VÍNCULO COMPROVADO EM CTPS ORDEM LÓGICA E CRONOLÓGICA, SEM EMENDAS E NEM RASURAS. BENEFÍCIO DE VALOR MÍNIMO. POSSIBILIDADE DO CÔMPUTO DO INTERVALO DE (XX/XX/XXXX), MESMO AUSENTE O RECOLHIMENTO PREVIDENCIÁRIO E A NÃO VINCULAÇÃO COMO DOMÉSTICO ATÉ A DER. APLICAÇÃO DO ARTIGO 36 DA LEI Nº 8.213/91. OBSERVÂNCIA DO ENUNCIADO Nº 02/2019 DO CRPS.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'empregado-aluno-aprendiz',
                    label: 'Empregado – Aluno-aprendiz',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), na condição de aluno-aprendiz.</p><p><br>Foi apresentado Certidão emitida pelo ________________, para o intervalo de (XX/XX/XXXX), no curso de ________________, indicado o fornecimento de ____________, por conta do orçamento ___________.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende o(a) interessado(a) o cômputo do intervalo de (XX/XX/XXXX), na condição de aluno-aprendiz, com base na Certidão emitida pelo _______________, no curso de ___________, indicado o fornecimento de ____________, por conta do orçamento ____________.</p><p><br>1ª Hipótese</p><p>(Não cômputo)</p><p>Não há possibilidade, pois embora demonstrada a remuneração indireta custeada por Ente Público, não resta comprovado o vínculo empregatício e inexiste prova que evidencie o trabalho prestado na execução de atividades com vista a atender a encomendas de terceiros. Sendo assim, não foram comprovados os requisitos estabelecidos no inciso IX, do artigo 188-G, do Decreto nº 3.048/99 e o ENUNCIADO nº 02, inciso V do CRPS e a recente Resolução nº 38/2021 do Conselho Pleno CRPS.</p><p><br>Inviável o reconhecimento de período de aluno-aprendiz de quem o objetiva para fins de contagem recíproca, em conformidade com o ENUNCIADO nº 02, inciso V do CRPS.</p><p>&nbsp;</p><p><br>2ª Hipótese</p><p>(Cômputo)</p><p>Há possibilidade do cômputo do período por comprovar a remuneração pelo erário ainda que indireta e o vínculo empregatício ora demonstrado com o trabalho prestado na execução de atividades com vista a atender a encomendas de terceiros, estando em consonância com o inciso IX, do artigo 188-G, do Decreto nº 3.048/99 e o Enunciado nº 02, inciso V do CRPS.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: ALUNO-APRENDIZ. CERTIDÃO EMITIDA PELA INSTITUIÇÃO DE ENSINO COM A INDICAÇÃO APENAS DA REMUNERAÇÃO INDIRETA CUSTEADA POR ENTE PÚBLICO. NÃO CONFIGURADO VÍNCULO EMPREGATÍCIO. NÃO COMPROVADA ATIVIDADES COM VISTAS A ATENDER A ENCOMENDAS DE TERCEIROS. NÃO ATENDIDO OS TERMOS DO IX, DO ARTIGO 188-G, DO DECRETO Nº 3.048/99 E O ENUNCIADO Nº 02, INCISO V DO CRPS E A RESOLUÇÃO Nº 38/2021 DO CONSELHO PLENO CRPS.</p><p>&nbsp;</p><p>EMENTA: ALUNO-APRENDIZ. CERTIDÃO EMITIDA PELA INSTITUIÇÃO DE ENSINO COM A INDICAÇÃO DE REMUNERAÇÃO INDIRETA CUSTEADA POR ENTE PÚBLICO E DO VÍNCULO EMPREGATÍCIO COM ENCOMENDAS DE TERCEIROS. ATENDIDO OS TERMOS DO IX, DO ARTIGO 188-G, DO DECRETO Nº 3.048/99 E O ENUNCIADO Nº 02, INCISO V DO CRPS E A RESOLUÇÃO Nº 38/2021 DO CONSELHO PLENO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'enquadramento-eletricista',
                    label: 'Enquadramento - eletricista',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de Aposentadoria por tempo de contribuição mediante reconhecimento da especialidade de diversos períodos de trabalho. Para o período de ____ , apresentou formulário em que consta exposição a ____ , em decorrência da função de ____ e, pela descrição das atividades entendo que essa exposição se dava por toda a jornada de trabalho (p. ____ ); assim, defiro o enquadramento do período no código 1. 1.8 do ANEXO III do Decreto n° 53.831, de 25.03.1964 e art. 57, §3º da Lei 8.213/91:ANEXO III do Decreto n° 53.831, de 25.03.1964- 1.1.8 ELETRICIDADE Operações em locais com eletricidade em condições de perigo de vida Trabalhos permanentes em instalações ou equipamentos elétricos com risco de acidentes. Eletricistas, Cabistas, Montadores e outros. Lei 8.213/91 Art. 57. [...] § 3º A concessão da aposentadoria especial dependerá de comprovação pelo segurado, perante o Instituto Nacional do Seguro Social–INSS, do tempo de trabalho permanente, não ocasional nem intermitente, em condições especiais que prejudiquem a saúde ou a integridade física, durante o período mínimo fixado. &nbsp;(Redação dada pela Lei nº 9.032, de 1995)</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>NÃO FOI ATENDIDO UM REQUISITO FORMAL DE PREENCHIMENTO DO FORMULÁRIO: NÃO FOI INFORMADO DECIBELÍMETRO, DOSÍMETRO OU MEDIÇÃO PONTUAL NO CAMPO "TÉCNICA UTILIZADA" DO PERFIL PROFISSIOGRÁFICO PREVIDENCIÁRIO (PPP), NA FORMA DO ENUNCIADO 13, II DO CRPS, 2019.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'enquadramento-categoria-maritimo-marinheiro',
                    label: 'Enquadramento categoria - marítimo/marinheiro',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou, em síntese, ter direito ao benefício mediante enquadramento, por categoria profissional, no código 2.4.2 do Decreto 53.831/64Para embasar seu pedido, apresentou caderneta de inscrição e registro junto ao Ministério da Marinha, em que consta a categoria de “contramestre fluvial”, e carteira de trabalho, onde consta cargo de “tarifeiro fluvial”, ”marinheiro”, “marinheiro fluvial”, “marinheiro fluvial de convés” (p. ______ ); ...</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a parte recorrente a reforma da decisão que que indeferiu o benefício de Aposentadoria por tempo de contribuição, mediante enquadramento, por categoria profissional, no código 2.4.2 do Decreto 53.831/64. Para isso, apresentou caderneta de inscrição e registro junto ao Ministério da Marinha, onde consta a categoria profissional de “marinheiro fluvial”, e carteira de trabalho (p. ______ ), onde consta, de ______ a ______, o cargo de marinheiro; assim, entendo ser devido o enquadramento desses períodos no código 2.4.2 do Decreto 53.831/64: CÓDIGO 2.4.2 DO DECRETO 53.831/64 TRANSPORTES - MARÍTIMOS, FLUVIAL e LACUSTRE - Marítimos de convés de máquinas, de câmara e de saúde; operários de construção e reparos navais</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>DEVIDO O ENQUADRAMENTO DESSES PERÍODOS NO CÓDIGO 2.4.2 DO DECRETO 53.831/64.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'especial-categoria-profissional',
                    label: 'Especial – categoria profissional',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de ________, requerido por __________, nascido(a) em ________, com DER (Data de Entrada do Requerimento) em ______.</p><p>Foi requerido o reconhecimento de tempo especial com a apresentação de formulário PPP (Perfil Profissiográfico Previdenciário), emitido pela empresa _________, para o intervalo de (XX/XX/XXXX), no cargo de ___________.</p><p>Em recurso, o(a) Interessado(a) afirma ter se sujeitado às condições especiais na atividade de __________, de modo que cabe o enquadramento do intervalo de (XX/XX/XXXX).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido reconhecido tempo especial para o intervalo de (XX/XX/XXXX).</p><p>De acordo com o PPP (Perfil Profissiográfico Previdenciário), o(a) requerente trabalhou no período de (XX/XX/XXXX), no cargo de _________, na empresa _________.</p><p><br>1ª Hipótese<br>(Não comprovado)</p><p>A atividade profissional desempenhada pelo(a) requerente não está contemplada no rol dos Regulamentos da Previdência Social – Decretos nº 53.831/64 e 83.080/79, o que impede o reconhecimento de especialidade por Categoria Profissional.</p><p>&nbsp;</p><p>2ª Hipótese<br>(Comprovado)</p><p>A atividade profissional desempenhada pelo(a) requerente se encontra contemplada no Código ____, do Anexo ________, do Regulamento da Previdência Social – Decreto nº 53.831/64 e/ou 83.080/79, o que permite o reconhecimento de especialidade por Categoria Profissional.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>TEMPO ESPECIAL. IMPOSSIBILIDADE. ATIVIDADE DESEMPENHADA NÃO PREVISTA NO ROL DOS REGULAMENTOS DA PREVIDÊNCIA SOCIAL – DECRETOS Nº 53.831/64 E 83.080/79. AUSÊNCIA DE FATORES DE RISCO - PERÍODO DE (XX/XX/XXXX) MANTIDO COMO DE NATUREZA COMUM.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'especial-formulario-sem-exposicao-a-agentes-nocivos-e-nao-enquadra-por-categoria-profissional',
                    label: 'Especial – formulário sem exposição a agentes nocivos e não enquadra por categoria profissional',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de ________, requerido por __________, nascido(a) em ________, com DER (Data de Entrada do Requerimento) em ______.</p><p>Foi requerido o reconhecimento de tempo especial com a apresentação de formulário PPP (Perfil Profissiográfico Previdenciário), emitido pela empresa _________, para o intervalo de (XX/XX/XXXX), no cargo de ___________, sem a indicação de fatores de risco.</p><p>Em recurso, o(a) Interessado(a) afirma ter se sujeitado às condições especiais, de modo que cabe o enquadramento do intervalo de (XX/XX/XXXX).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido reconhecido tempo especial para o intervalo de (XX/XX/XXXX).</p><p>De acordo com o PPP (Perfil Profissiográfico Previdenciário), o(a) requerente trabalhou no período de (XX/XX/XXXX), no cargo de _________, no setor ______, na empresa _________.</p><p><br>A atividade profissional desempenhada pelo(a) requerente não está contemplada no rol dos Regulamentos da Previdência Social – Decretos nº 53.831/64 e 83.080/79, o que impede o reconhecimento de especialidade por Categoria Profissional.</p><p>Também, não há possibilidade de ser acolhida especialidade com vista à exposição a agente nocivo, eis que inexistem fatores de risco, conforme se depreende da profissiografia.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: TEMPO ESPECIAL. IMPOSSIBILIDADE. RUÍDO APURADO PARA O INTERVALO A PARTIR DE 01.01.2004 COM BASE EM MEDIÇÃO PONTUAL / DECIBELÍMETRO. METODOLOGIA QUE NÃO ATENDE A ORIENTAÇÃO PREVISTA NO INCISO III, DO ENUNCIADO Nº 13 DO CRPS.</p><p>&nbsp;</p><p>&nbsp;</p><p>EMENTA: TEMPO ESPECIAL. POSSIBILIDADE. RUÍDO ACIMA DO LIMITE PERMITIDO E APURADO COM BASE NA DOSIMETRIA DA NR-15/ANEXO 1, A PARTIR DE 01.01.2004. METODOLOGIA QUE ATENDE A ORIENTAÇÃO PREVISTA NO INCISO III, DO ENUNCIADO Nº 13 DO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'especial-metodologia-fundacentro-e-nr-15',
                    label: 'Especial – Metodologia Fundacentro e NR-15',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o reconhecimento de tempo especial para o intervalo a partir de 01.01.2004, tendo apresentado o seguinte elemento:</p><p><br>(a) &nbsp; &nbsp; &nbsp; &nbsp;Formulário PPP (Perfil Profissiográfico Previdenciário) para o intervalo de ________, laborado no cargo de ______, no setor ________, da empresa __________, com a indicação da exposição ao agente ruído acima de 85dBA (técnica: _____).</p><p><br>A Perícia Médica não enquadrou o período de __________, sob o fundamento da não apuração do ruído com base na NHO-01 da FUNDACENTRO / NEN.</p><p>Em recurso, o(a) requerente busca a concessão / revisão do benefício com o enquadramento do período de ____________, aduzindo ter laborado em condições especiais, com a exposição ao ruído acima do limite tolerado, atendida a metodologia prevista na legislação para a sua apuração.&nbsp;<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia paira quanto ao reconhecimento de tempo especial para o intervalo a partir de 01.01.2004.</p><p><br>Conforme se verifica, o período não foi enquadramento em razão da metodologia utilizada para a apuração do ruído.</p><p><br>No presente caso, o(a) requerente apresentou Perfil Profissiográfico Previdenciário para o intervalo de ________, laborado no cargo de _______, no setor de __________, da empresa _______________, ora indicada a exposição ao ruído acima de 85dBA.</p><p><br>De acordo com o Perfil Profissiográfico Previdenciário, o ruído foi apurado com base na técnica _______________.</p><p><br>Sobre esse tema, temos a Resolução:</p><p>Resolução nº 73/2018:</p><p>APOSENTADORIA ESPECIAL. PEDIDO DE UNIFORMIZAÇÃO DE JUSRISPRUDÊNCIA. Divergência jurisprudencial entre as Câmaras de Julgamento no que tange conversão de tempo de atividade especial. Exigência de histograma e/ou memória de cálculo. Exposição ao agente nocivo ruído com a observância da técnica de apuração pela NHO-01 da Fundacentro. Competência para análise deste Conselho Pleno na forma do art. 3º inc. II do Regimento Interno do CRSS aprovado pela Portaria MDSA nº 116/2017. Pressupostos de Admissibilidade do pedido alcançados na forma do art. 63 do mesmo Regimento. Não é exigível o fornecimento de histograma e/ou memória de cálculo para o período de 11/10/2001 até 18/11/2003, por falta de previsão legal em lei, decreto e ato normativo ministerial vinculado ao CRSS, bem como a inexigilibilidade dada ao inc. III do art. 280 da IN/INSS nº 77/2015, pela DIRSAT/INSS, ante o reconhecimento da indisponibilidade de aparelhos de medição no período indicado. A exigência do ruído em NEN, a partir de 18/11/2003, não é estritamente obrigatória podendo ser aceitas outras metodologias válidas que atestem o ruído por meio de dosimetria. Precedente do Conselho Pleno. Pedido de Uniformização conhecido e provido. Necessidade de revisão de ofício do acórdão impugnado na forma do §12 do art. 63 do Regimento Interno do CRSS. (Grifos Nossos).<br>Atualmente, a matéria está consolidada por meio do Enunciado nº 13, do CRPS:</p><p>"ENUNCIADO Nº 13.<br>Atendidas as demais condições legais, considera-se especial, no âmbito do RGPS, a atividade exercida com exposição a ruído superior a 80 decibéis até 05/03/97, superior a 90 decibéis desta data até 18/11/2003, e superior a 85 decibéis a partir de então.<br>I - Os níveis de ruído devem ser medidos, observado o disposto na Norma Regulamentadora nº 15 (NR-15), anexos 1 e 2, com aparelho medidor de nível de pressão sonora, operando nos circuitos de compensação - dB (A) para ruído contínuo ou intermitente e dB (C) ou dB (linear) para ruído de impacto.<br>II - Até 31 de dezembro de 2003, para a aferição de ruído contínuo ou intermitente, é obrigatória a utilização das metodologias contidas na NR-15, devendo ser aceitos ou o nível de pressão sonora pontual ou a média de ruído, podendo ser informado decibelímetro, dosímetro ou medição pontual no campo "Técnica Utilizada" do Perfil Profissiográfico Previdenciário (PPP).<br>III - A partir de 1º de janeiro de 2004, para a aferição de ruído contínuo ou intermitente, é obrigatória a utilização da técnica/metodologia contida na Norma de Higiene Ocupacional 01 (NHO-01) da FUNDACENTRO ou na NR-15, que reflitam a medição de exposição durante toda a jornada de trabalho, vedada a medição pontual, devendo constar no PPP o nível de ruído em Nível de Exposição Normalizado - NEN ou a técnica/metodologia "dosimetria" ou "áudio dosimetria".<br>IV - Em caso de omissão ou dúvida quanto à indicação da técnica/metodologia utilizada para aferição da exposição nociva ao agente ruído, o PPP não deve ser admitido como prova da especialidade, devendo ser apresentado o respectivo Laudo Técnico de Condições Ambientais do Trabalho (LTCAT) ou solicitada inspeção no ambiente de trabalho, para fins de verificar a técnica utilizada na medição”.</p><p>&nbsp;</p><p>1ª hipótese:</p><p>Não enquadramento</p><p><br>Não se vislumbra a possibilidade de ser enquadrado o período a partir de 01.01.2004, pois embora o ruído possua intensidade acima de 85dBA, esse foi apurado com base em medição pontual e/ou decibelímetro, o que infringe a orientação prevista no inciso III, do Enunciado nº 13, do CRPS.</p><p>&nbsp;</p><p>&nbsp;</p><p>2ª Hipótese:</p><p>Enquadramento</p><p>Há possibilidade do enquadramento do período a partir de 01.01.2004, eis que o ruído se encontra acima de 85dBA e a técnica utilizada para a sua apuração foi a dosimetria da NR-15/Anexo 1, estando em conformidade com o inciso III, do Enunciado nº 13, do CRPS.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'expedicao-de-gps',
                    label: 'Expedição de GPS',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou ter direito ao benefício, mediante expedição de guia da previdência social para indenização do período necessário.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Quanto ao pedido de emissão de guia da previdência social, este não é de competência do Conselho de Recursos da Previdência Social, na forma do art. 67, parágrafo único da IN 77/2015, motivo pelo qual entendo caber o não conhecimento desse pedido, na forma do art. 63,II da Lei 9.784/99 c/c art. 71 do Regimento Interno do CRSS:Art. 67. Observado o disposto no art. 66, os acertos de recolhimento de contribuinte individual, empregado doméstico, facultativo e segurado especial que contribui facultativamente, identificados no requerimento de benefício ou de atualização de dados do CNIS, são de responsabilidade do INSS, conforme estabelece a Portaria Conjunta RFB/INSS nº 273, de 19 de janeiro de 2009.Parágrafo único. Os acertos de GPS que envolvam solicitação do filiado para inclusão de recolhimento, alteração da data de pagamento e alteração de valor autenticado, bem como a operação de transferência de CNPJ/CEI para NIT serão realizadas, exclusivamente, pela RFB. LEI Nº 9.784 , DE 29 DE JANEIRO DE 1999.Art. 63. O recurso não será conhecido quando interposto: [...] II - perante órgão incompetente; [...]Regimento Interno do Conselho de Recursos do Seguro SocialArt. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública FederalAssim, não é possível acolher o pedido.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-antecipacao-auxilio-doenca-atestado-nos-moldes-da-portaria-9-831-2020-duracao-maxima-tres-meses',
                    label: 'Incapacidade - antecipação auxílio-doença - atestado nos moldes da Portaria 9.831/2020; duração maxima TRES MESES',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Para embasar o pedido apresentou atestado, com nome e CRM do médico, bem como CID e período de repouso necessário (p. ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de antecipação de Auxílio-doença previdenciário, o que entendo ser possível, já que o atestado atendeu o teor do art. 4º Lei nº 13.982, de 2 de abril de 2020 e 3º da Portaria Conjunta nº 9.381, de 6 de abril de 2020: LEI Nº 13.982, DE 2 DE ABRIL DE 2020 Art. 4º Fica o INSS autorizado a antecipar 1 (um) salário-mínimo mensal para os requerentes do benefício de auxílio-doença de que trata o art. 59 da Lei nº 8.213, de 24 de julho de 1991, durante o período de 3 (três) meses, a contar da publicação desta Lei, ou até a realização de perícia pela Perícia Médica Federal, o que ocorrer primeiro. (Vide Decreto nº 10.413, de 2020) Parágrafo único. A antecipação de que trata o caput estará condicionada: I - ao cumprimento da carência exigida para a concessão do benefício de auxílio-doença; II - à apresentação de atestado médico, cujos requisitos e forma de análise serão estabelecidos em ato conjunto da Secretaria Especial de Previdência e Trabalho do Ministério da Economia e do INSS. PORTARIA CONJUNTA Nº 9.381, DE 6 DE ABRIL DE 2020 Art. 3º Observados os demais requisitos necessários para a concessão do auxílio-doença, inclusive a carência, quando exigida, a antecipação de um salário mínimo mensal ao requerente, de que trata o art. 4º da Lei nº 13.982, de 2 de abril de 2020, será devida a partir da data de início do benefício, determinada nos termos do art. 60 da Lei nº 8.213, de 24 de julho de 1991, e terá duração máxima de três meses. Pelo exposto, conheço do recurso e voto no sentido de DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE ANTECIPAÇÃO DE AUXÍLIO-DOENÇA PREVIDENCIÁRIO. ANTECIPAÇÃO CONCEDIDA, NOS MOLDES DO ART. 4º LEI Nº 13.982, DE 2 DE ABRIL DE 2020 E 3º DA PORTARIA CONJUNTA Nº 9.381, DE 6 DE ABRIL DE 2020. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-indeferimento-retorno-a-atividade-remunerada',
                    label: 'Incapacidade - INDEFERIMENTO - retorno a atividade remunerada',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de Auxílio-doença previdenciário, todavia observei que ele não se afastou do trabalho, pois manteve recolhimentos na condição de __________, &nbsp;durante todo o período de afastamento solicitado no atestado, motivo pelo qual o indeferimento será mantido, com base no art. 60, §6º da Lei 8.213/91: Art. 60 [...] § 6o O segurado que durante o gozo do auxílio-doença vier a exercer atividade que lhe garanta subsistência poderá ter o benefício cancelado a partir do retorno à atividade. &nbsp;(Incluído pela Lei nº 13.135, de 2015) &nbsp;Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-cessacao-retorno-a-atividade-remunerada',
                    label: 'Incapacidade - CESSAÇÃO - retorno a atividade remunerada',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS – Cadastro Nacional de Informações Sociais – observou-se que retornou ao trabalho após a cessação do benefício.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. A paret recorrente insurge-se contra a data de cessação do benefício de auxílio-doença, sustentando a manutenção do quadro de incapacidade laborativa, todavia, em consulta ao CNIS, constatou-se informação de atividade remunerada, na condição de _________ , desde o mês de cessação do benefício, o que corrobora o entendimento de que houve reaquisição da capacidade, portanto a cessação será mantida com base no §6º do art. 60 da Lei 8.213/1991: Lei 8.213/91 Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. &nbsp;[...] &nbsp;6o O segurado que durante o gozo do auxílio-doença vier a exercer atividade que lhe garanta subsistência poderá ter o benefício cancelado a partir do retorno à atividade. Pelo exposto, VOTO, preliminarmente, no sentido de CONHECER DO RECURSO para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA. COMPROVAÇÃO DE RETORNO AO TRABALHO. A DATA DE CESSAÇÃO SERÁ MANTIDA. DECISÃO FUNDAMENTADA NO ART. 60, §3º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-laborativa-prorrogacao-dar-anterior-decreto-10.410/2020',
                    label: 'Incapacidade laborativa [PRORROGAÇÃO - DAR - ANTERIOR DECRETO 10.410/2020',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______, haja vista não concordar com a decisão do INSS que determinou a cessação do benefício de Auxílio-doença previdenciário (NB _______ ), de que esteve em gozo de _______ a _______ . Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. ). Os autos foram encaminhados à Perícia Médica Federal, que entendeu pela possibilidade de retificar a data de cessação para _______ (p. &nbsp;). Em consulta ao CNIS – Cadastro nacional de informações sociais, não foi detectada gozo de outro benefício ou retorno ao trabalho, até a nova data médica fixada.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a parte interessada a reforma da decisão que determinou a cessação do auxílio-doença e, em análise dos elementos dos autos, entendo ser possível a sua prorrogação nos termos do parecer médico federal. Assim, a prorrogação do benefício é cabível, nos termos do art. 60 da Lei 8.213/91: Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) Pelo exposto, conheço do recurso para, no mérito, DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA &nbsp;POSSÍVEL A PRORROGAÇÃO, NOS TERMOS DO ART. 60 DA LEI 8213/91. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-laborativa-prorrogacao-negar-anterior-decreto-10-410-2020',
                    label: 'Incapacidade laborativa [PRORROGAÇÃO - NEGAR - ANTERIOR DECRETO 10.410/2020',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______ , haja vista não concordar com a decisão do INSS que cessou o o benefício de Auxílio doença (NB _______ &nbsp;), de que esteve em gozo desde _______ a _______. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. ).Em consulta ao sistema de benefícios, não foi detectada qualquer hipótese de perda do objeto do recurso. Segundo a perícia médica federal, não há elementos técnicos de convicção suficientes para alteração da conclusão médica anterior (evento ___ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que cessou o benefício de Auxílio doença, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, houve a reaquisição da capacidade laborativa, ao tempo da cessação (evento ___ ). Assim, a cessação está em conformidade com a parte final do art. 60 da Lei 8.213/91: Lei 8.213/91 Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO MAIS EXISTE INCAPACIDADE PARA O TRABALHO, ESTANDO A CESSAÇÃO EM CONFORMIDADE COM A PARTE FINAL DO ART. 60 DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-laborativa-indeferimento-negar-pos-decreto-2020',
                    label: 'INCAPACIDADE LABORATIVA [INDEFERIMENTO - NEGAR - PÓS DECRETO 2020',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de auxílio por incapacidade temporária (NB _ ), requerido em _ , por PARECER CONTRÁRIO DA PERÍCIA MÉDICA. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. _). Segundo a perícia médica federal, não há elementos para alteração da decisão anterior (evento _). Em consulta ao sistema de benefício, não foi detectada perda do objeto do recurso.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de auxílio por incapacidade temporária, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, não existe incapacidade para o trabalho (evento &nbsp;_ ). Assim, o indeferimento está em conformidade com o art. 59 da Lei 8.213/91 e 71 do Decreto 3.048/99: Lei 8.213/91 Art. 59. O auxílio-doença será devido ao segurado que, havendo cumprido, quando for o caso, o período de carência exigido nesta Lei, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de 15 (quinze) dias consecutivos. Decreto 3.048/99 &nbsp;Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial. (Redação dada pelo Decreto nº 10.410, de 2020) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'RECURSO ORDINÁRIO. AUXÍLIO INCAPACIDADE TEMPORÁRIA. ANTIGO AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO EXISTE INCAPACIDADE PARA O TRABALHO, ESTANDO O INDEFERIMENTO EM CONFORMIDADE COM O ART. 59 DA LEI 8.213/91 e 71 DO DECRETO 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'incapacidade-laborativa-indeferimento-dar-pos-decreto-2020',
                    label: 'INCAPACIDADE LABORATIVA [INDEFERIMENTO - DAR - PÓS DECRETO 2020',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por ________ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de auxílio por incapacidade temporária (NB ________), requerido em ________, por PARECER CONTRÁRIO DA PERÍCIA MÉDICA. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. _). Segundo a perícia médica federal, é possível retificar o indeferimento, tendo fixado as seguintes datas médicas: data de início da doença, em ________, data de início da incapacidade em ________, data de cessação, em ________ , por doença que ________ isenta do período regulamentar de carência. Em consulta ao sistema de benefício, não foram detectados outros benefícios por incapacidade nesse período; em consulta ao extrato previdenciário, consta afastamento da atividade, na condição de ________ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de auxílio por incapacidade temporária, o que entendo ser possível, já que, em sede de recurso, foi reconhecida a incapacidade, no período de _____ a _____ &nbsp;(evento __ ). Assim, o benefício será concedido, na forma do art. 60 e 71 do Decreto 3.048/99: Lei 8.213/91: Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) [...]Decreto 3.048/99 Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial. (Redação dada pelo Decreto nº 10.410, de 2020) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO INCAPACIDADE TEMPORÁRIA. ANTIGO AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL EM SEDE DE RECURSO, o benefício será concedido, na forma do art. 60 e 71 do Decreto 3.048/99 . RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'materia-julgada-administrativa-preclusao-processual',
                    label: 'Matéria julgada administrativa - preclusão processual',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Foi detectado julgamento, referente ao mesmo objeto do recurso, por outro órgão julgador do Conselho de Recursos da Previdência Social (evento _ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A parte recorrente busca a reforma da decisão do INSS que indeferiu o benefício de Aposentadoria por tempo de contribuição, todavia, em consulta aos protocolos junto ao E-sisrec, constatou-se julgamento da mesma matéria objeto de recurso, pela _____ de Recursos. Assim, o caso dos autos trata de questão já apreciada na esfera administrativa, o que configura coisa julgada e, portanto, preclusão processual, situação que não admite o conhecimento do recurso, nos termos do art. 54, inciso VI do Regimento Interno do Conselho de Recursos do Seguro Social, que expressa o seguinte: Regimento Interno do CRSS: Art. 54 - Constituem razões de não conhecimento do recurso:[...]VI - a preclusão processual. Além disso, o art. 507 do Código de Processo Civil, c/c o art. 71 do Regimento Interno do CRSS, veda discussão de matéria preclusa: Código de Processo Civil Art. 507. É vedado à parte discutir no curso do processo as questões já decididas a cujo respeito se operou a preclusão. Regimento Interno do CRSS. Art. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública Federal. Por todo o exposto, VOTO no sentido de NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PRECLUSÃO. COISA JULGADA E EXAURIDA ADMINISTRATIVAMENTE. O INSTITUTO DA PRECLUSÃO PROCESSUAL E DO EXAURIMENTO NA ESFERA ADMINISTRATIVA NÃOPERMITEM QUE UM MESMO ÓRGÃO DA ADMINISTRAÇÃO PÚBLICA FAÇA APRECIAÇÃO DE MATÉRIA JÁ APRECIADA E MODIFIQUE DECISÃO ANTERIORMENTE PROFERIDA, SALVO EM SITUAÇÃO DE REVISÃO PREVISTA NO REGIMENTO INTERNO DO CRSS. RECURSO NÃO CONHECIDO. DECISÃO FUNDAMENTADA NOS ART. 54, VI DO RICRPS, ALTERADO PELA PORTARIA 116/2017, ART. 507 DO CPC/15 C/C ART. 71 DA PORTARIA 116/2017 DO MDSA.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'pensao-por-morte-filho-maior-invalido',
                    label: 'Pensão por morte - filho maior inválido',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , nascid_ em _________ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de Pensão por morte previdenciária (NB _________), requerido em _________ , na condição de filh_ maior inválid_ de _________ , por não comprovação da qualidade de dependente (p. _ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de indeferiu o benefício de Pensão por morte previdenciária, o que não entendo ser possível, pois, segundo a perícia para Avaliação de Dependente Maior Inválido: não há ____ para caracterizar maior invalido (p._ ). Assim, entendo que não há direito ao benefício, na forma do art. 77, §2º da Lei 8.213/91, 108 do Decreto 3.048/99:Art. 74. A pensão por morte será devida ao conjunto dos dependentes do segurado que falecer, aposentado ou não, a contar da data: (Redação dada pela Lei nº 9.528, de 1997) (Vide Medida Provisória nº 871, de 2019)[...]Art. 77. A pensão por morte, havendo mais de um pensionista, será rateada entre todos em parte iguais. (Redação dada pela Lei nº 9.032, de 1995)[...]§ 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019)II - para o filho, a pessoa a ele equiparada ou o irmão, de ambos os sexos, ao completar vinte e um anos de idade, salvo se for inválido ou tiver deficiência intelectual ou mental ou deficiência grave; (Redação dada pela Lei nº 13.183, de 2015) (Vigência) Art. 108. A pensão por morte somente será devida ao filho e ao irmão cuja invalidez tenha ocorrido antes da emancipação ou de completar a idade de vinte e um anos, desde que reconhecida ou comprovada, pela perícia médica do INSS, a continuidade da invalidez até a data do óbito do segurado. (Redação dada pelo Decreto nº 6.939, de 2009)Art. 1º Comunicar para cumprimento a decisão judicial proferida na Ação Civil Pública-ACP nº 0059826-86.2010.4.01.3800/MG, determinando ao INSS que reconheça, para fins de concessão de pensão por morte, a dependência do filho inválido ou do irmão inválido, quando a invalidez tenha se manifestado após a maioridade ou emancipação, mas até a data do óbito do segurado, desde que atendidos os demais requisitos da lei.Art. 2º A determinação judicial a que se refere o artigo 1º produz efeitos para benefícios com Data de Entrada de Requerimento-DER a partir de 19/08/2009 e alcança todo o território nacional. Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE PREVIDENCIÁRIA. FILHO MAIOR INVÁLIDO. CONFORME LAUDO MÉDICO PERICIAL. NÃO HÁ DIREITO AO BENEFÍCIO. O INDEFERIMENTO SERÁ MANTIDO, NA FORMA DO ART. 77, §2º DA LEI 8.213/91 e 108 do Decreto 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'pensao-por-morte-menos-de-18-contribuicoes-do-instituidor',
                    label: 'Pensão por morte - menos de 18 contribuições do instituidor',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. A parte recorrente não se conforma com a cessação do benefício, todavia, em consulta ao CNIS - Cadastro Nacional de Informações Sociais- constatou-se que o instituidor verteu, até o óbito, apenas ______ recolhimentos ao Regime Geral de Previdência Social, e não há qualquer documento apresentado que permita qualquer alteração nesta contagem, motivo pelo qual deve cessar em quatro meses, nos moldes do art. 77, §2º, alínea “b”, da Lei 8.213/91 Art. 77 [...] § 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019) [...]V - para cônjuge ou companheiro: (Incluído pela Lei nº 13.135, de 2015) [...] b) em 4 (quatro) meses, se o óbito ocorrer sem que o segurado tenha vertido 18 (dezoito) contribuições mensais ou se o casamento ou a união estável tiverem sido iniciados em menos de 2 (dois) anos antes do óbito do segurado; (Incluído pela Lei nº 13.135, de 2015) Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE. NOS TERMOS DO ART. 77, §2º ALÍNEA B O DIREITO À PERCEPÇÃO DA COTA INDIVIDUAL CESSARÁ PARA CÔNJUGE OU COMPANHEIRO EM 4 (QUATRO) MESES, SE O ÓBITO OCORRER SEM QUE O SEGURADO TENHA VERTIDO 18 (DEZOITO) CONTRIBUIÇÕES MENSAIS. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'pensao-por-morte-relacao-com-menos-de-dois-anos',
                    label: 'Pensão por morte - relação com menos de dois anos',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a interessada comprovar sua condição de ______ de ______ &nbsp;(p. ), todavia, em análise dos autos, observei que não recai controvérsia sobre a sua condição de ______ . Na verdade, após análise dos autos, pude observar que o benefício foi mantido pelo período de 4 (quatro) meses, em razão de a união ter sido formalizada em menos de 2 (dois) anos antes do óbito do segurado, nos moldes do art. 77, §2º, V, alínea b da Lei 8.213/91:Art. 77 [...] § 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019)[...]V - para cônjuge ou companheiro: &nbsp;(Incluído pela Lei nº 13.135, de 2015)[...]b) em 4 (quatro) meses, se o óbito ocorrer sem que o segurado tenha vertido 18 (dezoito) contribuições mensais ou se o casamento ou a união estável tiverem sido iniciados em menos de 2 (dois) anos antes do óbito do segurado; (Incluído pela Lei nº 13.135, de 2015)Portanto, entendo que não ficou comprovada a manutenção da união do casal por mais de 4 meses, desde ___ até o óbito do instituidor, em ______ , motivo pelo qual a cessação será mantida, nos termos do art. 77, §2º, V, alínea b da Lei 8.213/91, acima citado. Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE PREVIDENCIÁRIA. O BENEFÍCIO FOI MANTIDO PELO PERÍODO DE 4 (QUATRO) MESES, EM RAZÃO DE A UNIÃO TER SIDO FORMALIZADA EM MENOS DE 2 (DOIS) ANOS ANTES DO ÓBITO DO SEGURADO, NOS MOLDES DO ART. 77, §2º, V, ALÍNEA B DA LEI 8.213/91. NÃO FICOU COMPROVADA A MANUTENÇÃO DA UNIÃO DO CASAL POR MAIS DE 4 MESES, DESDE ______ &nbsp;(P. ) ATÉ O ÓBITO DO INSTITUIDOR, EM ______, MOTIVO PELO QUAL A CESSAÇÃO SERÁ MANTIDA. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'pensao-por-morte-uniao-estavel-mais-de-uma-prova-dentro-de-24-meses',
                    label: 'Pensão por morte - união estável - mais de uma prova dentro de 24 meses',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a interessada a reforma da decisão que indeferiu o benefício de Pensão por morte previdenciária requerido na condição de ______ &nbsp;de ______ , falecid_ em ______ , todavia entendo que não há prova suficiente da referida união estável, pois a legislação previdenciária exige “provas de união estável e de dependência econômica”, portanto, no mínimo dois documentos. Não havendo prova da referida união estável, o indeferimento será mantido, na forma do art. 16, §5º da Lei 8.213/91:Art. 16. São beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado: I - o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 (vinte e um) anos ou inválido ou que tenha deficiência intelectual ou mental ou deficiência grave; (Redação dada pela Lei nº 13.146, de 2015) [...] § 5º As provas de união estável e de dependência econômica exigem início de prova material contemporânea dos fatos, produzido em período não superior a 24 (vinte e quatro) meses anterior à data do óbito ou do recolhimento à prisão do segurado, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, conforme disposto no regulamento. (Incluído pela Lei nº 13.846, de 2019) Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE. CONDIÇÃO DE _______ . NÃO HÁ PROVA SUFICIENTE DA REFERIDA _______ . A LEI EXIGE, NO MÍNIMO, DOIS DOCUMENTOS RELACIONADOS _______ , &nbsp;NO PERÍODO DE 24 MESES ANTERIOR AO ÓBITO, O QUE NÃO FOI ATENDIDO, MOTIVO PELO QUAL O INDEFERIMENTO SERÁ MANTIDO, NA FORMA DO ART. 16, §5º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'qualidade-de-segurado-reingresso-com-nova-carencia',
                    label: 'Qualidade de segurado – Reingresso com nova carência',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto contra a decisão do INSS que indeferiu o pedido do benefício de ___, requerido em ____.As competências ____ não foram consideradas para carência pelo INSS pois foram recolhidas em atraso.Em suas razões recursais alega o recorrente que ___.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Presentes os pressupostos de admissibilidade necessários ao conhecimento do recurso, passa-se a análise do mérito. O INSS não considerou as competências recolhidas em ____, pois o pagamento foi realizado após a perda da qualidade de segurado do recorrente que ocorreu em ____. O Inciso II do Artigo 27 da Lei 8.213/91 veda o computo para carência de contribuições realizadas em atraso. Lei 8.213/91 (…) Art. 27. Para cômputo do período de carência, serão consideradas as contribuições: (…) II – realizadas a contar da data do efetivo pagamento da primeira contribuição sem atraso, não sendo consideradas para este fim as contribuições recolhidas com atraso referentes a competências anteriores, no caso dos segurados empregado doméstico, contribuinte individual, especial e facultativo, referidos, respectivamente, nos incisos II, V e VII do art. 11 e no art. 13. O §4º do Artigo 28 do RPS – Decreto 3048/99 regulamentou que o primeiro recolhimento efetivado pelo contribuinte individual após ter perdido a qualidade de segurado, caracterizará o seu reingresso ao sistema previdenciário, não sendo computados para efeito de carência as contribuições em atraso referentes à períodos anteriores ao seu reingresso. Decreto 3048/99 Art. 28 (...) § 4º Para os segurados a que se refere o inciso II do caput, na hipótese de perda da qualidade de segurado, somente serão consideradas, para fins de carência, as contribuições efetivadas após novo recolhimento sem atraso, observado o disposto no art. 19-E Entendo que as competências recolhidas em atraso após a perda da qualidade de segurado não podem ser consideradas para carência por expressa vedação legal. Pelo exposto, voto pelo conhecimento do recurso para, no mérito, negar-lhe provimento.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO XXX. CARÊNCIA. RECOLHIMENTOS REALIZADOS EM ATRASO APÓS A PERDA QUALIDADE DE SEGURADO. COMPETÊNCIAS NÃO COMPUTADA PARA EFEITO DE CARÊNCIA NOS TERMOS DO §4º ARTIGO 28 DO DECRETO 3048/99. NÃO HÁ DIREITO AO BENEFÍCIO. INDEFERIMENTO MANTIDO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'reclamatoria-trabalhista',
                    label: 'Reclamatória Trabalhista',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), laborado no cargo de (_____), perante a empresa ____________. Para a comprovação do vínculo foi apresentado cópias da Reclamação Trabalhista nº___________, tramitada perante a ______ Vara do Trabalho da Comarca de _______.</p><p><br>O INSS não computou o intervalo para fins previdenciários.</p><p>Em suas razões recursais, o(a) requerente sustenta novamente que cabe o cômputo do período de (XX/XX/XXXX), oriundo de Reclamação Trabalhista.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>1ª hipótese<br>(Não cômputo)</p><p><br>Pretende o(a) requerente o cômputo do intervalo de (XX/XX/XXXX), decorrente de vínculo trabalhista reconhecido pela Justiça do Trabalho, nos autos da Reclamação Trabalhista nº ______ movida contra a empresa ____________. Contudo, inexiste elemento material para confirmar a atividade prestada. Convém salientar que, a sentença trabalhista transitada em julgada, inclusive a anotação de vínculo em CTPS decorrente dessa ação, por si só, não produz efeitos previdenciários se não acompanhada de prova material, conforme dispõe o §3º, do artigo 55 da Lei nº 8.213/91 e orienta o ENUNCIADO nº 03/2019, do CRPS.</p><p>&nbsp;</p><p>2ª hipótese<br>(Cômputo)</p><p><br>Pretende o(a) recorrente o cômputo do intervalo de (XX/XX/XXXX), decorrente de vínculo trabalhista reconhecido pela Justiça do Trabalho, nos autos da Reclamação Trabalhista nº ________, movida contra a empresa ____________.</p><p>No presente, o vínculo empregatício reconhecido em ação trabalhista está apto a ser considerado para fins previdenciários, uma vez que está embasado em prova material, de acordo com o §3º, do artigo 55 da Lei nº 8.213/91 e o ENUNCIADO nº 03/2019, do CRPS.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: RECLAMAÇÃO TRABALHISTA. IMPOSSIBILIDADE. AUSÊNCIA DE PROVA MATERIAL. NÃO ATENDIDO OS TERMOS DO §3º, DO ARTIGO 55 DA LEI Nº 8.213/91 E ENUNCIADO Nº 03/2019 DO CRPS.<br>A sentença trabalhista é hábil para ser considerada para fins previdenciários se constituída de prova material que evidencie o exercício da atividade remunerada no período discutido.</p><p>&nbsp;</p><p>EMENTA: RECLAMAÇÃO TRABALHISTA. POSSIBILIDADE. AÇÃO JUDICIAL ACOMPANHADA DE ELEMENTO MATERIAL QUE CONFIRMA O EXERCÍCIO DA ATIVIDADE REMUNERADA. ATENDIDO OS TERMOS DO §3º, DO ARTIGO 55 DA LEI Nº 8.213/91 E ENUNCIADO Nº 03/2019 DO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'recorrente-nao-apresentou-documentos',
                    label: 'Recorrente não apresentou documentos',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Antes de indeferir, o INSS emitiu carta de exigência para que a interessada apresentasse documentos a fim de modificar o tempo, mas não ela não atendeu (p. ). Após o protocolo do recurso, o Gabinete de Crises solicitou o complemento das razões de recurso e da prova documental, mas os prazo decorreram sem manifestação</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de __________ , todavia, mesmo depois de oportunizada a complementação da prova documental, o prazo decorreu sem manifestação da parte interessada, motivo pelo qual o processo será julgado no estado em que se encontra, na forma do art. 35, §2º do Regimento Interno do Conselho de Recursos do Seguro Social: Art. 35 [...] § 2º Uma vez interposto o recurso, o não cumprimento pelo interessado, de exigência ou providência que a ele incumbiriam, e para a qual tenha sido devidamente intimado, não implica em desistência tácita ou renúncia ao direito de recorrer, devendo o processo ser julgado no estado em que se encontra, arcando o interessado com o ônus de sua inércia. Além disso, existe previsão regimental que permite a apresentação de alegações e documentos referentes a matéria do processo até antes do início da sessão de julgamento: Regimento Interno do Conselho de Recursos do Seguro Social – CRSS Art. 37 [...] § 1º O interessado poderá juntar documentos, atestados, exames complementares e pareceres médicos, requerer diligências e perícias e aduzir alegações referentes à matéria objeto do processo até antes do início da sessão de julgamento, hipótese em que será avaliada a necessidade de conferir direito de vista à parte contrária para ciência e manifestação. A despeito dessas duas oportunidades, não houve qualquer alegação da recorrente, motivo pelo qual o indeferimento será mantido. Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. OPORTUNIZADA A COMPLEMENTAÇÃO DA DOCUMENTAÇÃO, O PRAZO DECORREU SEM MANIFESTAÇÃO DA PARTE. EXISTE PREVISÃO REGIMENTAL QUE PERMITE A APRESENTAÇÃO DE ALEGAÇÕES E DOCUMENTOS REFERENTES A MATÉRIA DO PROCESSO ATÉ ANTES DO INÍCIO DA SESSÃO DE JULGAMENTO. A DESPEITO DESSAS DUAS OPORTUNIDADES, NÃO HOUVE QUALQUER ALEGAÇÃO DA RECORRENTE, MOTIVO PELO QUAL O PROCESSO SERÁ JULGADO NO ESTADO EM QUE SE ENCONTRA, NA FORMA DO ART. 35, §2º DO REGIMENTO INTERNO DO CONSELHO DE RECURSOS DO SEGURO SOCIAL. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.&nbsp;</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'recurso-sem-assinatura-e-sem-atendimento-de-exigencia-pela-parte',
                    label: 'Recurso sem assinatura e sem atendimento de exigência pela parte',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou ter direito ao benefício, mas foi verificada necessidade devolver ao diligenciador para notificar a recorrente a assinar a petição de recurso (p. ) mas o prazo decorreu sem manifestação (p. ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>As razões recursais não contêm assinatura; sendo notificada a parte requerente para regularizar, não sanou os vícios, nem justificou por que não o fez. Portanto, no caso dos autos, aplica-se o disposto no art. 76, § 2º, inciso I, do Código de Processo Civil, c/c o art. 71 do Regimento Interno do CRPS, segundo o qual o recurso não será conhecido quando a parte recorrente deixar de cumprir exigência ou providência que a ela incumbiria. Código de Processo Civil Art. 76. Verificada a incapacidade processual ou a irregularidade da representação da parte, o juiz suspenderá o processo e designará prazo razoável para que seja sanado o vício. § 2º Descumprida a determinação em fase recursal perante tribunal de justiça, tribunal regional federal ou tribunal superior, o relator: I - não conhecerá do recurso, se a providência couber ao recorrente; [...] Regimento Interno do Conselho de Recursos da Previdência Social Art. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública Federal. O STJ (Superior Tribunal de Justiça) já manifestou pelo não conhecimento do mérito em recurso sem assinatura em que a parte recorrente negligencia e não regulariza após ser notificada, consoante o entendimento jurisprudência transcrito a seguir: PROCESSUAL CIVIL. ART. 13 e 284 DO CPC. AUSÊNCIA DE ASSINATURA NA PEÇA INICIAL, INSTÂNCIAS ORDINÁRIAS. ABERTURA DE PRAZO PARA REGULARIZAÇÃO. 1. A ausência de assinatura na petição nas instâncias ordinárias, ao contrário da instância especial, é um vício sanável, a teor do que reza o art. 13 do CPC, aplicável analogicamente à irregularidade da representação postulatória, de forma que se deve proceder à abertura de prazo razoável para sanar a irregularidade. É que os vícios de representação devem ser sanados na instância ordinária, pelo que, repise-se, é perfeitamente possível ao Tribunal de origem a abertura de prazo para remediar esse tipo de defeito, consoante o disposto no referido dispositivo legal. 2. In casu, o juízo concedeu à autarquia oportunidade para firmar a inicial de embargos à execução, transcorrendo o prazo de 40 (quarenta) dias sem qualquer atividade da parte. Deveras, à ausência de assinatura da inicial aplica-se o art. 284 e seu parágrafo do CPC e, não o art. 267, § 1º, cujo escopo é diverso do primeiro dispositivo afastado. 3. Negligenciando a autarquia embargante à determinação do juízo a quo pra que procedesse à regularização da petição inicial apócrifa, correta a extinção dos embargos à execução sem julgamento de mérito. 4. Recurso especial desprovido. (REsp 652.641/RS, Rel. Ministro LUIZ FUX, PRIMEIRA TURMA, julgado em 02/12/2004, DJ 28/02/2005, p. 236) Pelo exposto, VOTO no sentido de NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. O RECURSO ESTAVA SEM ASSINATURA. OPORTUNIZADA REGULARIZAÇÃO, NÃO HOUVE INTERESSE DA PARTE EM ATENDER. PORTANTO, APLICA-SE O DISPOSTO NO ART. 76, § 2º, INCISO I, DO CÓDIGO DE PROCESSO CIVIL, C/C O ART. 71 E 35, §2º DO REGIMENTO INTERNO DO CRPS, SEGUNDO O QUAL O RECURSO NÃO SERÁ CONHECIDO QUANDO A PARTE RECORRENTE DEIXAR DE CUMPRIR EXIGÊNCIA OU PROVIDÊNCIA QUE A ELA INCUMBIRIA. RECURSO NÃO CONHECIDO.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'salario-maternidade-sem-afastamento-atividade',
                    label: 'Salário maternidade - sem afastamento atividade',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que ___ o benefício de Salário-maternidade, todavia, em consulta ao CNIS – Cadastro nacional de informações sociais -, observou-se que há registro de remuneração recebida, como ____ , durante todo o período que deveria ter se fastado (p.___ ), todavia, nos termos do art. 71-C da Lei 8.213/91, a percepção do salário-maternidade, inclusive o previsto no art. 71-B, está condicionada ao afastamento do trabalho: Art. 71-C. A percepção do salário-maternidade, inclusive o previsto no art. 71-B, está condicionada ao afastamento do segurado do trabalho ou da atividade desempenhada, sob pena de suspensão do benefício. (Incluído pela Lei nº 12.873, de 2013) Assim, como não houve afastamento, não há direito ao recebido de valores correspondente aos 120 dias. Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. SALÁRIO-MATERNIDADE. NOS TERMOS DO ART. 71-C DA LEI 8.213/91, A PERCEPÇÃO DO SALÁRIO-MATERNIDADE, INCLUSIVE O PREVISTO NO ART. 71-B, ESTÁ CONDICIONADA AO AFASTAMENTO DO TRABALHO. NÃO HOUVE AFASTAMENTO POR 120 DIAS. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'segurado-especial-prova-de-vinculo-com-terras-rurais-com-ja',
                    label: 'Segurado especial - prova de vínculo com terras rurais; com J.A.',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Quanto ao alegado labor rural de _____ &nbsp;a _____ &nbsp;, em que pese a qualificação civil de seu cônjuge, _____ , em momentos diversos (p. _____ ), não ficou comprovada a vinculação do grupo familiar a qualquer imóvel rural, na forma de proprietários, usufrutuários, possuidores, assentados, parceiros, meeiros outorgados, comodatários ou arrendatários rurais, conforme exige o art. 11, VII, alínea a da Lei 8.213/91: Art. 11. São segurados obrigatórios da Previdência Social as seguintes pessoas físicas: (Redação dada pela Lei nº 8.647, de 1993) [...] VII – como segurado especial: a pessoa física residente no imóvel rural ou em aglomerado urbano ou rural próximo a ele que, individualmente ou em regime de economia familiar, ainda que com o auxílio eventual de terceiros, na condição de: (Redação dada pela Lei nº 11.718, de 2008) a) produtor, seja proprietário, usufrutuário, possuidor, assentado, parceiro ou meeiro outorgados, comodatário ou arrendatário rurais, que explore atividade: (Incluído pela Lei nº 11.718, de 2008) Assim, não existe início de prova suficiente para comprovar referida condição, na forma do Enunciado 8, V do CRPS, 2019, motivo pelo qual indefiro o processamento de justificação administrativa, na forma do art. 55, §3º da Lei 8.213/91: ENUNCIADO 8 O tempo de trabalho rural do segurado especial e do contribuinte individual, anterior à Lei nº 8.213/91, pode ser utilizado, independente do recolhimento das contribuições, para fins de benefícios no RGPS, exceto para carência. [...] &nbsp;V - O início de prova material - documento contemporâneo dotado de fé pública, sem rasuras ou retificações recentes, constando a qualificação do segurado ou de membros do seu grupo familiar como rurícola, lavrador ou agricultor - deverá ser corroborado por outros elementos, produzindo um conjunto probatório harmônico, robusto e convincente, capaz de comprovar os fatos alegados. [...] &nbsp;(CONSELHO DE RECURSOS DA PREVIDÊNCIA SOCIAL, 2019) Art. 55. O tempo de serviço será comprovado na forma estabelecida no Regulamento, compreendendo, além do correspondente às atividades de qualquer das categorias de segurados de que trata o art. 11 desta Lei, mesmo que anterior à perda da qualidade de segurado: [...] § 3º A comprovação do tempo de serviço para os fins desta Lei, inclusive mediante justificativa administrativa ou judicial, observado o disposto no art. 108 desta Lei, só produzirá efeito quando for baseada em início de prova material contemporânea dos fatos, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, na forma prevista no regulamento. (Redação dada pela Lei nº 13.846, de 2019)</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>QUANTO AO ALEGADO LABOR RURAL DE _________ , EM QUE PESE A QUALIFICAÇÃO CIVIL DE SEU ______ , NÃO FICOU COMPROVADA A VINCULAÇÃO DO GRUPO FAMILIAR A QUALQUER IMÓVEL RURAL, NA CONDIÇÃO DE ________ , CONFORMME TEOR DO ART. 11, VII, ALÍNEA A DA LEI 8.213/91. &nbsp;MOTIVO PELO QUAL NÃO HA INICIO DE PROVA PARA O PROCESSAMENTO DE JUSTIFICAÇÃO ADMINISTRATIVA, NA FORMA DO ART. 55, §3º DA LEI 8.213/91.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'segurado-especial-atividade-em-outra-categoria-mais-de-120-dias-ano-civil',
                    label: 'Segurado especial – atividade em outra categoria mais de 120 dias ano civil',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: 'O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. [...]   Nos períodos de _______ a _______ ,  ficou descaracterizada a condição de rural, por serem períodos de labor urbano, em intervalos superiores ao limite legal, na forma do art. 11, §10 LEI Nº 8.213, DE 24 DE JULHO DE 1991 Art. 11 [...] § 10. O segurado especial fica excluído dessa categoria: (Incluído pela Lei nº 11.718, de 2008) [...]  b) enquadrar-se em qualquer outra categoria de segurado obrigatório do Regime Geral de Previdência Social, ressalvado o disposto nos incisos III, V, VII e VIII do § 9o e no § 12, sem prejuízo do disposto no art. 15; (Redação dada pela Lei nº 12.873, de 2013) [...] Art. 11 [...] §9º [...] III - exercício de atividade remunerada em período não superior a 120 (cento e vinte) dias, corridos ou intercalados, no ano civil, observado o disposto no § 13 do art. 12 da Lei nº 8.212, de 24 de julho de 1991; (Redação dada pela Lei nº 12.873, de 2013)',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'QUALIDADE DE SEGURADO ESPECIAL DESCARACTERIZADA PELO LABOR URBANO EM PERÍODO SUPERIOR A 120 DIAS NO ANO CIVIL, CONFORMA ART. 11, §9º, INCISO III DA LEI 8.213/91',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'segurado-especial-autodeclaracao',
                    label: 'Segurado especial – autodeclaração',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A recorrente busca o reconhecimento do exercício de atividade rural, todavia ela não apresentou qualquer prova de atividade rural, tampouco a autodeclaração exigida, muito embora a comprovação da atividade se dê complementarmente à autodeclaração, nos termos da Lei 8.213/91: Art. 106. A comprovação do exercício de atividade rural será feita, complementarmente à autodeclaração de que trata o § 2º e ao cadastro de que trata o § 1º, ambos do art. 38-B desta Lei, por meio de, entre outros: (Redação dada pela Lei nº 13.846, de 2019) Art. 38-B. [...] § 2º Para o período anterior a 1º de janeiro de 2023, o segurado especial comprovará o tempo de exercício da atividade rural por meio de autodeclaração ratificada por entidades públicas credenciadas, nos termos do art. 13 da Lei nº 12.188, de 11 de janeiro de 2010, e por outros órgãos públicos, na forma prevista no regulamento. (Incluído pela Lei nº 13.846, de 2019)Assim, não tendo ficado comprovada a condição de segurado especial, na forma do art.11, VII, alínea “a” da Lei 8.213/91, não entendo devido o benefício de aposentadoria por idade rural, na forma do art. 26, III, 39, I c/c 48, §2º da Lei 8.213/91:<br>Lei 8.213/91<br>Art. 26. Independe de carência a concessão das seguintes prestações:<br>[...]<br>III - os benefícios concedidos na forma do inciso I do art. 39, aos segurados especiais referidos no inciso VII do art. 11 desta Lei;<br>[...]<br>Art. 39. &nbsp;Para os segurados especiais, referidos no inciso VII do caput do art. 11 desta Lei, fica garantida a concessão: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 13.846, de 2019)<br>I - de aposentadoria por idade ou por invalidez, de auxílio-doença, de auxílio-reclusão ou de pensão, no valor de 1 (um) salário mínimo, e de auxílio-acidente, conforme disposto no art. 86 desta Lei, desde que comprovem o exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, igual ao número de meses correspondentes à carência do benefício requerido, observado o disposto nos arts. 38-A e 38-B desta Lei; ou &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Redação dada pela Lei nº 13.846, de 2019)<br>[...]<br>Art. 48 [...] &nbsp; &nbsp; &nbsp; &nbsp;§ 2o &nbsp;Para os efeitos do disposto no § 1o deste artigo, o trabalhador rural deve comprovar o efetivo exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, por tempo igual ao número de meses de contribuição correspondente à carência do benefício pretendido, computado o período &nbsp;a que se referem os incisos III a VIII do § 9o do art. 11 desta Lei. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 11,718, de 2008)<br>Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.&nbsp;<br>RECURSO ORDINÁRIO. APOSENTADORIA POR IDADE RURAL. PRETENDE A PARTE INTERESSADA O RECONHECIMENTO DE SUA CONDIÇÃO DE SEGURADO(A) ESPECIAL. REFERIDA NORMA EXIGE INÍCIO DE PROVA MATERIAL CONTEMPORÂNEO À ÉPOCA DOS FATOS A PROVAR, E PERMITE UTILIZAÇÃO, PARA ESSE FIM, DE DOCUMENTO ANTERIOR AO PERÍODO CONTROVERTIDO. NÃO COMPROVADA A CONDIÇÃO DE SEGURADO(a) ESPECIAL, NA FORMA DO ART.11, VII, ALÍNEA “A” DA LEI 8.213/91. NÃO HÁ DIREITO AO BENEFÍCIO, NA FORMA DO ART. 26, III, 39, I C/C 48, §2º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>A comprovação do exercício de atividade rural será feita, complementarmente à autodeclaração de que trata o § 2º e ao cadastro de que trata o § 1º, ambos do art. 38-B desta Lei. art. 106 da lei 8.213/91</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                {
                    id: 'trabalhador-rural-contribuinte-individual',
                    label: 'Trabalhador rural - contribuinte individual',
                    texto: [
                        {
                            categoria: 'relatorio',
                            texto: '',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade do recurso. O interessado busca a reforma da decisão mediante reconhecimento do exercício de atividade rural no período de ______ a ______ , como ______ , todavia , em que pese tenha informado criar ______ , ______ &nbsp;e ______ , para subsistência do grupo familiar, ele comprovou possuir ______ , o que o desqualifica como segurado especial, mas como trabalhador rural, na condição de contribuinte individual, nos moldes do art. 11, V, alínea “a” da Lei 8.213/91: Art.11 [...] V - como contribuinte individual: (Redação dada pela Lei nº 9.876, de 26.11.99) a) a pessoa física, proprietária ou não, que explora atividade agropecuária, a qualquer título, em caráter permanente ou temporário, em área superior a 4 (quatro) módulos fiscais; ou, quando em área igual ou inferior a 4 (quatro) módulos fiscais ou atividade pesqueira, com auxílio de empregados ou por intermédio de prepostos; ou ainda nas hipóteses dos §§ 9o e 10 deste artigo; (Redação dada pela Lei nº 11.718, de 2008) Art. 11. São segurados obrigatórios da Previdência Social as seguintes pessoas físicas: (Redação dada pela Lei nº 8.647, de 1993)[...] VII – como segurado especial: a pessoa física residente no imóvel rural ou em aglomerado urbano ou rural próximo a ele que, individualmente ou em regime de economia familiar, ainda que com o auxílio eventual de terceiros, na condição de: (Redação dada pela Lei nº 11.718, de 2008) a) produtor, seja proprietário, usufrutuário, possuidor, assentado, parceiro ou meeiro outorgados, comodatário ou arrendatário rurais, que explore atividade: (Incluído pela Lei nº 11.718, de 2008) 1. agropecuária em área de até 4 (quatro) módulos fiscais; (Incluído pela Lei nº 11.718, de 2008) 2. de seringueiro ou extrativista vegetal que exerça suas atividades nos termos do inciso XII do caput do art. 2º da Lei nº 9.985, de 18 de julho de 2000, e faça dessas atividades o principal meio de vida; (Incluído pela Lei nº 11.718, de 2008) b) pescador artesanal ou a este assemelhado que faça da pesca profissão habitual ou principal meio de vida; e &nbsp;(Incluído pela Lei nº 11.718, de 2008) c) cônjuge ou companheiro, bem como filho maior de 16 (dezesseis) anos de idade ou a este equiparado, do segurado de que tratam as alíneas a e b deste inciso, que, comprovadamente, trabalhem com o grupo familiar respectivo. (Incluído pela Lei nº 11.718, de 2008) § 10. O segurado especial fica excluído dessa categoria: (Incluído pela Lei nº 11.718, de 2008) [...] I – a contar do primeiro dia do mês em que: (Incluído pela Lei nº 11.718, de 2008) [...] b) enquadrar-se em qualquer outra categoria de segurado obrigatório do Regime Geral de Previdência Social, ressalvado o disposto nos incisos III, V, VII e VIII do § 9o e no § 12, sem prejuízo do disposto no art. 15; [...] &nbsp;Além disso, referido entendimento encontra-se em harmonia com os termos da jurisprudência transcrita a seguir: EMENTA: PREVIDENCIÁRIO. APOSENTADORIA RURAL POR IDADE. REQUISITOS LEGAIS. PRODUÇÃO AGRÍCOLA ELEVADA. UTILIZAÇÃO DE MAQUINÁRIO. DESCARACTERIZAÇÃO DO REGIME DE ECONOMIA FAMILIAR. [...]A produção agrícola elevada associada à utilização de maquinário evidencia a chamada agricultura empresarial, afastando a condição de segurado especial e descaracterizando o regime de economia familiar.” (TRF4 5029495-06.2015.404.9999, Quinta Turma, Relator p/ Acórdão Luiz Antonio Bonat, juntado aos autos em 30/03/2016). Ementa PREVIDENCIÁRIO. TRABALHADOR RURAL. REGIME DE ECONOMIA FAMILIAR. PRODUÇÃO ALÉM DO INDISPENSÁVEL À SUBSISTÊNCIA. 1. A teor do que prevê a legislação previdenciária, o regime de economia familiar se caracteriza pela atividade realizada pelos membros da família, indispensável à própria subsistência, sem o auxílio de empregados 2. Comprovado que a produção supera em muito o indispensável à subsistência do grupo familiar, o proprietário não se enquadra como pequeno produtor rural em regime de economia familiar para a própria subsistência.” (TRF-4, 5ª Turma, publicado em 29/06/04, DJ, p. 322).Assim, não tendo ficado comprovada a condição de segurado especial, na forma do art.11, VII, alínea “a” da Lei 8.213/91, não entendo devido o benefício de aposentadoria por idade rural, na forma do art. 26, III, 39, I c/c 48, §2º da Lei 8.213/91:<br>Lei 8.213/91<br>Art. 26. Independe de carência a concessão das seguintes prestações:<br>[...]<br>III - os benefícios concedidos na forma do inciso I do art. 39, aos segurados especiais referidos no inciso VII do art. 11 desta Lei;<br>[...]<br>Art. 39. &nbsp;Para os segurados especiais, referidos no inciso VII do caput do art. 11 desta Lei, fica garantida a concessão: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 13.846, de 2019)<br>I - de aposentadoria por idade ou por invalidez, de auxílio-doença, de auxílio-reclusão ou de pensão, no valor de 1 (um) salário mínimo, e de auxílio-acidente, conforme disposto no art. 86 desta Lei, desde que comprovem o exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, igual ao número de meses correspondentes à carência do benefício requerido, observado o disposto nos arts. 38-A e 38-B desta Lei; ou &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Redação dada pela Lei nº 13.846, de 2019)<br>[...]<br>Art. 48 [...] &nbsp; &nbsp; &nbsp; &nbsp;§ 2o &nbsp;Para os efeitos do disposto no § 1o deste artigo, o trabalhador rural deve comprovar o efetivo exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, por tempo igual ao número de meses de contribuição correspondente à carência do benefício pretendido, computado o período &nbsp;a que se referem os incisos III a VIII do § 9o do art. 11 desta Lei. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 11,718, de 2008)<br>Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.&nbsp;<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-caso-concreto',
                            texto: '',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>PRODUÇÃO AGRÍCOLA ELEVADA. EVIDENCIA DA CHAMADA AGRICULTURA EMPRESARIAL, AFASTANDO A CONDIÇÃO DE SEGURADO ESPECIAL E DESCARACTERIZANDO O REGIME DE ECONOMIA FAMILIAR. A PRODUÇÃO SUPERA EM MUITO O INDISPENSÁVEL À SUBSISTÊNCIA DO GRUPO FAMILIAR, PORTANTO O PROPRIETÁRIO NÃO SE ENQUADRA COMO PEQUENO PRODUTOR RURAL EM REGIME DE ECONOMIA FAMILIAR PARA A PRÓPRIA SUBSISTÊNCIA, NA FORMA DO ART. 11, VII DA LEI 8.213/91, ESTANDO REFERIDA CONDIÇÃO DESCARACTERIZADA, NA FORMA DO §10 DO MESMO ARTIGO, POR SE ENQUADRAR NA CATEGORIA DE CONTRIBUINTE INDIVIDUAL, NA FORMA DO ART. 11, V, ALÍNEA A DA LEI 8.213/91.</p>',
                        },
                    ],
                    ramificacao: { irPara: 'avançar' },
                },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
                // {
                //     id: '',
                //     label: '',
                //     texto: [
                //         {
                //             categoria: 'relatorio',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-pontos-controversos',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'voto-caso-concreto',
                //             texto: '',
                //         },
                //         {
                //             categoria: 'ementa',
                //             texto: '',
                //         },
                //     ],
                //     ramificacao: { irPara: 'avançar' },
                // },
            ],
        },
    ],
    templates: [
        {
            id: 'relatorio',
            titulo: 'Relatório',
            texto: '<p><strong>RELATÓRIO</strong></p><p><strong>1- Introdução, Contextualização</strong></p><p>Trata-se de <strong>${tipoDeRecurso.padrao}</strong> interposto pela parte recorrente acima citada em face da decisão do <strong>${especie-ro.descricao}${especie-re.descricao}</strong> acima citado que a considerou apto às atividades laborativas.&nbsp;</p><p>${procurador.relatorio}</p><p>${admissibilidade.relatorio}</p><p><strong>2- Elementos pertinentes à espécie</strong></p><p>${motivo-ro-b31.elementos}${motivo-ro-b87.elementos}${motivo-ro-b91.elementos}</p><p><strong>3- Pontos Controversos</strong></p>${pontos-controversos.relatorio}<p><strong>4- Sintese do recurso</strong></p><p>${motivo-ro-b31.recurso}${motivo-ro-b87.recurso}${motivo-ro-b91.recurso}</p><p><strong>5-Diligencias</strong></p><p>${motivo-ro-b31.diligencias}${motivo-ro-b87.diligencias}${motivo-ro-b91.diligencias}</p><p><strong>6- Fechamento</strong></p><p>É o sucinto Relatório. Apresento o feito em mesa.</p>',
        },
        {
            id: 'voto',
            titulo: 'Voto',
            texto: '<p><strong>VOTO</strong></p><p><strong>7- Introdução, Contextualizacao</strong></p><p>${especie-ro.voto}${especie-re.voto}</p><p>${admissibilidade.voto}</p><p><strong>ADMISSIBILIDADE</strong></p><p><strong>8- Admissibilidade</strong></p><p><strong>MÉRITO</strong></p><p><strong>9- Mérito - Requisitos para a prestação</strong></p><p>${motivo-ro-b31.merito}${motivo-ro-b87.merito}${motivo-ro-b91.merito}</p><p><strong>10- Pontos controversos</strong></p>${pontos-controversos.voto-pontos-controversos}<p><strong>11- Caso Concreto</strong></p><p>${motivo-ro-b31.casoConcreto}${motivo-ro-b87.casoConcreto}${motivo-ro-b91.casoConcreto}${pontos-controversos.voto-caso-concreto}</p><p><strong>DECISÃO</strong></p><p><strong>12-Conclusão</strong></p>',
        },
        {
            id: 'ementa',
            titulo: 'Ementa',
            texto: '<p><strong>EMENTA</strong></p><p>${especie-ro.ementa}${especie-re.ementa}</p><p>${admissibilidade.ementa}</p><p>${motivo-ro-b31.ementa}${motivo-ro-b87.ementa}${motivo-ro-b91.ementa}</p>${pontos-controversos.ementa}',
        },
    ],
};
