import { IProcessadorDeOpcao } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcao';

export function makeProcessadorDeOpcaoStub() {
    const processadorDeOpcaoStub: IProcessadorDeOpcao = {
        compararId(id: string) {
            return id === 'resposta1';
        },
        processar() {
            return [{ categoria: 'categoria1', texto: 'sistema' }];
        },
    };
    return processadorDeOpcaoStub;
}
