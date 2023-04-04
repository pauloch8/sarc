import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITextoModeloFactory } from '@/dominio/comum/TextoModeloFactory';
import { Titulo } from '@/dominio/comum/Titulo';
import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITextoEditavel, TextoEditavel } from './TextoEditavel';

export interface ITextoEditavelFactory {
    criar(
        categoria: IIdFormulario,
        textoTemplate: ITextoModelo,
        indice: number,
    ): ITextoEditavel;

    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel;
}

export class TextoEditavelFactory implements ITextoEditavelFactory {
    constructor(private textoModeloFactory: ITextoModeloFactory) {}

    criar(
        categoria: IIdFormulario,
        textoTemplate: ITextoModelo,
        indice: number,
    ) {
        return new TextoEditavel(categoria, textoTemplate, indice);
    }

    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel {
        const categoria = new Titulo(especificacao.categoria);
        const textoModelo = this.textoModeloFactory.criar(especificacao.texto);
        return new TextoEditavel(categoria, textoModelo, indice);
    }
}
