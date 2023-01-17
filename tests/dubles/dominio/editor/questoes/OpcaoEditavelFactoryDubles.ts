import {
    ErroInconsistenciasNaValidacaoDaOpcao,
    OpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IOpcaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavelFactory';
import { OpcaoEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/OpcaoEditavelDubles';

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
        throw new ErroInconsistenciasNaValidacaoDaOpcao(this.inconsistencias);
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
