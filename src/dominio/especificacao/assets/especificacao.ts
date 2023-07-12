import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export const especificacao: EspecificacaoDTO = {
    id: 'gerador_de_acordao',
    titulo: 'Gerador de Acórdão',
    listaQuestoes: [
        {
            id: 'inicio',
            tipo: 'opcao',
            titulo: 'Início',
            valorPadrao: 'elaborar_votos',
            opcoes: [
                {
                    id: 'elaborar_votos',
                    titulo: 'Elaborar Votos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'procurador',
                    },
                },
                {
                    id: 'votos_rapidos',
                    titulo: 'Votos Rápidos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'votos_rapidos',
                    },
                },
            ],
        },
        {
            id: 'votos_rapidos',
            tipo: 'opcao',
            titulo: 'Votos Rápidos',
            valorPadrao: 'ro_-_nao_conhecer_-_acao_judicial_com_mesmo_objeto',
            opcoes: [
                {
                    id: 'ro_-_nao_conhecer_-_acao_judicial_com_mesmo_objeto',
                    titulo: 'RO - Não conhecer - Ação Judicial com mesmo objeto',
                    listaVariaveis: [
                        {
                            id: 'n_acao_judicial',
                            titulo: 'Nº Ação Judicial:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente acima citada em face da decisão proferida pelo Instituto Nacional do Seguro Social – INSS - em requerimento de prestação previdenciária.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa e pleiteia o pagamento da prestação.</p><p>Ingressou com ação judicial ${n_acao_judicial} com mesmo objeto deste recurso administrativo. Após análise, é inequívoca a similaridade da <i>causa petendi</i> entre o processo administrativo e judicial.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte recorrente.</p><p><strong>MÉRITO</strong></p><p>Normatiza a Lei 8.213/91:</p><p>“<i>Art. 126. Compete ao Conselho de Recursos da Previdência Social julgar:&nbsp;</i></p><p><i>I - recursos das decisões do INSS nos processos de interesse dos beneficiários;&nbsp;</i></p><p><i>II - contestações e recursos relativos à atribuição, pelo Ministério da Economia, do Fator Acidentário de Prevenção aos estabelecimentos das empresas;</i></p><p><i>III - recursos das decisões do INSS relacionados à comprovação de atividade rural de segurado especial de que tratam os arts. 38-A e 38-B, ou demais informações relacionadas ao CNIS de que trata o art. 29-A desta Lei.&nbsp;</i></p><p><i>§ 3º A <strong>propositura</strong> de <strong>ação que tenha por objeto idêntico pedido sobre o qual versa o processo administrativo importa renúncia</strong> ao direito de recorrer na esfera administrativa e desistência do recurso interposto.” (destaquei)</i></p><p>No mesmo sentido, dispõe o Decreto 3.048/99:</p><p>“<i>Art. 307. A propositura pelo interessado de ação judicial que tenha por objeto idêntico pedido sobre o qual verse o processo administrativo importará renúncia ao direito de contestar e recorrer na esfera administrativa, com a consequente desistência da contestação ou do recurso interposto.”</i></p><p>Sendo a questão objeto de discussão na esfera judiciária, esta Corte Administrativa perde a sua competência para decidir a matéria. Incorreu o recorrente no disposto pelo Diploma Previdenciário, renunciando tacitamente ao recurso administrativo.</p><p><strong>CONCLUSÃO</strong></p><p>Ante ao exposto, voto por NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ORDINÁRIO. POSSUI AÇÃO JUDICIAL COM MESMO OBJETO DESTE RECURSO ADMINISTRATIVO. RENÚNCIA TÁCITA POR FORÇA DO § 3º DO ART. 126 DA LEI 8.213/91 E ARTIGO 307 DO DECRETO 3.048/99. RECURSO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'ro_-_nao_conhecer_-_intempestividade',
                    titulo: 'RO - Não conhecer - Intempestividade',
                    listaVariaveis: [
                        {
                            id: 'data_da_intimacao',
                            titulo: 'Data da intimação:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo',
                            titulo: 'Data do Protocolo:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente acima citada em face da decisão proferida pelo Instituto Nacional do Seguro Social – INSS - em requerimento de prestação previdenciária.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa e pleiteia o pagamento da prestação.</p><p>Há registro da ciência da decisão em ${data_da_intimacao}, e a interposição do presente recurso ocorreu em ${data_do_protocolo}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte recorrente.</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é intempestivo em razão da intimação ocorrer em ${data_da_intimacao} e a interposição do recurso em ${data_do_protocolo}, portanto, após o prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).&nbsp;</p><p>Somente é possível propor relevação de intempestividade quando configurado o direito inequívoco da parte recorrente. Isso significa que, o reconhecimento do direito, não depende nem mesmo de baixar os autos em diligência.</p><p>Na busca pela definição sobre liquidez e certeza do direito da parte, encontramos o conceito defendido por HELY LOPES MEIRELES, o qual se enquadra ao nosso preceito administrativo, de que: <i>"É o que se apresenta manifesto na sua existência, delimitado na sua extensão e apto a ser exercitado no momento da impetração. Por outras palavras, o direito invocado, para ser amparável por mandado de segurança, há de vir expresso em norma legal e trazer em si todos os requisitos e condições de sua aplicação ao impetrante: se a sua extensão ainda não estiver delimitada<strong>; se o seu exercício depender de situações e fatos ainda não indeterminados, não rende ensejo à segurança</strong>, embora possa ser defendido por outros meios judiciais"</i>. (obra: Mandado de Segurança – Ação Popular, Ação Civil Pública, Mandado de Injunção, "Habeas Data") – Grifo Nosso.</p><p>Ainda menciona o Supremo Tribunal Federal: <i>“A noção de direito líquido e certo ajusta-se, em seu específico sentido jurídico-processual, ao conceito de situação decorrente de fato incontestável e inequívoco, suscetível de imediata demonstração mediante prova literal pré-constituída. Precedentes” (MS 26.552- AgR-AgR, Rel. Min. Celso de Mello, Plenário, DJe 16.10.2009).</i></p><p>No caso em tela, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade preceituada no §1º do Art. 57 do RICRPS.</p><p><strong>CONCLUSÃO</strong></p><p>Ante ao exposto, voto por NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ORDINÁRIO. INTEMPESTIVIDADE, CONFORME ART. 61 DO RICRPS. RECURSO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'ro_-_nao_conhecer_-_direito_reconhecido_pelo_inss',
                    titulo: 'RO - Não conhecer - Direito reconhecido pelo INSS',
                    listaVariaveis: [
                        {
                            id: 'nb_concedido',
                            titulo: 'NB concedido:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente acima citada em face da decisão proferida pelo Instituto Nacional do Seguro Social – INSS - em requerimento de prestação previdenciária.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa e pleiteia o pagamento da prestação.</p><p>Verificou-se que a prestação foi concedida pelo INSS sob o nº ${nb_concedido}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p><strong>MÉRITO</strong></p><p>É a ordem na Portaria Ministerial MTP nº 4.061/2022:</p><p>“<i>Art. 66. O INSS e a SPREV(FAP/RPPS), enquanto não ocorrida a decadência, poderão reconhecer o direito do interessado e reformar suas próprias decisões, observado o seguinte procedimento:</i></p><p><i>I - quando o reconhecimento ocorrer antes do encaminhamento do Recurso Ordinário ao CRPS, o INSS e a SPREV (FAP/RPPS) deixarão de enviar o recurso à Unidade Julgadora competente; e</i></p><p><i>II - quando o reconhecimento ocorrer após a chegada do recurso no CRPS, mesmo que em fase de diligência ou após o julgamento, o INSS e a SPREV (FAP/RPPS), deverão encaminhar os autos à respectiva Unidade Julgadora, devidamente instruído com a comprovação da reforma de sua decisão e do reconhecimento do direito do interessado, para julgamento, se este ainda não tiver ocorrido, ou para que seja proferida nova decisão, se for o caso.”</i></p><p><strong>CONCLUSÃO</strong></p><p>Tendo o direito sido reconhecido integralmente pela Autarquia Previdenciária, voto por NÃO CONHECER DO RECURSO, a fim de ratificar a decisão da Autarquia Previdenciária.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>DIREITO RECONHECIDO INTEGRALMENTE PELO INSS. INCISO II DO ARTIGO 66 DO REGIMENTO INTERNO DO CRPS. RECURSO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'ro_-_esp_31_-_negar_provimento_-_pmf_contrario',
                    titulo: 'RO - Esp 31 - Negar Provimento - PMF contrário',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente acima citada em face da decisão do Auxílio Incapacidade Temporária acima citado que a considerou apto às atividades laborativas.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando e pleiteia o pagamento da prestação previdenciária.</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela inexistência da incapacidade laborativa.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte recorrente.</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é tempestivo em razão de inexistir registro no processo da ciência da parte recorrente, nos termos Art. 64 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).</p><p><strong>MÉRITO</strong></p><p>Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 2º do art. 33 da Portaria MTP nº 4.061/2022.</p><p>Sobre a lide em questão, dispõe o artigo 71 do Decreto n. 3.048/99:</p><p>“<i>Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar <strong>incapacitado para o seu trabalho</strong> ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.</i><strong>” </strong>(grifo nosso)</p><p>No caso dos autos, a pretensão da recorrente encontra obstáculo no preenchimento do requisito da incapacidade, pois, as perícias médicas realizadas concluíram pela inexistência de incapacidade laborativa, não havendo óbice para que a parte recorrente desenvolva suas atividades habituais.</p><p>Também, em parecer técnico devidamente fundamento, a Perícia Médica Federal verificou a inexistência da incapacidade laborativa.</p><p>Dessa forma, ausente o requisito específico da incapacidade laboral, não faz jus à percepção do benefício de auxílio-doença, previsto no art. 59 da Lei 8.213/91, sendo improcedente o pedido.</p><p>Por ordem do inciso I do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E NEGAR-LHE PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>AUXÍLIO POR INCAPACIDADE TEMPORÁRIA PREVIDENCIÁRIO. RECURSO ORDINÁRIO. MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. INEXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL. ARTIGO 71 DO DECRETO 3.048/99. RECURSO CONHECIDO E NÃO PROVIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'ro_-_esp_31_-_dar_provimento_-__pmf_favoravel_para_prorrogacao',
                    titulo: 'RO - Esp 31 - Dar Provimento -  PMF Favorável para prorrogação',
                    listaVariaveis: [
                        {
                            id: 'nova_dcb',
                            titulo: 'Nova DCB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente em face da decisão do Auxílio Incapacidade Temporária acima citado que a considerou apto às atividades laborativas.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando e pleiteia o pagamento da prestação previdenciária.</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da incapacidade laborativa fixando a nova data da cessação em ${nova_dcb}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Assiste razão à parte recorrente.</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é tempestivo em razão de inexistir registro o processo da ciência da parte recorrente, nos termos Art. 64 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).</p><p><strong>MÉRITO</strong></p><p>Voto proferido após ser ouvida a Perícia Médica Federal, nos termos do § 2º do art. 33 da Portaria MTP nº 4.061/2022.</p><p>Sobre a lide em questão, dispõe o Decreto n. 3.048/99:</p><p>“<i>Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar <strong>incapacitado para o seu trabalho</strong> ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.</i><strong>” </strong>(grifo nosso)</p><p>No caso dos autos, a pretensão do recorrente encontra alicerce no parecer da perícia médica oficial.</p><p>Há o cumprimento do requisito da incapacidade, devendo a prestação ser prorrogada na data fixada pela PMF.</p><p>Dessa forma, faz jus à percepção da prestação do auxílio incapacidade laborativa previsto no art. 71 do Decreto 3.048/99, sendo procedente o pedido.</p><p>Por ordem do inciso I do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p><p>Por força da Portaria ME/SEPRT/SEPR nº 1 de 14/01/2020, a implantação dos acórdãos referentes a recursos envolvendo benefícios por incapacidade será feita pelo Instituto Nacional do Seguro Social.</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E DAR-LHE PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>AUXÍLIO INCAPACIDADE TEMPORÁRIA PREVIDENCIÁRIO. RECURSO ORDINÁRIO. MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. EXISTÊNCIA DE INCAPACIDADE LABORATIVA. PRESTAÇÃO PRORROGADA CONFORME PARECER MÉDICO FEDERAL. ARTIGO 71 DO DECRETO 3.048/99. RECURSO CONHECIDO E PROVIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'ro_-_esp_87_-_negar_provimento_-_pmf_nao_reconhece_a_deficiencia',
                    titulo: 'RO - Esp 87 - Negar Provimento - PMF não reconhece a deficiência',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de Recurso Ordinário interposto pela parte recorrente acima citada em face do indeferimento do Benefício de Prestação Continuada da Assistência Social à Pessoa com Deficiência.</p><p>A parte recorrente submeteu-se o requerente à avaliação social e médica, às quais decidiram pela não comprovação da deficiência contida nos §§ 2º e 10 do art. 20 da Lei 8.742/93.</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa e pleiteia a concessão do benefício.</p><p>A perícia médica efetuou a reanálise da avaliação elaborada pelo INSS e decidiu manter a pontuação apurada pelas avaliações social e médica do INSS.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte recorrente.</p><p><strong>MÉRITO</strong></p><p>A Constituição Federal instituiu o benefício assistencial ao deficiente e ao idoso nos seguintes termos:&nbsp;</p><p>“<i>Art. 203. A assistência social será prestada a quem dela necessitar, independentemente da contribuição à seguridade social, e tem por objetivos: (...)&nbsp;</i></p><p><i>V - a garantia de um salário mínimo de benefício mensal à pessoa portadora de deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção ou de tê-la provida por sua família, conforme dispuser a lei.</i>”</p><p>A Lei nº 8.742/1993 normatizou a matéria e fez constar:</p><p>“<i>Art. 20. O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011)</i></p><p><i>(...)</i></p><p><i>§ 2º Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas. (Redação dada pela Lei nº 13.146, de 2015)&nbsp;</i></p><p><i>(…)</i></p><p><i>§ 10. Considera-se impedimento de longo prazo, para os fins do § 2o deste artigo, aquele que produza efeitos pelo prazo mínimo de 2 (dois) anos. (Inclído pela Lei nº 12.470, de 2011)”</i></p><p>O benefício assistencial previsto no artigo 203, V, da Constituição Federal atende situações de hipossuficiência envolvendo pessoa idosa e pessoa portadora de deficiência, incapazes de prover ao próprio sustento ou de tê-lo provido pela própria família. Pressupõe o preenchimento dos seguintes requisitos: a) <strong>condição de deficiente</strong> (incapacidade para o trabalho e para a vida independente) ou idoso (neste caso, considerando-se, desde 1º de janeiro de 2004, a idade de 65 anos); e b) <strong>situação de risco social</strong> (estado de miserabilidade, hipossuficiência econômica ou situação de desamparo) do recorrente e de sua família. Entende-se como incapaz de prover a sua manutenção, aquele cuja renda mensal "<i>per capita</i>" é igual ou inferior a ¼ (um quarto) do salário mínimo, como dispõe o § 3º, do art. 20, Lei nº 8.742/93.&nbsp;</p><p>No caso em tela, o INSS deferiu o requisito de situação de risco social, uma vez que a renda per capta do grupo familiar é menor que ¼ do salário mínimo vigente no requerimento do benefício.</p><p>Todavia, a análise social e médica verificou que o grau de deficiência constatado não cumpre o requisito de deficiência insculpido nos §§ 2º e 10 do art. 20 da Lei 8.742/93.</p><p>Ainda, as avaliações social e médica foram reanalisadas pela perícia médica desta Corte Administrativa, que por sua fez manteve a decisão autárquica.</p><p>Deste modo, não restam comprovados os requisitos relativos à deficiência.</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E NEGAR-LHE PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL À PESSOA COM DEFICIÊNCIA. RECURSO ORDINÁRIO. BENEFÍCIO INDEFERIDO POR NÃO COMPROVAR A DEFICIÊNCIA, NÃO PREENCHENDO OS REQUISITOS DOS § §2º E 10 ARTIGO 20 DA LEI 8.742/93. RECURSO CONHECIDO E NÃO PROVIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'resp_-_nao_conhecer_-_interessado_-_preclusao_pelo_ro_ser_intempestivo',
                    titulo: 'Resp - Não conhecer - Interessado - preclusão pelo RO ser intempestivo',
                    listaVariaveis: [
                        {
                            id: 'junta_de_recursos_contestada',
                            titulo: 'Junta de Recursos contestada:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de recurso especial interposto pela parte interessada em face da decisão da ${junta_de_recursos_contestada}ª Junta de Recursos que não conheceu o recurso ordinário em razão da intempestividade.</p><p>Por seus próprios fundamentos, a Corte Administrativa recorrida não constatou liquidez e certeza do direito da parte e, com isso, não relevou a intempestividade</p><p>Recorre, agora, a parte interessada requerendo a reforma da decisão da Egrégia Junta de Recursos</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte recorrente.</p><p><strong>ADMISSIBILIDADE</strong></p><p>Recurso especial interposto de forma tempestiva. Apesar disso, não há possibilidade de ser conhecido.</p><p>A instância anterior não conheceu do Recurso Ordinário em razão da intempestividade, sem constatação de direito líquido e certo.</p><p>Não se vislumbra a possibilidade de afastar a intempestividade recursal uma vez que não se constata direito inequívoco.</p><p>Deste modo, há possibilidade de a Câmara apreciar o pedido, pois o não conhecimento do recurso ordinário impede a admissão do recurso especial em face da preclusão processual, consoante o inciso VI, do artigo 57 da Portaria MTP nº 4.061/2022.&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO ESPECIAL, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ESPECIAL DA PARTE INTERESSADA. PRECLUSÃO EM RAZÃO DA INTEMPESTIVIDADE DO RECURSO ORDINÁRIO, NOS TERMOS DO INCISO IV DO ART. 57 DA PORTARIA MPT Nº 4.061/2022.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'resp_-_nao_conhecer_-_inss_-_intempestividade',
                    titulo: 'Resp - Não conhecer - INSS - Intempestividade',
                    listaVariaveis: [
                        {
                            id: 'junta_de_recursos_contestada',
                            titulo: 'Junta de Recursos Contestada:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_recebimento_do_processo',
                            titulo: 'Data do Recebimento do Processo:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo_do_recurso_especial',
                            titulo: 'Data do protocolo do Recurso Especial:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de recurso especial interposto pelo Instituto Nacional do Seguro Social (INSS) em face da decisão da ${junta_de_recursos_contestada}ª Junta de Recursos.</p><p>A Autarquia Previdenciária recebeu o processo em ${data_do_recebimento_do_processo}, e a interposição do presente Recurso Especial ocorreu em ${data_do_protocolo_do_recurso_especial}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão ao INSS.</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é intempestivo em razão da Autarquia Previdenciária receber o processo em ${data_do_recebimento_do_processo}, data do início do seu prazo, e somente interpor o presente Recurso Especial em ${data_do_protocolo_do_recurso_especial}, portanto, após o prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).&nbsp;</p><p>Somente é possível propor relevação de intempestividade quando configurado o direito inequívoco da parte recorrente. Isso significa que, o reconhecimento do direito, não depende nem mesmo de baixar os autos em diligência.</p><p>Na busca pela definição sobre liquidez e certeza do direito da parte, encontramos o conceito defendido por HELY LOPES MEIRELES, o qual se enquadra ao nosso preceito administrativo, de que: <i>"É o que se apresenta manifesto na sua existência, delimitado na sua extensão e apto a ser exercitado no momento da impetração. Por outras palavras, o direito invocado, para ser amparável por mandado de segurança, há de vir expresso em norma legal e trazer em si todos os requisitos e condições de sua aplicação ao impetrante: se a sua extensão ainda não estiver delimitada<strong>; se o seu exercício depender de situações e fatos ainda não indeterminados, não rende ensejo à segurança</strong>, embora possa ser defendido por outros meios judiciais"</i>. (obra: Mandado de Segurança – Ação Popular, Ação Civil Pública, Mandado de Injunção, "Habeas Data") – Grifo Nosso.</p><p>Ainda menciona o Supremo Tribunal Federal: <i>“A noção de direito líquido e certo ajusta-se, em seu específico sentido jurídico-processual, ao conceito de situação decorrente de fato incontestável e inequívoco, suscetível de imediata demonstração mediante prova literal pré-constituída. Precedentes” (MS 26.552- AgR-AgR, Rel. Min. Celso de Mello, Plenário, DJe 16.10.2009).</i></p><p>No caso em tela, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade preceituada no §1º do Art. 57 do RICRPS.</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO DO INSS, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ESPECIAL DO INSS. INTEMPESTIVIDADE, CONFORME ART. 61 DO RICRPS. RECURSO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
                    },
                },
                {
                    id: 'resp_-_nao_conhecer_-_interessado_-_intempestividade',
                    titulo: 'Resp - Não conhecer - Interessado - Intempestividade',
                    listaVariaveis: [
                        {
                            id: 'junta_de_recursos_contestada',
                            titulo: 'Junta de Recursos contestada:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_intimacao',
                            titulo: 'Data da intimação:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo',
                            titulo: 'Data do protocolo:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de recurso especial interposto pela parte interessada em face da decisão da ${junta_de_recursos_contestada}ª Junta de Recursos.</p><p>Há registro da ciência da decisão em ${data_da_intimacao}, e a interposição do presente recurso ocorreu em ${data_do_protocolo}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>Não assiste razão à parte interessada.</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é intempestivo em razão da parte recorrente ter ciência da decisão da ${junta_de_recursos_contestada}ª em ${data_da_intimacao}, data do início do seu prazo, e somente interpor o presente Recurso Especial em ${data_do_protocolo}, portanto, após o prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).&nbsp;</p><p>Somente é possível propor relevação de intempestividade quando configurado o direito inequívoco da parte recorrente. Isso significa que, o reconhecimento do direito, não depende nem mesmo de baixar os autos em diligência.</p><p>Na busca pela definição sobre liquidez e certeza do direito da parte, encontramos o conceito defendido por HELY LOPES MEIRELES, o qual se enquadra ao nosso preceito administrativo, de que: <i>"É o que se apresenta manifesto na sua existência, delimitado na sua extensão e apto a ser exercitado no momento da impetração. Por outras palavras, o direito invocado, para ser amparável por mandado de segurança, há de vir expresso em norma legal e trazer em si todos os requisitos e condições de sua aplicação ao impetrante: se a sua extensão ainda não estiver delimitada<strong>; se o seu exercício depender de situações e fatos ainda não indeterminados, não rende ensejo à segurança</strong>, embora possa ser defendido por outros meios judiciais"</i>. (obra: Mandado de Segurança – Ação Popular, Ação Civil Pública, Mandado de Injunção, "Habeas Data") – Grifo Nosso.</p><p>Ainda menciona o Supremo Tribunal Federal: <i>“A noção de direito líquido e certo ajusta-se, em seu específico sentido jurídico-processual, ao conceito de situação decorrente de fato incontestável e inequívoco, suscetível de imediata demonstração mediante prova literal pré-constituída. Precedentes” (MS 26.552- AgR-AgR, Rel. Min. Celso de Mello, Plenário, DJe 16.10.2009).</i></p><p>No caso em tela, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade preceituada no §1º do Art. 57 do RICRPS.</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO DA PARTE INTERESSADA, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ESPECIAL DA PARTE INTERESSADA. INTEMPESTIVIDADE, CONFORME ART. 61 DO RICRPS. RECURSO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'fim do formulário',
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
                    titulo: 'Não',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'tipo_do_processo',
                    },
                },
                {
                    id: 'sim',
                    titulo: 'Sim',
                    listaVariaveis: [
                        {
                            id: 'nome',
                            titulo: 'Nome do procurador',
                            tipo: 'texto',
                        },
                        {
                            id: 'oab',
                            titulo: 'OAB',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>&nbsp;</p><p>A parte recorrente está devidamente representada por ${nome} (OAB nº ${oab}).</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'tipo_do_processo',
                    },
                },
            ],
        },
        {
            id: 'tipo_do_processo',
            tipo: 'opcao',
            titulo: 'Tipo do Processo',
            valorPadrao: 'recurso_ordinario',
            opcoes: [
                {
                    id: 'recurso_ordinario',
                    titulo: 'Recurso Ordinário',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Recurso Ordinário</p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;interposto pela</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;parte recorrente acima citada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;do Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ORDINÁRIO.</strong></p>',
                        },
                        {
                            categoria: 'sintese',
                            texto: '<p>&nbsp;</p><p>Irresignada com a decisão da Autarquia Previdenciária, recorre a parte interessada a esta Corte Administrativa e pleiteia a reforma da decisão.</p>',
                        },
                        {
                            categoria: 'contrarrazoes',
                            texto: '<p>&nbsp;</p><p>&nbsp;O INSS apresentou contrarrazões remissivas e subiram os autos a esta Corte.</p>',
                        },
                        {
                            categoria: 'fechamento',
                            texto: '<p>É o sucinto Relatório. Apresento o feito em mesa.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'especie_ro',
                    },
                },
                {
                    id: 'recurso_especial_do_interessado',
                    titulo: 'Recurso Especial do interessado',
                    listaVariaveis: [
                        {
                            id: 'junta_de_recursos_contestada',
                            titulo: 'Junta de Recursos contestada:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Recurso Especial</p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;interposto&nbsp;</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>pela parte interessada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>da §{junta_de_recursos_contestada}ª Junta de Recursos</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ESPECIAL DA PARTE INTERESSADA.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'recurso_especial_do_inss',
                    titulo: 'Recurso Especial do INSS',
                    listaVariaveis: [
                        {
                            id: 'junta_de_recursos_contestada',
                            titulo: 'Junta de Recursos contestada:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Recurso Especial</p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;interposto</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>pelo Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECURSO ESPECIAL DO INSS.</strong></p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>da §{junta_de_recursos_contestada}ª Junta de Recursos</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'especie-re',
                    },
                },
                {
                    id: 'embargos_de_declaracao_do_interessado',
                    titulo: 'Embargos de Declaração do Interessado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Embargos de Declaração</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>EMBARGOS DE DECLARAÇÃO DA PARTE INTERESSADA.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pela parte interessada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>desta Corte Administrativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'embargos_de_declaracao_do_inss',
                    titulo: 'Embargos de Declaração do INSS',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Embargos de Declaração</p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pelo Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;desta Corte Administrativa</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>EMBARGOS DE DECLARAÇÃO DO INSS.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'revisao_de_acordao_do_interessado',
                    titulo: 'Revisão de Acórdão do Interessado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Revisão de Acórdão</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>REVISÃO DE ACÓRDÃO PELA PARTE INTERESSADA.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pela parte interessada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;desta Corte Administrativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'revisao_de_acordao_do_inss',
                    titulo: 'Revisão de Acórdão do INSS',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Revisão de Acórdão</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>REVISÃO DE ACÓRDÃO PELO INSS.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pelo Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>em face da decisão</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>desta Corte Administrativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'puj_do_interessado',
                    titulo: 'PUJ do Interessado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Pedido de Uniformização de Jurisprudência</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>PEDIDO DE UNIFORMIZAÇÃO DE JURISPRUDÊNCIA PELA PARTE INTERESSADA.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pela parte interessada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;da decisão desta Corte Administrativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'puj_do_inss',
                    titulo: 'PUJ do INSS',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Pedido de Uniformização de Jurisprudência</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>PEDIDO DE UNIFORMIZAÇÃO DE JURISPRUDÊNCIA PELO INSS.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pelo Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;da decisão desta Corte Adminisrativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'reclamacao_ao_conselho_pleno_pelo_interessado',
                    titulo: 'Reclamação ao Conselho Pleno pelo Interessado',
                    listaVariaveis: [
                        {
                            id: 'caj_contestada',
                            titulo: 'CAJ contestada',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Reclamação ao Conselho Pleno solicitado pela parte interessada</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECLAMAÇÃO AO CONSELHO PLENO PELA PARTE INTERESSADA.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitada&nbsp;</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pela parte interessada</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>&nbsp;em face</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;da decisão da ${caj_contestada}</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'reclamacao_ao_conselho_pleno_pelo_inss',
                    titulo: 'Reclamação ao Conselho Pleno pelo INSS',
                    listaVariaveis: [
                        {
                            id: 'caj_contestada',
                            titulo: 'CAJ contestada',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'introducao',
                            texto: '<p>Trata-se de Reclamação ao Conselho Pleno</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>RECLAMAÇÃO AO CONSELHO PLENO PELO INSS.</strong></p>',
                        },
                        {
                            categoria: 'complemento1',
                            texto: '<p>&nbsp;solicitado</p>',
                        },
                        {
                            categoria: 'recorrente',
                            texto: '<p>&nbsp;pelo Instituto Nacional do Seguro Social (INSS)</p>',
                        },
                        {
                            categoria: 'complemento2',
                            texto: '<p>em face</p>',
                        },
                        {
                            categoria: 'recorrido',
                            texto: '<p>&nbsp;da decisão da ${caj_contestada}</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'especie_ro',
            tipo: 'opcao',
            titulo: 'Espécie (RO)',
            opcoes: [
                {
                    id: '21_-_pensao_por_morte',
                    titulo: '21 - Pensão por Morte',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Pensão Por Morte Previdenciária</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;PENSÃO POR MORTE PREVIDENCIÁRIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Pensão por Morte é uma prestação previdenciária devida aos dependentes do segurado instituidor.</p><p>Embora independa de carência (Art. 30, inciso I, Decreto nº 3.048/99), é necessário cumprir os seguintes requisitos: a) que o pretendente à pensão seja <strong>dependente</strong> do segurado; e b) que o instituidor <strong>possua a qualidade de segurado</strong> no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_21',
                    },
                },
                {
                    id: '25_-_auxilio-_reclusao',
                    titulo: '25 - Auxílio- Reclusão',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Auxílio-Reclusão</p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Auxílio-Reclusão é benefício devido aos dependentes do segurado de baixa renda que tenha sido submetido a reclusão em regime fechado.<br>Nessa linha, depende de cinco requisitos a serem preenchidos à época da reclusão: a) que o pretendente ao benefício seja <strong>dependente</strong> do segurado; b) que o instituidor <strong>possua a qualidade de segurado</strong>; c) que o segurado seja de <strong>baixa renda</strong>, ou seja, com rendimentos inferiores a determinado patamar; d) que o <strong>regime</strong> presional seja <strong>fechado</strong>; e e) que o segurado recluso tenha vertido o mínimo de 24 (vinte e quatro) contribuições mensais para efeito de <strong>carência</strong>, nos termos do inciso IV do Art. 29 do Decreto nº 3.048/99.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;AUXÍLIO-RECLUSÃO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_25',
                    },
                },
                {
                    id: '31_-_auxilio_por_incapacidade_temporaria',
                    titulo: '31 - Auxílio Por Incapacidade Temporária',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Auxílio Por Incapacidade Temporária Previdenciário</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;AUXÍLIO POR INCAPACIDADE TEMPORÁRIA PREVIDENCIÁRIO.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Auxílio Por Incapacidade Temporária é um benefício por incapacidade devido ao segurado que, cumprindo a carência mínima exigida, estiver incapacitado para o trabalho ou por suas atividades habituais por mais de 15 dias, conforme normatiza o Art. 71 do Decreto nº 3.048/99:</p><p>“<i>Art. 71.&nbsp; O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.”</i></p><p>Portanto, há três requisitos a serem cumpridos: a) que o requerente seja <strong>segurado</strong>; b) que haja <strong>incapacidade</strong> laboral ou para as atividades habituais; c) que tenha cumprido a <strong>carência</strong>, quando for o caso.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_31',
                    },
                },
                {
                    id: '32_-_aposentadoria_por_incapacidade_permanente',
                    titulo: '32 - Aposentadoria Por Incapacidade Permanente',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria por Incapacidade Permanente</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR INCAPACIDADE PERMANENTE PREVIDENCIÁRIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria Por Incapacidade Permanente é uma prestação devida ao segurado que, cumprindo a carência mínima exigida, estiver incapacitado para o trabalho, de forma total e permanente, e insuscetível de reabilitação para o exercício de atividade que lhe garanta a subsistência, conforme normatiza o Art. 43 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_32',
                    },
                },
                {
                    id: '36_-_auxilio-_acidente',
                    titulo: '36 - Auxílio- Acidente',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Auxílio-Acidente</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;AUXÍLIO-ACIDENTE PREVIDENCIÁRIO.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Auxílio-Acidente é uma prestação de natureza indenizatória devida ao segurado que tiver reduzida a sua capacidade laborativa em razão de uma sequela definitiva decorrente de uma lesão acidentária acidentária, nos termos do Art. 104 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_36',
                    },
                },
                {
                    id: '41_-_aposentadoria_por_idade',
                    titulo: '41 - Aposentadoria Por Idade',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Idade</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR IDADE.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria por Idade é uma prestação devida ao segurado com idade mínima de 65 anos, se homem, e de 60 anos, se mulher, desde que cumpra a carência mínima de 180 contribuições mensais, de acordo com os Arts. 48, <i>caput</i>, e 25, inciso II, ambos da Lei 8.213/91.</p><p>Com a Emenda Constitucional nº 103/2019, a Aposentadoria por Idade deixou de existir em sua modalidade convencional e permaneceu apenas às pessoas com deficiência amparadas pela Lei Complementar nº 142/2013. Entretanto, assegurou-se o direito à prestação aos segurados filiados na Previdência Social até 13/11/2019, &nbsp;vigência da referida emenda, nos termos do Art. 188-H do Decreto nº 3.048/99.</p><p>Deste modo, são os requisitos à prestação: a) <strong>idade mínima</strong> de 65 anos, se homem, e 62 anos, se mulher, acrescendo-se, somente à elas, 6 meses por ano até o limite de 62 anos em 2023; b) quinze anos de <strong>tempo de contribuição</strong>; c) <strong>carência</strong> de 180 contribuições mensais.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_41',
                    },
                },
                {
                    id: '41_-_aposentadoria_por_idade_rural',
                    titulo: '41 - Aposentadoria Por Idade Rural',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Idade do Trabalhador Rural</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR IDADE DO TRABALHADOR RURAL.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria por Idade do Trabalhador Rural é uma prestação devida exclusivamente aos trabalhadores rurais na categoria de segurado empregado, trabalhador avulso, contribuinte individual eventual e segurado especial, e ainda o contribuinte individual garimpeiro, &nbsp;com idade mínima de 60 anos, se homem, e de 55 anos, se mulher.</p><p>É necessária a carência de 180 contribuições mensais, nos termos do inciso II do Art. 29 do Decreto nº 3.048/99, mas se dispensa aos segurados especiais, desde fique comprovado o exercício das atividades campesinas ou pesqueiras, ainda que de forma descontínua, pelo período de 180 meses, além de permanecer nesta categoria no período imediatamente anterior ao requerimento ou do mês em que cumpriu o requisito etário, como requer o § 1º do Art. 56 do Decreto nº 3.048/99.</p><p>Na hipótese do requerente não atender os 180 meses de atividade rurícola ou pesqueira mas satisfaça essa condição com o cômputo das contribuições mensais vertidas em outras categorias de segurado, fará jus à prestação na modalidade híbrida, todavia, a idade mínima estabelecida passa a ser de 65 anos aos homens e 62 anos às mulheres, consoante Art. 57 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_41_rural',
                    },
                },
                {
                    id: '42_-_aposentadoria_por_tempo_de_contribuicao',
                    titulo: '42 - Aposentadoria Por Tempo de Contribuição',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Tempo de Contribuição</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria por Tempo de Contribuição é devida ao segurado homem e à mulher que cumprirem, até a vigência da Emenda Constitucional nº 103/2019 em 13/11/2019, com o tempo de contribuição de 35 anos e 30 anos, nos termos do Art. 188-A do Decreto nº 3.048/99.</p><p>Aos filiados à Previdência Social antes de 13/11/2019 e que não implementarem o tempo mínimo de contribuição, poderão aposentar-se por tempo de contribuição posteriormente, desde que implementem, além do tempo de contribuição mínimo de 35 anos a eles e 30 anos a elas, ao menos uma das seguintes regras de transição previstas no Decreto nº 3.048/99: &nbsp;a) <strong>pedágio de 50%</strong> do tempo que faltava para se aposentar em 13/11/2019, desde que tivessem, nesta data, o mínimo de tempo de contribuição &nbsp;de 33 anos aos homens 28 anos às mulheres, conforme Art. 188-K; b) <strong>idade</strong> mínima de 56 anos a elas e 61 anos a eles, com o acréscimo de 6 meses por ano &nbsp;a contar de 2020, Art. 188-J; c) <strong>pontos</strong> variáveis conforme o ano, Art. 188-I; &nbsp;ou d) <strong>pedágio de 100%</strong> do tempo que faltava para se aposentar em 13/11/2019, desde que elas atinjam a idade mínima de 57 anos e eles 61 anos, Art. 188-L.</p><p>Há também a necessidade de haver a carência mínima de 180 contribuições para se ter direito ao benefício, segundo preceituado no inciso II do artigo 25 da Lei de Benefícios da Previdência Social.</p><p>Não se exige a qualidade de segurado como requisito para este benefício, por força do artigo 3º da Lei 10.666/2003.</p><p>A Constituição da República de 1988, no seu art. 201, § 1º, ressalva a adoção de critérios diferenciados para a concessão de aposentadoria ao trabalhador que exerça efetiva exposição a agentes químicos, físicos e biológicos prejudiciais à saúde, ou associação desses agentes. Este tempo de contribuição em condições especiais, desde que realizado até 13/11/2019 e devidamente comprovado, pode ser convertido em comum, conforme § 5º do Art. 188-P do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_42',
                    },
                },
                {
                    id: '42_-_aposentadoria_por_tempo_de_contribuicao_pcd',
                    titulo: '42 - Aposentadoria Por Tempo de Contribuição (PCD)',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Tempo de Contribuição da Pessoa com Deficiência</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO DA PESSOA COM DEFICIÊNCIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria por Tempo de Contribuição da Pessoa com Deficiência, prestação estabelecida pela Lei Complementar nº 142/2013, é devida ao segurado homem e e mulher com deficiência possuam tempo de contribuição laborados na condição de deficiente, nos seguintes termos:</p><p>“<i>Art. 3º É assegurada a concessão de aposentadoria pelo RGPS ao segurado com deficiência, observadas as seguintes condições:&nbsp;</i></p><p><i>I - aos 25 (vinte e cinco) anos de tempo de contribuição, se homem, e 20 (vinte) anos, se mulher, no caso de segurado com deficiência grave;&nbsp;</i></p><p><i>II - aos 29 (vinte e nove) anos de tempo de contribuição, se homem, e 24 (vinte e quatro) anos, se mulher, no caso de segurado com deficiência moderada;&nbsp;</i></p><p><i>III - aos 33 (trinta e três) anos de tempo de contribuição, se homem, e 28 (vinte e oito) anos, se mulher, no caso de segurado com deficiência leve; ou&nbsp;</i></p><p><i>IV - aos 60 (sessenta) anos de idade, se homem, e 55 (cinquenta e cinco) anos de idade, se mulher, independentemente do grau de deficiência, desde que cumprido tempo mínimo de contribuição de 15 (quinze) anos e comprovada a existência de deficiência durante igual período.&nbsp;</i></p><p><i>Parágrafo único. Regulamento do Poder Executivo definirá as deficiências grave, moderada e leve para os fins desta Lei Complementar.&nbsp;</i></p><p><i>Art. 4o A avaliação da deficiência será médica e funcional, nos termos do Regulamento.&nbsp;</i></p><p><i>Art. 5o O grau de deficiência será atestado por perícia própria do Instituto Nacional do Seguro Social - INSS, por meio de instrumentos desenvolvidos para esse fim."</i></p><p>Observando o texto normativo, é possível depreender a possibilidade de reconhecimento do critério diferenciado na contagem do tempo de contribuição da pessoa com deficiência, dependendo se o grau for <strong>leve, moderado</strong> ou <strong>grave.</strong></p><figure class="table"><table><tbody><tr><td>DEFICIÊNCIA\\GÊNERO</td><td><strong>MASCULINO</strong></td><td><strong>FEMININO</strong></td></tr><tr><td><strong>LEVE</strong></td><td>33*</td><td>28*</td></tr><tr><td><strong>MODERADA</strong></td><td>29*</td><td>24*</td></tr><tr><td><strong>GRAVE</strong></td><td>25*</td><td>20*</td></tr></tbody></table></figure><p><strong>*Anos de Tempo de Contribuição</strong></p><p>A averiguação deste grau é de competência da perícia técnica previdenciária e depende de critérios objetivos para sua comprovação.</p><p>Há também a necessidade de haver a carência mínima de 180 contribuições para se ter direito ao benefício, segundo preceituado no inciso II do artigo 25 da Lei de Benefícios da Previdência Social.</p><p>Não se exige a qualidade de segurado como requisito para este benefício, por força do artigo 3º da Lei 10.666/2003.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_42_pcd',
                    },
                },
                {
                    id: '46_-_aposentadoria_especial',
                    titulo: '46 - Aposentadoria Especial',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Especial</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA ESPECIAL.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Constituição da República de 1988, no seu art. 201, § 1º, inciso I, ressalva a adoção de critérios diferenciados para a concessão de aposentadoria ao trabalhador sujeito, em seu labor, a efetiva exposição a agentes químicos, físicos e biológicos prejudiciais à saúde, ou associação desses agentes, vedada a caracterização por categoria profissional ou ocupação.</p><p>Quanto ao reconhecimento da atividade exercida como especial, deve ser observado o tempo de serviço disciplinado pela lei em vigor à época em que efetivamente exercido, passando a integrar, como direito adquirido, o patrimônio jurídico do trabalhador. Desse modo, uma vez prestado o serviço sob a égide de legislação, o segurado adquire o direito à contagem como tal, bem como à comprovação das condições de trabalho na forma então exigida. Esta exegese é fundada no § 6º ao artigo 188-P do Decreto nº 3.048/99.</p><p>Para fins de enquadramento das categorias profissionais, devem ser considerados os Decretos nºs 53.831/64 e 83.080/79 até 28/04/1995, data da extinção do reconhecimento da atividade especial por presunção legal. Para o enquadramento dos agentes nocivos, devem ser considerados os Decretos nºs 53.831/64 e 83.080/79 até 05/03/1997, o Decreto nº 2.172/97 após 06/03/1997 e o Decreto nº 3.048/99 a contar de 07/05/1999.</p><p>Há também a necessidade de haver a carência mínima de 180 contribuições para se ter direito ao benefício, segundo preceituado no inciso II do artigo 25 da Lei de Benefícios da Previdência Social.</p><p>Não se exige a qualidade de segurado como requisito para este benefício, por força do artigo 3º da Lei 10.666/2003.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_46',
                    },
                },
                {
                    id: '57_-_aposentadoria_por_tempo_de_contribuicao_do_professor',
                    titulo: '57 - Aposentadoria Por Tempo de Contribuição do Professor',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Tempo de Contribuição do Professor</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO DO PROFESSOR.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria por Tempo de Contribuição do Professor é devida ao segurado homem e à mulher que cumprirem, até a vigência da Emenda Constitucional nº 103/2019 em 13/11/2019, com o tempo de contribuição de 30 anos e 25 anos, nos termos do Art. 188-A do Decreto nº 3.048/99.</p><p>Aos filiados à Previdência Social antes de 13/11/2019 e que não implementarem o tempo mínimo de contribuição, poderão aposentar-se por tempo de contribuição posteriormente, desde que implementem, além do tempo de contribuição mínimo de 30 anos a eles e 25 anos a elas, ao menos uma das seguintes regras de transição previstas no Decreto nº 3.048/99: a) <strong>idade</strong> mínima de 51 anos a elas e 56 anos a eles, com o acréscimo de 6 meses por ano &nbsp;a contar de 2020, Art. 188-N; b) <strong>pontos</strong> variáveis conforme o ano, Art. 188-M; &nbsp;ou c) <strong>pedágio de 100%</strong> do tempo que faltava para se aposentar em 13/11/2019, desde que elas atinjam a idade mínima de 52 anos e eles 56 anos, Art. 188-O.</p><p>É imprescindível que os segurados exerçam exclusivamente o tempo mínimo de contribuição em função de magistério na educação infantil, no ensino fundamental ou no ensino médio, sendo consideradas aquelas efetivamente exercidas nas instituições de educação básica, incluídas, além do exercício da docência, as de direção de unidade escolar e as de coordenação e assessoramento pedagógico, nos termos do Enunciado 9 do CRPS.</p><p>Há também a necessidade de haver a carência mínima de 180 contribuições para se ter direito ao benefício, segundo preceituado no inciso II do artigo 25 da Lei de Benefícios da Previdência Social.</p><p>Não se exige a qualidade de segurado como requisito para este benefício, por força do artigo 3º da Lei 10.666/2003.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_57',
                    },
                },
                {
                    id: '80_-_salario-maternidade',
                    titulo: '80 - Salário-Maternidade',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Salário-Maternidade</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;SALÁRIO-MATERNIDADE.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>O salário-maternidade é proteção garantida pelo legislador constituinte, para minorar as dificuldades naturais que se encontra a mulher no estado gestante, sem prejuízo do emprego e do salário e com duração de 120 dias (art. 7º, XVIII da Constituição).</p><p>É benefício que independe do cumprimento de carência para as seguradas empregada, trabalhadora avulsa e empregada doméstica (artigo 26, inciso VI, da Lei nº 8.213/91), mas que requer 10 contribuições previdenciárias para a segurada contribuinte individual e segurada especial (artigo 25, inciso II, da Lei de Benefícios).</p><p>Entretanto, existem outros dois requisitos a serem preenchidos: a) que a criança que veio ao mundo seja filho natural ou adotivo; e b) que a mãe possua a qualidade de segurada na data do fato gerador.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_80',
                    },
                },
                {
                    id: '87_-_bpc_pcd',
                    titulo: '87 - BPC PCD',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Benefício de Prestação Continuada da Assistência Social à Pessoa com Deficiência</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL À PESSOA COM DEFICIÊNCIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Benefício de Prestação Continuada da Assistência Social à Pessoa com Deficiência, regulamentada pela Lei nº 8.742/93, caracteriza-se pela renda mensal de um salário-mínimo à pessoa com deficiência que não possua meios de prover a própria manutenção nem de tê-la provida por sua família.</p><p>Para tanto, existem três requisitos a serem preenchidos: a) <strong>renda</strong> <i>per capita</i> familiar de até 1/4 (um quarto) do salário-mínimo; b) <strong>inscrição</strong> do grupo familiar no Cadastro Único para Programas Sociais do Governo Federal - <strong>CadÚnico</strong>; e c ) grau mínimo de <strong>deficiência</strong> aferido por meio de avaliação social e avaliação médica;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_87',
                    },
                },
                {
                    id: '88_-_bpc_idoso',
                    titulo: '88 - BPC Idoso',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Benefício de Prestação Continuada da Assistência Social à Pessoa Idosa com mais de 65 anos de idade</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL À PESSOA IDOSA COM MAIS DE 65 ANOS DE IDADE.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Benefício de Prestação Continuada da Assistência Social à Pessoa Idosa, regulamentada pela Lei nº 8.742/93, caracteriza-se pela renda mensal de um salário-mínimo à pessoa idosa com 65 anos ou mais e que não possua meios de prover a própria manutenção nem de tê-la provida por sua família.</p><p>Além da idade mínima estabelecida, existem dois requisitos a serem preenchidos: a) <strong>renda</strong> <i>per capita</i> familiar de até 1/4 (um quarto) do salário-mínimo; e b) <strong>inscrição</strong> do grupo familiar no Cadastro Único para Programas Sociais do Governo Federal - <strong>CadÚnico.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_88',
                    },
                },
                {
                    id: '91_-_auxilio_por_incapacidade_temporaria_acidentario',
                    titulo: '91 - Auxílio Por Incapacidade Temporária Acidentário',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Auxílio Por Incapacidade Temporária Acidentário</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;AUXILIO POR INCAPACIDADE TEMPORÁRIA ACIDENTÁRIO.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>O Auxílio Por Incapacidade Temporária Acidentário é um benefício por incapacidade devido ao segurado que, por sofrer um acidente de trabalho, estiver incapacitado para o trabalho ou por suas atividades habituais por mais de 15 dias, conforme normatiza o Art. 71 do Decreto nº 3.048/99:</p><p>“<i>Art. 71.&nbsp; O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial.”</i></p><p>Portanto, há três requisitos a serem cumpridos: a) que o requerente seja <strong>segurado</strong>; b) que haja <strong>incapacidade</strong> laboral ou para as atividades habituais; c) que haja um acidente decorrente do trabalho realizado.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_do_inss_91',
                    },
                },
                {
                    id: '92_-_aposentadoria_por_incapacidade_permanente_acidentaria',
                    titulo: '92 - Aposentadoria Por Incapacidade Permanente Acidentária',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Aposentadoria Por Incapacidade Permanente Acidentária</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;APOSENTADORIA POR INCAPACIDADE PERMANENTE ACIDENTÁRIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Aposentadoria Por Incapacidade Permanente Acidentária é uma prestação devida ao segurado que, em razão de sofrer um acidente de trabalho, estiver incapacitado para o trabalho, de forma total e permanente, e insuscetível de reabilitação para o exercício de atividade que lhe garanta a subsistência, conforme normatiza o Art. 43 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: '93_-_pensao_por_morte_acidentaria',
                    titulo: '93 - Pensão por Morte Acidentária',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'descricao',
                            texto: '<p>Pensão por Morte Acidentária</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;PENSAO POR MORTE ACIDENTÁRIA.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p><strong>MÉRITO</strong></p><p>A Pensão por Morte Acidentária é uma prestação previdenciária devida aos dependentes do segurado instituidor falecido em decorrência de um acidente de trabalho.</p><p>É necessário cumprir os seguintes requisitos: a) que o pretendente à pensão seja <strong>dependente</strong> do segurado; e b) que o instituidor <strong>possua a qualidade de segurado</strong> no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_21',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (21)',
            opcoes: [
                {
                    id: 'falta_de_qualidade_de_dependente_-_companheirismo',
                    titulo: 'Falta de qualidade de dependente - companheirismo',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu a Pensão por Morte em razão do (a) companheiro (a) não comprovar a qualidade de dependente.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der} (DER).</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p>A lide reside na comprovação da qualidade de dependente. Vejamos a prolação do Decreto nº 3.048/99 sobre o tema:</p><p>“<i>Art. 22. &nbsp;A inscrição do dependente do segurado será promovida quando do requerimento do benefício a que tiver direito, mediante a apresentação dos seguintes documentos:&nbsp;</i><br><i>(…)</i><br><i>§ 3º &nbsp;Para comprovação do vínculo e da dependência econômica, conforme o caso, deverão ser apresentados, <strong>no mínimo, dois documentos</strong>, observado o disposto nos § 6º-A e § 8º do art. 16, e poderão ser aceitos, dentre outros:&nbsp;</i><br><i>I - certidão de nascimento de filho havido em comum;</i><br><i>II - certidão de casamento religioso;</i><br><i>III - declaração do imposto de renda do segurado, em que conste o interessado como seu dependente;</i><br><i>IV - disposições testamentárias;</i><br><i>VI - declaração especial feita perante tabelião;</i><br><i>VII - prova de mesmo domicílio;</i><br><i>VIII - prova de encargos domésticos evidentes e existência de sociedade ou comunhão nos atos da vida civil;</i><br><i>IX - procuração ou fiança reciprocamente outorgada;</i><br><i>X - conta bancária conjunta;</i><br><i>XI - registro em associação de qualquer natureza, onde conste o interessado como dependente do segurado;</i><br><i>XII - anotação constante de ficha ou livro de registro de empregados;</i><br><i>XIII - apólice de seguro da qual conste o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária;</i><br><i>XIV - ficha de tratamento em instituição de assistência médica, da qual conste o segurado como responsável;</i><br><i>XV - escritura de compra e venda de imóvel pelo segurado em nome de dependente;</i><br><i>XVI - declaração de não emancipação do dependente menor de vinte e um anos; ou</i><br><i>XVII - quaisquer outros que possam levar à convicção do fato a comprovar.</i><br><i>(…)</i><br><i>§ 14. &nbsp;Caso o dependente só possua um dos documentos a que se refere o § 3º produzido em período não superior a vinte e quatro meses anteriores à data do óbito ou do recolhimento à prisão, a comprovação de vínculo ou de dependência econômica para esse período poderá ser suprida por justificação administrativa, processada na forma prevista nos art. 142 ao art. 151."</i></p><p>Ainda normatiza o Decreto Previdenciário:</p><p><i>”Art. 16.</i><br><i>§ 6º-A &nbsp;As provas de união estável e de dependência econômica exigem início de prova material contemporânea dos fatos, <strong>produzido em período não superior aos vinte e quatro meses anteriores à data do óbit</strong>o ou do recolhimento à prisão do segurado, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, observado o disposto no § 2º do art. 143. ”&nbsp;</i></p><p>Observando o Decreto Regulamentador, é possível depreender que é necessária apenas a apresentação de ao menos dois documentos comprovadores da união estável e que tenham sido constituídos nos vinte e quatro meses anteriores ao óbito.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;PARA COMPROVAR A UNIÃO ESTÁVEL, É NECESSÁRIA A APRESENTAÇÃO DE, NO MÍNIMO, DOIS DOCUMENTOS, CONFORME § 3º DO ART. 22 DO DECRETO Nº 3.048/99. &nbsp;AINDA, SEGUNDO § 6º-A DO DECRETO, TAIS DOCUMENTOS PRECISAM SER PRODUZIDOS NOS VINTE E QUATRO MESES ANTERIORES AO ÓBITO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_as_provas_de_uniao_estavel__dependencia_economica',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_pais_nao_comprovam_dependencia_economica',
                    titulo: 'Falta de qualidade de dependente - pais não comprovam dependência econômica',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu a Pensão por Morte em razão dos pais não comprovarem a dependência econômica.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p>A lide reside na comprovação da qualidade de dependente. Vejamos a prolação do Decreto nº 3.048/99 sobre o tema:</p><p>“<i>Art. 22. &nbsp;A inscrição do dependente do segurado será promovida quando do requerimento do benefício a que tiver direito, mediante a apresentação dos seguintes documentos:&nbsp;</i><br><i>(…)</i><br><i>§ 3º &nbsp;Para comprovação do vínculo e da dependência econômica, conforme o caso, deverão ser apresentados, <strong>no mínimo, dois documentos</strong>, observado o disposto nos § 6º-A e § 8º do art. 16, e poderão ser aceitos, dentre outros:&nbsp;</i><br><i>I - certidão de nascimento de filho havido em comum;</i><br><i>II - certidão de casamento religioso;</i><br><i>III - declaração do imposto de renda do segurado, em que conste o interessado como seu dependente;</i><br><i>IV - disposições testamentárias;</i><br><i>VI - declaração especial feita perante tabelião;</i><br><i>VII - prova de mesmo domicílio;</i><br><i>VIII - prova de encargos domésticos evidentes e existência de sociedade ou comunhão nos atos da vida civil;</i><br><i>IX - procuração ou fiança reciprocamente outorgada;</i><br><i>X - conta bancária conjunta;</i><br><i>XI - registro em associação de qualquer natureza, onde conste o interessado como dependente do segurado;</i><br><i>XII - anotação constante de ficha ou livro de registro de empregados;</i><br><i>XIII - apólice de seguro da qual conste o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária;</i><br><i>XIV - ficha de tratamento em instituição de assistência médica, da qual conste o segurado como responsável;</i><br><i>XV - escritura de compra e venda de imóvel pelo segurado em nome de dependente;</i><br><i>XVI - declaração de não emancipação do dependente menor de vinte e um anos; ou</i><br><i>XVII - quaisquer outros que possam levar à convicção do fato a comprovar.</i><br><i>(…)</i><br><i>§ 14. &nbsp;Caso o dependente só possua um dos documentos a que se refere o § 3º produzido em período não superior a vinte e quatro meses anteriores à data do óbito ou do recolhimento à prisão, a comprovação de vínculo ou de dependência econômica para esse período poderá ser suprida por justificação administrativa, processada na forma prevista nos art. 142 ao art. 151."</i></p><p>Ainda normatiza o Decreto Previdenciário:</p><p><i>”Art. 16.</i><br><i>§ 6º-A &nbsp;As provas de união estável e de dependência econômica exigem início de prova material contemporânea dos fatos, <strong>produzido em período não superior aos vinte e quatro meses anteriores à data do óbit</strong>o ou do recolhimento à prisão do segurado, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, observado o disposto no § 2º do art. 143. ”&nbsp;</i></p><p>Observando o Decreto Regulamentador, é possível depreender que é necessária apenas a apresentação de ao menos dois documentos comprovadores da dependência econômica e que tenham sido constituídos nos vinte e quatro meses anteriores ao óbito.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;PARA COMPROVAR A DEPENDÊNCIA ECONÔMICA, É NECESSÁRIA A APRESENTAÇÃO DE, NO MÍNIMO, DOIS DOCUMENTOS, CONFORME § 3º DO ART. 22 DO DECRETO Nº 3.048/99. &nbsp;AINDA, SEGUNDO § 6º-A DO DECRETO, TAIS DOCUMENTOS PRECISAM SER PRODUZIDOS NOS VINTE E QUATRO MESES ANTERIORES AO ÓBITO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_as_provas_de_uniao_estavel__dependencia_economica',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_menor_sob_guarda',
                    titulo: 'Falta de qualidade de dependente - menor sob guarda',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu a Pensão por Morte em razão do menor sob guarda não ser equiparado a filho</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_filho_nao_comprova_a_invalidezdeficiencia',
                    titulo: 'Falta de qualidade de dependente - filho não comprova a invalidez/deficiência',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; &nbsp;o qual indeferiu a Pensão por Morte em razão do filho (a) não comprovar a condição de inválido ou de pessoa com deficiência intelectual, mental ou grave.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'perda_da_qualidade_de_segurado',
                    titulo: 'Perda da Qualidade de Segurado',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu a Pensão por Morte em razão do (a) segurado (a) instituidor (a) não possuir a qualidade de segurado (a) na data do óbito.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_ocorreu_como',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_segurado_especial',
                    titulo: 'Falta de qualidade de segurado especial',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_do_obito',
                            titulo: 'Data do óbito',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu a Pensão por Morte ante a não comprovação da condição de segurado especial na data do óbito.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.</p><p>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, veio a falecer em ${data_do_obito}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_sobre_as_provas_de_uniao_estavel__dependencia_economica',
            tipo: 'opcao',
            titulo: '(21) Sobre as provas de união estável / dependência econômica:',
            valorPadrao:
                'nao_apresentou_qualquer_documento_e_o_inss_nao_fez_exigencia_adequada',
            opcoes: [
                {
                    id: 'nao_apresentou_qualquer_documento_e_o_inss_nao_fez_exigencia_adequada',
                    titulo: 'Não apresentou qualquer documento e o INSS não fez exigência adequada',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Não houve apresentação de documentos aptos a comprovar a união estável ou a dependência econômica, e o INSS não soliciou, de forma adequada e esclarecedora, a apresentação de tais provas.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'nao_apresentou_qualquer_documento_embora_o_inss_tenha_feito_exigencia_adequada',
                    titulo: 'Não apresentou qualquer documento, embora o INSS tenha feito exigência adequada',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Não houve apresentação de documentos aptos a comprovar a união estável ou a dependência econômica, embora o INSS tenha emitido Carta de Exigência e solicitado a apresentação de tais provas.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'apresentou_documentos',
                    titulo: 'Apresentou documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_documento_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
            ],
        },
        {
            id: '21_documento_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento de união estável / dependência econômica apresentado:',
            opcoes: [
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<p>&nbsp;</p><p>Para comprovar a união estável/dependência econômica, foram juntados os seguintes documentos:</p><ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
                    },
                },
            ],
        },
        {
            id: '21_documento_2_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 2 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_3_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 3 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_4_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 4 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_5_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 5 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_6_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 6 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_7_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 7 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_8_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 8 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_9_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 9 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_documento_10_de_uniao_estavel__dependencia_economica_apresentado',
            tipo: 'opcao',
            titulo: '(21) Documento 10 de união estável / dependência econômica apresentado:',
            valorPadrao: 'nao_ha_mais_documentos',
            opcoes: [
                {
                    id: 'nao_ha_mais_documentos',
                    titulo: 'Não há mais documentos',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'certidao_de_nascimento_de_filho_havido_em_comum',
                    titulo: 'Certidão de nascimento de filho havido em comum',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do Processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de nascimento de filho havido em comum para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'certidao_de_casamento_religioso',
                    titulo: 'Certidão de casamento religioso',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Certidão de casamento religioso datado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_do_imposto_de_renda_do_segurado',
                    titulo: 'Declaração do imposto de renda do segurado',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração do imposto de renda do segurado instituidor em que consta a parte recorrente como seu dependente para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'disposicoes_testamentarias',
                    titulo: 'Disposições testamentárias',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Disposições testamentárias do ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_especial_feita_perante_tabeliao',
                    titulo: 'Declaração especial feita perante tabelião',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração especial feita perante tabelião (escritura pública de união estável) no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_mesmo_domicilio',
                    titulo: 'Prova de mesmo domicílio',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mesmo domicílio para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'prova_de_encargos_domesticos',
                    titulo: 'Prova de encargos domésticos',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Prova de mencargos domésticos para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'procuracao_ou_fianca_reciprocamente_outorgada',
                    titulo: 'Procuração ou fiança reciprocamente outorgada',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Procuração reciprocamente outorgada para o ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'conta_bancaria_conjunta',
                    titulo: 'Conta bancária conjunta',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Conta bancária conjunta no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'registro_em_associacao_de_qualquer_natureza',
                    titulo: 'Registro em associação de qualquer natureza',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Registro em associação onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'anotacao_constante_de_ficha_ou_livro_de_registro_de_empregados',
                    titulo: 'Anotação constante de ficha ou livro de registro de empregados',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Anotação em de ficha de registro de empregados onde consta a parte recorrente como dependente do segurado no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'apolice_de_seguro',
                    titulo: 'Apólice de seguro',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Apólice de seguro onde consta o segurado como instituidor do seguro e a pessoa interessada como sua beneficiária no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ficha_de_tratamento_em_instituicao_de_assistencia_medica',
                    titulo: 'Ficha de tratamento em instituição de assistência médica',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Ficha de tratamento em instituição de assistência médica onde consta o segurado como responsável, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'escritura_de_compra_e_venda_de_imovel',
                    titulo: 'Escritura de compra e venda de imóvel',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Escritura de compra e venda de imóvel pelo segurado em nome do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'declaracao_de_nao_emancipacao_do_dependente',
                    titulo: 'Declaração de não emancipação do dependente',
                    listaVariaveis: [
                        {
                            id: 'folha_do_processo',
                            titulo: 'Folha do processo:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ano_do_documento',
                            titulo: 'Ano do documento',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'dependenteprova',
                            texto: '<ul><li>Declaração de não emancipação do dependente, datada no ano de ${ano_do_documento}, fl. ${folha_do_processo}.</li></ul>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_parecer_pericia_medica_federal',
            tipo: 'opcao',
            titulo: '(21) Parecer Perícia Médica Federal',
            valorPadrao: 'nao_reconhece_a_invalidezdeficiencia',
            opcoes: [
                {
                    id: 'nao_reconhece_a_invalidezdeficiencia',
                    titulo: 'Não reconhece a invalidez/deficiência',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela inexistência da invalidez ou deficiência mental, intelectual ou grave.</p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p>A lide reside na comprovação da qualidade de dependente. Vejamos a prolação do Decreto nº 3.048/99 sobre o tema:</p><p>“<i>Art. 16. São beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado:</i></p><p><i>I - o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de vinte e um anos de idade ou inválido ou que tenha deficiência intelectual, mental ou grave;”&nbsp;</i></p>',
                        },
                        {
                            categoria: 'casoconcreto',
                            texto: '<p>&nbsp;</p><p>No caso dos autos, a invalidez do (a) filho (a) não foi comprovada, conforme perícia médica realizada, razão pela qual não comprova a qualidade de dependente, não fazendo jus à prestação pleiteada no Art. 105 do Decreto nº 3.048/99.<br>Dessa forma, ausente o requisito específico da invalidez ou deficiência mental, intelectual ou grave, não faz jus à percepção do benefício de pensão por morte, sendo improcedente o pedido.</p><p>Por ordem do inciso VII do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS, INCISO VII DO § 1º DO ART. 33 DA PORTARIA MTP Nº 4.061/2022. INEXISTÊNCIA DE INVALIDEZ OU DEFICIÊNCIA INTELECTUAL, MENTAL OU GRAVE DE DEPENDENTE FILHO (A) CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL, NOS TERMOS DO INCISO I DO ART. 16 DO DECRETO 3.048/99.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'reconhece_a_invalidez',
                    titulo: 'Reconhece a invalidez',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da invalidez desde ${dii} (DII).</p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p>A lide reside na comprovação da qualidade de dependente. Vejamos a prolação do Decreto nº 3.048/99 sobre o tema:</p><p>“<i>Art. 16. São beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado:</i></p><p><i>I - o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de vinte e um anos de idade ou inválido ou que tenha deficiência intelectual, mental ou grave;”&nbsp;</i></p>',
                        },
                        {
                            categoria: 'casoconcreto',
                            texto: '<p>&nbsp;</p><p>No caso dos autos, a invalidez do (a) filho (a) não comprovada pela perícia médica realizada, razão pela qual se caracteriza a qualidade de dependente, nos termos do inciso I do Art 16 do Decreto nº 3.048/99.</p><p>Por ordem do inciso VII do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS, INCISO VII DO § 1º DO ART. 33 DA PORTARIA MTP Nº 4.061/2022. EXISTÊNCIA DE INVALIDEZ DE DEPENDENTE FILHO (A) CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL , NOS TERMOS DO INCISO I DO ART. 16 DO DECRETO 3.048/99.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_o_filho_a_dependente_era_na_data_do_obito',
                    },
                },
                {
                    id: 'reconhece_a_deficiencia',
                    titulo: 'Reconhece a deficiência',
                    listaVariaveis: [
                        {
                            id: 'data_do_inicio_da_deficiencia',
                            titulo: 'Data do início da deficiência:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da deficiência mental, intelectual ou grave desde ${data_do_inicio_da_deficiencia}.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS, INCISO VII DO § 1º DO ART. 33 DA PORTARIA MTP Nº 4.061/2022. EXISTÊNCIA DE DEFICIÊNCIA INTELECTUAL, MENTAL OU GRAVE DE DEPENDENTE FILHO (A) CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL, NOS TERMOS DO INCISO I DO ART. 16 DO DECRETO 3.048/99.</strong></p>',
                        },
                        {
                            categoria: 'merito',
                            texto: '<p>&nbsp;</p><p>A lide reside na comprovação da qualidade de dependente. Vejamos a prolação do Decreto nº 3.048/99 sobre o tema:</p><p>“<i>Art. 16. São beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado:</i></p><p><i>I - o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de vinte e um anos de idade ou inválido ou que tenha deficiência intelectual, mental ou grave;”&nbsp;</i></p>',
                        },
                        {
                            categoria: 'casoconcreto',
                            texto: '<p>&nbsp;</p><p>No caso dos autos, a deficiência intelectual, mental ou grave do (a) filho (a) menor de 21 anos de idade foi comprovada pela perícia médica realizada, razão pela qual se caracteriza a qualidade de dependente, nos termos do inciso I do Art 16 do Decreto nº 3.048/99.</p><p>Por ordem do inciso VII do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_o_filho_a_dependente_era_na_data_do_obito',
                    },
                },
            ],
        },
        {
            id: '21_o_filho_a_dependente_era_na_data_do_obito',
            tipo: 'opcao',
            titulo: '(21) O filho (a) dependente era, na data do óbito:',
            valorPadrao: 'menor_de_21_anos_de_idade_e_nao_emancipado',
            opcoes: [
                {
                    id: 'menor_de_21_anos_de_idade_e_nao_emancipado',
                    titulo: 'Menor de 21 anos de idade e não emancipado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>O dependente filho (a) tinha menos de 21 anos de idade na data do óbito do instituidor.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
                    },
                },
                {
                    id: 'maior_de_21_anos_de_idade',
                    titulo: 'Maior de 21 anos de idade',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>O dependente filho (a) tinha mais de 21 anos de idade na data do óbito do instituidor.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_parecer_pericia_medica_federal',
                    },
                },
            ],
        },
        {
            id: '21_sobre_a_qualidade_de_segurado_na_data_do_obito',
            tipo: 'opcao',
            titulo: '(21) Sobre a qualidade de segurado, na data do óbito:',
            opcoes: [
                {
                    id: 'recebeu_beneficio_previdenciario',
                    titulo: 'recebeu benefício previdenciário',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_qualidade_de_segurado_-_prestacao_recebida',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_empregado',
                    titulo: 'manteve a qualidade de segurado empregado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> mantinha a qualidade de segurado empregado na data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era empregado no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_empregado_domestivo',
                    titulo: 'manteve a qualidade de segurado empregado doméstivo',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> mantinha a qualidade de segurado empregado doméstico na data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era empregado doméstico no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_contribuinte_individual',
                    titulo: 'manteve a qualidade de segurado contribuinte individual',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> mantinha a qualidade de segurado contribuinte individual na data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado contribuinte individual no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_facultativo',
                    titulo: 'manteve a qualidade de segurado facultativo',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> mantinha a qualidade de segurado facultativo na data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado facultativo no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_especial',
                    titulo: 'manteve a qualidade de segurado especial',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> mantinha a qualidade de segurado especial na data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado especial no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'nao_possuia_a_qualidade_de_segurado',
                    titulo: 'NÃO possuia a qualidade de segurado',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: '21_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_ocorreu_como',
                    },
                },
            ],
        },
        {
            id: '21_qualidade_de_segurado_-_prestacao_recebida',
            tipo: 'opcao',
            titulo: '(21) Qualidade de segurado - Prestação recebida:',
            opcoes: [
                {
                    id: 'aposentadoria_por_tempo_de_contribuicao',
                    titulo: 'Aposentadoria por Tempo de Contribuição',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'dib',
                            titulo: 'DIB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>O <i>de cujus</i> recebia a prestação de Aposentadoria por Tempo de Contribuição nº ${nb} desde ${dib} até a data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era aposentado sob nº ${nb} no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'auxilio_por_incapacidade_temporaria',
                    titulo: 'Auxílio Por Incapacidade Temporária',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'dib',
                            titulo: 'DIB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>O <i>de cujus</i> recebia a prestação de Auxílio por Incapacidade Temporária nº ${nb} desde ${dib} até a data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que recebia benefício por incapacidade nº ${nb} no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'aposentadoria_por_idade',
                    titulo: 'Aposentadoria por Idade',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'dib',
                            titulo: 'DIB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>O <i>de cujus</i> recebia a prestação de Aposentadoria por Idade nº ${nb} desde ${dib} até a data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era aposentado sob nº ${nb} no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'aposentadoria_por_incapacidade_permanente',
                    titulo: 'Aposentadoria por Incapacidade Permanente',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'dib',
                            titulo: 'DIB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>O <i>de cujus</i> recebia a prestação de Aposentadoria por Incapacidade Permanente nº ${nb} desde ${dib} até a data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era aposentado sob nº ${nb} no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'aposentadoria_especial',
                    titulo: 'Aposentadoria Especial',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'dib',
                            titulo: 'DIB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>O <i>de cujus</i> recebia a prestação de Aposentadoria Especial nº ${nb} desde ${dib} até a data do óbito.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado do <i>de cujus</i>, não há qualquer controvérsia, dispensando maiores considerações, vez que era aposentado sob nº ${nb} no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: '21_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_ocorreu_como',
            tipo: 'opcao',
            titulo: '(21) Sobre a manutenção e perda da qualidade de segurado, a última contribuição ocorreu como:',
            opcoes: [
                {
                    id: 'segurado_empregado',
                    titulo: 'segurado empregado',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como empregado em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '21_acrescimos_legais_ao_periodo_de_graca',
                    },
                },
                {
                    id: 'segurado_empregado_domestico',
                    titulo: 'segurado empregado doméstico',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última filiação do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como empregado doméstico em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado_contribuinte_individual',
                    titulo: 'segurado contribuinte individual',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como segurado contribuinte individual em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado_especial',
                    titulo: 'segurado especial',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última filiação do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como segurado especial em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado_trabalhador_avulso',
                    titulo: 'segurado trabalhador avulso',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como trabalhador avulso em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado_facultativo',
                    titulo: 'segurado facultativo',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do <i>de cujus</i> ao Regime Geral de Previdência Social (RGPS) foi como segurado facultativo em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'beneficio_por_incapacidade',
                    titulo: 'benefício por incapacidade',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), o <i>de cujus</i> recebeu o benefício por incapacidade nº ${nb} até ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '21_acrescimos_legais_ao_periodo_de_graca',
            tipo: 'opcao',
            titulo: '(21) Acréscimos legais ao período de graça:',
            valorPadrao:
                'nao_ha_mais_de_120_contribuicoes_nem_prova_de_desemprego',
            opcoes: [
                {
                    id: 'nao_ha_mais_de_120_contribuicoes_nem_prova_de_desemprego',
                    titulo: 'Não há mais de 120 contribuições nem prova de desemprego',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: '21qualidadediligencia',
                            texto: '<p>&nbsp;</p><p>Não há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado. Também, após consulta ao portal transparencia.sd.mte.gov.br, não consta registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: '21qualidadecasosconcretosacrescimo',
                            texto: '<p>&nbsp;</p><p>Não há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado, os quais poderiam estender a qualidade de segurado por mais 12 meses, segundo o § 1º do Art. 13 do Decreto nº 3.048/99. Também, não há registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, o qual também apliaria o período de graça, conforme § 2º do Art. 13 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'ha_mais_de_120_contribuicao_apenas',
                    titulo: 'Há mais de 120 contribuição, apenas.',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: '21qualidadediligencia',
                            texto: '<p>&nbsp;</p><p>Há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado. Todavia, após consulta ao portal transparencia.sd.mte.gov.br, não consta registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego.</p>',
                        },
                        {
                            categoria: '21qualidadecasosconcretosacrescimo',
                            texto: '<p>&nbsp;</p><p>Embora haja registro no CNIS de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado, os quais ampliam a qualidade de segurado po mais 12 meses, segundo o § 1º do Art. 13 do Decreto nº 3.048/99, não foi suficiente para estender até a data do óbito. Também, não há registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, o qual também apliaria o período de graça, conforme § 2º do Art. 13 do Decreto nº 3.048/99.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'ha_comprovacao_de_desemprego_apenas',
                    titulo: 'Há comprovação de desemprego, apenas',
                    listaVariaveis: [
                        {
                            id: 'folha',
                            titulo: 'folha:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: '21qualidadediligencia',
                            texto: '<p>Não há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado.</p><p>Todavia, após consulta ao portal transparencia.sd.mte.gov.br, verificou-se o registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, fl. ${folha}.</p>',
                        },
                        {
                            categoria: '21qualidadecasosconcretosacrescimo',
                            texto: '<p>&nbsp;</p><p>Não há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado, os quais poderiam estender a qualidade de segurado por mais 12 meses, segundo o § 1º do Art. 13 do Decreto nº 3.048/99.</p><p>Entretanto, constata-se, em consulta formulada ao portal transparencia.sd.mte.gov.br, o registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, o qual apliou, conforme § 2º do Art. 13 do Decreto nº 3.048/99, o período de graça por mais 12 meses, mas não o estendeu o suficiente até a data do óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'ha_mais_de_120_contribuicoes_e_prova_de_desemprego',
                    titulo: 'Há mais de 120 contribuições e prova de desemprego',
                    listaVariaveis: [
                        {
                            id: 'folha',
                            titulo: 'Folha:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: '21qualidadediligencia',
                            texto: '<p>&nbsp;</p><p>Há registro no Cadastro Nacional de Informações Previdenciárias (CNIS) de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado. Ainda, após consulta ao portal transparencia.sd.mte.gov.br, verificou-se o registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, fl. ${folha}.</p>',
                        },
                        {
                            categoria: '21qualidadecasosconcretosacrescimo',
                            texto: '<p>&nbsp;</p><p>Embora haja registro no CNIS de mais de 120 (cento e vinte) contribuições mensais sem perda da qualidade de segurado e também haja o registro da condição de desemprego por órgão próprio do Ministério do Trabalho e Emprego, o qual ampliaram, conforme §§ 1º e 2º do Art. 13 do Decreto nº 3.048/99, o período de graça por mais 24 meses, mas não o estendeu o suficiente até a data do óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_25',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (25)',
            valorPadrao: 'nao_comprova_a_reclusao',
            opcoes: [
                {
                    id: 'nao_comprova_a_reclusao',
                    titulo: 'Não comprova a reclusão',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;segurado instituidor não comprovar a reclusão em regime fechado.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'nao_comprova_ser_trabalhador_de_baixa_renda',
                    titulo: 'Não comprova ser trabalhador de baixa renda',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;segurado instituidor não ser um trabalhador de baixa renda.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_companheiro',
                    titulo: 'Falta de qualidade de dependente - companheiro',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;falta de qualidade de companheiro (a).</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que não havia ficado comprovado companheirismo entre a parte interessada e o <i>de cujus.</i></p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_menor_sob_guarda',
                    titulo: 'Falta de qualidade de dependente - menor sob guarda',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;do menor sob guarda não ser equiparado a filho</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que o menor sob guarda não é depedente do <i>de cujus</i></p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_pais_nao_comprovam_dependencia_economica',
                    titulo: 'Falta de qualidade de dependente - pais não comprovam dependência econômica',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;por falta de qualidade de dependente dos pais por inexistir comprovação de dependência econômica da parte recorrente com o <i>de cujus</i></p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que não havia ficado comprovado a dependência econômica entre a parte interessada e o <i>de cujus</i></p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_dependente_-_filho_nao_comprova_a_invalidezdeficiencia',
                    titulo: 'Falta de qualidade de dependente - filho não comprova a invalidez/deficiência',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;em razão do filho (a) não comprovar a condição de inválido ou deficiente.</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que não havia ficado comprovada a invalidez ou a deficência da parte interessada.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda_da_qualidade_de_segurado',
                    titulo: 'Perda da Qualidade de Segurado',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                        {
                            id: 'ultima_filiacao',
                            titulo: 'Última filiação',
                            tipo: 'texto',
                        },
                        {
                            id: 'competencia_da_ultima_contribuicao',
                            titulo: 'Competência da última contribuição:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_perda_da_qualidade',
                            titulo: 'Data da perda da qualidade:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;indeferido por perda da qualidade de segurado</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que o <i>de cujus </i>havia perdido a qualidade de segurado.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_qualidade_de_segurado_especial',
                    titulo: 'Falta de qualidade de segurado especial',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'nome_do_segurado',
                            titulo: 'Nome do segurado:',
                            tipo: 'texto',
                        },
                        {
                            id: 'data_da_reclusao',
                            titulo: 'Data da reclusão',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'motivo',
                            texto: '<p>&nbsp;indeferido ante a não comprovação da condição de segurado especial na data da reclusão.</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia negado a concessão da prestação por entender que o <i>de cujus</i> não havia comprovado a condição de segurado especial na data da reclusão.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>O benefício em questão foi requerido em ${der}.<br>O (a) segurado (a) instituidor (a), ${nome_do_segurado}, foi submetido à reclusão em ${data_da_reclusao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_31',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (31)',
            valorPadrao: 'parecer_contrario_da_pericia_medica',
            opcoes: [
                {
                    id: 'parecer_contrario_da_pericia_medica',
                    titulo: 'Parecer contrário da perícia médica',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp;o qual indeferiu o Auxílio Por Incapacidade Temporária ante a não comprovação da incapacidade laborativa pela Perícia Médica Federal (PMF).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela inexistência da incapacidade laborativa.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'cessacao_por_limite_medico',
                    titulo: 'Cessação por limite médico',
                    listaVariaveis: [
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual cessou o Auxílio Por Incapacidade Temporária pela não comprovação da continuidade da incapacidade laborativa, nos termos da Perícia Médica Federal (PMF).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa até ${dcb}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'nao_comparecimento_a_pericia_medica',
                    titulo: 'Não comparecimento à perícia médica',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária por não comparecimento à perícia médica.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente não compareceu à perícia médica, razão pela qual não ficou comprovada a incapacidade laborativa</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'incapacidade_inferior_a_15_dias',
                    titulo: 'Incapacidade inferior a 15 dias',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária em razão da incapacidade laborativa ser inferior a 15 dias.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}. A doença não isenta de carência.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'perda_da_qualidade_de_segurado',
                    titulo: 'Perda da qualidade de segurado',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp;o qual indeferiu o Auxílio Por Incapacidade Temporária por perda da qualidade de segurado.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}.&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_antes_da_dii_ocorreu_como',
                    },
                },
                {
                    id: 'falta_de_carencia',
                    titulo: 'Falta de carência',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                        {
                            id: 'data_inicio_contribuicoes',
                            titulo: 'Data Início Contribuições',
                            tipo: 'data',
                        },
                        {
                            id: 'data_ultima_contribuicao',
                            titulo: 'Data Última Contribuição',
                            tipo: 'data',
                        },
                        {
                            id: 'quantidade_de_contribuicoes_reconhecidas_pelo_inss',
                            titulo: 'Quantidade de Contribuições reconhecidas pelo INSS',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp;o qual indeferiu o Auxílio Por Incapacidade Temporária por falta de carência.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}. A doença não isenta de carência.</p><p>Consta no Cadastro Nacional de Informações Previdenciárias (CNIS) contribuições de ${data_inicio_contribuicoes} até ${data_ultima_contribuicao}.&nbsp;</p><p>O Instituto Nacional do Seguro Social (INSS) entendeu a existência de ${quantidade_de_contribuicoes_reconhecidas_pelo_inss} contribuições mensais, razão pela qual indeferiu a prestação.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'falta_de_carencia_-_apos_perda_da_qualidade_nao_completou_nova_carencia',
                    titulo: 'Falta de carência - após perda da qualidade não completou nova carência',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'data_inicio_contribuicoes',
                            titulo: 'Data Inicio Contribuições',
                            tipo: 'data',
                        },
                        {
                            id: 'data_ultima_contribuicao_antes_da_perda',
                            titulo: 'Data última contribuição antes da perda',
                            tipo: 'data',
                        },
                        {
                            id: 'data_da_ultima_filiacao',
                            titulo: 'Data da última filiação',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária por falta de carência, pois, após a perda da qualidade de segurado, não houve recolhimentos mensais suficientes para reaver as contribuições anteriores a perda.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii}. A doença não isenta de carência.</p><p>Consta no Cadastro Nacional de Informações Previdenciárias (CNIS) contribuições de ${data_inicio_contribuicoes} até ${data_ultima_contribuicao_antes_da_perda}. Depois, a primeira contribuição válida ocorreu em ${data_da_ultima_filiacao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'falta_de_carencia_-_segurado_especial',
                    titulo: 'Falta de carência - segurado especial',
                    listaVariaveis: [
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária em razão da parte recorrente não ter comprovado o efetivo exercício da atividade rurícola pelos meses correspondentes à carência da prestação.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}. A doença não isenta de carência.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'dib_maior_que_a_dcb',
                    titulo: 'DIB maior que a DCB',
                    listaVariaveis: [
                        {
                            id: 'der',
                            titulo: 'DER',
                            tipo: 'data',
                        },
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária em razão do requerimento do benefício ser posterior ao trigésimo dia do início da incapacidade e, ainda, posterior ao término desta.</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A prestação foi requerida em ${der} (DER).</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}.&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'dii_anterior_ao_ingressoreingresso_ao_rgps',
                    titulo: 'DII anterior ao ingresso/reingresso ao RGPS',
                    listaVariaveis: [
                        {
                            id: 'did',
                            titulo: 'DID',
                            tipo: 'data',
                        },
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                        {
                            id: 'data_inicio_contribuicoes',
                            titulo: 'Data início contribuições',
                            tipo: 'data',
                        },
                        {
                            id: 'data_da_ultima_contribuicao',
                            titulo: 'data da última contribuição',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária em razão do início da incapacidade ser posterior ao ingresso ou reingresso ao Regime Geral de Previdência Social (RGPS).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da doença em ${did} e da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}. A doença não isenta de carência.</p><p>Consta no Cadastro Nacional de Informações Previdenciárias (CNIS) contribuições de ${data_inicio_contribuicoes} até ${data_da_ultima_contribuicao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'did_anterior_ao_reingresso_ao_rgps',
                    titulo: 'DID anterior ao reingresso ao RGPS',
                    listaVariaveis: [
                        {
                            id: 'did',
                            titulo: 'DID',
                            tipo: 'data',
                        },
                        {
                            id: 'dii',
                            titulo: 'DII',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                        {
                            id: 'data_inicio_contribuicoes',
                            titulo: 'Data início contribuições',
                            tipo: 'data',
                        },
                        {
                            id: 'data_ultima_contribuicao_antes_da_perda',
                            titulo: 'Data ultima contribuição antes da perda',
                            tipo: 'data',
                        },
                        {
                            id: 'data_da_ultima_filiacao',
                            titulo: 'Data da última filiação',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual indeferiu o Auxílio Por Incapacidade Temporária em razão da doença ser anterior a nova filiação ao Regime Geral de Previdência Social (RGPS).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da doença em ${did} e da incapacidade laborativa desde ${dii} e sua comprovação até ${dcb}. A doença isenta de carência.</p><p>Consta no Cadastro Nacional de Informações Previdenciárias (CNIS) contribuições de ${data_inicio_contribuicoes} até ${data_ultima_contribuicao_antes_da_perda}. Depois, a primeira contribuição válida ocorreu em ${data_da_ultima_filiacao}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: 'parecer_pericia_medica_federal',
            tipo: 'opcao',
            titulo: 'Parecer Perícia Médica Federal',
            valorPadrao: 'manter_a_decisao_negativa_anterior',
            opcoes: [
                {
                    id: 'manter_a_decisao_negativa_anterior',
                    titulo: 'Manter a decisão negativa anterior',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'recurso',
                            texto: '<p>&nbsp;</p><p>Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando e pleiteia o pagamento da prestação previdenciária.</p>',
                        },
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela inexistência da incapacidade laborativa.</p>',
                        },
                        {
                            categoria: 'casoconcreto',
                            texto: '<p>&nbsp;</p><p><strong>CASO CONCRETO</strong></p><p>No caso dos autos, a pretensão da recorrente encontra obstáculo no preenchimento do requisito da incapacidade, pois, as perícias médicas realizadas concluíram pela inexistência de incapacidade laborativa, não havendo óbice para que a parte recorrente desenvolva suas atividades habituais.</p><p>Também, em parecer técnico devidamente fundamento, a Perícia Médica Federal verificou a inexistência da incapacidade laborativa.</p><p>Dessa forma, ausente o requisito específico da incapacidade laboral, não faz jus à percepção do benefício de auxílio-doença, previsto no art. 59 da Lei 8.213/91, sendo improcedente o pedido.</p><p>Por ordem do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS, CONFORME § 1º DO ART. 33 DA PORTARIA MTP Nº 4.061/2022. INEXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL DESTA CORTE ADMINISTRATIVA. ARTIGO 71 DO DECRETO 3.048/99.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'prorrogar_a_incapacidade',
                    titulo: 'Prorrogar a incapacidade',
                    listaVariaveis: [
                        {
                            id: 'dataNovaCessacao',
                            titulo: 'Nova cessação',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'recurso',
                            texto: 'Irresignada com a decisão da Autarquia, recorre a parte interessada a esta Corte Administrativa apresentando e pleiteia o pagamento da prestação previdenciária.',
                        },
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da incapacidade laborativa fixando a nova data da cessação ${dataNovaCessacao}.</p>',
                        },
                        {
                            categoria: 'casoconcreto',
                            texto: '<p>&nbsp;</p><p><strong>CASO CONCRETO</strong></p><p>No caso dos autos, a pretensão do recorrente encontra alicerce no parecer da perícia médica oficial. Há o cumprimento do requisito da incapacidade, devendo a prestação ser prorrogada na data fixada pela PMF.</p><p>Dessa forma, faz jus à percepção da prestação do auxílio incapacidade laborativa previsto no Art. 71 do Decreto 3.048/99, sendo procedente o pedido.</p><p>Por ordem do § 1º do Art. 33 da Portaria MTP nº 4.061/2022, a matéria posta em discussão é de matéria de alçada da Junta de Recursos, inexistindo competência das Câmaras de Julgamento para apreciação da matéria.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS, CONFORME § 1º DO ART. 33 DA PORTARIA MTP Nº 4.061/2022. EXISTÊNCIA DE INCAPACIDADE LABORATIVA. PRESTAÇÃO PRORROGADA CONFORME PARECER MÉDICO FEDERAL. ARTIGO 71 DO DECRETO 3.048/99.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'reconhecer_a_incapacidade',
                    titulo: 'Reconhecer a incapacidade',
                    listaVariaveis: [
                        {
                            id: 'did',
                            titulo: 'DID:',
                            tipo: 'data',
                        },
                        {
                            id: 'dii',
                            titulo: 'DII:',
                            tipo: 'data',
                        },
                        {
                            id: 'dcb',
                            titulo: 'DCB:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'diligencias',
                            texto: '<p>&nbsp;</p><p>Em diligência preliminar, foi ouvida a Perícia Médica Federal - PMF. Esta, por sua vez, entendeu pela existência da doença desde ${did} (DID) e da incapacidade laborativa com início em ${dii} (DII) até ${dcb} (DCB).</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>MATÉRIA DE ALÇADA DA JUNTA DE RECURSOS. EXISTÊNCIA DE INCAPACIDADE LABORATIVA CONFIRMADA PELA PERÍCIA MÉDICA FEDERAL DESTA CORTE ADMINISTRATIVA. ARTIGO 71 DO DECRETO 3.048/99.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_qualidade_de_segurado_no_evento_gerador_dii',
                    },
                },
            ],
        },
        {
            id: '31_sobre_a_qualidade_de_segurado_no_evento_gerador_dii',
            tipo: 'opcao',
            titulo: '(31) Sobre a qualidade de segurado, no evento gerador DII:',
            opcoes: [
                {
                    id: 'manteve_a_qualidade_de_segurado_empregado',
                    titulo: 'manteve a qualidade de segurado empregado',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada empregada no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado empregado no início da incapacidade.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_empregado_domestivo',
                    titulo: 'manteve a qualidade de segurado empregado doméstivo',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada empregada doméstica avulsa no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era empregado doméstico no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_contribuinte_individual',
                    titulo: 'manteve a qualidade de segurado contribuinte individual',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada contribuinte individual no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado contribuinte individual no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_facultativo',
                    titulo: 'manteve a qualidade de segurado facultativo',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada facultativa no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado facultativo no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_especial',
                    titulo: 'manteve a qualidade de segurado especial',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada especial no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado especial no óbito.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'manteve_a_qualidade_de_segurado_trabalhador_avulso',
                    titulo: 'manteve a qualidade de segurado trabalhador avulso',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_qualidade',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a parte recorrente está filiada como segurada trabalhadora avulsa no início da incapacidade.</p>',
                        },
                        {
                            categoria: 'merito_qualidade',
                            texto: '<p>&nbsp;</p><p>No que se refere à qualidade de segurado, não há qualquer controvérsia, dispensando maiores considerações, vez que era segurado trabalhador avulso no início da incapacidade.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: '31_sobre_a_carencia_no_evento_gerador_dii',
                    },
                },
                {
                    id: 'nao_possuia_a_qualidade_de_segurado',
                    titulo: 'NÃO possuia a qualidade de segurado',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: '31_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_antes_da_dii_ocorreu_como',
            tipo: 'opcao',
            titulo: '(31) Sobre a manutenção e perda da qualidade de segurado, a última contribuição antes da DII ocorreu como:',
            opcoes: [
                {
                    id: 'segurado_empregado',
                    titulo: 'segurado empregado',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição ao Regime Geral de Previdência Social (RGPS) foi como empregado em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'segurado_empregado_domestico',
                    titulo: 'segurado empregado doméstico',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última filiação ao Regime Geral de Previdência Social (RGPS) foi como empregado doméstico em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'segurado_contribuinte_individual',
                    titulo: 'segurado contribuinte individual',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição ao Regime Geral de Previdência Social (RGPS) foi como segurado contribuinte individual em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'segurado_especial',
                    titulo: 'segurado especial',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última filiação do ao Regime Geral de Previdência Social (RGPS) foi como segurado especial em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'segurado_trabalhador_avulso',
                    titulo: 'segurado trabalhador avulso',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do ao Regime Geral de Previdência Social (RGPS) foi como trabalhador avulso em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'segurado_facultativo',
                    titulo: 'segurado facultativo',
                    listaVariaveis: [
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição do ao Regime Geral de Previdência Social (RGPS) foi como segurado facultativo em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'beneficio_por_incapacidade',
                    titulo: 'benefício por incapacidade',
                    listaVariaveis: [
                        {
                            id: 'nb',
                            titulo: 'NB:',
                            tipo: 'texto',
                        },
                        {
                            id: 'ultima_competencia',
                            titulo: 'Última competência:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>Conforme consta no Cadastro Nacional de Informações Sociais (CNIS), a última contribuição a ser considerada está no recebimento do benefício por incapacidade nº ${nb} em ${ultima_competencia}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: '31_sobre_a_carencia_no_evento_gerador_dii',
            tipo: 'opcao',
            titulo: '(31) Sobre a carência, no evento gerador DII:',
            opcoes: [
                {
                    id: 'possui_contribuicoes_suficientes',
                    titulo: 'Possui contribuições suficientes',
                    listaVariaveis: [
                        {
                            id: 'quantidade_de_contribuicoes',
                            titulo: 'Quantidade de contribuições:',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'elementos_carencia',
                            texto: '<p>&nbsp;</p><p>Apurou-se o total de ${quantidade_de_contribuicoes} contribuições para efeito de carência antes do início da incapacidade.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'a_pmf_isentou_de_carencia',
                    titulo: 'A PMF isentou de carência.',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_carencia',
                            texto: '<p>&nbsp;</p><p>Conforme parecer técnico da PMF, há isenção de carência.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'nao_possui_carencia',
                    titulo: 'Não possui carência.',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'elementos_carencia',
                            texto: '<p>&nbsp;</p><p>Apurou-se o total de ${quantidade_de_contribuicoes} contribuições para efeito de carência antes do início da incapacidade.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_32',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (32)',
            valorPadrao: 'cessacao_por_limite_medico',
            opcoes: [
                {
                    id: 'cessacao_por_limite_medico',
                    titulo: 'Cessação por limite médico',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
                {
                    id: 'majoracao_de_25_negada',
                    titulo: 'Majoração de 25% negada',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_36',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (36)',
            valorPadrao: 'cumulacao',
            opcoes: [
                {
                    id: 'cumulacao',
                    titulo: 'Cumulação',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'admissibilidade',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_41',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (41)',
            valorPadrao: 'falta_de_carencia',
            opcoes: [
                {
                    id: 'falta_de_carencia',
                    titulo: 'Falta de carência',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_tempo_de_contribuicao',
                    titulo: 'Falta de tempo de contribuição',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_41_rural',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (41 Rural)',
            valorPadrao: 'nao_comprovacao_de_atividade_rural',
            opcoes: [
                {
                    id: 'nao_comprovacao_de_atividade_rural',
                    titulo: 'Não comprovação de atividade rural',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_42',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (42)',
            valorPadrao: 'falta_de_tempo_de_contribuicao',
            opcoes: [
                {
                    id: 'falta_de_tempo_de_contribuicao',
                    titulo: 'Falta de tempo de contribuição',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_42_pcd',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (42 PCD)',
            valorPadrao: 'falta_de_tempo_de_contribuicao',
            opcoes: [
                {
                    id: 'falta_de_tempo_de_contribuicao',
                    titulo: 'Falta de tempo de contribuição',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_46',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (46)',
            valorPadrao: 'falta_de_tempo_de_contribuicao',
            opcoes: [
                {
                    id: 'falta_de_tempo_de_contribuicao',
                    titulo: 'Falta de tempo de contribuição',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_57',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (57)',
            valorPadrao: 'falta_de_tempo_de_contribuicao',
            opcoes: [
                {
                    id: 'falta_de_tempo_de_contribuicao',
                    titulo: 'Falta de tempo de contribuição',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_80',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (80)',
            valorPadrao: 'competencia_do_pagamento_da_empresa',
            opcoes: [
                {
                    id: 'competencia_do_pagamento_da_empresa',
                    titulo: 'Competência do pagamento da empresa',
                    listaVariaveis: [],
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'falta_de_carencia',
                    titulo: 'Falta de carência',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'nao_comprovacao_de_atividade_rural',
                    titulo: 'Não comprovação de atividade rural',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda_da_qualidade_de_segurada',
                    titulo: 'Perda da qualidade de segurada',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_87',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (87)',
            valorPadrao: 'renda_per_capita_superior_ao_minimo',
            opcoes: [
                {
                    id: 'renda_per_capita_superior_ao_minimo',
                    titulo: 'Renda per capita superior ao mínimo',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cadunico_inexistente_ou_desatualizado',
                    titulo: 'CadÚnico inexistente ou desatualizado',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'nao_comprova_a_deficiencia',
                    titulo: 'Não comprova a deficiência',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_88',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (88)',
            valorPadrao: 'renda_per_capita_superior_ao_minimo',
            opcoes: [
                {
                    id: 'renda_per_capita_superior_ao_minimo',
                    titulo: 'Renda per capita superior ao mínimo',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cadunico_inexistente_ou_desatualizado',
                    titulo: 'CadÚnico inexistente ou desatualizado',
                    listaTextos: [],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
            ],
        },
        {
            id: 'decisao_do_inss_91',
            tipo: 'opcao',
            titulo: 'Decisão do INSS (91)',
            valorPadrao: 'ntep_reconhecido',
            opcoes: [
                {
                    id: 'ntep_reconhecido',
                    titulo: 'NTEP reconhecido',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual constatou o nexo entre o trabalho exercido e o trabalho e, assim, culminou na concessão desta prestação como Acidentária (espécie 91).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A perícia médica federal reconheceu o nexo técnico entre a incapacidade e a atividade laborativa.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
                {
                    id: 'cessacao_por_limite_medico',
                    titulo: 'Cessação por limite médico',
                    listaVariaveis: [
                        {
                            id: 'dcb',
                            titulo: 'DCB',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'complemento3',
                            texto: '<p>&nbsp; o qual cessou o Auxílio Por Incapacidade Temporária pela não comprovação da continuidade da incapacidade laborativa, nos termos da Perícia Médica Federal (PMF</p>',
                        },
                        {
                            categoria: 'motivo_resp',
                            texto: '<p>&nbsp;</p><p>O INSS havia cessado o benefício por incapacidade em §{dcb} ante a não comprovação da continuidade da incapacidade laborativa, nos termos do parecer da Perícia Médica Federal (PMF).</p>',
                        },
                        {
                            categoria: 'elementos',
                            texto: '<p>&nbsp;</p><p>A parte recorrente submetida a perícia médica, que por sua vez concluiu pela existência da incapacidade laborativa até ${dcb}.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'parecer_pericia_medica_federal',
                    },
                },
            ],
        },
        {
            id: 'pontos_controversos',
            tipo: 'selecao',
            titulo: 'Pontos Controversos',
            opcoes: [
                {
                    id: 'carencia',
                    titulo: 'Carência',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'carencia-doencao-nao-isenta',
                    titulo: 'Carência – Doença não isenta carência',
                    listaVariaveis: [
                        {
                            id: 'tipo-segurado',
                            titulo: 'Tipo de Segurado',
                            tipo: 'texto',
                        },
                        {
                            id: 'inicio-qualidade-segurado',
                            titulo: 'Data início da qualidade de Segurado',
                            tipo: 'texto',
                        },
                        {
                            id: 'fim-qualidade-segurado',
                            titulo: 'Data fim da qualidade de Segurado',
                            tipo: 'texto',
                        },
                    ],
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'auxilio-reclusao-certidao',
                    titulo: 'Auxílio-Reclusão - certidão carcerária',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado',
                    titulo: 'Perda da qualidade de segurado',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-18-06-2019-hoje',
                    titulo: 'Perda da qualidade de segurado - com reingresso - 18/06/2019 - hoje',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-ate-01-07-2016-e-05-11-2016-05-01-2017',
                    titulo: 'Perda da qualidade de segurado - com reingresso - até 01/07/2016 e 05/11/2016 - 05/01/2017',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-08-07-2016-04-11-2016',
                    titulo: 'Perda da qualidade de segurado - com reingresso - 08/07/2016 - 04/11/2016',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-06-01-2017-26-06-2017',
                    titulo: 'Perda da qualidade de segurado - com reingresso - 06/01/2017 – 26/06/2017',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-27-06-2017-17-01-2019',
                    titulo: 'Perda da qualidade de segurado - com reingresso - 27/06/2017 - 17/01/2019',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'perda-da-qualidade-de-segurado-com-reingresso-18-01-2019-17-06-2019',
                    titulo: 'Perda da qualidade de segurado - com reingresso - 18/01/2019 – 17/06/2019',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'ctps',
                    titulo: 'CTPS',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'auxilio-reclusao-regime-fechado',
                    titulo: 'Auxílio-Reclusão - regime fechado',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'loas-renda-per-capita-indeferimento',
                    titulo: 'LOAS - RENDA PER CAPITA - INDEFERIMENTO',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'tempo-especial-profissional-da-saude',
                    titulo: 'TEMPO ESPECIAL - PROFISSIONAL DA SAÚDE',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'loas-renda-per-capita-suspensao-pelo-mob',
                    titulo: 'LOAS - RENDA PER CAPITA - SUSPENSÃO PELO MOB',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'beneficio-com-indicios-de-irregularidade-com-devolucao-valores-e-sem-parcelamento',
                    titulo: 'Benefício com Indícios de irregularidade – com devolução valores e SEM parcelamento',
                    listaTextos: [
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
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-cadunico-atualizado',
                    titulo: 'Benefício de prestação continuada - Cadúnico atualizado',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______ , haja vista não concordar com a decisão do INSS que determinou a suspensão do Benefício de Prestação Continuada da Assistência Social (NB _______ ), de que está em gozo desde _______ &nbsp;a _______ , por não atendimento a convocação do posto (p. _______ ). Em consulta as bases governamentais, a ultima atualização do cadastro único se deu em _______ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a parte recorrente a reforma da decisão que determinou a cessação do Benefício de Prestação Continuada da Assistência Social, de que esteve em gozo desde _______ &nbsp;a _______ , por pendência de inscrição do cadastro único (p. _______ ), o que entendo ser possível mediante prova de atualização do referido cadastro, em _______ . Assim, o benefício deve ser reativado, desde então, na forma do art. 12, §2º, art.47, §9º do Decreto 6.214/07: Art. 12. São requisitos para a concessão, a manutenção e a revisão do benefício as inscrições no Cadastro de Pessoas Físicas - CPF e no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico. (Redação dada pelo Decreto nº 8.805, de 2016) (Vigência) [...] § 2º O benefício será concedido ou mantido apenas quando o CadÚnico estiver atualizado e válido, de acordo com o disposto no Decreto nº 6.135, de 26 de junho de 2007 . Redação dada pelo Decreto nº 9.462, de 2018) [...] Art. 47. O Benefício de Prestação Continuada será &nbsp;suspenso nas seguintes hipóteses: (Redação dada pelo Decreto nº 9.462, de 2018) III - não inscrição no CadÚnico após o fim do prazo estabelecido em ato do Ministro de Estado do Desenvolvimento Social; &nbsp;(Incluído pelo Decreto nº 9.462, de 2018) [...] § 9º O benefício será restabelecido caso o recurso interposto ao CRSS seja provido, sendo devidos os valores desde a suspensão do benefício, respeitado o teor da decisão. (Incluído pelo Decreto nº 9.462, de 2018)Pelo exposto, conheço do recurso e voto no sentido de DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. SUSPENSAO DO BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL. PENDÊNCIA DE INSCRIÇÃO DO CADASTRO ÚNICO. PROVA DE ATUALIZAÇÃO DO REFERIDO CADASTRO. ASSIM, O BENEFÍCIO DEVE SER REATIVADO, NA FORMA DO ART. 12, §2º, ART.47, §9º DO DECRETO 6.214/07. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-irregularidade-idoso-com-loas-devolucao-atividade-contribuinte-individual-filho-solteiro',
                    titulo: 'Benefício de prestação continuada - Irregularidade - idoso com loas - devolução - atividade contribuinte individual filho solteiro',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por &nbsp;_________ , por suas procuradoras (p. ___ ), haja vista não concordar com a decisão do INSS que determinou a cessação do benefício de Benefício de Prestação Continuada da Assistência Social &nbsp;(NB: &nbsp;_________ ), de que esteve em gozo de _________ a _________, por superação da renda familiar, em decorrência da renda de _________ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a interessada a reativação do benefício, todavia entendo que a suspensão deve ser mantida, pois, em que pese a renda do esposo ser desconsiderada, por se tratar de beneficiário idoso, de benefício não superior ao salário mínimo, a filha solteira, da beneficiária, e integrante de seu grupo familiar, possui empresa registrada em seu nome, o que constitui impedimento para manutenção do benefício, pois enfraquece o critério de vulnerabilidade e miserabilidade do grupo, na forma do art. 20, §11 da Lei 8.213/91. &nbsp;Além disso, há registro de contribuição sobre salário de contribuição no valor de um salário mínimo, na condição de contribuinte individual, o que pressupõe o exercício de atividade remunerada, na forma do art. 11, V e suas alíneas. Assim, como o recebimento de renda integra a renda mensal bruta familiar, mesmo que advinda do mercado informal ou autônomo, na forma do art. 4º do Decreto 6.214/07. Quanto as despesas alegadas, em busca de flexibilizar o critério da renda, observei que a declaração da secretaria municipal de saúde atesta a venda de três dos cinco medicamentos na versão genérica e dos outros dois, o fornecimento pelo Estado de Minas Gerais (p. __ ), o que, portanto, não é suficiente para pleiteada flexibilização da renda. Ao final, portanto, entendo que ficou demonstrada a superação das condições que deram origem a concessão do benefício, devendo ser mantida a cessação, na forma do art. 21 da Lei 8.742/93 e art. 48, III do Decreto 6.214/07. Quanto ao pedido de afastamento da cobrança, pela minha análise, &nbsp;não ficou comprovada a má-fé da beneficiária, todavia acompanho o entendimento de que não é possível o perdão da dívida em favor do erário, ainda que sem prova de má-fé, permitindo-se apenas o parcelamento do débito ou a sua consignação, quando o beneficiário for recebedor de outro benefício do INSS, sendo esses os termos da Questão 15 do Parecer CONJUR/MPS nº 616/2010. Por todo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO, determinando a cessação do benefício e a determinação de devolução dos valores.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL AO IDOSO. FICOU DEMONSTRADA A SUPERAÇÃO DAS CONDIÇÕES QUE DERAM ORIGEM A CONCESSÃO DO BENEFÍCIO, DEVENDO SER MANTIDA A SUSPENSÃO, NA FORMA DO ART. 21 DA LEI 8.742/93 E ART. 48, III DO DECRETO 6.214/07. NÃO FICOU COMPROVADA, DE FORMA CONSISTENTE, A MÁ-FÉ DA BENEFICIÁRIA, MAS, QUANTO À DEVOLUÇÃO DE VALORES, ACOMPANHO O ENTENDIMENTO DE QUE NÃO É POSSÍVEL O PERDÃO DA DÍVIDA, AINDA QUE SEM PROVA DE MÁ-FÉ SENDO ESSES OS TERMOS DA QUESTÃO 15 DO PARECER CONJUR/MPS Nº 616/2010. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-deficiencia-nao-atende',
                    titulo: 'Benefício de prestação continuada - Deficiência NÃO ATENDE',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: 'Recurso interposto por ______ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social à pessoa com deficiência (NB: 87/______ ), requerido em ______ , por não atendimento ao critério de deficiência (p. ______ ). Feito o relato, foi concluído pela necessidade de reavaliação médica do estado de saúde da recorrente na data do requerimento, em 09/03/2018, pela Perícia Médica Federal, nos moldes do art. 40-B da Lei 8.742/93 c/c PROVIMENTO Nº 3, DE 5 DE MAIO DE 2020 do CRPS (p. ______ ). Em grau de recurso, segundo a perícia médica federal, não há novos elementos para modificar o entendimento, mantendo-se o não preenchimento de requisitos que definem a pessoa com deficiência para fins de acesso ao BPC (p. ______ ).',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende a parte recorrente a reforma da decisão que indeferiu o Benefício de Prestação Continuada da Assistência Social à pessoa com deficiência, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, não existe deficiência. Assim, o indeferimento está em conformidade com o art. 20, §2º da Lei 8.742/93: Art. 20. O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011) (Vide Lei nº 13.985, de 2020) [...] § 2o Para efeito de concessão do benefício de prestação continuada, considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas. (Redação dada pela Lei nº 13.146, de 2015) (Vigência) [...] Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL À PESSOA COM DEFICIÊNCIA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO EXISTE DEFICIÊNCIA. ASSIM, O INDEFERIMENTO ESTÁ EM CONFORMIDADE COM O ART. 20, §2º DA LEI 8.742/93RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'beneficio-de-prestacao-continuada-renda-nao-atende',
                    titulo: 'Benefício de prestação continuada - Renda NÃO ATENDE',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por &nbsp;________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social (NB: ________ ), requerido em ________ &nbsp;(data de entrada do requerimento- DER), por renda per capita superior ao limite legal (p. ________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a interessada a reforma da decisão do INSS que indeferiu o Benefício de Prestação Continuada da Assistência Social ao idoso, todavia o indeferimento será mantido, pois, conforme cadastro único atualizado em ________ , consta grupo familiar composto por ________ , e renda de R$ ________ &nbsp;(p. ________ ), o que não atende o teor do artigo 20 da Lei 8.742/93: Art. 20. O benefício de prestação continuada é a garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 (sessenta e cinco) anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família. (Redação dada pela Lei nº 12.435, de 2011) (Vide Lei nº 13.985, de 2020) § 1o Para os efeitos do disposto no caput, a família é composta pelo requerente, o cônjuge ou companheiro, os pais e, na ausência de um deles, a madrasta ou o padrasto, os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, desde que vivam sob o mesmo teto. (Redação dada pela Lei nº 12.435, de 2011) [...] § 3º Observados os demais critérios de elegibilidade definidos nesta Lei, terão direito ao benefício financeiro de que trata o caput deste artigo a pessoa com deficiência ou a pessoa idosa com renda familiar mensal per capita igual ou inferior a 1/4 (um quarto) do salário-mínimo. (Redação dada pela Lei nº 14.176, de 2021) Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE PRESTAÇÃO CONTINUADA DA ASSISTÊNCIA SOCIAL. MANTIDO O INDEFERIMENTO. RENDA PER CAPITA SUPERIOR AO LIMITE LEGAL.ARTIGO 20, §1º E 3º DA LEI 8.742/93. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'carencia-computo-de-beneficio-por-incapacidade',
                    titulo: 'Carência – Cômputo de benefício por incapacidade',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões recursais, insurgiu-se contra o indeferimento, alegando ter direito ao benefício mediante o computo da integralidade dos períodos contributivos, bem como daqueles de que esteve em gozo de auxílio-doença (p. &nbsp;);</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A parte recorrente pretende a reforma da decisão mediante o cômputo dos períodos em que esteve em gozo de auxílio-doença, todavia, esses períodos só podem ser considerados, quando estão intercalados com período contributivo, sendo esses os termos do art. 55, II da Lei 8.213/91 e do art.19-C, §1º do Decreto 3.048/99: Art. 55. O tempo de serviço será comprovado na forma estabelecida no Regulamento, compreendendo, além do correspondente às atividades de qualquer das categorias de segurados de que trata o art. 11 desta Lei, mesmo que anterior à perda da qualidade de segurado: [...] II - o tempo intercalado em que esteve em gozo de auxílio-doença ou aposentadoria por invalidez; [...] Art. 19-C. &nbsp;Considera-se tempo de contribuição o tempo correspondente aos períodos para os quais tenha havido contribuição obrigatória ou facultativa ao RGPS, dentre outros, o período: &nbsp;(Incluído pelo Decreto nº 10.410, de 2020) § 1º &nbsp;Será computado o tempo intercalado de recebimento de benefício por incapacidade, na forma do disposto no inciso II do caput do art. 55 da Lei nº 8.213, de 24 de julho de 1991, exceto para efeito de carência. &nbsp; &nbsp; &nbsp;(Incluído pelo Decreto nº 10.410, de 2020) Na redação antes do Decreto 10.410/2020, o período de auxílio-doença também deveria estar &nbsp;intercalado, veja: Art. 60. Até que lei específica discipline a matéria, são contados como tempo de contribuição, entre outros: &nbsp; (Revogado pelo Decreto nº 10.410, de 2020). IX - o período em que o segurado esteve recebendo benefício por incapacidade por acidente do trabalho, intercalado ou não; &nbsp; &nbsp;(Revogado pelo Decreto nº 10.410, de 2020). Seguindo um entendimento semelhante, o STF também só admite o cômputo do auxílio-doença quando ele estiver intercalado com períodos de atividade: Tema 1.125 do STF “É constitucional o cômputo, para fins de carência, do período no qual o segurado esteve em gozo do benefício de auxílio-doença, desde que intercalado com atividade laborativa”. No caso da recorrente, observei que os períodos de benefício não estão intercalados, não havendo qualquer reforma a ser feita na decisão, com base na fundamentação supra. Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR IDADE. PRETENDE COMPUTAR OS PERÍODOS EM QUE ESTEVE EM GOZO DE AUXÍLIO-DOENÇA. PERÍODOS NÃO INTERCALADOS COM CONTRIBUIÇÃO. PRETENSAO NÃO ENCONTRA AMPARO NA LEGISLAÇÃO PREVIDENCIÁRIA. ART. 55, II DA LEI 8.213/91 E DO ART.19-C, §1º DO DECRETO 3.048/99 E TEMA 1.125 DO STF. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cnis-complementacao-recolhimento-plano-simplificado',
                    titulo: 'CNIS - complementação recolhimento plano simplificado',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Aposentadoria por tempo de contribuição (NB: _________), requerido em _________, por terem sido apurados __ anos, __ meses e __ dias até o requerimento (p. _________ ). Conforme despacho indeferitório, os recolhimentos efetuados sob alíquota de _ % foram desconsiderados para efeito de tempo de contribuição (p. _________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. O recorrente busca a reforma da decisão mediante computo da integralidade de seus períodos contributivos, todavia observei que há presença do indicador “IREC-LC123 - Recolhimento no Plano Simplificado de Previdência Social (LC 123/2006)” de _________ &nbsp;a _________, todavia esses recolhimentos não são considerados para efeito de concessão de aposentadoria por tempo de contribuição, nos moldes do art.21, § 2º da Lei 8.213/91: Lei nº 8.212, de 24 de julho de 1991 Art. 21. [...] § 2º No caso de opção pela exclusão do direito ao benefício de aposentadoria por tempo de contribuição, a alíquota de contribuição incidente sobre o limite mínimo mensal do salário de contribuição será de: I - 11% (onze por cento), no caso do segurado contribuinte individual, ressalvado o disposto no inciso II, que trabalhe por conta própria, sem relação de trabalho com empresa ou equiparado e do segurado facultativo, observado o disposto na alínea b do inciso II deste parágrafo; II - 5% cinco por cento): [...] b) do segurado facultativo sem renda própria que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencente a família de baixa renda. [...] No caso, em sede de recurso e, em busca da reforma da decisão, apresentou as declarações anuais do Simples Nacional referente aos anos de _________ &nbsp;a _________ (p. _________ ), o que não modifica a conclusão de que o computo desses períodos é indevido para efeito da aposentadoria por tempo de contribuição, e nesse caso, a Lei 8212/91 determina o complemento da contribuição, o que não se vislumbra no caso em análise. Art. 21 [...] § 3o O segurado que tenha contribuído na forma do § 2o deste artigo e pretenda contar o tempo de contribuição correspondente para fins de obtenção da aposentadoria por tempo de contribuição ou da contagem recíproca do tempo de contribuição a que se refere o art. 94 da Lei no 8.213, de 24 de julho de 1991, deverá complementar a contribuição mensal mediante recolhimento, sobre o valor correspondente ao limite mínimo mensal do salário-de-contribuição em vigor na competência a ser complementada, da diferença entre o percentual pago e o de 20% (vinte por cento), acrescido dos juros moratórios de que trata o § 3o do art. 5o da Lei no 9.430, de 27 de dezembro de 1996. &nbsp;(Redação dada pela Lei nº 12.470, de 2011) (Produção de efeito) Assim, é de se ver que o recorrente não implementa os requisitos para concessão do benefício de aposentadoria por tempo de contribuição comum, seja desde a DER ou mediante sua reafirmação, nos termos do que exige o art. 56 do Decreto 3.048/99: Decreto 3.048/99 Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. &nbsp;[...] Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. NO CASO DE OPÇÃO PELA EXCLUSÃO DO DIREITO AO BENEFÍCIO DE APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO, A ALÍQUOTA DE CONTRIBUIÇÃO INCIDENTE SOBRE O LIMITE MÍNIMO MENSAL DO SALÁRIO DE CONTRIBUIÇÃO SERÁ DE 11% (ONZE POR CENTO). O SEGURADO QUE PRETENDA CONTAR O TEMPO DE CONTRIBUIÇÃO CORRESPONDENTE PARA FINS DE OBTENÇÃO DA APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO, DEVERÁ COMPLEMENTAR A CONTRIBUIÇÃO MENSAL MEDIANTE RECOLHIMENTO. COMPLEMENTAÇÃO NÃO REALIZADA. A APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO SERÁ DEVIDA AO SEGURADO APÓS TRINTA E CINCO ANOS DE CONTRIBUIÇÃO, SE HOMEM, OU TRINTA ANOS, SE MULHER. ART. 56 DECRETO 3.048/99, ART. 21, § 2ºE 3º DA LEI 8212/91.RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cnis-salario-de-contribuicao-inferior-ao-minimo',
                    titulo: 'CNIS - salário de contribuição inferior ao mínimo',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , haja vista não concordar com a decisão do INSS que indeferiu o Benefício de Aposentadoria por tempo de contribuição (NB: _________), requerido em _________, por terem sido apurados __ anos, __ meses e __ dias até o requerimento (p. _________ ). Conforme despacho indeferitório, os recolhimentos efetuados sobre salário de contribuição inferior ao mínimo foram desconsiderados para efeito de tempo de contribuição (p. _________ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o Benefício de Aposentadoria por tempo de contribuição, pretendendo o cômputo integral de seu tempo de contribuição, todavia, em conferência, observou-se que ele efetuou diversos recolhimentos sobre salário inferior ao mínimo. Todavia, nesse aspecto, a legislação é clara no sentido de que o salário de contribuição informado para fins de cálculo da guia deve respeitar o salário-mínimo vigente, na forma do art. 214 do Decreto 3.048/99. Veja: Decreto 3.048/99 Art. 214. Entende-se por salário-de-contribuição: [...] &nbsp;§ 3º O limite mínimo do salário-de-contribuição corresponde: [...] II - para os segurados empregado, inclusive o doméstico, e trabalhador avulso, ao piso salarial legal ou normativo da categoria ou, inexistindo este, ao salário mínimo, tomado no seu valor mensal, diário ou horário, conforme o ajustado e o tempo de trabalho efetivo durante o mês. &nbsp;(Incluído pelo Decreto nº 3.265, de 1999) [...] Portanto, não atendendo às exigências da lei quanto aos recolhimentos, na forma da redação do art. 19, § 2º, do Decreto nº 3.048/99, não se aceitam vínculos irregulares sem a apresentação dos documentos cabíveis. Art. 19. Os dados constantes do Cadastro Nacional de Informações Sociais - CNIS relativos a vínculos, remunerações e contribuições valem como prova de filiação à previdência social, tempo de contribuição e salários-de-contribuição [...]§ 5º Não constando do CNIS informações sobre contribuições ou remunerações, ou havendo dúvida sobre a regularidade do vínculo, motivada por divergências ou insuficiências de dados relativos ao empregador, ao segurado, à natureza do vínculo, ou a procedência da informação, esse período respectivo somente será confirmado mediante a apresentação pelo segurado da documentação comprobatória solicitada pelo INSS. (Incluído pelo Decreto nº 6.722, de 2008). Por todo o exposto, o recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcritos abaixo: Decreto 3.048/99 Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007). Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. A LEGISLAÇÃO É CLARA NO SENTIDO DE QUE O SALÁRIO DE CONTRIBUIÇÃO INFORMADO PARA FINS DE CÁLCULO DA GUIA DEVE RESPEITAR O SALÁRIO-MÍNIMO VIGENTE, NA FORMA DO ART. 214 DO DECRETO 3.048/99. TEMPO INSUFICIENTE. O BENEFÍCIO DE APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO NÃO É DEVIDO SEM PROVA DO EFETIVO EXERCÍCIO DA ATIVIDADE E DA IMPLEMENTAÇÃO DO TEMPO MÍNIMO DE CONTRIBUIÇÃO (DEC. 3.048/99, ART. 56). RECURSO CONHECIDO E NEGADO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cnis-com-indicios-de-irregularidade-recolhimento-como-facultativo-baixa-renda-pendente-de-analise',
                    titulo: 'CNIS com indícios de irregularidade - recolhimento como facultativo baixa renda pendente de análise',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS - Cadastro Nacional de Informações Sociais – há registro de recolhimentos com marca de irregularidade de _________ a _________ , em _________ e de _________ a _________ , por “RECOLHIMENTO FACULTATIVO BAIXA RENDA NÃO VALIDADE/HOMOLOGADO” sigla PREC-FBR.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal.A parte recorrente busca a reforma da decisão mediante o acolhimento da integralidade de seus períodos contributivos, todavia observei que existem diversos recolhimentos com marca de irregularidade, sendo vedado o computo de períodos sob os quais recaia dúvida acerca de sua regularidade, na forma do art. 29-A, §5º da Lei 8.213/91:Art. 29-A. O INSS utilizará as informações constantes no Cadastro Nacional de Informações Sociais – CNIS sobre os vínculos e as remunerações dos segurados, para fins de cálculo do salário-de-benefício, comprovação de filiação ao Regime Geral de Previdência Social, tempo de contribuição e relação de emprego. (Redação dada pela Lei Complementar nº 128, de 2008)[...]§ 5o Havendo dúvida sobre a regularidade do vínculo incluído no CNIS e inexistência de informações sobre remunerações e contribuições, o INSS exigirá a apresentação dos documentos que serviram de base à anotação, sob pena de exclusão do período. (Incluído pela Lei Complementar nº 128, de 2008) [...]No que se refere aos recolhimentos efetuados na condição de facultativa, de acordo com o art. 21 da Lei nº 8.212, de 24 de julho de 1991, o facultativo de baixa renda deve comprovar que atende aos critérios da legislação para o reconhecimento de referida condição, o que não o fez:Lei nº 8.212, de 24 de julho de 1991Art. 21. [...]§ 2º No caso de opção pela exclusão do direito ao benefício de aposentadoria por tempo de contribuição, a alíquota de contribuição incidente sobre o limite mínimo mensal do salário de contribuição será de:I - 11% (onze por cento), no caso do segurado contribuinte individual, ressalvado o disposto no inciso II, que trabalhe por conta própria, sem relação de trabalho com empresa ou equiparado e do segurado facultativo, observado o disposto na alínea b do inciso II deste parágrafo;II - 5% (cinco por cento):[...]b) do segurado facultativo sem renda própria que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencente a família de baixa renda.[...]§ 4º Considera-se de baixa renda, para os fins do disposto na alínea b do inciso II do § 2º deste artigo, a família inscrita no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico cuja renda mensal seja de até 2 (dois) salários mínimos.” (NR)Por todo o exposto, a recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcrito abaixo: Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007).Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. A CONCESSÃO DA APOSENTADORIA POR TEMPO DE SERVIÇO DEPENDE DE 180 CONTRIBUIÇÕES MENSAIS E 35 (TRINTA E CINCO) ANOS DE IDADE, SE HOMEM, E 30 (TRINTA), SE MULHER. ART. 56 DO DECRETO 3.048/99. NO QUE SE REFERE AOS RECOLHIMENTOS EFETUADOS NA CONDIÇÃO DE FACULTATIVA, DE ACORDO COM O ART. 21 DA LEI Nº 8.212, DE 24 DE JULHO DE 1991, O FACULTATIVO DE BAIXA RENDA DEVE COMPROVAR QUE ATENDE AOS CRITÉRIOS DA LEGISLAÇÃO PARA O RECONHECIMENTO DE REFERIDA CONDIÇÃO, O QUE NÃO O FEZ. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'cnis-com-indicios-de-irregularidade-recolhimento-extemporaneo-lei-e-regimento-intenro-oportunidade-de-producao-de-prova',
                    titulo: 'CNIS com indícios de irregularidade - recolhimento extemporâneo - lei e regimento intenro - oportunidade de produção de prova',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS - Cadastro Nacional de Informações Sociais- há registro de extemporaneidade nas contribuições de ___ a _______ , _______ , _______ &nbsp;a_______ . Emitida exigência para regularização (p. Exigência para regularização (p. ___ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal.O recorrente pretende a reforma da decisão que indeferiu o Benefício de Aposentadoria por tempo de contribuição, todavia, em análise do processo, confirmei que ele não apresentou os documentos exigidos para regularização das diversas competências com marca de extemporaneidade, tampouco alegações referentes à matéria do processo, o que poderia ter feito até antes da sessão de julgamento, nos moldes do art. 37 do Regimento Interno do CRPS:Art. 37 [...]§ 1º O interessado poderá juntar documentos, atestados, exames complementares e pareceres médicos, requerer diligências e perícias e aduzir alegações referentes à matéria objeto do processo até antes do início da sessão de julgamento, hipótese em que será avaliada a necessidade de conferir direito de vista à parte contrária para ciência e manifestação.Além disso, foram emitidas exigências para apresentação de documentos, mas ela não o fez, motivo pelo qual não há elementos para reforma da decisão anterior, nos termos do art. 35, §2º do mesmo Regimento:Art. 35 [...] § 2º Uma vez interposto o recurso, o não cumprimento pelo interessado, de exigência ou providência que a ele incumbiriam, e para a qual tenha sido devidamente intimado, não implica em desistência tácita ou renúncia ao direito de recorrer, devendo o processo ser julgado no estado em que se encontra, arcando o interessado com o ônus de sua inércia.Nesse caso, a legislação previdenciária veda que sejam considerados quaisquer recolhimentos sob os quais recaia dúvida acerca de sua regularidade, nos termos do art. 29-A, §5º da Lei 8.213/91:Art. 29-A. O INSS utilizará as informações constantes no Cadastro Nacional de Informações Sociais – CNIS sobre os vínculos e as remunerações dos segurados, para fins de cálculo do salário-de-benefício, comprovação de filiação ao Regime Geral de Previdência Social, tempo de contribuição e relação de emprego. (Redação dada pela Lei Complementar nº 128, de 2008)[...] § 3o &nbsp;A aceitação de informações relativas a vínculos e remunerações inseridas extemporaneamente no CNIS, inclusive retificações de informações anteriormente inseridas, &nbsp;fica condicionada à comprovação dos dados ou das divergências apontadas, conforme critérios definidos em regulamento. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Incluído pela Lei Complementar nº 128, de 2008)§ 5o Havendo dúvida sobre a regularidade do vínculo incluído no CNIS e inexistência de informações sobre remunerações e contribuições, o INSS exigirá a apresentação dos documentos que serviram de base à anotação, sob pena de exclusão do período. (Incluído pela Lei Complementar nº 128, de 2008) [...]Por todo o exposto, o recorrente não cumpriu o tempo mínimo para concessão da requerida aposentadoria por tempo de contribuição comum, na data do requerimento, como previsto no art. 56 do Decreto 3.048/99, transcritos abaixo:Decreto 3.048/99Art. 56. A aposentadoria por tempo de contribuição será devida ao segurado após trinta e cinco anos de contribuição, se homem, ou trinta anos, se mulher, observado o disposto no art. 199-A. (Redação dada pelo Decreto nº 6.042, de 2007).Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. OPORTUNIZADA A COMPLEMENTAÇÃO DA DOCUMENTAÇÃO, O PRAZO DECORREU SEM MANIFESTAÇÃO DA PARTE INTERESSADA. EXISTE PREVISÃO REGIMENTAL QUE PERMITE A APRESENTAÇÃO DE ALEGAÇÕES E DOCUMENTOS REFERENTES A MATÉRIA DO PROCESSO ATÉ ANTES DO INÍCIO DA SESSÃO DE JULGAMENTO. A DESPEITO DESSAS DUAS OPORTUNIDADES, NÃO HOUVE QUALQUER ALEGAÇÃO DA RECORRENTE, MOTIVO PELO QUAL O PROCESSO SERÁ JULGADO NO ESTADO EM QUE SE ENCONTRA, NA FORMA DO ART. 35, §2º DO REGIMENTO INTERNO DO CONSELHO DE RECURSOS DO SEGURO SOCIAL. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'contagem-reciproca-tempo-especial',
                    titulo: 'Contagem recíproca – Tempo especial',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o reconhecimento de tempo especial para o intervalo de (XX/XX/XXXX). O período foi averbado pelo INSS para fins de contagem recíproca, em vista da apresentação da CTC (Certidão de Tempo de Contribuição) expedida por __________________. Foi apresentado Perfil Profissiográfico Previdenciário – PPP para o intervalo averbado, no cargo de ________, indicada a exposição a(os) agente(s) nocivo(s) ______________.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende o(a) interessado(a) o reconhecimento de tempo especial para o intervalo de (XX/XX/XXXX), o qual foi averbado pelo INSS para fins de contagem recíproca mediante a apresentação da CTC (Certidão de Tempo de Contribuição) expedida por __________________, com a atividade prestada no cargo de ____________. Para o tempo especial, foi apresentado Perfil Profissiográfico Previdenciário - PPP.</p><p><br>O pedido de reconhecimento do tempo especial ora averbado esbarra na proibição prevista nos termos do inciso I, do artigo 96, da Lei nº 8.213/91 e inciso I, do artigo 127, do Decreto nº 3.048/99, além de expressa vedação contida no inciso IV, do artigo 11, da Portaria Ministerial nº 154/2008.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'contribuinte-individual-e-facultativo-primeiro-recolhimento-em-dia-apos-perda-qualidade-segurado-carencia-ci-e-facultativo',
                    titulo: 'Contribuinte individual e facultativo – primeiro recolhimento em dia;após perda qualidade segurado - carencia - ci e facultativo',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A parte recorrente não concorda com a decisão do INSS, alegando ter direito a concessão do benefício de ________ , todavia observou-se que, após ________ , a interessada perdeu a qualidade de segurada em ________, nos termos do art. 15 da Lei 8.213/91:Art. 15. Mantém a qualidade de segurado, independentemente de contribuições: [...] II - até 12 (doze) meses após a cessação das contribuições, o segurado que deixar de exercer atividade remunerada abrangida pela Previdência Social ou estiver suspenso ou licenciado sem remuneração; [...]§ 4º A perda da qualidade de segurado ocorrerá no dia seguinte ao do término do prazo fixado no Plano de Custeio da Seguridade Social para recolhimento da contribuição referente ao mês imediatamente posterior ao do final dos prazos fixados neste artigo e seus parágrafos.Após isso, há registros outros recolhimentos na condição de contribuinte individual da seguinte forma: &nbsp;________ .Portanto, &nbsp;houve o implemento de ________ contribuições para efeito de carência, pois o contribuinte individual e o facultativo devem comprovar o primeiro recolhimento em dia para fins de cômputo do período recolhido para fins de carência, na forma do art. 27-A da Lei 8.213/91:Art. 27. Para cômputo do período de carência, serão consideradas as contribuições: (Redação dada pela Lei Complementar nº 150, de 2015)I - referentes ao período a partir da data de filiação ao Regime Geral de Previdência Social (RGPS), no caso dos segurados empregados, inclusive os domésticos, e dos trabalhadores avulsos; (Redação dada pela Lei Complementar nº 150, de 2015)II - realizadas a contar da data de efetivo pagamento da primeira contribuição sem atraso, não sendo consideradas para este fim as contribuições recolhidas com atraso referentes a competências anteriores, no caso dos segurados contribuinte individual, especial e facultativo, referidos, respectivamente, nos incisos V e VII do art. 11 e no art. 13. (Redação dada pela Lei Complementar nº 150, de 2015)Portanto, não atendendo às exigências da lei quanto aos recolhimentos, não é dado ao órgão julgador reconhecer recolhimentos irregulares para fins de reingresso ao Regime Geral de Previdência social, tampouco para fins de carência, na forma do art. 19, § 2º, do Decreto nº 3.048/99:Art. 19. Os dados constantes do Cadastro Nacional de Informações Sociais - CNIS relativos a vínculos, remunerações e contribuições valem como prova de filiação à previdência social, tempo de contribuição e salários-de-contribuição[...]§ 5º Não constando do CNIS informações sobre contribuições ou remunerações, ou havendo dúvida sobre a regularidade do vínculo, motivada por divergências ou insuficiências de dados relativos ao empregador, ao segurado, à natureza do vínculo, ou a procedência da informação, esse período respectivo somente será confirmado mediante a apresentação pelo segurado da documentação comprobatória solicitada pelo INSS. (Incluído pelo Decreto nº 6.722, de 2008). Por todo o exposto, entendo que não houve implemento da carência, na forma do art. 25 e 27-A da Lei 8213/91: Art. 25. A concessão das prestações pecuniárias do Regime Geral de Previdência Social depende dos seguintes períodos de carência, ressalvado o disposto no art. 26: Art. 25. A concessão das prestações pecuniárias do Regime Geral de Previdência Social depende dos seguintes períodos de carência, ressalvado o disposto no art. 26: I - auxílio-doença e aposentadoria por invalidez: 12 (doze) contribuições mensais; II - aposentadoria por idade, aposentadoria por tempo de serviço e aposentadoria especial: 180 contribuições mensais. (Redação dada pela Lei nº 8.870, de 1994) III - salário-maternidade para as seguradas de que tratam os incisos V e VII do caput do art. 11 e o art. 13 desta Lei: 10 (dez) contribuições mensais, respeitado o disposto no parágrafo único do art. 39 desta Lei; e (Redação dada pela Lei nº 13.846, de 2019)IV - auxílio-reclusão: 24 (vinte e quatro) contribuições mensais. (Incluído pela Lei nº 13.846, de 2019) Art. 27-A Na hipótese de perda da qualidade de segurado, para fins da concessão dos benefícios de auxílio-doença, de aposentadoria por invalidez, de salário-maternidade e de auxílio-reclusão, o segurado deverá contar, a partir da data da nova filiação à Previdência Social, com metade dos períodos previstos nos incisos I, III e IV do caput do art. 25 desta Lei. (Redação dada pela Lei nº 13.846, de 2019) Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PERDA DA QUALIDADE DE SEGURADO. PARA FAZER JUS AO BENEFÍCIO DO AUXÍLIO DOENÇA, O SEGURADO DEVE ATENDER TODOS OS PRESSUPOSTOS NECESSÁRIOS QUANDO DO REINGRESSO. NÃO É DADO AO ÓRGÃO JULGADOR RECONHECER RECOLHIMENTOS FEITOS FORA DA ÉPOCA PRÓPRIA. DECISÃO FUNDAMENTADA NOS ART. 25 E 27- A DA LEI 8213/91. ART. 19, § 2º DO DECRETO 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'domestico-filiacao',
                    titulo: 'Doméstico – Filiação',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________. O vínculo está anotado na CTPS (Carteira de Trabalho e da Previdência Social) n.º_____, emitida em _______ (fls.).</p><p><br>O período de (XX/XX/XXXX) não foi considerado sob o fundamento da ausência do recolhimento previdenciário e da não comprovação da vinculação de empregado(a) doméstico(a) até a DER (Data de Entrada do Requerimento).</p><p>Em recurso, o(a) requerente busca a concessão / revisão do benefício para o cômputo do intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido para fins previdenciários o intervalo de (XX/XX/XXXX), laborado como empregado(a) doméstico(a), na residência de ___________.</p><p>O vínculo empregatício está anotado de forma contemporânea na CTPS nº, em ordem lógica e cronológica e com anotações internas, de acordo com o artigo 19-B, do Decreto n° 3.048/99.</p><p>É possível computar para a carência o período laborado como empregado doméstico mesmo sem a contribuição previdenciária, ou havendo falhas ou recolhida de forma extemporânea, quando o benefício a ser concedido é de valor mínimo, aplicando-se ao caso os termos do artigo 36, da Lei nº 8.213/91.</p><p>Sobre a necessidade de se encontrar vinculado(a) como empregado(a) doméstico(a) até a DER, o entendimento predominante no Conselho Pleno é no sentido da “Desnecessidade de demonstração de filiação ao RGPS como empregada doméstica na data de entrada do requerimento (DER) para obtenção de benefício de menor valor sem comprovação de contribuições”, conforme se extraí das Resoluções de números 20/2019, 21/2019, 42/2019 E 08/2020. Ademais, prever os incisos III e IV, do ENUNCIADO nº 02/2019, do CRPS:</p><p>ENUNCIADO 2<br>(...).<br>III - A concessão de benefícios no valor mínimo ao segurado empregado doméstico independe de prova do recolhimento das contribuições, inclusive a primeira sem atraso, desde que atendidos os demais requisitos legais exigidos, exceto para fins de contagem recíproca.<br>IV - O vínculo do segurado como empregado doméstico será computado para fins de carência, ainda que esteja filiado ao Regime Geral de Previdência Social (RGPS) em categoria diversa na Data de Entrada do Requerimento (DER).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMPREGADO DOMÉSTICO. VÍNCULO COMPROVADO EM CTPS ORDEM LÓGICA E CRONOLÓGICA, SEM EMENDAS E NEM RASURAS. BENEFÍCIO DE VALOR MÍNIMO. POSSIBILIDADE DO CÔMPUTO DO INTERVALO DE (XX/XX/XXXX), MESMO AUSENTE O RECOLHIMENTO PREVIDENCIÁRIO E A NÃO VINCULAÇÃO COMO DOMÉSTICO ATÉ A DER. APLICAÇÃO DO ARTIGO 36 DA LEI Nº 8.213/91. OBSERVÂNCIA DO ENUNCIADO Nº 02/2019 DO CRPS.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'empregado-aluno-aprendiz',
                    titulo: 'Empregado – Aluno-aprendiz',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), na condição de aluno-aprendiz.</p><p><br>Foi apresentado Certidão emitida pelo ________________, para o intervalo de (XX/XX/XXXX), no curso de ________________, indicado o fornecimento de ____________, por conta do orçamento ___________.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Pretende o(a) interessado(a) o cômputo do intervalo de (XX/XX/XXXX), na condição de aluno-aprendiz, com base na Certidão emitida pelo _______________, no curso de ___________, indicado o fornecimento de ____________, por conta do orçamento ____________.</p><p><br>1ª Hipótese</p><p>(Não cômputo)</p><p>Não há possibilidade, pois embora demonstrada a remuneração indireta custeada por Ente Público, não resta comprovado o vínculo empregatício e inexiste prova que evidencie o trabalho prestado na execução de atividades com vista a atender a encomendas de terceiros. Sendo assim, não foram comprovados os requisitos estabelecidos no inciso IX, do artigo 188-G, do Decreto nº 3.048/99 e o ENUNCIADO nº 02, inciso V do CRPS e a recente Resolução nº 38/2021 do Conselho Pleno CRPS.</p><p><br>Inviável o reconhecimento de período de aluno-aprendiz de quem o objetiva para fins de contagem recíproca, em conformidade com o ENUNCIADO nº 02, inciso V do CRPS.</p><p>&nbsp;</p><p><br>2ª Hipótese</p><p>(Cômputo)</p><p>Há possibilidade do cômputo do período por comprovar a remuneração pelo erário ainda que indireta e o vínculo empregatício ora demonstrado com o trabalho prestado na execução de atividades com vista a atender a encomendas de terceiros, estando em consonância com o inciso IX, do artigo 188-G, do Decreto nº 3.048/99 e o Enunciado nº 02, inciso V do CRPS.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: ALUNO-APRENDIZ. CERTIDÃO EMITIDA PELA INSTITUIÇÃO DE ENSINO COM A INDICAÇÃO APENAS DA REMUNERAÇÃO INDIRETA CUSTEADA POR ENTE PÚBLICO. NÃO CONFIGURADO VÍNCULO EMPREGATÍCIO. NÃO COMPROVADA ATIVIDADES COM VISTAS A ATENDER A ENCOMENDAS DE TERCEIROS. NÃO ATENDIDO OS TERMOS DO IX, DO ARTIGO 188-G, DO DECRETO Nº 3.048/99 E O ENUNCIADO Nº 02, INCISO V DO CRPS E A RESOLUÇÃO Nº 38/2021 DO CONSELHO PLENO CRPS.</p><p>&nbsp;</p><p>EMENTA: ALUNO-APRENDIZ. CERTIDÃO EMITIDA PELA INSTITUIÇÃO DE ENSINO COM A INDICAÇÃO DE REMUNERAÇÃO INDIRETA CUSTEADA POR ENTE PÚBLICO E DO VÍNCULO EMPREGATÍCIO COM ENCOMENDAS DE TERCEIROS. ATENDIDO OS TERMOS DO IX, DO ARTIGO 188-G, DO DECRETO Nº 3.048/99 E O ENUNCIADO Nº 02, INCISO V DO CRPS E A RESOLUÇÃO Nº 38/2021 DO CONSELHO PLENO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'enquadramento-eletricista',
                    titulo: 'Enquadramento - eletricista',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de Aposentadoria por tempo de contribuição mediante reconhecimento da especialidade de diversos períodos de trabalho. Para o período de ____ , apresentou formulário em que consta exposição a ____ , em decorrência da função de ____ e, pela descrição das atividades entendo que essa exposição se dava por toda a jornada de trabalho (p. ____ ); assim, defiro o enquadramento do período no código 1. 1.8 do ANEXO III do Decreto n° 53.831, de 25.03.1964 e art. 57, §3º da Lei 8.213/91:ANEXO III do Decreto n° 53.831, de 25.03.1964- 1.1.8 ELETRICIDADE Operações em locais com eletricidade em condições de perigo de vida Trabalhos permanentes em instalações ou equipamentos elétricos com risco de acidentes. Eletricistas, Cabistas, Montadores e outros. Lei 8.213/91 Art. 57. [...] § 3º A concessão da aposentadoria especial dependerá de comprovação pelo segurado, perante o Instituto Nacional do Seguro Social–INSS, do tempo de trabalho permanente, não ocasional nem intermitente, em condições especiais que prejudiquem a saúde ou a integridade física, durante o período mínimo fixado. &nbsp;(Redação dada pela Lei nº 9.032, de 1995)</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>NÃO FOI ATENDIDO UM REQUISITO FORMAL DE PREENCHIMENTO DO FORMULÁRIO: NÃO FOI INFORMADO DECIBELÍMETRO, DOSÍMETRO OU MEDIÇÃO PONTUAL NO CAMPO "TÉCNICA UTILIZADA" DO PERFIL PROFISSIOGRÁFICO PREVIDENCIÁRIO (PPP), NA FORMA DO ENUNCIADO 13, II DO CRPS, 2019.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'enquadramento-categoria-maritimo-marinheiro',
                    titulo: 'Enquadramento categoria - marítimo/marinheiro',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou, em síntese, ter direito ao benefício mediante enquadramento, por categoria profissional, no código 2.4.2 do Decreto 53.831/64Para embasar seu pedido, apresentou caderneta de inscrição e registro junto ao Ministério da Marinha, em que consta a categoria de “contramestre fluvial”, e carteira de trabalho, onde consta cargo de “tarifeiro fluvial”, ”marinheiro”, “marinheiro fluvial”, “marinheiro fluvial de convés” (p. ______ ); ...</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a parte recorrente a reforma da decisão que que indeferiu o benefício de Aposentadoria por tempo de contribuição, mediante enquadramento, por categoria profissional, no código 2.4.2 do Decreto 53.831/64. Para isso, apresentou caderneta de inscrição e registro junto ao Ministério da Marinha, onde consta a categoria profissional de “marinheiro fluvial”, e carteira de trabalho (p. ______ ), onde consta, de ______ a ______, o cargo de marinheiro; assim, entendo ser devido o enquadramento desses períodos no código 2.4.2 do Decreto 53.831/64: CÓDIGO 2.4.2 DO DECRETO 53.831/64 TRANSPORTES - MARÍTIMOS, FLUVIAL e LACUSTRE - Marítimos de convés de máquinas, de câmara e de saúde; operários de construção e reparos navais</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>DEVIDO O ENQUADRAMENTO DESSES PERÍODOS NO CÓDIGO 2.4.2 DO DECRETO 53.831/64.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'especial-categoria-profissional',
                    titulo: 'Especial – categoria profissional',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de ________, requerido por __________, nascido(a) em ________, com DER (Data de Entrada do Requerimento) em ______.</p><p>Foi requerido o reconhecimento de tempo especial com a apresentação de formulário PPP (Perfil Profissiográfico Previdenciário), emitido pela empresa _________, para o intervalo de (XX/XX/XXXX), no cargo de ___________.</p><p>Em recurso, o(a) Interessado(a) afirma ter se sujeitado às condições especiais na atividade de __________, de modo que cabe o enquadramento do intervalo de (XX/XX/XXXX).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido reconhecido tempo especial para o intervalo de (XX/XX/XXXX).</p><p>De acordo com o PPP (Perfil Profissiográfico Previdenciário), o(a) requerente trabalhou no período de (XX/XX/XXXX), no cargo de _________, na empresa _________.</p><p><br>1ª Hipótese<br>(Não comprovado)</p><p>A atividade profissional desempenhada pelo(a) requerente não está contemplada no rol dos Regulamentos da Previdência Social – Decretos nº 53.831/64 e 83.080/79, o que impede o reconhecimento de especialidade por Categoria Profissional.</p><p>&nbsp;</p><p>2ª Hipótese<br>(Comprovado)</p><p>A atividade profissional desempenhada pelo(a) requerente se encontra contemplada no Código ____, do Anexo ________, do Regulamento da Previdência Social – Decreto nº 53.831/64 e/ou 83.080/79, o que permite o reconhecimento de especialidade por Categoria Profissional.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>TEMPO ESPECIAL. IMPOSSIBILIDADE. ATIVIDADE DESEMPENHADA NÃO PREVISTA NO ROL DOS REGULAMENTOS DA PREVIDÊNCIA SOCIAL – DECRETOS Nº 53.831/64 E 83.080/79. AUSÊNCIA DE FATORES DE RISCO - PERÍODO DE (XX/XX/XXXX) MANTIDO COMO DE NATUREZA COMUM.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'especial-formulario-sem-exposicao-a-agentes-nocivos-e-nao-enquadra-por-categoria-profissional',
                    titulo: 'Especial – formulário sem exposição a agentes nocivos e não enquadra por categoria profissional',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Trata-se de ________, requerido por __________, nascido(a) em ________, com DER (Data de Entrada do Requerimento) em ______.</p><p>Foi requerido o reconhecimento de tempo especial com a apresentação de formulário PPP (Perfil Profissiográfico Previdenciário), emitido pela empresa _________, para o intervalo de (XX/XX/XXXX), no cargo de ___________, sem a indicação de fatores de risco.</p><p>Em recurso, o(a) Interessado(a) afirma ter se sujeitado às condições especiais, de modo que cabe o enquadramento do intervalo de (XX/XX/XXXX).</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia cinge-se quanto à possibilidade de ser acolhido reconhecido tempo especial para o intervalo de (XX/XX/XXXX).</p><p>De acordo com o PPP (Perfil Profissiográfico Previdenciário), o(a) requerente trabalhou no período de (XX/XX/XXXX), no cargo de _________, no setor ______, na empresa _________.</p><p><br>A atividade profissional desempenhada pelo(a) requerente não está contemplada no rol dos Regulamentos da Previdência Social – Decretos nº 53.831/64 e 83.080/79, o que impede o reconhecimento de especialidade por Categoria Profissional.</p><p>Também, não há possibilidade de ser acolhida especialidade com vista à exposição a agente nocivo, eis que inexistem fatores de risco, conforme se depreende da profissiografia.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: TEMPO ESPECIAL. IMPOSSIBILIDADE. RUÍDO APURADO PARA O INTERVALO A PARTIR DE 01.01.2004 COM BASE EM MEDIÇÃO PONTUAL / DECIBELÍMETRO. METODOLOGIA QUE NÃO ATENDE A ORIENTAÇÃO PREVISTA NO INCISO III, DO ENUNCIADO Nº 13 DO CRPS.</p><p>&nbsp;</p><p>&nbsp;</p><p>EMENTA: TEMPO ESPECIAL. POSSIBILIDADE. RUÍDO ACIMA DO LIMITE PERMITIDO E APURADO COM BASE NA DOSIMETRIA DA NR-15/ANEXO 1, A PARTIR DE 01.01.2004. METODOLOGIA QUE ATENDE A ORIENTAÇÃO PREVISTA NO INCISO III, DO ENUNCIADO Nº 13 DO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'especial-metodologia-fundacentro-e-nr-15',
                    titulo: 'Especial – Metodologia Fundacentro e NR-15',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o reconhecimento de tempo especial para o intervalo a partir de 01.01.2004, tendo apresentado o seguinte elemento:</p><p><br>(a) &nbsp; &nbsp; &nbsp; &nbsp;Formulário PPP (Perfil Profissiográfico Previdenciário) para o intervalo de ________, laborado no cargo de ______, no setor ________, da empresa __________, com a indicação da exposição ao agente ruído acima de 85dBA (técnica: _____).</p><p><br>A Perícia Médica não enquadrou o período de __________, sob o fundamento da não apuração do ruído com base na NHO-01 da FUNDACENTRO / NEN.</p><p>Em recurso, o(a) requerente busca a concessão / revisão do benefício com o enquadramento do período de ____________, aduzindo ter laborado em condições especiais, com a exposição ao ruído acima do limite tolerado, atendida a metodologia prevista na legislação para a sua apuração.&nbsp;<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A controvérsia paira quanto ao reconhecimento de tempo especial para o intervalo a partir de 01.01.2004.</p><p><br>Conforme se verifica, o período não foi enquadramento em razão da metodologia utilizada para a apuração do ruído.</p><p><br>No presente caso, o(a) requerente apresentou Perfil Profissiográfico Previdenciário para o intervalo de ________, laborado no cargo de _______, no setor de __________, da empresa _______________, ora indicada a exposição ao ruído acima de 85dBA.</p><p><br>De acordo com o Perfil Profissiográfico Previdenciário, o ruído foi apurado com base na técnica _______________.</p><p><br>Sobre esse tema, temos a Resolução:</p><p>Resolução nº 73/2018:</p><p>APOSENTADORIA ESPECIAL. PEDIDO DE UNIFORMIZAÇÃO DE JUSRISPRUDÊNCIA. Divergência jurisprudencial entre as Câmaras de Julgamento no que tange conversão de tempo de atividade especial. Exigência de histograma e/ou memória de cálculo. Exposição ao agente nocivo ruído com a observância da técnica de apuração pela NHO-01 da Fundacentro. Competência para análise deste Conselho Pleno na forma do art. 3º inc. II do Regimento Interno do CRSS aprovado pela Portaria MDSA nº 116/2017. Pressupostos de Admissibilidade do pedido alcançados na forma do art. 63 do mesmo Regimento. Não é exigível o fornecimento de histograma e/ou memória de cálculo para o período de 11/10/2001 até 18/11/2003, por falta de previsão legal em lei, decreto e ato normativo ministerial vinculado ao CRSS, bem como a inexigilibilidade dada ao inc. III do art. 280 da IN/INSS nº 77/2015, pela DIRSAT/INSS, ante o reconhecimento da indisponibilidade de aparelhos de medição no período indicado. A exigência do ruído em NEN, a partir de 18/11/2003, não é estritamente obrigatória podendo ser aceitas outras metodologias válidas que atestem o ruído por meio de dosimetria. Precedente do Conselho Pleno. Pedido de Uniformização conhecido e provido. Necessidade de revisão de ofício do acórdão impugnado na forma do §12 do art. 63 do Regimento Interno do CRSS. (Grifos Nossos).<br>Atualmente, a matéria está consolidada por meio do Enunciado nº 13, do CRPS:</p><p>"ENUNCIADO Nº 13.<br>Atendidas as demais condições legais, considera-se especial, no âmbito do RGPS, a atividade exercida com exposição a ruído superior a 80 decibéis até 05/03/97, superior a 90 decibéis desta data até 18/11/2003, e superior a 85 decibéis a partir de então.<br>I - Os níveis de ruído devem ser medidos, observado o disposto na Norma Regulamentadora nº 15 (NR-15), anexos 1 e 2, com aparelho medidor de nível de pressão sonora, operando nos circuitos de compensação - dB (A) para ruído contínuo ou intermitente e dB (C) ou dB (linear) para ruído de impacto.<br>II - Até 31 de dezembro de 2003, para a aferição de ruído contínuo ou intermitente, é obrigatória a utilização das metodologias contidas na NR-15, devendo ser aceitos ou o nível de pressão sonora pontual ou a média de ruído, podendo ser informado decibelímetro, dosímetro ou medição pontual no campo "Técnica Utilizada" do Perfil Profissiográfico Previdenciário (PPP).<br>III - A partir de 1º de janeiro de 2004, para a aferição de ruído contínuo ou intermitente, é obrigatória a utilização da técnica/metodologia contida na Norma de Higiene Ocupacional 01 (NHO-01) da FUNDACENTRO ou na NR-15, que reflitam a medição de exposição durante toda a jornada de trabalho, vedada a medição pontual, devendo constar no PPP o nível de ruído em Nível de Exposição Normalizado - NEN ou a técnica/metodologia "dosimetria" ou "áudio dosimetria".<br>IV - Em caso de omissão ou dúvida quanto à indicação da técnica/metodologia utilizada para aferição da exposição nociva ao agente ruído, o PPP não deve ser admitido como prova da especialidade, devendo ser apresentado o respectivo Laudo Técnico de Condições Ambientais do Trabalho (LTCAT) ou solicitada inspeção no ambiente de trabalho, para fins de verificar a técnica utilizada na medição”.</p><p>&nbsp;</p><p>1ª hipótese:</p><p>Não enquadramento</p><p><br>Não se vislumbra a possibilidade de ser enquadrado o período a partir de 01.01.2004, pois embora o ruído possua intensidade acima de 85dBA, esse foi apurado com base em medição pontual e/ou decibelímetro, o que infringe a orientação prevista no inciso III, do Enunciado nº 13, do CRPS.</p><p>&nbsp;</p><p>&nbsp;</p><p>2ª Hipótese:</p><p>Enquadramento</p><p>Há possibilidade do enquadramento do período a partir de 01.01.2004, eis que o ruído se encontra acima de 85dBA e a técnica utilizada para a sua apuração foi a dosimetria da NR-15/Anexo 1, estando em conformidade com o inciso III, do Enunciado nº 13, do CRPS.</p><p>&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'expedicao-de-gps',
                    titulo: 'Expedição de GPS',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou ter direito ao benefício, mediante expedição de guia da previdência social para indenização do período necessário.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Quanto ao pedido de emissão de guia da previdência social, este não é de competência do Conselho de Recursos da Previdência Social, na forma do art. 67, parágrafo único da IN 77/2015, motivo pelo qual entendo caber o não conhecimento desse pedido, na forma do art. 63,II da Lei 9.784/99 c/c art. 71 do Regimento Interno do CRSS:Art. 67. Observado o disposto no art. 66, os acertos de recolhimento de contribuinte individual, empregado doméstico, facultativo e segurado especial que contribui facultativamente, identificados no requerimento de benefício ou de atualização de dados do CNIS, são de responsabilidade do INSS, conforme estabelece a Portaria Conjunta RFB/INSS nº 273, de 19 de janeiro de 2009.Parágrafo único. Os acertos de GPS que envolvam solicitação do filiado para inclusão de recolhimento, alteração da data de pagamento e alteração de valor autenticado, bem como a operação de transferência de CNPJ/CEI para NIT serão realizadas, exclusivamente, pela RFB. LEI Nº 9.784 , DE 29 DE JANEIRO DE 1999.Art. 63. O recurso não será conhecido quando interposto: [...] II - perante órgão incompetente; [...]Regimento Interno do Conselho de Recursos do Seguro SocialArt. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública FederalAssim, não é possível acolher o pedido.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-antecipacao-auxilio-doenca-atestado-nos-moldes-da-portaria-9-831-2020-duracao-maxima-tres-meses',
                    titulo: 'Incapacidade - antecipação auxílio-doença - atestado nos moldes da Portaria 9.831/2020; duração maxima TRES MESES',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Para embasar o pedido apresentou atestado, com nome e CRM do médico, bem como CID e período de repouso necessário (p. ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de antecipação de Auxílio-doença previdenciário, o que entendo ser possível, já que o atestado atendeu o teor do art. 4º Lei nº 13.982, de 2 de abril de 2020 e 3º da Portaria Conjunta nº 9.381, de 6 de abril de 2020: LEI Nº 13.982, DE 2 DE ABRIL DE 2020 Art. 4º Fica o INSS autorizado a antecipar 1 (um) salário-mínimo mensal para os requerentes do benefício de auxílio-doença de que trata o art. 59 da Lei nº 8.213, de 24 de julho de 1991, durante o período de 3 (três) meses, a contar da publicação desta Lei, ou até a realização de perícia pela Perícia Médica Federal, o que ocorrer primeiro. (Vide Decreto nº 10.413, de 2020) Parágrafo único. A antecipação de que trata o caput estará condicionada: I - ao cumprimento da carência exigida para a concessão do benefício de auxílio-doença; II - à apresentação de atestado médico, cujos requisitos e forma de análise serão estabelecidos em ato conjunto da Secretaria Especial de Previdência e Trabalho do Ministério da Economia e do INSS. PORTARIA CONJUNTA Nº 9.381, DE 6 DE ABRIL DE 2020 Art. 3º Observados os demais requisitos necessários para a concessão do auxílio-doença, inclusive a carência, quando exigida, a antecipação de um salário mínimo mensal ao requerente, de que trata o art. 4º da Lei nº 13.982, de 2 de abril de 2020, será devida a partir da data de início do benefício, determinada nos termos do art. 60 da Lei nº 8.213, de 24 de julho de 1991, e terá duração máxima de três meses. Pelo exposto, conheço do recurso e voto no sentido de DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO DE ANTECIPAÇÃO DE AUXÍLIO-DOENÇA PREVIDENCIÁRIO. ANTECIPAÇÃO CONCEDIDA, NOS MOLDES DO ART. 4º LEI Nº 13.982, DE 2 DE ABRIL DE 2020 E 3º DA PORTARIA CONJUNTA Nº 9.381, DE 6 DE ABRIL DE 2020. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-indeferimento-retorno-a-atividade-remunerada',
                    titulo: 'Incapacidade - INDEFERIMENTO - retorno a atividade remunerada',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de Auxílio-doença previdenciário, todavia observei que ele não se afastou do trabalho, pois manteve recolhimentos na condição de __________, &nbsp;durante todo o período de afastamento solicitado no atestado, motivo pelo qual o indeferimento será mantido, com base no art. 60, §6º da Lei 8.213/91: Art. 60 [...] § 6o O segurado que durante o gozo do auxílio-doença vier a exercer atividade que lhe garanta subsistência poderá ter o benefício cancelado a partir do retorno à atividade. &nbsp;(Incluído pela Lei nº 13.135, de 2015) &nbsp;Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-cessacao-retorno-a-atividade-remunerada',
                    titulo: 'Incapacidade - CESSAÇÃO - retorno a atividade remunerada',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em consulta ao CNIS – Cadastro Nacional de Informações Sociais – observou-se que retornou ao trabalho após a cessação do benefício.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. A paret recorrente insurge-se contra a data de cessação do benefício de auxílio-doença, sustentando a manutenção do quadro de incapacidade laborativa, todavia, em consulta ao CNIS, constatou-se informação de atividade remunerada, na condição de _________ , desde o mês de cessação do benefício, o que corrobora o entendimento de que houve reaquisição da capacidade, portanto a cessação será mantida com base no §6º do art. 60 da Lei 8.213/1991: Lei 8.213/91 Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. &nbsp;[...] &nbsp;6o O segurado que durante o gozo do auxílio-doença vier a exercer atividade que lhe garanta subsistência poderá ter o benefício cancelado a partir do retorno à atividade. Pelo exposto, VOTO, preliminarmente, no sentido de CONHECER DO RECURSO para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA. COMPROVAÇÃO DE RETORNO AO TRABALHO. A DATA DE CESSAÇÃO SERÁ MANTIDA. DECISÃO FUNDAMENTADA NO ART. 60, §3º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-laborativa-prorrogacao-dar-anterior-decreto-10-410-2020',
                    titulo: 'Incapacidade laborativa [PRORROGAÇÃO - DAR - ANTERIOR DECRETO 10.410/2020',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______, haja vista não concordar com a decisão do INSS que determinou a cessação do benefício de Auxílio-doença previdenciário (NB _______ ), de que esteve em gozo de _______ a _______ . Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. ). Os autos foram encaminhados à Perícia Médica Federal, que entendeu pela possibilidade de retificar a data de cessação para _______ (p. &nbsp;). Em consulta ao CNIS – Cadastro nacional de informações sociais, não foi detectada gozo de outro benefício ou retorno ao trabalho, até a nova data médica fixada.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a parte interessada a reforma da decisão que determinou a cessação do auxílio-doença e, em análise dos elementos dos autos, entendo ser possível a sua prorrogação nos termos do parecer médico federal. Assim, a prorrogação do benefício é cabível, nos termos do art. 60 da Lei 8.213/91: Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) Pelo exposto, conheço do recurso para, no mérito, DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA &nbsp;POSSÍVEL A PRORROGAÇÃO, NOS TERMOS DO ART. 60 DA LEI 8213/91. RECURSO CONHECIDO A QUE SE DÁ PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-laborativa-prorrogacao-negar-anterior-decreto-10-410-2020',
                    titulo: 'Incapacidade laborativa [PRORROGAÇÃO - NEGAR - ANTERIOR DECRETO 10.410/2020',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _______ , haja vista não concordar com a decisão do INSS que cessou o o benefício de Auxílio doença (NB _______ &nbsp;), de que esteve em gozo desde _______ a _______. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. ).Em consulta ao sistema de benefícios, não foi detectada qualquer hipótese de perda do objeto do recurso. Segundo a perícia médica federal, não há elementos técnicos de convicção suficientes para alteração da conclusão médica anterior (evento ___ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que cessou o benefício de Auxílio doença, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, houve a reaquisição da capacidade laborativa, ao tempo da cessação (evento ___ ). Assim, a cessação está em conformidade com a parte final do art. 60 da Lei 8.213/91: Lei 8.213/91 Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO MAIS EXISTE INCAPACIDADE PARA O TRABALHO, ESTANDO A CESSAÇÃO EM CONFORMIDADE COM A PARTE FINAL DO ART. 60 DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-laborativa-indeferimento-negar-pos-decreto-2020',
                    titulo: 'INCAPACIDADE LABORATIVA [INDEFERIMENTO - NEGAR - PÓS DECRETO 2020',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de auxílio por incapacidade temporária (NB _ ), requerido em _ , por PARECER CONTRÁRIO DA PERÍCIA MÉDICA. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. _). Segundo a perícia médica federal, não há elementos para alteração da decisão anterior (evento _). Em consulta ao sistema de benefício, não foi detectada perda do objeto do recurso.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de auxílio por incapacidade temporária, todavia, conforme constatado em avaliação médico pericial inicial e em sede de recurso, não existe incapacidade para o trabalho (evento &nbsp;_ ). Assim, o indeferimento está em conformidade com o art. 59 da Lei 8.213/91 e 71 do Decreto 3.048/99: Lei 8.213/91 Art. 59. O auxílio-doença será devido ao segurado que, havendo cumprido, quando for o caso, o período de carência exigido nesta Lei, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de 15 (quinze) dias consecutivos. Decreto 3.048/99 &nbsp;Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial. (Redação dada pelo Decreto nº 10.410, de 2020) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'RECURSO ORDINÁRIO. AUXÍLIO INCAPACIDADE TEMPORÁRIA. ANTIGO AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL INICIAL E EM SEDE DE RECURSO, NÃO EXISTE INCAPACIDADE PARA O TRABALHO, ESTANDO O INDEFERIMENTO EM CONFORMIDADE COM O ART. 59 DA LEI 8.213/91 e 71 DO DECRETO 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'incapacidade-laborativa-indeferimento-dar-pos-decreto-2020',
                    titulo: 'INCAPACIDADE LABORATIVA [INDEFERIMENTO - DAR - PÓS DECRETO 2020',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por ________ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de auxílio por incapacidade temporária (NB ________), requerido em ________, por PARECER CONTRÁRIO DA PERÍCIA MÉDICA. Em suas razões de recurso, alegou, em síntese, ter direito ao benefício (p. _). Segundo a perícia médica federal, é possível retificar o indeferimento, tendo fixado as seguintes datas médicas: data de início da doença, em ________, data de início da incapacidade em ________, data de cessação, em ________ , por doença que ________ isenta do período regulamentar de carência. Em consulta ao sistema de benefício, não foram detectados outros benefícios por incapacidade nesse período; em consulta ao extrato previdenciário, consta afastamento da atividade, na condição de ________ .</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de auxílio por incapacidade temporária, o que entendo ser possível, já que, em sede de recurso, foi reconhecida a incapacidade, no período de _____ a _____ &nbsp;(evento __ ). Assim, o benefício será concedido, na forma do art. 60 e 71 do Decreto 3.048/99: Lei 8.213/91: Art. 60. O auxílio-doença será devido ao segurado empregado a contar do décimo sexto dia do afastamento da atividade, e, no caso dos demais segurados, a contar da data do início da incapacidade e enquanto ele permanecer incapaz. (Redação dada pela Lei nº 9.876, de 26.11.99) [...]Decreto 3.048/99 Art. 71. O auxílio por incapacidade temporária será devido ao segurado que, uma vez cumprido, quando for o caso, o período de carência exigido, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de quinze dias consecutivos, conforme definido em avaliação médico-pericial. (Redação dada pelo Decreto nº 10.410, de 2020) Pelo exposto, VOTO, no sentido de CONHECER DO RECURSO e DAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. AUXÍLIO INCAPACIDADE TEMPORÁRIA. ANTIGO AUXÍLIO-DOENÇA. CONFORME CONSTATADO EM AVALIAÇÃO MÉDICO PERICIAL EM SEDE DE RECURSO, o benefício será concedido, na forma do art. 60 e 71 do Decreto 3.048/99 . RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'materia-julgada-administrativa-preclusao-processual',
                    titulo: 'Matéria julgada administrativa - preclusão processual',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Foi detectado julgamento, referente ao mesmo objeto do recurso, por outro órgão julgador do Conselho de Recursos da Previdência Social (evento _ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>A parte recorrente busca a reforma da decisão do INSS que indeferiu o benefício de Aposentadoria por tempo de contribuição, todavia, em consulta aos protocolos junto ao E-sisrec, constatou-se julgamento da mesma matéria objeto de recurso, pela _____ de Recursos. Assim, o caso dos autos trata de questão já apreciada na esfera administrativa, o que configura coisa julgada e, portanto, preclusão processual, situação que não admite o conhecimento do recurso, nos termos do art. 54, inciso VI do Regimento Interno do Conselho de Recursos do Seguro Social, que expressa o seguinte: Regimento Interno do CRSS: Art. 54 - Constituem razões de não conhecimento do recurso:[...]VI - a preclusão processual. Além disso, o art. 507 do Código de Processo Civil, c/c o art. 71 do Regimento Interno do CRSS, veda discussão de matéria preclusa: Código de Processo Civil Art. 507. É vedado à parte discutir no curso do processo as questões já decididas a cujo respeito se operou a preclusão. Regimento Interno do CRSS. Art. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública Federal. Por todo o exposto, VOTO no sentido de NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PRECLUSÃO. COISA JULGADA E EXAURIDA ADMINISTRATIVAMENTE. O INSTITUTO DA PRECLUSÃO PROCESSUAL E DO EXAURIMENTO NA ESFERA ADMINISTRATIVA NÃOPERMITEM QUE UM MESMO ÓRGÃO DA ADMINISTRAÇÃO PÚBLICA FAÇA APRECIAÇÃO DE MATÉRIA JÁ APRECIADA E MODIFIQUE DECISÃO ANTERIORMENTE PROFERIDA, SALVO EM SITUAÇÃO DE REVISÃO PREVISTA NO REGIMENTO INTERNO DO CRSS. RECURSO NÃO CONHECIDO. DECISÃO FUNDAMENTADA NOS ART. 54, VI DO RICRPS, ALTERADO PELA PORTARIA 116/2017, ART. 507 DO CPC/15 C/C ART. 71 DA PORTARIA 116/2017 DO MDSA.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'pensao-por-morte-filho-maior-invalido',
                    titulo: 'Pensão por morte - filho maior inválido',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto por _________ , nascid_ em _________ , haja vista não concordar com a decisão do INSS que indeferiu o benefício de Pensão por morte previdenciária (NB _________), requerido em _________ , na condição de filh_ maior inválid_ de _________ , por não comprovação da qualidade de dependente (p. _ ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de indeferiu o benefício de Pensão por morte previdenciária, o que não entendo ser possível, pois, segundo a perícia para Avaliação de Dependente Maior Inválido: não há ____ para caracterizar maior invalido (p._ ). Assim, entendo que não há direito ao benefício, na forma do art. 77, §2º da Lei 8.213/91, 108 do Decreto 3.048/99:Art. 74. A pensão por morte será devida ao conjunto dos dependentes do segurado que falecer, aposentado ou não, a contar da data: (Redação dada pela Lei nº 9.528, de 1997) (Vide Medida Provisória nº 871, de 2019)[...]Art. 77. A pensão por morte, havendo mais de um pensionista, será rateada entre todos em parte iguais. (Redação dada pela Lei nº 9.032, de 1995)[...]§ 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019)II - para o filho, a pessoa a ele equiparada ou o irmão, de ambos os sexos, ao completar vinte e um anos de idade, salvo se for inválido ou tiver deficiência intelectual ou mental ou deficiência grave; (Redação dada pela Lei nº 13.183, de 2015) (Vigência) Art. 108. A pensão por morte somente será devida ao filho e ao irmão cuja invalidez tenha ocorrido antes da emancipação ou de completar a idade de vinte e um anos, desde que reconhecida ou comprovada, pela perícia médica do INSS, a continuidade da invalidez até a data do óbito do segurado. (Redação dada pelo Decreto nº 6.939, de 2009)Art. 1º Comunicar para cumprimento a decisão judicial proferida na Ação Civil Pública-ACP nº 0059826-86.2010.4.01.3800/MG, determinando ao INSS que reconheça, para fins de concessão de pensão por morte, a dependência do filho inválido ou do irmão inválido, quando a invalidez tenha se manifestado após a maioridade ou emancipação, mas até a data do óbito do segurado, desde que atendidos os demais requisitos da lei.Art. 2º A determinação judicial a que se refere o artigo 1º produz efeitos para benefícios com Data de Entrada de Requerimento-DER a partir de 19/08/2009 e alcança todo o território nacional. Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE PREVIDENCIÁRIA. FILHO MAIOR INVÁLIDO. CONFORME LAUDO MÉDICO PERICIAL. NÃO HÁ DIREITO AO BENEFÍCIO. O INDEFERIMENTO SERÁ MANTIDO, NA FORMA DO ART. 77, §2º DA LEI 8.213/91 e 108 do Decreto 3.048/99. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'pensao-por-morte-menos-de-18-contribuicoes-do-instituidor',
                    titulo: 'Pensão por morte - menos de 18 contribuições do instituidor',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é considerado tempestivo e estão presentes os demais pressupostos que permitem a análise do mérito recursal. A parte recorrente não se conforma com a cessação do benefício, todavia, em consulta ao CNIS - Cadastro Nacional de Informações Sociais- constatou-se que o instituidor verteu, até o óbito, apenas ______ recolhimentos ao Regime Geral de Previdência Social, e não há qualquer documento apresentado que permita qualquer alteração nesta contagem, motivo pelo qual deve cessar em quatro meses, nos moldes do art. 77, §2º, alínea “b”, da Lei 8.213/91 Art. 77 [...] § 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019) [...]V - para cônjuge ou companheiro: (Incluído pela Lei nº 13.135, de 2015) [...] b) em 4 (quatro) meses, se o óbito ocorrer sem que o segurado tenha vertido 18 (dezoito) contribuições mensais ou se o casamento ou a união estável tiverem sido iniciados em menos de 2 (dois) anos antes do óbito do segurado; (Incluído pela Lei nº 13.135, de 2015) Por todo o exposto, conheço do recurso e VOTO no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE. NOS TERMOS DO ART. 77, §2º ALÍNEA B O DIREITO À PERCEPÇÃO DA COTA INDIVIDUAL CESSARÁ PARA CÔNJUGE OU COMPANHEIRO EM 4 (QUATRO) MESES, SE O ÓBITO OCORRER SEM QUE O SEGURADO TENHA VERTIDO 18 (DEZOITO) CONTRIBUIÇÕES MENSAIS. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'pensao-por-morte-relacao-com-menos-de-dois-anos',
                    titulo: 'Pensão por morte - relação com menos de dois anos',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a interessada comprovar sua condição de ______ de ______ &nbsp;(p. ), todavia, em análise dos autos, observei que não recai controvérsia sobre a sua condição de ______ . Na verdade, após análise dos autos, pude observar que o benefício foi mantido pelo período de 4 (quatro) meses, em razão de a união ter sido formalizada em menos de 2 (dois) anos antes do óbito do segurado, nos moldes do art. 77, §2º, V, alínea b da Lei 8.213/91:Art. 77 [...] § 2º O direito à percepção da cota individual cessará: (Redação dada pela Lei nº 13.846, de 2019)[...]V - para cônjuge ou companheiro: &nbsp;(Incluído pela Lei nº 13.135, de 2015)[...]b) em 4 (quatro) meses, se o óbito ocorrer sem que o segurado tenha vertido 18 (dezoito) contribuições mensais ou se o casamento ou a união estável tiverem sido iniciados em menos de 2 (dois) anos antes do óbito do segurado; (Incluído pela Lei nº 13.135, de 2015)Portanto, entendo que não ficou comprovada a manutenção da união do casal por mais de 4 meses, desde ___ até o óbito do instituidor, em ______ , motivo pelo qual a cessação será mantida, nos termos do art. 77, §2º, V, alínea b da Lei 8.213/91, acima citado. Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE PREVIDENCIÁRIA. O BENEFÍCIO FOI MANTIDO PELO PERÍODO DE 4 (QUATRO) MESES, EM RAZÃO DE A UNIÃO TER SIDO FORMALIZADA EM MENOS DE 2 (DOIS) ANOS ANTES DO ÓBITO DO SEGURADO, NOS MOLDES DO ART. 77, §2º, V, ALÍNEA B DA LEI 8.213/91. NÃO FICOU COMPROVADA A MANUTENÇÃO DA UNIÃO DO CASAL POR MAIS DE 4 MESES, DESDE ______ &nbsp;(P. ) ATÉ O ÓBITO DO INSTITUIDOR, EM ______, MOTIVO PELO QUAL A CESSAÇÃO SERÁ MANTIDA. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'pensao-por-morte-uniao-estavel-mais-de-uma-prova-dentro-de-24-meses',
                    titulo: 'Pensão por morte - união estável - mais de uma prova dentro de 24 meses',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Pretende a interessada a reforma da decisão que indeferiu o benefício de Pensão por morte previdenciária requerido na condição de ______ &nbsp;de ______ , falecid_ em ______ , todavia entendo que não há prova suficiente da referida união estável, pois a legislação previdenciária exige “provas de união estável e de dependência econômica”, portanto, no mínimo dois documentos. Não havendo prova da referida união estável, o indeferimento será mantido, na forma do art. 16, §5º da Lei 8.213/91:Art. 16. São beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado: I - o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 (vinte e um) anos ou inválido ou que tenha deficiência intelectual ou mental ou deficiência grave; (Redação dada pela Lei nº 13.146, de 2015) [...] § 5º As provas de união estável e de dependência econômica exigem início de prova material contemporânea dos fatos, produzido em período não superior a 24 (vinte e quatro) meses anterior à data do óbito ou do recolhimento à prisão do segurado, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, conforme disposto no regulamento. (Incluído pela Lei nº 13.846, de 2019) Pelo exposto, conheço do recurso para, no mérito, NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. PENSÃO POR MORTE. CONDIÇÃO DE _______ . NÃO HÁ PROVA SUFICIENTE DA REFERIDA _______ . A LEI EXIGE, NO MÍNIMO, DOIS DOCUMENTOS RELACIONADOS _______ , &nbsp;NO PERÍODO DE 24 MESES ANTERIOR AO ÓBITO, O QUE NÃO FOI ATENDIDO, MOTIVO PELO QUAL O INDEFERIMENTO SERÁ MANTIDO, NA FORMA DO ART. 16, §5º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'qualidade-de-segurado-reingresso-com-nova-carencia',
                    titulo: 'Qualidade de segurado – Reingresso com nova carência',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Recurso interposto contra a decisão do INSS que indeferiu o pedido do benefício de ___, requerido em ____.As competências ____ não foram consideradas para carência pelo INSS pois foram recolhidas em atraso.Em suas razões recursais alega o recorrente que ___.</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>Presentes os pressupostos de admissibilidade necessários ao conhecimento do recurso, passa-se a análise do mérito. O INSS não considerou as competências recolhidas em ____, pois o pagamento foi realizado após a perda da qualidade de segurado do recorrente que ocorreu em ____. O Inciso II do Artigo 27 da Lei 8.213/91 veda o computo para carência de contribuições realizadas em atraso. Lei 8.213/91 (…) Art. 27. Para cômputo do período de carência, serão consideradas as contribuições: (…) II – realizadas a contar da data do efetivo pagamento da primeira contribuição sem atraso, não sendo consideradas para este fim as contribuições recolhidas com atraso referentes a competências anteriores, no caso dos segurados empregado doméstico, contribuinte individual, especial e facultativo, referidos, respectivamente, nos incisos II, V e VII do art. 11 e no art. 13. O §4º do Artigo 28 do RPS – Decreto 3048/99 regulamentou que o primeiro recolhimento efetivado pelo contribuinte individual após ter perdido a qualidade de segurado, caracterizará o seu reingresso ao sistema previdenciário, não sendo computados para efeito de carência as contribuições em atraso referentes à períodos anteriores ao seu reingresso. Decreto 3048/99 Art. 28 (...) § 4º Para os segurados a que se refere o inciso II do caput, na hipótese de perda da qualidade de segurado, somente serão consideradas, para fins de carência, as contribuições efetivadas após novo recolhimento sem atraso, observado o disposto no art. 19-E Entendo que as competências recolhidas em atraso após a perda da qualidade de segurado não podem ser consideradas para carência por expressa vedação legal. Pelo exposto, voto pelo conhecimento do recurso para, no mérito, negar-lhe provimento.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. BENEFÍCIO XXX. CARÊNCIA. RECOLHIMENTOS REALIZADOS EM ATRASO APÓS A PERDA QUALIDADE DE SEGURADO. COMPETÊNCIAS NÃO COMPUTADA PARA EFEITO DE CARÊNCIA NOS TERMOS DO §4º ARTIGO 28 DO DECRETO 3048/99. NÃO HÁ DIREITO AO BENEFÍCIO. INDEFERIMENTO MANTIDO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'reclamatoria-trabalhista',
                    titulo: 'Reclamatória Trabalhista',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>O(A) requerente pleiteia o cômputo do intervalo de (XX/XX/XXXX), laborado no cargo de (_____), perante a empresa ____________. Para a comprovação do vínculo foi apresentado cópias da Reclamação Trabalhista nº___________, tramitada perante a ______ Vara do Trabalho da Comarca de _______.</p><p><br>O INSS não computou o intervalo para fins previdenciários.</p><p>Em suas razões recursais, o(a) requerente sustenta novamente que cabe o cômputo do período de (XX/XX/XXXX), oriundo de Reclamação Trabalhista.</p><p>&nbsp;</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>1ª hipótese<br>(Não cômputo)</p><p><br>Pretende o(a) requerente o cômputo do intervalo de (XX/XX/XXXX), decorrente de vínculo trabalhista reconhecido pela Justiça do Trabalho, nos autos da Reclamação Trabalhista nº ______ movida contra a empresa ____________. Contudo, inexiste elemento material para confirmar a atividade prestada. Convém salientar que, a sentença trabalhista transitada em julgada, inclusive a anotação de vínculo em CTPS decorrente dessa ação, por si só, não produz efeitos previdenciários se não acompanhada de prova material, conforme dispõe o §3º, do artigo 55 da Lei nº 8.213/91 e orienta o ENUNCIADO nº 03/2019, do CRPS.</p><p>&nbsp;</p><p>2ª hipótese<br>(Cômputo)</p><p><br>Pretende o(a) recorrente o cômputo do intervalo de (XX/XX/XXXX), decorrente de vínculo trabalhista reconhecido pela Justiça do Trabalho, nos autos da Reclamação Trabalhista nº ________, movida contra a empresa ____________.</p><p>No presente, o vínculo empregatício reconhecido em ação trabalhista está apto a ser considerado para fins previdenciários, uma vez que está embasado em prova material, de acordo com o §3º, do artigo 55 da Lei nº 8.213/91 e o ENUNCIADO nº 03/2019, do CRPS.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>EMENTA: RECLAMAÇÃO TRABALHISTA. IMPOSSIBILIDADE. AUSÊNCIA DE PROVA MATERIAL. NÃO ATENDIDO OS TERMOS DO §3º, DO ARTIGO 55 DA LEI Nº 8.213/91 E ENUNCIADO Nº 03/2019 DO CRPS.<br>A sentença trabalhista é hábil para ser considerada para fins previdenciários se constituída de prova material que evidencie o exercício da atividade remunerada no período discutido.</p><p>&nbsp;</p><p>EMENTA: RECLAMAÇÃO TRABALHISTA. POSSIBILIDADE. AÇÃO JUDICIAL ACOMPANHADA DE ELEMENTO MATERIAL QUE CONFIRMA O EXERCÍCIO DA ATIVIDADE REMUNERADA. ATENDIDO OS TERMOS DO §3º, DO ARTIGO 55 DA LEI Nº 8.213/91 E ENUNCIADO Nº 03/2019 DO CRPS.<br>&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'recorrente-nao-apresentou-documentos',
                    titulo: 'Recorrente não apresentou documentos',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Antes de indeferir, o INSS emitiu carta de exigência para que a interessada apresentasse documentos a fim de modificar o tempo, mas não ela não atendeu (p. ). Após o protocolo do recurso, o Gabinete de Crises solicitou o complemento das razões de recurso e da prova documental, mas os prazo decorreram sem manifestação</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade. Pretende a parte recorrente a reforma da decisão que indeferiu o benefício de __________ , todavia, mesmo depois de oportunizada a complementação da prova documental, o prazo decorreu sem manifestação da parte interessada, motivo pelo qual o processo será julgado no estado em que se encontra, na forma do art. 35, §2º do Regimento Interno do Conselho de Recursos do Seguro Social: Art. 35 [...] § 2º Uma vez interposto o recurso, o não cumprimento pelo interessado, de exigência ou providência que a ele incumbiriam, e para a qual tenha sido devidamente intimado, não implica em desistência tácita ou renúncia ao direito de recorrer, devendo o processo ser julgado no estado em que se encontra, arcando o interessado com o ônus de sua inércia. Além disso, existe previsão regimental que permite a apresentação de alegações e documentos referentes a matéria do processo até antes do início da sessão de julgamento: Regimento Interno do Conselho de Recursos do Seguro Social – CRSS Art. 37 [...] § 1º O interessado poderá juntar documentos, atestados, exames complementares e pareceres médicos, requerer diligências e perícias e aduzir alegações referentes à matéria objeto do processo até antes do início da sessão de julgamento, hipótese em que será avaliada a necessidade de conferir direito de vista à parte contrária para ciência e manifestação. A despeito dessas duas oportunidades, não houve qualquer alegação da recorrente, motivo pelo qual o indeferimento será mantido. Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. OPORTUNIZADA A COMPLEMENTAÇÃO DA DOCUMENTAÇÃO, O PRAZO DECORREU SEM MANIFESTAÇÃO DA PARTE. EXISTE PREVISÃO REGIMENTAL QUE PERMITE A APRESENTAÇÃO DE ALEGAÇÕES E DOCUMENTOS REFERENTES A MATÉRIA DO PROCESSO ATÉ ANTES DO INÍCIO DA SESSÃO DE JULGAMENTO. A DESPEITO DESSAS DUAS OPORTUNIDADES, NÃO HOUVE QUALQUER ALEGAÇÃO DA RECORRENTE, MOTIVO PELO QUAL O PROCESSO SERÁ JULGADO NO ESTADO EM QUE SE ENCONTRA, NA FORMA DO ART. 35, §2º DO REGIMENTO INTERNO DO CONSELHO DE RECURSOS DO SEGURO SOCIAL. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.&nbsp;</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'recurso-sem-assinatura-e-sem-atendimento-de-exigencia-pela-parte',
                    titulo: 'Recurso sem assinatura e sem atendimento de exigência pela parte',
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>Em suas razões de recurso, alegou ter direito ao benefício, mas foi verificada necessidade devolver ao diligenciador para notificar a recorrente a assinar a petição de recurso (p. ) mas o prazo decorreu sem manifestação (p. ).</p>',
                        },
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>As razões recursais não contêm assinatura; sendo notificada a parte requerente para regularizar, não sanou os vícios, nem justificou por que não o fez. Portanto, no caso dos autos, aplica-se o disposto no art. 76, § 2º, inciso I, do Código de Processo Civil, c/c o art. 71 do Regimento Interno do CRPS, segundo o qual o recurso não será conhecido quando a parte recorrente deixar de cumprir exigência ou providência que a ela incumbiria. Código de Processo Civil Art. 76. Verificada a incapacidade processual ou a irregularidade da representação da parte, o juiz suspenderá o processo e designará prazo razoável para que seja sanado o vício. § 2º Descumprida a determinação em fase recursal perante tribunal de justiça, tribunal regional federal ou tribunal superior, o relator: I - não conhecerá do recurso, se a providência couber ao recorrente; [...] Regimento Interno do Conselho de Recursos da Previdência Social Art. 71. Nos casos de omissão deste Regimento, aplicam-se sucessivamente, se houver compatibilidade das regras, as disposições pertinentes da Lei nº 13.105, de 16 de março de 2015, que instituiu o Código de Processo Civil, e da Lei no 9.784, de 29 de janeiro de 1999, que regula o processo administrativo no âmbito da Administração Pública Federal. O STJ (Superior Tribunal de Justiça) já manifestou pelo não conhecimento do mérito em recurso sem assinatura em que a parte recorrente negligencia e não regulariza após ser notificada, consoante o entendimento jurisprudência transcrito a seguir: PROCESSUAL CIVIL. ART. 13 e 284 DO CPC. AUSÊNCIA DE ASSINATURA NA PEÇA INICIAL, INSTÂNCIAS ORDINÁRIAS. ABERTURA DE PRAZO PARA REGULARIZAÇÃO. 1. A ausência de assinatura na petição nas instâncias ordinárias, ao contrário da instância especial, é um vício sanável, a teor do que reza o art. 13 do CPC, aplicável analogicamente à irregularidade da representação postulatória, de forma que se deve proceder à abertura de prazo razoável para sanar a irregularidade. É que os vícios de representação devem ser sanados na instância ordinária, pelo que, repise-se, é perfeitamente possível ao Tribunal de origem a abertura de prazo para remediar esse tipo de defeito, consoante o disposto no referido dispositivo legal. 2. In casu, o juízo concedeu à autarquia oportunidade para firmar a inicial de embargos à execução, transcorrendo o prazo de 40 (quarenta) dias sem qualquer atividade da parte. Deveras, à ausência de assinatura da inicial aplica-se o art. 284 e seu parágrafo do CPC e, não o art. 267, § 1º, cujo escopo é diverso do primeiro dispositivo afastado. 3. Negligenciando a autarquia embargante à determinação do juízo a quo pra que procedesse à regularização da petição inicial apócrifa, correta a extinção dos embargos à execução sem julgamento de mérito. 4. Recurso especial desprovido. (REsp 652.641/RS, Rel. Ministro LUIZ FUX, PRIMEIRA TURMA, julgado em 02/12/2004, DJ 28/02/2005, p. 236) Pelo exposto, VOTO no sentido de NÃO CONHECER DO RECURSO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. O RECURSO ESTAVA SEM ASSINATURA. OPORTUNIZADA REGULARIZAÇÃO, NÃO HOUVE INTERESSE DA PARTE EM ATENDER. PORTANTO, APLICA-SE O DISPOSTO NO ART. 76, § 2º, INCISO I, DO CÓDIGO DE PROCESSO CIVIL, C/C O ART. 71 E 35, §2º DO REGIMENTO INTERNO DO CRPS, SEGUNDO O QUAL O RECURSO NÃO SERÁ CONHECIDO QUANDO A PARTE RECORRENTE DEIXAR DE CUMPRIR EXIGÊNCIA OU PROVIDÊNCIA QUE A ELA INCUMBIRIA. RECURSO NÃO CONHECIDO.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'salario-maternidade-sem-afastamento-atividade',
                    titulo: 'Salário maternidade - sem afastamento atividade',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. Pretende a parte recorrente a reforma da decisão que ___ o benefício de Salário-maternidade, todavia, em consulta ao CNIS – Cadastro nacional de informações sociais -, observou-se que há registro de remuneração recebida, como ____ , durante todo o período que deveria ter se fastado (p.___ ), todavia, nos termos do art. 71-C da Lei 8.213/91, a percepção do salário-maternidade, inclusive o previsto no art. 71-B, está condicionada ao afastamento do trabalho: Art. 71-C. A percepção do salário-maternidade, inclusive o previsto no art. 71-B, está condicionada ao afastamento do segurado do trabalho ou da atividade desempenhada, sob pena de suspensão do benefício. (Incluído pela Lei nº 12.873, de 2013) Assim, como não houve afastamento, não há direito ao recebido de valores correspondente aos 120 dias. Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>RECURSO ORDINÁRIO. SALÁRIO-MATERNIDADE. NOS TERMOS DO ART. 71-C DA LEI 8.213/91, A PERCEPÇÃO DO SALÁRIO-MATERNIDADE, INCLUSIVE O PREVISTO NO ART. 71-B, ESTÁ CONDICIONADA AO AFASTAMENTO DO TRABALHO. NÃO HOUVE AFASTAMENTO POR 120 DIAS. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado-especial-prova-de-vinculo-com-terras-rurais-com-ja',
                    titulo: 'Segurado especial - prova de vínculo com terras rurais; com J.A.',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.Quanto ao alegado labor rural de _____ &nbsp;a _____ &nbsp;, em que pese a qualificação civil de seu cônjuge, _____ , em momentos diversos (p. _____ ), não ficou comprovada a vinculação do grupo familiar a qualquer imóvel rural, na forma de proprietários, usufrutuários, possuidores, assentados, parceiros, meeiros outorgados, comodatários ou arrendatários rurais, conforme exige o art. 11, VII, alínea a da Lei 8.213/91: Art. 11. São segurados obrigatórios da Previdência Social as seguintes pessoas físicas: (Redação dada pela Lei nº 8.647, de 1993) [...] VII – como segurado especial: a pessoa física residente no imóvel rural ou em aglomerado urbano ou rural próximo a ele que, individualmente ou em regime de economia familiar, ainda que com o auxílio eventual de terceiros, na condição de: (Redação dada pela Lei nº 11.718, de 2008) a) produtor, seja proprietário, usufrutuário, possuidor, assentado, parceiro ou meeiro outorgados, comodatário ou arrendatário rurais, que explore atividade: (Incluído pela Lei nº 11.718, de 2008) Assim, não existe início de prova suficiente para comprovar referida condição, na forma do Enunciado 8, V do CRPS, 2019, motivo pelo qual indefiro o processamento de justificação administrativa, na forma do art. 55, §3º da Lei 8.213/91: ENUNCIADO 8 O tempo de trabalho rural do segurado especial e do contribuinte individual, anterior à Lei nº 8.213/91, pode ser utilizado, independente do recolhimento das contribuições, para fins de benefícios no RGPS, exceto para carência. [...] &nbsp;V - O início de prova material - documento contemporâneo dotado de fé pública, sem rasuras ou retificações recentes, constando a qualificação do segurado ou de membros do seu grupo familiar como rurícola, lavrador ou agricultor - deverá ser corroborado por outros elementos, produzindo um conjunto probatório harmônico, robusto e convincente, capaz de comprovar os fatos alegados. [...] &nbsp;(CONSELHO DE RECURSOS DA PREVIDÊNCIA SOCIAL, 2019) Art. 55. O tempo de serviço será comprovado na forma estabelecida no Regulamento, compreendendo, além do correspondente às atividades de qualquer das categorias de segurados de que trata o art. 11 desta Lei, mesmo que anterior à perda da qualidade de segurado: [...] § 3º A comprovação do tempo de serviço para os fins desta Lei, inclusive mediante justificativa administrativa ou judicial, observado o disposto no art. 108 desta Lei, só produzirá efeito quando for baseada em início de prova material contemporânea dos fatos, não admitida a prova exclusivamente testemunhal, exceto na ocorrência de motivo de força maior ou caso fortuito, na forma prevista no regulamento. (Redação dada pela Lei nº 13.846, de 2019)</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>QUANTO AO ALEGADO LABOR RURAL DE _________ , EM QUE PESE A QUALIFICAÇÃO CIVIL DE SEU ______ , NÃO FICOU COMPROVADA A VINCULAÇÃO DO GRUPO FAMILIAR A QUALQUER IMÓVEL RURAL, NA CONDIÇÃO DE ________ , CONFORMME TEOR DO ART. 11, VII, ALÍNEA A DA LEI 8.213/91. &nbsp;MOTIVO PELO QUAL NÃO HA INICIO DE PROVA PARA O PROCESSAMENTO DE JUSTIFICAÇÃO ADMINISTRATIVA, NA FORMA DO ART. 55, §3º DA LEI 8.213/91.</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado-especial-atividade-em-outra-categoria-mais-de-120-dias-ano-civil',
                    titulo: 'Segurado especial – atividade em outra categoria mais de 120 dias ano civil',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: 'O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal. [...]   Nos períodos de _______ a _______ ,  ficou descaracterizada a condição de rural, por serem períodos de labor urbano, em intervalos superiores ao limite legal, na forma do art. 11, §10 LEI Nº 8.213, DE 24 DE JULHO DE 1991 Art. 11 [...] § 10. O segurado especial fica excluído dessa categoria: (Incluído pela Lei nº 11.718, de 2008) [...]  b) enquadrar-se em qualquer outra categoria de segurado obrigatório do Regime Geral de Previdência Social, ressalvado o disposto nos incisos III, V, VII e VIII do § 9o e no § 12, sem prejuízo do disposto no art. 15; (Redação dada pela Lei nº 12.873, de 2013) [...] Art. 11 [...] §9º [...] III - exercício de atividade remunerada em período não superior a 120 (cento e vinte) dias, corridos ou intercalados, no ano civil, observado o disposto no § 13 do art. 12 da Lei nº 8.212, de 24 de julho de 1991; (Redação dada pela Lei nº 12.873, de 2013)',
                        },
                        {
                            categoria: 'ementa',
                            texto: 'QUALIDADE DE SEGURADO ESPECIAL DESCARACTERIZADA PELO LABOR URBANO EM PERÍODO SUPERIOR A 120 DIAS NO ANO CIVIL, CONFORMA ART. 11, §9º, INCISO III DA LEI 8.213/91',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'segurado-especial-autodeclaracao',
                    titulo: 'Segurado especial – autodeclaração',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos que admitem a análise do mérito recursal.A recorrente busca o reconhecimento do exercício de atividade rural, todavia ela não apresentou qualquer prova de atividade rural, tampouco a autodeclaração exigida, muito embora a comprovação da atividade se dê complementarmente à autodeclaração, nos termos da Lei 8.213/91: Art. 106. A comprovação do exercício de atividade rural será feita, complementarmente à autodeclaração de que trata o § 2º e ao cadastro de que trata o § 1º, ambos do art. 38-B desta Lei, por meio de, entre outros: (Redação dada pela Lei nº 13.846, de 2019) Art. 38-B. [...] § 2º Para o período anterior a 1º de janeiro de 2023, o segurado especial comprovará o tempo de exercício da atividade rural por meio de autodeclaração ratificada por entidades públicas credenciadas, nos termos do art. 13 da Lei nº 12.188, de 11 de janeiro de 2010, e por outros órgãos públicos, na forma prevista no regulamento. (Incluído pela Lei nº 13.846, de 2019)Assim, não tendo ficado comprovada a condição de segurado especial, na forma do art.11, VII, alínea “a” da Lei 8.213/91, não entendo devido o benefício de aposentadoria por idade rural, na forma do art. 26, III, 39, I c/c 48, §2º da Lei 8.213/91:<br>Lei 8.213/91<br>Art. 26. Independe de carência a concessão das seguintes prestações:<br>[...]<br>III - os benefícios concedidos na forma do inciso I do art. 39, aos segurados especiais referidos no inciso VII do art. 11 desta Lei;<br>[...]<br>Art. 39. &nbsp;Para os segurados especiais, referidos no inciso VII do caput do art. 11 desta Lei, fica garantida a concessão: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 13.846, de 2019)<br>I - de aposentadoria por idade ou por invalidez, de auxílio-doença, de auxílio-reclusão ou de pensão, no valor de 1 (um) salário mínimo, e de auxílio-acidente, conforme disposto no art. 86 desta Lei, desde que comprovem o exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, igual ao número de meses correspondentes à carência do benefício requerido, observado o disposto nos arts. 38-A e 38-B desta Lei; ou &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Redação dada pela Lei nº 13.846, de 2019)<br>[...]<br>Art. 48 [...] &nbsp; &nbsp; &nbsp; &nbsp;§ 2o &nbsp;Para os efeitos do disposto no § 1o deste artigo, o trabalhador rural deve comprovar o efetivo exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, por tempo igual ao número de meses de contribuição correspondente à carência do benefício pretendido, computado o período &nbsp;a que se referem os incisos III a VIII do § 9o do art. 11 desta Lei. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 11,718, de 2008)<br>Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.&nbsp;<br>RECURSO ORDINÁRIO. APOSENTADORIA POR IDADE RURAL. PRETENDE A PARTE INTERESSADA O RECONHECIMENTO DE SUA CONDIÇÃO DE SEGURADO(A) ESPECIAL. REFERIDA NORMA EXIGE INÍCIO DE PROVA MATERIAL CONTEMPORÂNEO À ÉPOCA DOS FATOS A PROVAR, E PERMITE UTILIZAÇÃO, PARA ESSE FIM, DE DOCUMENTO ANTERIOR AO PERÍODO CONTROVERTIDO. NÃO COMPROVADA A CONDIÇÃO DE SEGURADO(a) ESPECIAL, NA FORMA DO ART.11, VII, ALÍNEA “A” DA LEI 8.213/91. NÃO HÁ DIREITO AO BENEFÍCIO, NA FORMA DO ART. 26, III, 39, I C/C 48, §2º DA LEI 8.213/91. RECURSO CONHECIDO A QUE SE NEGA PROVIMENTO.<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>A comprovação do exercício de atividade rural será feita, complementarmente à autodeclaração de que trata o § 2º e ao cadastro de que trata o § 1º, ambos do art. 38-B desta Lei. art. 106 da lei 8.213/91</p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'avançar',
                    },
                },
                {
                    id: 'trabalhador-rural-contribuinte-individual',
                    titulo: 'Trabalhador rural - contribuinte individual',
                    listaTextos: [
                        {
                            categoria: 'voto-pontos-controversos',
                            texto: '<p>O recurso é tempestivo e estão presentes os demais pressupostos de admissibilidade do recurso. O interessado busca a reforma da decisão mediante reconhecimento do exercício de atividade rural no período de ______ a ______ , como ______ , todavia , em que pese tenha informado criar ______ , ______ &nbsp;e ______ , para subsistência do grupo familiar, ele comprovou possuir ______ , o que o desqualifica como segurado especial, mas como trabalhador rural, na condição de contribuinte individual, nos moldes do art. 11, V, alínea “a” da Lei 8.213/91: Art.11 [...] V - como contribuinte individual: (Redação dada pela Lei nº 9.876, de 26.11.99) a) a pessoa física, proprietária ou não, que explora atividade agropecuária, a qualquer título, em caráter permanente ou temporário, em área superior a 4 (quatro) módulos fiscais; ou, quando em área igual ou inferior a 4 (quatro) módulos fiscais ou atividade pesqueira, com auxílio de empregados ou por intermédio de prepostos; ou ainda nas hipóteses dos §§ 9o e 10 deste artigo; (Redação dada pela Lei nº 11.718, de 2008) Art. 11. São segurados obrigatórios da Previdência Social as seguintes pessoas físicas: (Redação dada pela Lei nº 8.647, de 1993)[...] VII – como segurado especial: a pessoa física residente no imóvel rural ou em aglomerado urbano ou rural próximo a ele que, individualmente ou em regime de economia familiar, ainda que com o auxílio eventual de terceiros, na condição de: (Redação dada pela Lei nº 11.718, de 2008) a) produtor, seja proprietário, usufrutuário, possuidor, assentado, parceiro ou meeiro outorgados, comodatário ou arrendatário rurais, que explore atividade: (Incluído pela Lei nº 11.718, de 2008) 1. agropecuária em área de até 4 (quatro) módulos fiscais; (Incluído pela Lei nº 11.718, de 2008) 2. de seringueiro ou extrativista vegetal que exerça suas atividades nos termos do inciso XII do caput do art. 2º da Lei nº 9.985, de 18 de julho de 2000, e faça dessas atividades o principal meio de vida; (Incluído pela Lei nº 11.718, de 2008) b) pescador artesanal ou a este assemelhado que faça da pesca profissão habitual ou principal meio de vida; e &nbsp;(Incluído pela Lei nº 11.718, de 2008) c) cônjuge ou companheiro, bem como filho maior de 16 (dezesseis) anos de idade ou a este equiparado, do segurado de que tratam as alíneas a e b deste inciso, que, comprovadamente, trabalhem com o grupo familiar respectivo. (Incluído pela Lei nº 11.718, de 2008) § 10. O segurado especial fica excluído dessa categoria: (Incluído pela Lei nº 11.718, de 2008) [...] I – a contar do primeiro dia do mês em que: (Incluído pela Lei nº 11.718, de 2008) [...] b) enquadrar-se em qualquer outra categoria de segurado obrigatório do Regime Geral de Previdência Social, ressalvado o disposto nos incisos III, V, VII e VIII do § 9o e no § 12, sem prejuízo do disposto no art. 15; [...] &nbsp;Além disso, referido entendimento encontra-se em harmonia com os termos da jurisprudência transcrita a seguir: EMENTA: PREVIDENCIÁRIO. APOSENTADORIA RURAL POR IDADE. REQUISITOS LEGAIS. PRODUÇÃO AGRÍCOLA ELEVADA. UTILIZAÇÃO DE MAQUINÁRIO. DESCARACTERIZAÇÃO DO REGIME DE ECONOMIA FAMILIAR. [...]A produção agrícola elevada associada à utilização de maquinário evidencia a chamada agricultura empresarial, afastando a condição de segurado especial e descaracterizando o regime de economia familiar.” (TRF4 5029495-06.2015.404.9999, Quinta Turma, Relator p/ Acórdão Luiz Antonio Bonat, juntado aos autos em 30/03/2016). Ementa PREVIDENCIÁRIO. TRABALHADOR RURAL. REGIME DE ECONOMIA FAMILIAR. PRODUÇÃO ALÉM DO INDISPENSÁVEL À SUBSISTÊNCIA. 1. A teor do que prevê a legislação previdenciária, o regime de economia familiar se caracteriza pela atividade realizada pelos membros da família, indispensável à própria subsistência, sem o auxílio de empregados 2. Comprovado que a produção supera em muito o indispensável à subsistência do grupo familiar, o proprietário não se enquadra como pequeno produtor rural em regime de economia familiar para a própria subsistência.” (TRF-4, 5ª Turma, publicado em 29/06/04, DJ, p. 322).Assim, não tendo ficado comprovada a condição de segurado especial, na forma do art.11, VII, alínea “a” da Lei 8.213/91, não entendo devido o benefício de aposentadoria por idade rural, na forma do art. 26, III, 39, I c/c 48, §2º da Lei 8.213/91:<br>Lei 8.213/91<br>Art. 26. Independe de carência a concessão das seguintes prestações:<br>[...]<br>III - os benefícios concedidos na forma do inciso I do art. 39, aos segurados especiais referidos no inciso VII do art. 11 desta Lei;<br>[...]<br>Art. 39. &nbsp;Para os segurados especiais, referidos no inciso VII do caput do art. 11 desta Lei, fica garantida a concessão: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 13.846, de 2019)<br>I - de aposentadoria por idade ou por invalidez, de auxílio-doença, de auxílio-reclusão ou de pensão, no valor de 1 (um) salário mínimo, e de auxílio-acidente, conforme disposto no art. 86 desta Lei, desde que comprovem o exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, igual ao número de meses correspondentes à carência do benefício requerido, observado o disposto nos arts. 38-A e 38-B desta Lei; ou &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Redação dada pela Lei nº 13.846, de 2019)<br>[...]<br>Art. 48 [...] &nbsp; &nbsp; &nbsp; &nbsp;§ 2o &nbsp;Para os efeitos do disposto no § 1o deste artigo, o trabalhador rural deve comprovar o efetivo exercício de atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento do benefício, por tempo igual ao número de meses de contribuição correspondente à carência do benefício pretendido, computado o período &nbsp;a que se referem os incisos III a VIII do § 9o do art. 11 desta Lei. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Redação dada pela Lei nº 11,718, de 2008)<br>Pelo exposto, conheço do recurso e voto no sentido de NEGAR-LHE PROVIMENTO.&nbsp;<br>&nbsp;</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p>PRODUÇÃO AGRÍCOLA ELEVADA. EVIDENCIA DA CHAMADA AGRICULTURA EMPRESARIAL, AFASTANDO A CONDIÇÃO DE SEGURADO ESPECIAL E DESCARACTERIZANDO O REGIME DE ECONOMIA FAMILIAR. A PRODUÇÃO SUPERA EM MUITO O INDISPENSÁVEL À SUBSISTÊNCIA DO GRUPO FAMILIAR, PORTANTO O PROPRIETÁRIO NÃO SE ENQUADRA COMO PEQUENO PRODUTOR RURAL EM REGIME DE ECONOMIA FAMILIAR PARA A PRÓPRIA SUBSISTÊNCIA, NA FORMA DO ART. 11, VII DA LEI 8.213/91, ESTANDO REFERIDA CONDIÇÃO DESCARACTERIZADA, NA FORMA DO §10 DO MESMO ARTIGO, POR SE ENQUADRAR NA CATEGORIA DE CONTRIBUINTE INDIVIDUAL, NA FORMA DO ART. 11, V, ALÍNEA A DA LEI 8.213/91.</p>',
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
            valorPadrao: 'recurso_tempestivo_sem_registro_da_ciencia',
            opcoes: [
                {
                    id: 'recurso_tempestivo_sem_registro_da_ciencia',
                    titulo: 'Recurso Tempestivo sem registro da ciência',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>&nbsp;</p><p>Não há registro da ciência da decisão recorrida.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>&nbsp;</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é tempestivo em razão de inexistir registro o processo da ciência da parte recorrente, nos termos Art. 64 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;TEMPESTIVIDADE RECURSAL EM RAZÃO DA AUSÊNCIA DO REGISTRO DE CIÊNCIA, CONFORME ART. 64 DO RICRPS.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_ro',
                    },
                },
                {
                    id: 'recurso_tempestivo_com_registro_da_ciencia',
                    titulo: 'Recurso Tempestivo com registro da ciência',
                    listaVariaveis: [
                        {
                            id: 'data_da_intimacao',
                            titulo: 'Data da intimação:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo',
                            titulo: 'Data do protocolo:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>&nbsp;</p><p>Há registro da ciência da decisão em ${data_da_intimacao}, e a interposição do presente recurso ocorreu em ${data_do_protocolo}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>&nbsp;</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é tempestivo em razão da interposição do recurso ocorrer no prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS).</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp; TEMPESTIVIDADE RECURSAL COMPROVADA, CONFORME ART. 61 DO RICRPS.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_ro',
                    },
                },
                {
                    id: 'recurso_intempestivo',
                    titulo: 'Recurso Intempestivo',
                    listaVariaveis: [
                        {
                            id: 'data_da_intimacao',
                            titulo: 'Data da intimação:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo',
                            titulo: 'Data do protocolo:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>&nbsp;</p><p>Há registro da ciência da decisão em ${data_da_intimacao}, e a interposição do presente recurso ocorreu em ${data_do_protocolo}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>&nbsp;</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é intempestivo em razão da intimação ocorrer em ${data_da_intimacao} e a interposição do recurso em ${data_do_protocolo}, portanto, após o prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS). Ainda, inexiste inequívoca liquidez e certeza do direito da parte que justifique a relevação da intempestividade preceituada no §1º do Art. 57 do RICRPS.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;INTEMPESTIVIDADE RECURSAL, CONFORME ART. 61 DO RICRPS.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_ro',
                    },
                },
                {
                    id: 'recurso_intempestivo_-_relevada',
                    titulo: 'Recurso Intempestivo - relevada',
                    listaVariaveis: [
                        {
                            id: 'data_da_intimacao',
                            titulo: 'Data da intimação:',
                            tipo: 'data',
                        },
                        {
                            id: 'data_do_protocolo',
                            titulo: 'Data do protocolo:',
                            tipo: 'data',
                        },
                    ],
                    listaTextos: [
                        {
                            categoria: 'relatorio',
                            texto: '<p>&nbsp;</p><p>Há registro da ciência da decisão em ${data_da_intimacao}, e a interposição do presente recurso ocorreu em ${data_do_protocolo}.</p>',
                        },
                        {
                            categoria: 'voto',
                            texto: '<p>&nbsp;</p><p><strong>ADMISSIBILIDADE</strong></p><p>O presente recurso é intempestivo em razão da intimação ocorrer em ${data_da_intimacao} e a interposição do recurso em ${data_do_protocolo}, portanto, após o prazo fixado pelo Art. 61 da Portaria MTP nº 4.062/2022, que aprova o Regimento Interno do CRPS (RICRPS). Todavia, como se verifica no corpo do voto, restou demonstrada de forma inequívoca a liquidez e a certeza do direito da parte, razão pela qual se propõe à composição julgadora a relevação da intempestividade.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;INTEMPESTIVIDADE RECURSAL RELEVADA, CONFORME § 1º DO ART. 57 DO RICRPS.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'decisao_ro',
                    },
                },
            ],
        },
        {
            id: 'decisao_ro',
            tipo: 'opcao',
            titulo: 'Decisão (RO)',
            valorPadrao: 'dar_provimento',
            opcoes: [
                {
                    id: 'dar_provimento',
                    titulo: 'Dar provimento',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Assiste razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E DAR-LHE PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO CONHECIDO E PROVIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
                {
                    id: 'dar_parcial_provimento',
                    titulo: 'Dar parcial provimento',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Assiste parcial razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E DAR-LHE PARCIAL PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO CONHECIDO E PARCIALMENTE PROVIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
                {
                    id: 'negar_provimento',
                    titulo: 'Negar Provimento',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Não assiste razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por CONHECER DO RECURSO E NEGAR-LHE PROVIMENTO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO CONHECIDO E NEGADO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
                {
                    id: 'nao_conhecer_-_acao_judicial',
                    titulo: 'Não conhecer - Ação Judicial',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Não assiste razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
                {
                    id: 'nao_conhecer_-_intempestividade',
                    titulo: 'Não conhecer - Intempestividade',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Não assiste razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
                {
                    id: 'nao_conhecer_-_reconhecimento_pelo_inss',
                    titulo: 'Não conhecer - Reconhecimento pelo INSS',
                    listaVariaveis: [],
                    listaTextos: [
                        {
                            categoria: 'voto_introducao',
                            texto: '<p>Não assiste razão à parte recorrente.</p>',
                        },
                        {
                            categoria: 'conclusao',
                            texto: '<p>&nbsp;</p><p><strong>CONCLUSÃO</strong></p><p>Ante o exposto, voto por NÃO CONHECER DO RECURSO, nos termos da fundamentação.</p>',
                        },
                        {
                            categoria: 'ementa',
                            texto: '<p><strong>&nbsp;RECURSO ORDINÁRIO NÃO CONHECIDO.</strong></p>',
                        },
                    ],
                    ramificacao: {
                        irPara: 'pontos_controversos',
                    },
                },
            ],
        },
    ],
    listaModelos: [
        {
            id: 'relatorio',
            titulo: 'Relatório',
            texto: '<p>${votos_rapidos.relatorio}${tipo_do_processo.introducao}${tipo_do_processo.complemento1}${tipo_do_processo.recorrente}${tipo_do_processo.complemento2}${tipo_do_processo.recorrido}${decisao_do_inss_31.complemento3}${decisao_do_inss_21.complemento3}${procurador.relatorio}${decisao_do_inss_21.elementos}${21_sobre_a_qualidade_de_segurado_na_data_do_obito.elementos_qualidade}${21_qualidade_de_segurado_-_prestacao_recebida.elementos_qualidade}${21_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_ocorreu_como.elementos}${21_sobre_as_provas_de_uniao_estavel__dependencia_economica.elementos}${21_documento_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_2_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_3_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_4_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_5_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_6_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_7_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_8_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_9_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_documento_10_de_uniao_estavel__dependencia_economica_apresentado.dependenteprova}${21_o_filho_a_dependente_era_na_data_do_obito.elementos}${decisao_do_inss_31.elementos}${tipo_do_processo.sintese}${admissibilidade.relatorio}${tipo_do_processo.contrarrazoes}${parecer_pericia_medica_federal.diligencias}${31_sobre_a_qualidade_de_segurado_no_evento_gerador_dii.elementos_qualidade}${31_sobre_a_manutencao_e_perda_da_qualidade_de_segurado_a_ultima_contribuicao_antes_da_dii_ocorreu_como.elementos}${31_sobre_a_carencia_no_evento_gerador_dii.elementos_carencia}${21_parecer_pericia_medica_federal.diligencias}${21_acrescimos_legais_ao_periodo_de_graca.21qualidadediligencia}</p><p>${tipo_do_processo.fechamento}</p>',
        },
        {
            id: 'voto',
            titulo: 'Voto',
            texto: '<p>${votos_rapidos.voto}${decisao_ro.voto_introducao}${admissibilidade.voto}${especie_ro.merito}${21_sobre_a_qualidade_de_segurado_na_data_do_obito.merito_qualidade}${decisao_do_inss_21.merito}${21_qualidade_de_segurado_-_prestacao_recebida.merito_qualidade}${31_sobre_a_qualidade_de_segurado_no_evento_gerador_dii.merito_qualidade}${parecer_pericia_medica_federal.merito}${21_parecer_pericia_medica_federal.merito}${21_acrescimos_legais_ao_periodo_de_graca.21qualidadecasosconcretosacrescimo}${parecer_pericia_medica_federal.casoconcreto}${21_parecer_pericia_medica_federal.casoconcreto}${decisao_ro.conclusao}</p><p>&nbsp;</p>',
        },
        {
            id: 'ementa',
            titulo: 'Ementa',
            texto: '<p>${votos_rapidos.ementa}${tipo_do_processo.ementa}${admissibilidade.ementa}${especie_ro.ementa}${decisao_do_inss_21.ementa}${parecer_pericia_medica_federal.ementa}${21_parecer_pericia_medica_federal.ementa}${decisao_ro.ementa}</p>',
        },
    ],
};
