import { ISelecaoEditavel, SelecaoEditavel } from './SelecaoEditavel';
import { IListaEditavel, ListaEditavel } from '../../../comum/ListaEditavel';
import { ITitulo, Titulo } from '../../../../comum/Titulo';
import { IdFormulario, IIdFormulario } from '../../../../comum/IdFormulario';
import { ITextoEditavel } from '../../comum/texto/TextoEditavel';
import { ITextoEditavelFactory } from '../../comum/texto/TextoEditavelFactory';
import { IVariavelEditavel } from '../../comum/variavel/VariavelEditavel';
import { IVariavelEditavelFactory } from '../../comum/variavel/VariavelEditavelFactory';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface ISelecaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ): ISelecaoEditavel;
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): ISelecaoEditavel;
}

export class SelecaoEditavelFactory implements ISelecaoEditavelFactory {
    constructor(
        private textoEditavelFactory: ITextoEditavelFactory,
        private variavelEditavelFactory: IVariavelEditavelFactory,
    ) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ) {
        return new SelecaoEditavel(id, titulo, indice, textos, variaveis);
    }

    criarDeEspecificacao(
        especificacao: OpcaoValorDTO,
        indice: number,
    ): ISelecaoEditavel {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);

        // criar Lista de Texto
        const itensTextos = especificacao.listaTextos.map((item, indice) => {
            return this.textoEditavelFactory.criarDeEspecificacao(item, indice);
        });
        const listaTextos = new ListaEditavel<ITextoEditavel>(itensTextos);

        // criar Lista de Variáveis
        const itensVariaveis = especificacao.listaVariaveis?.map(
            (item, indice) => {
                return this.variavelEditavelFactory.criarDeEspecificacao(
                    item,
                    indice,
                );
            },
        );
        let listaVariaveis;
        if (itensVariaveis) {
            listaVariaveis = new ListaEditavel<IVariavelEditavel>(
                itensVariaveis,
            );
        }

        // retorna objeto
        return this.criar(id, titulo, indice, listaTextos, listaVariaveis);
    }
}
