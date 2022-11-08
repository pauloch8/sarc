import { Questao } from './questoes/Questao';

export class Formulario {
    constructor(
        readonly titulo: string,
        readonly questoes: Questao[],
        readonly subtitulo?: string,
    ) {}
}
