import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import {
    IQuestaoOpcaoEditavel,
    QuestaoOpcaoEditavel,
    ErroQuestaoInvalida,
} from './QuestaoOpcaoEditavel';
import { QuestaoEditavelDummy } from './QuestaoOpcaoEditavel.dubles';
import { IQuestaoOpcaoEditavelFactory } from './QuestaoOpcaoEditavelFactory';

export class QuestaoEditavelFactoryDummy
    implements IQuestaoOpcaoEditavelFactory
{
    criar(): IQuestaoOpcaoEditavel {
        return new QuestaoEditavelDummy();
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoOpcaoEditavel {
        return new QuestaoEditavelDummy();
    }
}

export class QuestaoEditavelFactoryErroDesconhecidoStub
    implements IQuestaoOpcaoEditavelFactory
{
    mensagemDeErro = 'Mensagem de erro';
    criar(): QuestaoOpcaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoOpcaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class QuestaoEditavelFactoryErroQuestaoInvalidaStub
    implements IQuestaoOpcaoEditavelFactory
{
    inconsistencias = ['inconsistencia1', 'inconsistencia2', 'inconsistencia3'];
    criar(): QuestaoOpcaoEditavel {
        throw new ErroQuestaoInvalida(this.inconsistencias);
    }
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoOpcaoEditavel {
        throw new ErroQuestaoInvalida(this.inconsistencias);
    }
}

export class QuestaoEditavelFactorySucessoStub
    implements IQuestaoOpcaoEditavelFactory
{
    criar() {
        return new QuestaoEditavelDummy();
    }
    criarDeEspecificacao() {
        return new QuestaoEditavelDummy();
    }
}
