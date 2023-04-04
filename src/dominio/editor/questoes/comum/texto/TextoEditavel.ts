import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import {
    ItemEditavel,
    IItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../../comum/ItemEditavel';
import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface ITextoEditavel extends IItemEditavel {
    getCategoria(): IIdFormulario;
    setCategoria(titulo?: IIdFormulario | undefined): void;
    getTextoModelo(): ITextoModelo;
    setTextoModelo(textoModelo?: ITextoModelo | undefined): void;
    gerarEspecificacao(): TextoDTO;
}

export class TextoEditavel extends ItemEditavel implements ITextoEditavel {
    constructor(
        private categoria: IIdFormulario,
        private textoModelo: ITextoModelo,
        indice: number,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new InconsistenciasNaValidacaoDoTexto(
                validacao.inconsistencias,
            );
        }
    }

    private validar() {
        const contemCategoria = !!this.categoria;
        const contemTextoModelo = !!this.textoModelo;
        const contemIndice = typeof this.getIndice() === 'number';

        const valido = contemCategoria && contemTextoModelo && contemIndice;

        const inconsistencias = [];
        if (!contemCategoria) {
            inconsistencias.push('Não contém Categoria');
        }
        if (!contemTextoModelo) {
            inconsistencias.push('Não contém Texto Modelo');
        }
        if (!contemIndice) {
            inconsistencias.push('Não contém índice');
        }

        return { valido, inconsistencias };
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria?: ITitulo) {
        if (!categoria) {
            throw new ErroNaEdicaoDoTexto('Categoria vazia informada');
        }
        this.categoria = categoria;
    }

    getTextoModelo() {
        return this.textoModelo;
    }

    setTextoModelo(textoModelo?: ITextoModelo) {
        if (!textoModelo) {
            throw new ErroNaEdicaoDoTexto('TextoModelo vazio informado');
        }
        this.textoModelo = textoModelo;
    }

    gerarEspecificacao() {
        const retorno: TextoDTO = {
            categoria: this.categoria.toString(),
            texto: this.textoModelo.getTextoHtml(),
        };
        return retorno;
    }

    toString(): string {
        return `${this.categoria}: ${this.textoModelo.getTextoPlano()}`;
    }
}

export class InconsistenciasNaValidacaoDoTexto extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDoTexto extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
