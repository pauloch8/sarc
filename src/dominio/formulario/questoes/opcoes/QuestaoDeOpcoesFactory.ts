import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { Variavel } from '../Variavel';
import { Opcao } from './Opcao';
import { QuestaoDeOpcoes } from './QuestaoDeOpcoes';
import { Ramificacao } from '../Ramificacao';

export class QuestaoDeOpcoesFactory {
    static criarDeDto(dto: QuestaoDTO): QuestaoDeOpcoes {
        if (!dto.opcoes) {
            throw new Error('Questão do tipo opções sem opção');
        }
        const opcoes = dto.opcoes.map(valor => {
            const variaveis = valor.listaVariaveis?.map(
                variavel =>
                    new Variavel(variavel.id, variavel.titulo, variavel.tipo),
            );
            const ramificacao = valor.ramificacao as Ramificacao; // TODO: Avaliar se melhor criar uma classe ao invés de usar uma interface
            return new Opcao(valor.id, valor.titulo, ramificacao, variaveis);
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
                console.warn(
                    `Opção do valor padrão "${dto.valorPadrao}" da pergunta "${dto.titulo}" não encontrada`,
                );
            } else {
                questao.setValorSelecionado(opcaoSelecionada);
            }
        }
        return questao;
    }
}
