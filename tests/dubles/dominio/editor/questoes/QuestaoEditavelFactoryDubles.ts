import {
    ErroQuestaoInvalida,
    IQuestaoEditavel,
    QuestaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { IQuestaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavelFactory';
import { QuestaoEditavelDummy } from './QuestaoEditavelDubles';

export class QuestaoEditavelFactoryDummy implements IQuestaoEditavelFactory {
    criar(): IQuestaoEditavel {
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
}

export class QuestaoEditavelFactoryErroQuestaoInvalidaStub
    implements IQuestaoEditavelFactory
{
    inconsistencias = ['inconsistencia1', 'inconsistencia2', 'inconsistencia3'];
    criar(): QuestaoEditavel {
        throw new ErroQuestaoInvalida(this.inconsistencias);
    }
}

export class QuestaoEditavelFactorySucessoStub
    implements IQuestaoEditavelFactory
{
    criar() {
        return new QuestaoEditavelDummy();
    }
}
