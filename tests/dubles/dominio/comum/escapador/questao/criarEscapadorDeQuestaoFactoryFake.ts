import { INomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { ITitulo } from '@/dominio/comum/Titulo';

export function criarEscapadorDeQuestaoFactoryFake(numeros: number[]) {
    const escapadorFactory: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
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
        criarDeTituloCategoria: function (
            titulo: ITitulo,
            categoria: ITitulo,
        ): IEscapadorDeQuestao {
            throw new Error('Function not implemented.');
        },
    };
    return escapadorFactory;
}
