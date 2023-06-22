import { ITextoEditavelFactory } from './TextoEditavelFactory';
import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import {
    ITextoEditavel,
    InconsistenciasNaValidacaoDoTexto,
} from './TextoEditavel';
import { TextoEditavelDummy } from './TextoEditavel.dubles';

export class TextoEditavelFactoryDummy implements ITextoEditavelFactory {
    criar(): ITextoEditavel {
        return new TextoEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel {
        return new TextoEditavelDummy();
    }
}

export class TextoEditavelFactoryErroInconsistenciasNaValidacaoStub
    implements ITextoEditavelFactory
{
    inconsistencias = ['stub'];
    criar(): ITextoEditavel {
        throw new InconsistenciasNaValidacaoDoTexto(this.inconsistencias);
    }
    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel {
        throw new InconsistenciasNaValidacaoDoTexto(this.inconsistencias);
    }
}

export class TextoEditavelFactoryErroDesconhecidoStub
    implements ITextoEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): ITextoEditavel {
        throw new Error(this.mensagemDeErro);
    }
    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class TextoEditavelFactorySucessoStub implements ITextoEditavelFactory {
    criar(): ITextoEditavel {
        return new TextoEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: TextoDTO,
        indice: number,
    ): ITextoEditavel {
        return new TextoEditavelDummy();
    }
}
