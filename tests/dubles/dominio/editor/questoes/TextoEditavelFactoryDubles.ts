import {
    InconsistenciasNaValidacaoDoTexto,
    ITextoEditavel,
} from '@/dominio/editor/questoes/comum/texto/TextoEditavel';
import { ITextoEditavelFactory } from '@/dominio/editor/questoes/comum/texto/TextoEditavelFactory';
import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { TextoEditavelDummy } from './TextoEditavelDubles';

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
