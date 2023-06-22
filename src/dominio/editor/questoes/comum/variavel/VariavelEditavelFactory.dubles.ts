import { ErroInconsistenciasNaValidacao } from '@/dominio/editor/comum/ItemEditavel';
import { VariavelDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IVariavelEditavel } from './VariavelEditavel';
import { VariavelEditavelDummy } from './VariavelEditavel.dubles';
import { IVariavelEditavelFactory } from './VariavelEditavelFactory';

export class VariavelEditavelFactoryDummy implements IVariavelEditavelFactory {
    criar(): IVariavelEditavel {
        return new VariavelEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: VariavelDTO,
        indice: number,
    ): IVariavelEditavel {
        return new VariavelEditavelDummy();
    }
}

export class VariavelEditavelFactoryErroInconsistenciasNaValidacaoStub
    implements IVariavelEditavelFactory
{
    inconsistencias = ['stub'];
    criar(): IVariavelEditavel {
        throw new ErroInconsistenciasNaValidacao(this.inconsistencias);
    }
    criarDeEspecificacao(
        especificacao: VariavelDTO,
        indice: number,
    ): IVariavelEditavel {
        throw new ErroInconsistenciasNaValidacao(this.inconsistencias);
    }
}

export class VariavelEditavelFactoryErroDesconhecidoStub
    implements IVariavelEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): IVariavelEditavel {
        throw new Error(this.mensagemDeErro);
    }
    criarDeEspecificacao(
        especificacao: VariavelDTO,
        indice: number,
    ): IVariavelEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class VariavelEditavelFactorySucessoStub
    implements IVariavelEditavelFactory
{
    criar(): IVariavelEditavel {
        return new VariavelEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: VariavelDTO,
        indice: number,
    ): IVariavelEditavel {
        return new VariavelEditavelDummy();
    }
}
