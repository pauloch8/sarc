import {
    ErroInconsistenciasNaValidacaoDaOpcao,
    IOpcaoEditavel,
    OpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IOpcaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavelFactory';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { OpcaoEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/OpcaoEditavelDubles';

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
