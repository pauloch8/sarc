import { QuestaoOpcaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { Variavel } from '../Variavel';
import { Opcao } from './Opcao';
import { QuestaoDeOpcoes } from './QuestaoDeOpcoes';

export class QuestaoDeOpcoesFactory {
    static criarDeDto(dto: QuestaoOpcaoDTO): QuestaoDeOpcoes {
        if (!dto.opcoes) {
            throw new Error('Questão do tipo opções sem opção');
        }
        const opcoes = dto.opcoes.map(valor => {
            const variaveis = valor.listaVariaveis?.map(
                variavel =>
                    new Variavel(variavel.id, variavel.titulo, variavel.tipo),
            );
            return new Opcao(
                valor.id,
                valor.titulo,
                valor.ramificacao,
                variaveis,
            );
        });
        const questao = new QuestaoDeOpcoes(
            dto.id,
            dto.titulo,
            dto.tipo,
            opcoes,
            dto.subtitulo,
        );
        if (dto.valorPadrao) {
            const opcaoSelecionada = opcoes.find(
                opcao => opcao.getId() === dto.valorPadrao,
            );
            if (!opcaoSelecionada) {
                throw new Error('Opção do valor da pergunta não encontrada');
            }
            questao.setValorSelecionado(opcaoSelecionada);
        }
        return questao;
    }
}
