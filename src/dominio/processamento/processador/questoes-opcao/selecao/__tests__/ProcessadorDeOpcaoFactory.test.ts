import {
    OpcaoValorDTO,
    TextoDTO,
} from '@/dominio/especificacao/EspecificacaoDTO';
import { ITextoFactory } from '../../../texto/TextoFactory';
import { ITexto } from '../../../texto/Texto';
import { ProcessadorDeSelecao } from '../ProcessadorDeSelecao';
import { ProcessadorDeSelecaoFactory } from '../ProcessadorDeSelecaoFactory';

describe('ProcessadorDeOpcaoFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const opcaoValorDtoFake = makeOpcaoValorDtoFake();
            const textoFactoryFake = makeTextoFactoryFake();
            const sut = new ProcessadorDeSelecaoFactory(textoFactoryFake);
            const processadores = sut.criarDeEspecificacao([opcaoValorDtoFake]);
            expect(processadores[0]).toBeInstanceOf(ProcessadorDeSelecao);
        });
    });
});

function makeOpcaoValorDtoFake() {
    const opcaoFake: OpcaoValorDTO = {
        id: 'id-opcao',
        label: 'Label',
        ramificacao: { irPara: 'próximo' },
        texto: [{ categoria: 'categoria1', texto: 'texto1' }],
    };
    return opcaoFake;
}

function makeTextoFactoryFake() {
    const textoFactoryFake: ITextoFactory = {
        criarDeEspecificacao(textosDto: TextoDTO[]) {
            const textoFake = makeTextoFake();
            return [textoFake];
        },
    };
    return textoFactoryFake;
}

function makeTextoFake() {
    const textoFake: ITexto = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return textoFake;
}
