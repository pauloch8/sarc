import { IEscapadorDeQuestaoFactory } from './EscapadorDeQuestaoFactory';
import { IEscapadorDeQuestao } from './EscapadorDeQuestao';
import { EscapadorDeQuestaoToStringStub } from './EscapadorDeQuestao.dubles';
import { IIdFormulario } from '../../IdFormulario';
import { INomeDeEscapador } from '../nome/NomeDeEscapador';

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
        criarDeIdQuestaoIdCategoria: function (
            idQuestao: IIdFormulario,
            idCategoria: IIdFormulario,
        ): IEscapadorDeQuestao {
            throw new Error(
                'Function criarEscapadorDeQuestaoFactoryFake.criarDeIdQuestaoIdCategoria not implemented.',
            );
        },
    };
    return escapadorFactory;
}

export class EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub
    implements IEscapadorDeQuestaoFactory
{
    criarDeIdQuestaoIdCategoria(
        idQuestao: IIdFormulario,
        idCategoria: IIdFormulario,
    ): IEscapadorDeQuestao {
        return new EscapadorDeQuestaoToStringStub();
    }
    criarDeTituloCategoria(): IEscapadorDeQuestao {
        throw new Error(
            'Method EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub.criarDeTituloCategoria not implemented.',
        );
    }
    criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
        throw new Error(
            'Method EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub.criarEscapadoresDeTexto not implemented.',
        );
    }
}
