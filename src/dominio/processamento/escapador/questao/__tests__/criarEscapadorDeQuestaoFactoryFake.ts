import { INomeDeEscapador } from '../../nome/NomeDeEscapador';
import { IEscapadorDeQuestao } from '../EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '../EscapadorDeQuestaoFactory';

export function criarEscapadorDeQuestaoFactoryFake(numeros: number[]) {
    const escapadorFactory: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(texto: string): IEscapadorDeQuestao[] {
            const escapadores = numeros.map(numero => {
                const estaQuestaoId = 'questao' + numero;
                const estaCategoriaId = 'categoria' + numero;
                const escapadorFake: IEscapadorDeQuestao = {
                    getQuestaoId(): INomeDeEscapador {
                        return estaQuestaoId;
                    },
                    compararQuestao(
                        questaoId: string | INomeDeEscapador,
                    ): boolean {
                        return questaoId.toString() === estaQuestaoId;
                    },
                    compararCategoria(
                        categoriaId: string | INomeDeEscapador,
                    ): boolean {
                        return categoriaId === estaCategoriaId;
                    },
                    toString(): string {
                        return (
                            '${' + estaQuestaoId + '.' + estaCategoriaId + '}'
                        );
                    },
                };
                return escapadorFake;
            });
            return escapadores;
        },
    };
    return escapadorFactory;
}
