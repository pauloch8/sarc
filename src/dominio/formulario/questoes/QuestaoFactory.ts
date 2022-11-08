import { QuestaoDTO } from '../../gabarito/GabaritoDTO';
import { OpcaoValor } from './OpcaoValor';
import { OpcaoDescricao } from './opcoes/OpcaoDescricao';
import { QuestaoDeOpcoes } from './opcoes/QuestaoDeOpcoes';
import { Questao } from './Questao';

export class QuestaoFactory {
    static criarDeDto(dto: QuestaoDTO): Questao {
        const tipo = dto.tipo;
        if (tipo === 'opcao') {
            if (!dto.opcoes) {
                throw new Error('Questão do tipo opções sem opção');
            }
            const valores = dto.opcoes.valores.map(
                valor =>
                    new OpcaoValor(
                        valor.id,
                        valor.label,
                        valor.ramificacao,
                        valor.variaveis,
                    ),
            );
            const opcoes = new OpcaoDescricao(
                dto.opcoes.tipo,
                valores,
                dto.opcoes.adicionarOutrasOpcoes,
            );
            return new QuestaoDeOpcoes(dto.id, dto.titulo, dto.tipo, opcoes);
        } else {
            throw new Error('Tipo de Questão não reconhecida' + tipo);
        }
    }
}
