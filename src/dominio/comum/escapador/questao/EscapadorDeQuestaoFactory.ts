import { EscapadorDeQuestao, IEscapadorDeQuestao } from './EscapadorDeQuestao';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';
import { ITitulo } from '../../Titulo';

export interface IEscapadorDeQuestaoFactory {
    criarDeTituloCategoria(
        titulo: ITitulo,
        categoria: ITitulo,
    ): IEscapadorDeQuestao;
    criarEscapadoresDeTexto(texto: string): IEscapadorDeQuestao[];
}

export class EscapadorDeQuestaoFactory implements IEscapadorDeQuestaoFactory {
    criarDeTituloCategoria(
        titulo: ITitulo,
        categoria: ITitulo,
    ): IEscapadorDeQuestao {
        const nomeTitulo = new NomeDeEscapador(titulo.toString());
        const nomeCategoria = new NomeDeEscapador(categoria.toString());
        return new EscapadorDeQuestao(nomeTitulo, nomeCategoria);
    }

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
