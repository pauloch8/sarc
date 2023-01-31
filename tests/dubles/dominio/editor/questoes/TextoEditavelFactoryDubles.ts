import {
    InconsistenciasNaValidacaoDoTexto,
    ITextoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { ITextoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavelFactory';
import { TextoEditavelDummy } from './TextoEditavelDubles';

export class TextoEditavelFactoryDummy implements ITextoEditavelFactory {
    criar(): ITextoEditavel {
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
}

export class TextoEditavelFactoryErroDesconhecidoStub
    implements ITextoEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): ITextoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class TextoEditavelFactorySucessoStub implements ITextoEditavelFactory {
    criar(): ITextoEditavel {
        return new TextoEditavelDummy();
    }
}
