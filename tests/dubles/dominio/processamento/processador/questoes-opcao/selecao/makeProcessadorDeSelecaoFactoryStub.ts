import { IProcessadorDeSelecaoFactory } from '@/dominio/processamento/processador/questoes-opcao/selecao/ProcessadorDeSelecaoFactory';

export function makeProcessadorDeSelecaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeSelecaoFactory = {
        criarDeEspecificacao() {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}
