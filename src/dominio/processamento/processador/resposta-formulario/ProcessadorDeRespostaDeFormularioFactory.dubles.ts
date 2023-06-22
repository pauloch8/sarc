import { criarEscapadorDeQuestaoFactoryFake } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory.dubles';
import { ProcessadorDeRespostaDeFormularioFactory } from './ProcessadorDeRespostaDeFormularioFactory';

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
