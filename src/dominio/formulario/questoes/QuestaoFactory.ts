import { QuestaoDTO } from '../../especificacao/EspecificacaoDTO';
import { QuestaoDeOpcoesFactory } from './opcoes/QuestaoDeOpcoesFactory';
import { Questao } from './Questao';
import { QuestaoDeSelecaoFactory } from './selecao/QuestaoDeSelecaoFactory';

export class QuestaoFactory {
    static criarDeDto(dto: QuestaoDTO): Questao {
        const tipo = dto.tipo;
        if (tipo === 'opcao') {
            return QuestaoDeOpcoesFactory.criarDeDto(dto);
        } else if (tipo === 'selecao') {
            return QuestaoDeSelecaoFactory.criarDeDto(dto);
        } else {
            throw new TipoDeQuestaoNaoReconhecida(tipo);
        }
    }
}

export class TipoDeQuestaoNaoReconhecida extends Error {
    constructor(tipo: string) {
        super(`Tipo de Questão não reconhecida: '${tipo}'`);
    }
}
