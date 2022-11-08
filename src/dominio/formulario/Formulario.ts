import { Questao } from './Questao';

export class Formulario {
    constructor(
        private readonly _titulo: string,
        public readonly questoes: Questao[],
    ) {}

    get titulo() {
        return this._titulo;
    }
}
