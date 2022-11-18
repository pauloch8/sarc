import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { Variavel } from '../Variavel';
import { Opcao } from './Opcao';
import { QuestaoDeOpcoes } from './QuestaoDeOpcoes';

export class QuestaoDeOpcoesFactory {
    static criarDeDto(dto: QuestaoDTO): QuestaoDeOpcoes {
        if (!dto.opcoes) {
            throw new Error('Questão do tipo opções sem opção');
        }
        const opcoes = dto.opcoes.map(valor => {
            const variaveis = valor.variaveis?.map(
                variavel =>
                    new Variavel(variavel.id, variavel.label, variavel.tipo),
            );
            return new Opcao(
                valor.id,
                valor.label,
                valor.ramificacao,
                variaveis,
            );
        });
        return new QuestaoDeOpcoes(dto.id, dto.titulo, dto.tipo, opcoes);
    }
}
