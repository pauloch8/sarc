(function(){"use strict";var e={8229:function(e,r,o){var a=o(9242),t=o(9907),i=o.n(t),s=o(3396);const n={class:"container"},c=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("strong",null,"SARC")])],-1),d={class:"container"};function u(e,r,o,a,t,i){const u=(0,s.up)("router-link"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",n,[c,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(u,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Resposta")])),_:1})])])]),(0,s._)("div",d,[(0,s.Wm)(l)])],64)}var l=(0,s.aZ)({name:"App"}),p=o(89);const m=(0,p.Z)(l,[["render",u]]);var b=m,f=o(2483);function g(e,r,o,a,t,i){const n=(0,s.up)("formulario-component");return(0,s.wg)(),(0,s.iD)("main",null,[(0,s.Wm)(n,{formulario:e.formulario,"processador-formulario":e.processadorFormulario},null,8,["formulario","processador-formulario"])])}class v{constructor(e,r,o,a){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"titulo",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"questoes",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"subtitulo",{enumerable:!0,configurable:!0,writable:!0,value:a})}getTitulo(){return this.titulo}getSubtitulo(){return this.subtitulo}getQuestoes(){return this.questoes}getRespostas(){const e=this.questoes.map((e=>e.getResposta())),r={id:this.id,respostasQuestoes:e};return r}}class h{constructor(e,r,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"tipo",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"resposta",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getId(){return this.id}getLabel(){return this.label}getEscapador(){return"${"+this.label+"}"}setResposta(e){this.resposta=e}getResposta(){if(!this.resposta)throw new E(this.getLabel());const e={id:this.id,resposta:this.resposta};return e}}class E extends Error{constructor(e){super(`Resposta não fornecida para a variável ${e}`)}}class O{constructor(e,r,o,a){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"ramificacao",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"variaveis",{enumerable:!0,configurable:!0,writable:!0,value:a})}getId(){return this.id}getLabel(){return this.label}getRamificacoes(){return this.ramificacao}getVariaveis(){return this.variaveis}getResposta(){const e={id:this.getId()};if(this.variaveis){const r=this.variaveis.map((e=>e.getResposta()));e.variaveis=r}return e}}class w extends Error{constructor(e){super(`A opção ${e} não possui textos`)}}o(7658);class R{constructor(){Object.defineProperty(this,"observers",{enumerable:!0,configurable:!0,writable:!0,value:[]})}register(e){this.observers.push(e)}notify(e,r){for(const o of this.observers)o.event===e&&o.callback(r)}}class D extends R{constructor(e,r,o,a){super(),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"titulo",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"tipo",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"subtitulo",{enumerable:!0,configurable:!0,writable:!0,value:a})}getTitulo(){return this.titulo}getId(){return this.id}getSubtitulo(){return this.subtitulo}}class x extends D{constructor(e,r,o,a,t){super(e,r,o,t),Object.defineProperty(this,"opcoes",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"valorSelecionado",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}get semRamificacao(){return this.opcoes.every((e=>"avançar"===e.getRamificacoes().irPara))}selecionarOpcao(e){this.valorSelecionado=e}get opcaoSelecionada(){return this.valorSelecionado}get irPara(){var e;return this.semRamificacao?"avançar":(null===(e=this.opcaoSelecionada)||void 0===e?void 0:e.getRamificacoes().irPara)||null}getResposta(){if(!this.valorSelecionado)throw new P(this.getTitulo());const e={id:this.getId(),resposta:this.valorSelecionado.getResposta()};return e}}class P extends Error{constructor(e){super(`Questão '${e}' sem valor selecionado`)}}class I{static criarDeDto(e){if(!e.opcoes)throw new Error("Questão do tipo opções sem opção");const r=e.opcoes.map((e=>{var r;const o=null===(r=e.variaveis)||void 0===r?void 0:r.map((e=>new h(e.id,e.label,e.tipo)));return new O(e.id,e.label,e.ramificacao,o)}));return new x(e.id,e.titulo,e.tipo,r)}}class y{static criarDeDto(e){const r=e.tipo;if("opcao"===r)return I.criarDeDto(e);throw new S(r)}}class S extends Error{constructor(e){super(`Tipo de Questão não reconhecida: '${e}'`)}}class A{static criarDaEspecificacao(e){const r=e.questoes.map((e=>{try{return y.criarDeDto(e)}catch(r){if(r instanceof S)return;throw r}})).filter((e=>!!e)),o=new v(e.id,e.titulo,r,e.subtitulo);return o}}class C extends Error{constructor(e){super("Ocorreu um erro desconhecido ao criar o formulário"),Object.defineProperty(this,"e",{enumerable:!0,configurable:!0,writable:!0,value:e})}}class q{}class T extends q{constructor(e,r){super(),Object.defineProperty(this,"questaoId",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"categoriaId",{enumerable:!0,configurable:!0,writable:!0,value:r})}getQuestaoId(){return this.questaoId}compararQuestao(e){return this.questaoId.toString()===e.toString()}compararCategoria(e){return this.categoriaId.toString()===e.toString()}toString(){return"${"+this.questaoId+"."+this.categoriaId+"}"}}class j{constructor(e){Object.defineProperty(this,"nome",{enumerable:!0,configurable:!0,writable:!0,value:e}),this.validar(e)}toString(){return this.nome}validar(e){const r=new RegExp("^"+j.pattern+"+$"),o=r.test(e);if(!o)throw new N(e)}}Object.defineProperty(j,"pattern",{enumerable:!0,configurable:!0,writable:!0,value:"[a-zA-Z0-9._-]"});class N extends Error{constructor(e){super(`Fornecido um nome de variável incorreto: "${e}". Os nomes devem conter o padrão ${j.pattern}`)}}class F{criarEscapadoresDeTexto(e){const r=j.pattern,o=new RegExp("\\${("+r+"+\\.*"+r+"*)}","g"),a=Array.from(e.matchAll(o)),t=a.map((e=>{const r=e[1].split("."),o=new j(r[0]),a=new j(r[1]);return new T(o,a)}));return t}}class M extends q{constructor(e){super(),Object.defineProperty(this,"nomeDaVariavel",{enumerable:!0,configurable:!0,writable:!0,value:e})}getNome(){return this.nomeDaVariavel}compararNome(e){return this.nomeDaVariavel.toString()===e.toString()}toString(){return"${"+this.nomeDaVariavel+"}"}}class ${criarEscapadoresDeTexto(e){const r=j.pattern,o=new RegExp("\\${("+r+"+)}","g"),a=Array.from(e.matchAll(o)),t=a.map((e=>{const r=new j(e[1]);return new M(r)}));return t}}class U{constructor(e,r){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"textos",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:new $})}compararId(e){return e===this.id}processar(e){const r=this.textos.map((r=>{const o=this.escapadorFactory.criarEscapadoresDeTexto(r.texto);let a=r.texto;return o.forEach((r=>{var o;const t=null===(o=e.variaveis)||void 0===o?void 0:o.find((e=>r.compararNome(e.id)));if(!t)throw new z(r.getNome());a=a.replaceAll(r.toString(),t.resposta),t.resposta})),{categoria:r.categoria,texto:a}}));return r}}class z extends Error{constructor(e){super(`Resposta da variável ${e} não encontrada`)}}class _{constructor(e){Object.defineProperty(this,"textoFactory",{enumerable:!0,configurable:!0,writable:!0,value:e})}criarDeEspecificacao(e){const r=e.map((e=>{const r=this.textoFactory.criarDeEspecificacao(e.texto);return new U(e.id,r)}));return r}}class V{constructor(e,r,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadoresDeOpcao",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:o})}compararId(e){return e===this.id}processar(e,r){if(e.id!==this.id)throw new H(e.id,this.id);const o=this.escapadorFactory.criarEscapadoresDeTexto(r),a=o.filter((r=>r.compararQuestao(e.id)));if(!a.length)throw new k(e.id);let t=r;for(const i of a){const r=this.processadoresDeOpcao.find((r=>r.compararId(e.resposta.id)));if(!r)throw new Q(e.resposta.id);const o=r.processar(e.resposta),a=o.find((e=>i.compararCategoria(e.categoria)));if(!a)throw new L(e.resposta.id);t=t.replaceAll(i.toString(),a.texto)}return t}}class k extends Error{constructor(e){super(`Não encontrou escapador da questão ${e}`)}}class Q extends Error{constructor(e){super(`Não encontrou processador da opção da resposta id ${e}`)}}class L extends Error{constructor(e){super(`Texto da Categoria ${e} não encontrado`)}}class H extends Error{constructor(e,r){super(`Id da questão ${e} é diferente do Id do processador ${r}`)}}class Z{constructor(e,r){Object.defineProperty(this,"escapadorFactory",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadorDeOpcaoFactory",{enumerable:!0,configurable:!0,writable:!0,value:r})}criarDeEspecificacao(e){const r=e.map((e=>{var r;if("opcao"!==e.tipo)throw new X(e.tipo);if(!(null===(r=e.opcoes)||void 0===r?void 0:r.length))throw new Y;const o=this.processadorDeOpcaoFactory.criarDeEspecificacao(e.opcoes);return new V(e.id,o,this.escapadorFactory)}));return r}}class X extends Error{constructor(e){super(`Tipo recebido ${e} é difernte de 'opção'`)}}class Y extends Error{constructor(){super("Especificação de questào de opções não possui opções")}}class G{constructor(e,r,o){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"processadoresDeQuestoes",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:o})}processar(e){if(e.id!==this.id)throw new J;let r=this.template;for(const o of e.respostasQuestoes){const e=this.processadoresDeQuestoes.find((e=>e.compararId(o.id)));if(!e)throw new B(o);r=e.processar(o,r)}if(!r)throw new W;return this.verificarSeSobrouEspacador(r),r}verificarSeSobrouEspacador(e){const r=/\$\{[a-z_]+[a-z_0-9]*\}/;if(r.test(e))throw new K}}class J extends Error{constructor(){super("Resposta fornecida não possui o id do processador selecionado")}}class B extends Error{constructor(e){super(`Processador não encontrado para a questão id ${e.id}`)}}class W extends Error{constructor(){super("Processamento não retornou texto")}}class K extends Error{constructor(){super("Sobrou escapador após o processamnto")}}class ee{constructor(e){Object.defineProperty(this,"questoesFactory",{enumerable:!0,configurable:!0,writable:!0,value:e})}criarDeEspecificacao(e){const r=this.questoesFactory.criarDeEspecificacao(e.questoes),o=new G(e.id,r,e.template);return o}}class re{constructor(e,r){Object.defineProperty(this,"_categoria",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_texto",{enumerable:!0,configurable:!0,writable:!0,value:r})}get texto(){return this._texto}get categoria(){return this._categoria}}class oe{criarDeEspecificacao(e){const r=e.map((e=>new re(e.categoria,e.texto)));return r}}const ae = {
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
            id: 'tipoDeRecurso',
            tipo: 'opcao',
            titulo: 'Tipo do Recurso',
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
        '<p><strong>RELATÓRIO</strong></p><p>Trata-se de <strong>${tipoDeRecurso.padrao}</strong> interposto pela parte recorrente acima citada em face da decisão do <strong>${especie.descricao}</strong> acima citado que a considerou apto às atividades laborativas.&nbsp;</p><p>Não há registro da ciência da decisão recorrida. <strong>${admissibilidade.relatorio}</strong></p><p>${procurador.relatorio}</p><p><strong>VOTO</strong></p><p>${admissibilidade.voto} &nbsp;&nbsp;</p><p><strong>EMENTA</strong></p><p><strong>${admissibilidade.ementa}</strong></p>',
};

var te=o(7139);const ie={key:0};function se(e,r,o,a,t,i){const n=(0,s.up)("questao-opcoes"),c=(0,s.up)("ckeditor");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",null,(0,te.zw)(e.formulario.getTitulo()),1),e.formulario.getSubtitulo()?((0,s.wg)(),(0,s.iD)("h2",ie,(0,te.zw)(e.formulario.getSubtitulo()),1)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.formulario.getQuestoes(),(e=>((0,s.wg)(),(0,s.j4)(n,{key:e.rotulo,questao:e},null,8,["questao"])))),128)),(0,s._)("button",{onClick:r[0]||(r[0]=(...r)=>e.gerar&&e.gerar(...r))},"Gerar"),(0,s.Wm)(c,{editor:e.editor,modelValue:e.editorData,"onUpdate:modelValue":r[1]||(r[1]=r=>e.editorData=r),config:e.editorConfig},null,8,["editor","modelValue","config"])],64)}const ne=e=>((0,s.dD)("data-v-3ffbda5d"),e=e(),(0,s.Cn)(),e),ce={key:0},de=["for"],ue=["name","id","value","onClick"],le={key:0},pe=ne((()=>(0,s._)("h4",null,"Preencha as variáveis para a resposta:",-1))),me=["for"],be=["id","name","onUpdate:modelValue"];function fe(e,r,o,t,i,n){var c,d;return(0,s.wg)(),(0,s.iD)("article",null,[(0,s._)("header",null,[(0,s._)("h2",null,(0,te.zw)(e.questao.getTitulo()),1),e.questao.getSubtitulo()?((0,s.wg)(),(0,s.iD)("h3",ce,(0,te.zw)(JSON.stringify(e.questao)),1)):(0,s.kq)("",!0)]),(0,s._)("fieldset",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.questao.opcoes,(r=>((0,s.wg)(),(0,s.iD)("label",{key:r.id,for:r.getId()},[(0,s._)("input",{type:"radio",name:e.questao.getId(),id:r.getId(),value:r.getId(),onClick:o=>e.questao.selecionarOpcao(r)},null,8,ue),(0,s.Uk)(" "+(0,te.zw)(r.getLabel()),1)],8,de)))),128))]),(null===(c=e.questao.opcaoSelecionada)||void 0===c?void 0:c.getVariaveis())?((0,s.wg)(),(0,s.iD)("footer",le,[pe,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(null===(d=e.questao.opcaoSelecionada)||void 0===d?void 0:d.getVariaveis(),(e=>((0,s.wg)(),(0,s.iD)("label",{key:e.id,for:e.getId()},[(0,s.Uk)((0,te.zw)(e.getLabel())+" ",1),(0,s.wy)((0,s._)("input",{type:"text",id:e.getId(),name:e.getId(),"onUpdate:modelValue":r=>e.resposta=r,required:""},null,8,be),[[a.nr,e.resposta]])],8,me)))),128))])):(0,s.kq)("",!0)])}var ge=(0,s.aZ)({name:"QuestaoOpcoesComponent",props:{questao:{type:x,required:!0}}});const ve=(0,p.Z)(ge,[["render",fe],["__scopeId","data-v-3ffbda5d"]]);var he=ve,Ee=o(6713),Oe=o.n(Ee),we=(0,s.aZ)({name:"FormularioComponent",data(){return{editor:Oe(),editorData:"",editorConfig:{}}},props:{formulario:{type:v,required:!0},processadorFormulario:{type:G,required:!0}},components:{QuestaoOpcoes:he},methods:{gerar(){try{const e=this.processadorFormulario.processar(this.formulario.getRespostas());console.log({texto:e}),this.editorData=e}catch(e){return console.error(e.message),""}}},computed:{resposta(){try{return this.formulario.getRespostas()}catch(e){return console.error(e.message),""}},processado(){try{return this.processadorFormulario.processar(this.formulario.getRespostas())}catch(e){return console.error(e.message),""}}}});const Re=(0,p.Z)(we,[["render",se]]);var De=Re;function xe(){const e=new oe,r=new _(e),o=new F,a=new Z(o,r),t=new ee(a),i=t.criarDeEspecificacao(ae);return i}const Pe=xe(),Ie=A.criarDaEspecificacao(ae);var ye=(0,s.aZ)({data(){return{processadorFormulario:Pe,formulario:Ie}},name:"RespostaView",components:{FormularioComponent:De}});const Se=(0,p.Z)(ye,[["render",g]]);var Ae=Se;const Ce=[{path:"/",name:"resposta",component:Ae}],qe=(0,f.p7)({history:(0,f.PO)("/"),routes:Ce});var Te=qe;(0,a.ri)(b).use(Te).use(i()).mount("#app")}},r={};function o(a){var t=r[a];if(void 0!==t)return t.exports;var i=r[a]={id:a,loaded:!1,exports:{}};return e[a](i,i.exports,o),i.loaded=!0,i.exports}o.m=e,function(){var e=[];o.O=function(r,a,t,i){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],t=e[u][1],i=e[u][2];for(var n=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(n=!1,i<s&&(s=i));if(n){e.splice(u--,1);var d=t();void 0!==d&&(r=d)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,t,i]}}(),function(){o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,{a:r}),r}}(),function(){o.d=function(e,r){for(var a in r)o.o(r,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(r){return 0===e[r]};var r=function(r,a){var t,i,s=a[0],n=a[1],c=a[2],d=0;if(s.some((function(r){return 0!==e[r]}))){for(t in n)o.o(n,t)&&(o.m[t]=n[t]);if(c)var u=c(o)}for(r&&r(a);d<s.length;d++)i=s[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},a=self["webpackChunksarc"]=self["webpackChunksarc"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(8229)}));a=o.O(a)})();
//# sourceMappingURL=app.9d02facf.js.map