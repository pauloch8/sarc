import { criarEscapadorDeQuestaoFactoryFake } from '@/tests/dubles/dominio/comum/escapador/questao/criarEscapadorDeQuestaoFactoryFake';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';

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
