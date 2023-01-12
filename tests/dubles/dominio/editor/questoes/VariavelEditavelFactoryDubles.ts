import { ErroInconsistenciasNaValidacao } from '@/dominio/editor/questoes/ItemEditavel';
import { IVariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IVariavelEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavelFactory';
import { VariavelEditavelDummy } from './VariavelEditavelDubles';

export class VariavelEditavelFactoryDummy implements IVariavelEditavelFactory {
    criar(): IVariavelEditavel {
        throw new Error('Method not implemented.');
    }
}

export class VariavelEditavelFactoryErroInconsistenciasNaValidacaoStub
    implements IVariavelEditavelFactory
{
    inconsistencias = ['stub'];
    criar(): IVariavelEditavel {
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
}

export class VariavelEditavelFactorySucessoStub
    implements IVariavelEditavelFactory
{
    criar(): IVariavelEditavel {
        return new VariavelEditavelDummy();
    }
}
