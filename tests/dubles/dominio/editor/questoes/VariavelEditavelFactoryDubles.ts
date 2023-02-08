import { ErroInconsistenciasNaValidacao } from '@/dominio/editor/comum/ItemEditavel';
import { IVariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IVariavelEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavelFactory';
import { VariavelDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { VariavelEditavelDummy } from './VariavelEditavelDubles';

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
