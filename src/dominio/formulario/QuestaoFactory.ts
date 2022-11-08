import { QuestaoDTO } from '../gabarito/GabaritoDTO';
import { OpcaoDescricao } from './OpcaoDescricao';
import { OpcaoValor } from './OpcaoValor';
import { Questao } from './Questao';
import { QuestaoDeOpcoes } from './QuestaoDeOpcoes';

export class QuestaoFactory {
    static criarDeDto(dto: QuestaoDTO): Questao {
        const tipo = dto.tipo;
        if (tipo === 'opcao') {
            if (!dto.opcoes) {
                throw new Error('Questão do tipo opções sem opção');
            }
            const valores = dto.opcoes.valores.map(
                valor =>
                    new OpcaoValor(valor.id, valor.label, valor.ramificacao),
            );
            const opcoes = new OpcaoDescricao(
                dto.opcoes.tipo,
                valores,
                dto.opcoes.adicionarOutrasOpcoes,
            );
            return new QuestaoDeOpcoes(dto.id, opcoes);
        } else {
            throw new Error('Tipo de Questão não reconhecida' + tipo);
        }
    }
}
