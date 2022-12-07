import { criarEscapadorDeQuestaoFactoryFake } from '@/dominio/processamento/escapador/questao/__tests__/criarEscapadorDeQuestaoFactoryFake';
import { ProcessadorDeRespostaDeFormularioFactory } from '../../ProcessadorDeRespostaDeFormularioFactory';

export function criarProcessadorDeRespostaDeFormularioFactorySut() {
    const questaoFactoryFake = {
        criarDeEspecificacao() {
            return [];
        },
    };
    const escapadorDeQuestaoFactoryFake = criarEscapadorDeQuestaoFactoryFake([
        1, 2, 3,
    ]);
    const sut = new ProcessadorDeRespostaDeFormularioFactory(
        questaoFactoryFake,
        escapadorDeQuestaoFactoryFake,
    );
    return sut;
}
