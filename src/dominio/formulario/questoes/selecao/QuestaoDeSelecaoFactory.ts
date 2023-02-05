import { QuestaoSelecaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { Variavel } from '../Variavel';
import { Selecao } from './Selecao';
import { QuestaoDeSelecao } from './QuestaoDeSelecao';

export class QuestaoDeSelecaoFactory {
    static criarDeDto(dto: QuestaoSelecaoDTO): QuestaoDeSelecao {
        if (!dto.selecoes) {
            throw new Error('Questão do tipo seleção sem seleções');
        }
        const opcoes = dto.selecoes.map(valor => {
            const variaveis = valor.listaVariaveis?.map(
                variavel =>
                    new Variavel(variavel.id, variavel.titulo, variavel.tipo),
            );
            return new Selecao(
                valor.id,
                valor.titulo,
                valor.ramificacao,
                variaveis,
            );
        });
        const questao = new QuestaoDeSelecao(
            dto.id,
            dto.titulo,
            dto.tipo,
            opcoes,
            dto.subtitulo,
        );
        return questao;
    }
}
