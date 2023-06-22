import { IProcessadorDeSelecaoFactory } from './ProcessadorDeSelecaoFactory';

export function makeProcessadorDeSelecaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeSelecaoFactory = {
        criarDeEspecificacao() {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}
