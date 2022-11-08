import { Ramificacao } from '../Ramificacao';
import { Variaveis } from './Variaveis';

export class OpcaoValor {
    constructor(
        readonly id: string,
        readonly label: string,
        readonly ramificacao: Ramificacao,
        readonly variaveis?: Variaveis[],
    ) {}

    get tipoRamificacao() {
        return this.ramificacao.tipo;
    }
}
