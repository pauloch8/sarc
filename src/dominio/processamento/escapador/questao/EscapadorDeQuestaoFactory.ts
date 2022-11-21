import { EscapadorDeQuestao, IEscapadorDeQuestao } from './EscapadorDeQuestao';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';

export interface IEscapadorDeQuestaoFactory {
    criarEscapadoresDeTexto(texto: string): IEscapadorDeQuestao[];
}

export class EscapadorDeQuestaoFactory implements IEscapadorDeQuestaoFactory {
    criarEscapadoresDeTexto(texto: string) {
        const patternNome = NomeDeEscapador.pattern;

        const regex = new RegExp(
            '\\${(' + patternNome + '+\\.*' + patternNome + '*)}',
            'g',
        );
        const matchEscapadores = Array.from(texto.matchAll(regex));
        const escapadores = matchEscapadores.map(match => {
            const split = match[1].split('.');
            const questaoId = new NomeDeEscapador(split[0]);
            const categoriaId = new NomeDeEscapador(split[1]);
            return new EscapadorDeQuestao(questaoId, categoriaId);
        });
        return escapadores;
    }
}
