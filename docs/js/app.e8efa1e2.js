(function(){"use strict";var e={5059:function(e,a,o){var r=o(9242),t=o(9907),i=o.n(t),s=o(3396);const n={class:"container"},c=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("strong",null,"SARC")])],-1),d={class:"container"};function p(e,a,o,r,t,i){const p=(0,s.up)("router-link"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",n,[c,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(p,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Resposta")])),_:1})])])]),(0,s._)("div",d,[(0,s.Wm)(u)])],64)}var u=(0,s.aZ)({name:"App"}),l=o(89);const m=(0,l.Z)(u,[["render",p]]);var g=m,v=o(2483);function f(e,a,o,r,t,i){const n=(0,s.up)("formulario-component");return(0,s.wg)(),(0,s.iD)("main",null,[(0,s.Wm)(n,{formulario:e.formulario,"processador-formulario":e.processadorFormulario},null,8,["formulario","processador-formulario"])])}const b={
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
        '<p><strong>RELATÓRIO</strong></p><p><strong>1- Introdução, Contextualização</strong></p><p>Trata-se de <strong>${tipoDeRecurso.padrao}</strong> interposto pela parte recorrente acima citada em face da decisão do <strong>${especie.descricao}</strong> acima citado que a considerou apto às atividades laborativas.&nbsp;</p><p><strong>procurador.relatorio</strong></p><p>${procurador.relatorio}</p><p><strong>2- Elementos pertinentes à espécie</strong></p><p><strong>acaoJudicial.elementos</strong></p><p>${acaoJudicial.elementos}</p><p><strong>naoComprovacaoDaDeficiencia.elementos</strong></p><p>${naoComprovacaoDaDeficiencia.elementos}</p><p><strong>ntepPmfFavoravel.elementos</strong></p><p>${ntepPmfFavoravel.elementos}</p><p><strong>3- Pontos Controversos</strong></p><p><strong>4- Sintese do recurso</strong></p><p><strong>incapacidadePmfFavoravel.recurso</strong></p><p>${incapacidadePmfFavoravel.recurso}</p><p><strong>incapacidadePmfContrario.recurso</strong></p><p>${incapacidadePmfContrario.recurso}</p><p><strong>naoComprovacaoDaDeficiencia.recurso</strong></p><p>${naoComprovacaoDaDeficiencia.recurso}</p><p><strong>ntepPmfFavoravel.recurso</strong></p><p>${ntepPmfFavoravel.recurso}</p><p><strong>admissibilidade.relatorio</strong></p><p>${admissibilidade.relatorio}</p><p><strong>5-Diligencias</strong></p><p><strong>incapacidadePmfFavoravel.diligencias</strong></p><p>${incapacidadePmfFavoravel.diligencias}</p><p><strong>incapacidadePmfContrario.diligencias</strong></p><p>${incapacidadePmfContrario.diligencias}</p><p><strong>naoComprovacaoDaDeficiencia.diligencias</strong></p><p>${naoComprovacaoDaDeficiencia.diligencias}</p><p><strong>ntepPmfFavoravel.diligencias</strong></p><p>${ntepPmfFavoravel.diligencias}</p><p><strong>6- Fechamento</strong></p><p>É o sucinto Relatório. Apresento o feito em mesa.</p><p><strong>VOTO</strong></p><p><strong>7- Introdução, Contextualizacao</strong></p><p><strong>admissibilidade.voto</strong></p><p>${admissibilidade.voto}</p><p><strong>ADMISSIBILIDADE</strong></p><p><strong>8- Admissibilidade</strong></p><p><strong>MÉRITO</strong></p><p><strong>9- Mérito - Requisitos para a prestação</strong></p><p><strong>acaoJudicial.merito</strong></p><p>${acaoJudicial.merito}</p><p><strong>incapacidadePmfFavoravel.merito</strong></p><p>${incapacidadePmfFavoravel.merito}</p><p><strong>incapacidadePmfContrario.merito</strong></p><p>${incapacidadePmfContrario.merito}</p><p><strong>naoComprovacaoDaDeficiencia.merito</strong></p><p>${naoComprovacaoDaDeficiencia.merito}</p><p><strong>ntepPmfFavoravel.merito</strong></p><p>${ntepPmfFavoravel.merito}</p><p><strong>10- Pontos controversos</strong></p><p><strong>CASO CONCRETO</strong></p><p><strong>11- Caso Concreto</strong></p><p><strong>acaoJudicial.casoConcreto</strong></p><p>${acaoJudicial.casoConcreto}</p><p><strong>incapacidadePmfFavoravel.casoConcreto</strong></p><p>${incapacidadePmfFavoravel.casoConcreto}</p><p><strong>incapacidadePmfContrario.casoConcreto</strong></p><p>${incapacidadePmfContrario.casoConcreto}</p><p><strong>naoComprovacaoDaDeficiencia.casoConcreto</strong></p><p>${naoComprovacaoDaDeficiencia.casoConcreto}</p><p><strong>ntepPmfFavoravel.casoConcreto</strong></p><p>${ntepPmfFavoravel.casoConcreto}</p><p><strong>DECISÃO</strong></p><p><strong>12-Conclusão</strong></p><p><strong>EMENTA</strong></p><p><strong>admissibilidade.ementa</strong></p><p>${admissibilidade.ementa}</p><p><strong>acaoJudicial.ementa</strong></p><p>${acaoJudicial.ementa}</p><p><strong>incapacidadePmfFavoravel.ementa</strong></p><p>${incapacidadePmfFavoravel.ementa}</p><p><strong>incapacidadePmfContrario.ementa</strong></p><p>${incapacidadePmfContrario.ementa}</p><p><strong>naoComprovacaoDaDeficiencia.ementa</strong></p><p>${naoComprovacaoDaDeficiencia.ementa}</p><p><strong>ntepPmfFavoravel.ementa</strong></p><p>${ntepPmfFavoravel.ementa}</p>',
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
}; class E{constructor(e,a,o,r){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"titulo",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"questoes",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"subtitulo",{enumerable:!0,configurable:!0,writable:!0,value:r})}getTitulo(){return this.titulo}getSubtitulo(){return this.subtitulo}getQuestoes(){return this.questoes}getRespostas(){const e=this.questoes.map((e=>e.getResposta())),a={id:this.id,respostasQuestoes:e};return a}}class D{constructor(e,a,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"tipo",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"resposta",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getId(){return this.id}getLabel(){return this.label}getEscapador(){return"${"+this.label+"}"}setResposta(e){this.resposta=e}getResposta(){if(!this.resposta)throw new O(this.getLabel());const e={id:this.id,resposta:this.resposta};return e}}class O extends Error{constructor(e){super(`Resposta não fornecida para a variável ${e}`)}}class P{constructor(e,a,o,r){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"ramificacao",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"variaveis",{enumerable:!0,configurable:!0,writable:!0,value:r})}getId(){return this.id}getLabel(){return this.label}getRamificacoes(){return this.ramificacao}getVariaveis(){return this.variaveis}getResposta(){const e={id:this.getId()};if(this.variaveis){const a=this.variaveis.map((e=>e.getResposta()));e.variaveis=a}return e}}class h extends Error{constructor(e){super(`A opção ${e} não possui textos`)}}o(7658);class x{constructor(){Object.defineProperty(this,"observers",{enumerable:!0,configurable:!0,writable:!0,value:[]})}register(e){this.observers.push(e)}notify(e,a){for(const o of this.observers)o.event===e&&o.callback(a)}}class A extends x{constructor(e,a,o,r){super(),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"titulo",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"tipo",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"subtitulo",{enumerable:!0,configurable:!0,writable:!0,value:r})}getTitulo(){return this.titulo}getId(){return this.id}getSubtitulo(){return this.subtitulo}}class R extends A{constructor(e,a,o,r,t){super(e,a,o,t),Object.defineProperty(this,"opcoes",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"valorSelecionado",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}get semRamificacao(){return this.opcoes.every((e=>"avançar"===e.getRamificacoes().irPara))}get irPara(){var e;return this.semRamificacao?"avançar":(null===(e=this.valorSelecionado)||void 0===e?void 0:e.getRamificacoes().irPara)||null}getResposta(){if(!this.valorSelecionado)throw new I(this.getTitulo());const e={id:this.getId(),resposta:this.valorSelecionado.getResposta()};return e}}class I extends Error{constructor(e){super(`Questão '${e}' sem valor selecionado`)}}class C{static criarDeDto(e){if(!e.opcoes)throw new Error("Questão do tipo opções sem opção");const a=e.opcoes.map((e=>{var a;const o=null===(a=e.variaveis)||void 0===a?void 0:a.map((e=>new D(e.id,e.label,e.tipo)));return new P(e.id,e.label,e.ramificacao,o)})),o=new R(e.id,e.titulo,e.tipo,a,e.subtitulo);if(e.valorPadrao){const r=a.find((a=>a.getId()===e.valorPadrao));if(!r)throw new Error("Opção do valor da pergunta não encontrada");o.valorSelecionado=r}return o}}class S{static criarDeDto(e){const a=e.tipo;if("opcao"===a)return C.criarDeDto(e);throw new q(a)}}class q extends Error{constructor(e){super(`Tipo de Questão não reconhecida: '${e}'`)}}class w{static criarDaEspecificacao(e){const a=e.questoes.map((e=>{try{return S.criarDeDto(e)}catch(a){if(a instanceof q)return;throw a}})).filter((e=>!!e)),o=new E(e.id,e.titulo,a,e.subtitulo);return o}}class T extends Error{constructor(e){super("Ocorreu um erro desconhecido ao criar o formulário"),Object.defineProperty(this,"e",{enumerable:!0,configurable:!0,writable:!0,value:e})}}class N{}class F extends N{constructor(e,a){super(),Object.defineProperty(this,"questaoId",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"categoriaId",{enumerable:!0,configurable:!0,writable:!0,value:a})}getQuestaoId(){return this.questaoId}compararQuestao(e){return this.questaoId.toString()===e.toString()}compararCategoria(e){return this.categoriaId.toString()===e.toString()}toString(){return"${"+this.questaoId+"."+this.categoriaId+"}"}}class y{constructor(e){Object.defineProperty(this,"nome",{enumerable:!0,configurable:!0,writable:!0,value:e}),this.validar(e)}toString(){return this.nome}validar(e){const a=new RegExp("^"+y.pattern+"+$"),o=a.test(e);if(!o)throw new j(e)}}Object.defineProperty(y,"pattern",{enumerable:!0,configurable:!0,writable:!0,value:"[a-zA-Z0-9._-]"});class j extends Error{constructor(e){super(`Fornecido um nome de variável incorreto: "${e}". Os nomes devem conter o padrão ${y.pattern}`)}}class M{criarEscapadoresDeTexto(e){const a=y.pattern,o=new RegExp("\\${("+a+"+\\.*"+a+"*)}","g"),r=Array.from(e.matchAll(o)),t=r.map((e=>{const a=e[1].split("."),o=new y(a[0]),r=new y(a[1]);return new F(o,r)}));return t}}class $ extends N{constructor(e){super(),Object.defineProperty(this,"nomeDaVariavel",{enumerable:!0,configurable:!0,writable:!0,value:e})}getNome(){return this.nomeDaVariavel}compararNome(e){return this.nomeDaVariavel.toString()===e.toString()}toString(){return"${"+this.nomeDaVariavel+"}"}}class z{criarEscapadoresDeTexto(e){const a=y.pattern,o=new RegExp("\\${("+a+"+)}","g"),r=Array.from(e.matchAll(o)),t=r.map((e=>{const a=new y(e[1]);return new $(a)}));return t}}class L{constructor(e,a){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"textos",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:new z})}compararId(e){return e===this.id}processar(e){const a=this.textos.map((a=>{const o=this.escapadorFactory.criarEscapadoresDeTexto(a.texto);let r=a.texto;return o.forEach((a=>{var o;const t=null===(o=e.variaveis)||void 0===o?void 0:o.find((e=>a.compararNome(e.id)));if(!t)throw new V(a.getNome());r=r.replaceAll(a.toString(),t.resposta),t.resposta})),{categoria:a.categoria,texto:r}}));return a}}class V extends Error{constructor(e){super(`Resposta da variável ${e} não encontrada`)}}class U{constructor(e){Object.defineProperty(this,"textoFactory",{enumerable:!0,configurable:!0,writable:!0,value:e})}criarDeEspecificacao(e){const a=e.map((e=>{const a=this.textoFactory.criarDeEspecificacao(e.texto);return new L(e.id,a)}));return a}}class _{constructor(e,a,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadoresDeOpcao",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:o})}compararId(e){return e===this.id}processar(e,a){if(e.id!==this.id)throw new H(e.id,this.id);const o=this.escapadorFactory.criarEscapadoresDeTexto(a),r=o.filter((a=>a.compararQuestao(e.id)));if(!r.length)throw new Q(e.id);let t=a;for(const i of r){const a=this.processadoresDeOpcao.find((a=>a.compararId(e.resposta.id)));if(!a)throw new J(e.resposta.id);const o=a.processar(e.resposta),r=o.find((e=>i.compararCategoria(e.categoria)));if(!r)throw new k(e.resposta.id);t=t.replaceAll(i.toString(),r.texto)}return t}}class Q extends Error{constructor(e){super(`Não encontrou escapador da questão ${e}`)}}class J extends Error{constructor(e){super(`Não encontrou processador da opção da resposta id ${e}`)}}class k extends Error{constructor(e){super(`Texto da Categoria ${e} não encontrado`)}}class H extends Error{constructor(e,a){super(`Id da questão ${e} é diferente do Id do processador ${a}`)}}class G{constructor(e,a){Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadorDeOpcaoFactory",{enumerable:!0,configurable:!0,writable:!0,value:a})}criarDeEspecificacao(e){const a=e.map((e=>{var a;if("opcao"!==e.tipo)throw new B(e.tipo);if(!(null===(a=e.opcoes)||void 0===a?void 0:a.length))throw new Z;const o=this.processadorDeOpcaoFactory.criarDeEspecificacao(e.opcoes);return new _(e.id,o,this.escapadorFactory)}));return a}}class B extends Error{constructor(e){super(`Tipo recebido ${e} é difernte de 'opção'`)}}class Z extends Error{constructor(){super("Especificação de questào de opções não possui opções")}}class X{constructor(e,a,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadoresDeQuestoes",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:o})}processar(e){if(e.id!==this.id)throw new Y;let a=this.template;for(const o of e.respostasQuestoes){const e=this.processadoresDeQuestoes.find((e=>e.compararId(o.id)));if(!e)throw new W(o);a=e.processar(o,a)}if(!a)throw new K;return this.verificarSeSobrouEspacador(a),a}verificarSeSobrouEspacador(e){const a=/\$\{[a-z_]+[a-z_0-9]*\}/;if(a.test(e))throw new ee}}class Y extends Error{constructor(){super("Resposta fornecida não possui o id do processador selecionado")}}class W extends Error{constructor(e){super(`Processador não encontrado para a questão id ${e.id}`)}}class K extends Error{constructor(){super("Processamento não retornou texto")}}class ee extends Error{constructor(){super("Sobrou escapador após o processamnto")}}class ae{constructor(e){Object.defineProperty(this,"questoesFactory",{enumerable:!0,configurable:!0,writable:!0,value:e})}criarDeEspecificacao(e){const a=this.questoesFactory.criarDeEspecificacao(e.questoes),o=new X(e.id,a,e.template);return o}}class oe{constructor(e,a){Object.defineProperty(this,"_categoria",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_texto",{enumerable:!0,configurable:!0,writable:!0,value:a})}get texto(){return this._texto}get categoria(){return this._categoria}}class re{criarDeEspecificacao(e){const a=e.map((e=>new oe(e.categoria,e.texto)));return a}}var te=o(7139);const ie={key:0};function se(e,a,o,r,t,i){const n=(0,s.up)("questao-opcoes"),c=(0,s.up)("ckeditor");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",null,(0,te.zw)(e.formulario.getTitulo()),1),e.formulario.getSubtitulo()?((0,s.wg)(),(0,s.iD)("h2",ie,(0,te.zw)(e.formulario.getSubtitulo()),1)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.formulario.getQuestoes(),(e=>((0,s.wg)(),(0,s.j4)(n,{key:e.rotulo,questao:e},null,8,["questao"])))),128)),(0,s._)("button",{onClick:a[0]||(a[0]=(...a)=>e.gerar&&e.gerar(...a))},"Gerar"),(0,s.Wm)(c,{editor:e.editor,modelValue:e.editorData,"onUpdate:modelValue":a[1]||(a[1]=a=>e.editorData=a),config:e.editorConfig},null,8,["editor","modelValue","config"])],64)}const ne=e=>((0,s.dD)("data-v-7be13170"),e=e(),(0,s.Cn)(),e),ce={key:0},de=["for"],pe=["name","id","value"],ue={key:0},le=ne((()=>(0,s._)("h4",null,"Preencha as variáveis para a resposta:",-1))),me=["for"],ge=["id","name","onUpdate:modelValue"];function ve(e,a,o,t,i,n){var c,d;return(0,s.wg)(),(0,s.iD)("article",null,[(0,s._)("header",null,[(0,s._)("h2",null,(0,te.zw)(e.questao.getTitulo()),1),e.questao.getSubtitulo()?((0,s.wg)(),(0,s.iD)("span",ce,(0,te.zw)(e.questao.getSubtitulo()),1)):(0,s.kq)("",!0)]),(0,s._)("fieldset",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.questao.opcoes,(o=>((0,s.wg)(),(0,s.iD)("label",{key:o.id,for:o.getId()},[(0,s.wy)((0,s._)("input",{type:"radio",name:e.questao.getId(),id:o.getId(),value:o,"onUpdate:modelValue":a[0]||(a[0]=a=>e.questao.valorSelecionado=a)},null,8,pe),[[r.G2,e.questao.valorSelecionado]]),(0,s.Uk)(" "+(0,te.zw)(o.getLabel()),1)],8,de)))),128))]),(null===(c=e.questao.valorSelecionado)||void 0===c?void 0:c.getVariaveis())?((0,s.wg)(),(0,s.iD)("footer",ue,[le,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(null===(d=e.questao.valorSelecionado)||void 0===d?void 0:d.getVariaveis(),(e=>((0,s.wg)(),(0,s.iD)("label",{key:e.id,for:e.getId()},[(0,s.Uk)((0,te.zw)(e.getLabel())+" ",1),(0,s.wy)((0,s._)("input",{type:"text",id:e.getId(),name:e.getId(),"onUpdate:modelValue":a=>e.resposta=a,required:""},null,8,ge),[[r.nr,e.resposta]])],8,me)))),128))])):(0,s.kq)("",!0)])}var fe=(0,s.aZ)({name:"QuestaoOpcoesComponent",props:{questao:{type:R,required:!0}}});const be=(0,l.Z)(fe,[["render",ve],["__scopeId","data-v-7be13170"]]);var Ee=be,De=o(6713),Oe=o.n(De),Pe=(0,s.aZ)({name:"FormularioComponent",data(){b.template;return{editor:Oe(),editorData:"",editorConfig:{}}},props:{formulario:{type:E,required:!0},processadorFormulario:{type:X,required:!0}},components:{QuestaoOpcoes:Ee},methods:{gerar(){try{const e=this.processadorFormulario.processar(this.formulario.getRespostas());console.log({texto:e}),this.editorData=e}catch(e){return console.error(e.message),""}}},computed:{resposta(){try{return this.formulario.getRespostas()}catch(e){return console.error(e.message),""}},processado(){try{return this.processadorFormulario.processar(this.formulario.getRespostas())}catch(e){return console.error(e.message),""}}}});const he=(0,l.Z)(Pe,[["render",se]]);var xe=he;function Ae(){const e=new re,a=new U(e),o=new M,r=new G(o,a),t=new ae(r),i=t.criarDeEspecificacao(b);return i}const Re=Ae(),Ie=w.criarDaEspecificacao(b);var Ce=(0,s.aZ)({data(){return{processadorFormulario:Re,formulario:Ie}},name:"TelaResposta",components:{FormularioComponent:xe}});const Se=(0,l.Z)(Ce,[["render",f]]);var qe=Se;const we=[{path:"/",name:"resposta",component:qe}],Te=(0,v.p7)({history:(0,v.PO)("/"),routes:we});var Ne=Te;(0,r.ri)(g).use(Ne).use(i()).mount("#app")}},a={};function o(r){var t=a[r];if(void 0!==t)return t.exports;var i=a[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,o),i.loaded=!0,i.exports}o.m=e,function(){var e=[];o.O=function(a,r,t,i){if(!r){var s=1/0;for(p=0;p<e.length;p++){r=e[p][0],t=e[p][1],i=e[p][2];for(var n=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(n=!1,i<s&&(s=i));if(n){e.splice(p--,1);var d=t();void 0!==d&&(a=d)}}return a}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,t,i]}}(),function(){o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,{a:a}),a}}(),function(){o.d=function(e,a){for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(a){return 0===e[a]};var a=function(a,r){var t,i,s=r[0],n=r[1],c=r[2],d=0;if(s.some((function(a){return 0!==e[a]}))){for(t in n)o.o(n,t)&&(o.m[t]=n[t]);if(c)var p=c(o)}for(a&&a(r);d<s.length;d++)i=s[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},r=self["webpackChunksarc"]=self["webpackChunksarc"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(5059)}));r=o.O(r)})();
//# sourceMappingURL=app.e8efa1e2.js.map