import { Template } from '@/dominio/especificacao/EspecificacaoDTO';
import { criarRespostaDeFormularioFake } from '@/dominio/formulario/respostas/__tests__/criarRespostaDeFormularioFake';
import { criarEscapadorDeQuestaoFactoryFake } from '@/dominio/processamento/escapador/questao/__tests__/criarEscapadorDeQuestaoFactoryFake';
import { criarProcessadoresDeQuestaoFake } from '../../../questoes-opcao/questao/__tests__/criarProcessadoresDeQuestaoFake';
import { ProcessadorDeRespostaDeFormulario } from '../../ProcessadorDeRespostaDeFormulario';

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
