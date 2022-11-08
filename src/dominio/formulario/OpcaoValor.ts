import { Ramificacao } from './Ramificacao';

export class OpcaoValor {
    constructor(
        public id: string,
        public label: string,
        public ramificacao: Ramificacao,
    ) {}

    get tipoRamificacao() {
        return this.ramificacao.tipo;
    }
}
