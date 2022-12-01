import { criarRespostaDeFormularioFake } from '@/dominio/formulario/respostas/__tests__/criarRespostaDeFormularioFake';
import { criarEscapadorDeQuestaoFactoryFake } from '@/dominio/processamento/escapador/questao/__tests__/criarEscapadorDeQuestaoFactoryFake';
import { criarProcessadoresDeQuestaoDeOpcoesFake } from '../../questoes-opcao/questao/__tests__/criarProcessadoresDeQuestaoDeOpcoesFake';
import { ProcessadorDeRespostaDeFormulario } from '../ProcessadorDeRespostaDeFormulario';

export function criarProcessadorDeRespostaDeFormularioSut(
    numerosDasQuestoesParaProcessadores: number[] = [1, 2, 3],
    numerosDasQuestoesParaEscapadores: number[] = [1, 2, 3],
    numerosDasQuestoesParaRespostas: number[] = [1, 2, 3],
    template = 'template com escapadores: ${questao1.categoria1} ${questao2.categoria2} ${questao3.categoria3}',
) {
    const processadoresDeOpcaoFake = criarProcessadoresDeQuestaoDeOpcoesFake(
        numerosDasQuestoesParaProcessadores,
    );
    const escapadorFactory = criarEscapadorDeQuestaoFactoryFake(
        numerosDasQuestoesParaEscapadores,
    );
    const sut = new ProcessadorDeRespostaDeFormulario(
        'id-teste',
        processadoresDeOpcaoFake,
        escapadorFactory,
        template,
    );
    const respostaFake = criarRespostaDeFormularioFake(
        numerosDasQuestoesParaRespostas,
    );
    return { sut, processadoresDeOpcaoFake, respostaFake };
}
