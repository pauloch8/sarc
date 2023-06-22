import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITexto } from '../../texto/Texto';
import { ITextoFactory } from '../../texto/TextoFactory';
import { ProcessadorDeOpcao } from './ProcessadorDeOpcao';
import { ProcessadorDeOpcaoFactory } from './ProcessadorDeOpcaoFactory';

describe('ProcessadorDeOpcaoFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const opcaoValorDtoFake = makeOpcaoValorDtoFake();
            const textoFactoryFake = makeTextoFactoryFake();
            const sut = new ProcessadorDeOpcaoFactory(textoFactoryFake);
            const processadores = sut.criarDeEspecificacao([opcaoValorDtoFake]);
            expect(processadores[0]).toBeInstanceOf(ProcessadorDeOpcao);
        });
    });
});

function makeOpcaoValorDtoFake() {
    const opcaoFake: OpcaoValorDTO = {
        id: 'id-opcao',
        titulo: 'Label',
        ramificacao: { irPara: 'próximo' },
        listaTextos: [{ categoria: 'categoria1', texto: 'texto1' }],
    };
    return opcaoFake;
}

function makeTextoFactoryFake() {
    const textoFactoryFake: ITextoFactory = {
        criarDeEspecificacao() {
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
