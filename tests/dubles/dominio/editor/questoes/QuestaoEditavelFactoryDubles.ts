import {
    ErroQuestaoInvalida,
    IQuestaoEditavel,
    QuestaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { IQuestaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavelFactory';
import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { QuestaoEditavelDummy } from './QuestaoEditavelDubles';

export class QuestaoEditavelFactoryDummy implements IQuestaoEditavelFactory {
    criar(): IQuestaoEditavel {
        return new QuestaoEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoEditavel {
        return new QuestaoEditavelDummy();
    }
}

export class QuestaoEditavelFactoryErroDesconhecidoStub
    implements IQuestaoEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): QuestaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class QuestaoEditavelFactoryErroQuestaoInvalidaStub
    implements IQuestaoEditavelFactory
{
    inconsistencias = ['inconsistencia1', 'inconsistencia2', 'inconsistencia3'];
    criar(): QuestaoEditavel {
        throw new ErroQuestaoInvalida(this.inconsistencias);
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoEditavel {
        throw new ErroQuestaoInvalida(this.inconsistencias);
    }
}

export class QuestaoEditavelFactorySucessoStub
    implements IQuestaoEditavelFactory
{
    criar() {
        return new QuestaoEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoEditavel {
        return new QuestaoEditavelDummy();
    }
}
