import { IProcessadorDeOpcaoFactory } from './ProcessadorDeOpcaoFactory';

export function makeProcessadorDeOpcaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeOpcaoFactory = {
        criarDeEspecificacao() {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}
