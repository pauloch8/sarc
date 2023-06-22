import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import {
    IOpcaoEditavel,
    OpcaoEditavel,
    ErroInconsistenciasNaValidacaoDaOpcao,
} from './OpcaoEditavel';
import { OpcaoEditavelDummy } from './OpcaoEditavel.dubles';
import { IOpcaoEditavelFactory } from './OpcaoEditavelFactory';

export class OpcaoEditavelFactoryDummy implements IOpcaoEditavelFactory {
    criar() {
        return new OpcaoEditavelDummy();
    }
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): IOpcaoEditavel {
        return new OpcaoEditavelDummy();
    }
}

export class OpcaoEditavelFactoryErroOpcaoInvalidaStub
    implements IOpcaoEditavelFactory
{
    inconsistencias = ['inconsistencia1', 'inconsistencia2', 'inconsistencia3'];
    criar(): OpcaoEditavel {
        throw new ErroInconsistenciasNaValidacaoDaOpcao(this.inconsistencias);
    }
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): IOpcaoEditavel {
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
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): IOpcaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class OpcaoEditavelFactorySucessoStub implements IOpcaoEditavelFactory {
    criar() {
        return new OpcaoEditavelDummy();
    }
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): IOpcaoEditavel {
        return new OpcaoEditavelDummy();
    }
}
