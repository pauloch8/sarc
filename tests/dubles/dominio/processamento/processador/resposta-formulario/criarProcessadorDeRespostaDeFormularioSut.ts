import { Template } from '@/dominio/especificacao/EspecificacaoDTO';
import { criarRespostaDeFormularioFake } from '@/tests/dubles/dominio/formulario/respostas/criarRespostaDeFormularioFake';
import { criarEscapadorDeQuestaoFactoryFake } from '@/tests/dubles/dominio/comum/escapador/questao/criarEscapadorDeQuestaoFactoryFake';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { criarProcessadoresDeQuestaoFake } from '../questoes-opcao/questao/criarProcessadoresDeQuestaoFake';

export function criarProcessadorDeRespostaDeFormularioSut(
    numerosDasQuestoesParaProcessadores: number[] = [1, 2, 3],
    numerosDasQuestoesParaEscapadores: number[] = [1, 2, 3],
    numerosDasQuestoesParaRespostas: number[] = [1, 2, 3],
    templates: Template[] = [
        {
            id: 'id-template1',
            titulo: 'Template 1',
            texto: 'template com escapadores: ${questao1.categoria1} ${questao2.categoria2} ${questao3.categoria3}',
        },
        {
            id: 'id-template2',
            titulo: 'Template 2',
            texto: 'template com escapadores: ${questao1.categoria1} ${questao2.categoria2}',
        },
    ],
) {
    const processadoresDeOpcaoFake = criarProcessadoresDeQuestaoFake(
        numerosDasQuestoesParaProcessadores,
    );
    const escapadorFactory = criarEscapadorDeQuestaoFactoryFake(
        numerosDasQuestoesParaEscapadores,
    );
    const sut = new ProcessadorDeRespostaDeFormulario(
        'id-teste',
        processadoresDeOpcaoFake,
        escapadorFactory,
        templates,
    );
    const respostaFake = criarRespostaDeFormularioFake(
        numerosDasQuestoesParaRespostas,
    );
    return { sut, processadoresDeOpcaoFake, respostaFake };
}
