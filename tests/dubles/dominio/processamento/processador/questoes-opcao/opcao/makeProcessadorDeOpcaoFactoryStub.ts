import { IProcessadorDeOpcaoFactory } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';

export function makeProcessadorDeOpcaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeOpcaoFactory = {
        criarDeEspecificacao() {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}
