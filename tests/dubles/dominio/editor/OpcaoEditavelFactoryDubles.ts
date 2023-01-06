import {
    ErroOpcaoInvalida,
    OpcaoEditavel,
} from '@/dominio/editor/OpcaoEditavel';
import { IOpcaoEditavelFactory } from '@/dominio/editor/OpcaoEditavelFactory';
import { OpcaoEditavelDummy } from '@/tests/dubles/dominio/editor/OpcaoEditavelDubles';

export class OpcaoEditavelFactoryDummy implements IOpcaoEditavelFactory {
    criar(): OpcaoEditavel {
        throw new Error('Dummy Error');
    }
}
export class OpcaoEditavelFactoryErroOpcaoInvalidaStub
    implements IOpcaoEditavelFactory
{
    inconsistencias = ['inconsistencia1', 'inconsistencia2', 'inconsistencia3'];
    criar(): OpcaoEditavel {
        throw new ErroOpcaoInvalida(this.inconsistencias);
    }
}

export class OpcaoEditavelFactoryErroDesconhecidoStub
    implements IOpcaoEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): OpcaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class OpcaoEditavelFactorySucessoStub implements IOpcaoEditavelFactory {
    criar() {
        return new OpcaoEditavelDummy();
    }
}
