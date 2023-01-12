import {
    IEscapadorDeVariavel,
    EscapadorDeVariavel,
} from './EscapadorDeVariavel';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';
import { IIdFormulario } from '../../IdFormulario';

export interface IEscapadorDeVariavelFactory {
    criarDeIdFormulario(id: IIdFormulario): IEscapadorDeVariavel;
    criarEscapadoresDeTexto(texto: string): IEscapadorDeVariavel[];
}

export class EscapadorDeVariavelFactory implements IEscapadorDeVariavelFactory {
    criarDeIdFormulario(id: IIdFormulario) {
        const nomeVariavel = new NomeDeEscapador(id.toString());
        return new EscapadorDeVariavel(nomeVariavel);
    }

    criarEscapadoresDeTexto(texto: string): EscapadorDeVariavel[] {
        const patternNome = NomeDeEscapador.pattern;

        const regex = new RegExp('\\${(' + patternNome + '+)}', 'g');
        const matchEscapadores = Array.from(texto.matchAll(regex));
        const escapadores = matchEscapadores.map(match => {
            const nomeVariavel = new NomeDeEscapador(match[1]);
            return new EscapadorDeVariavel(nomeVariavel);
        });
        return escapadores;
    }
}
