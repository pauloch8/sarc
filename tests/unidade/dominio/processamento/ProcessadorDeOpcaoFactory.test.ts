import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ProcessadorDeOpcao } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcao';
import { ProcessadorDeOpcaoFactory } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ITexto } from '@/dominio/processamento/processador/texto/Texto';
import { ITextoFactory } from '@/dominio/processamento/processador/texto/TextoFactory';

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
