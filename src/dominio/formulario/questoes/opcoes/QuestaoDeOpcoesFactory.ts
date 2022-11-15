import { QuestaoDTO } from '@/dominio/gabarito/GabaritoDTO';
import { Texto } from '../Texto';
import { Variavel } from '../Variavel';
import { OpcaoValor } from './OpcaoValor';
import { QuestaoDeOpcoes } from './QuestaoDeOpcoes';

export class QuestaoDeOpcoesFactory {
    static criarDeDto(dto: QuestaoDTO): QuestaoDeOpcoes {
        if (!dto.opcoes) {
            throw new Error('Questão do tipo opções sem opção');
        }
        const opcoes = dto.opcoes.map(valor => {
            const textos = valor.texto?.map(
                texto => new Texto(texto.categoria, texto.texto),
            );
            const variaveis = valor.variaveis?.map(
                variavel =>
                    new Variavel(variavel.id, variavel.label, variavel.tipo),
            );
            return new OpcaoValor(
                valor.id,
                valor.label,
                valor.ramificacao,
                textos,
                variaveis,
            );
        });
        return new QuestaoDeOpcoes(dto.id, dto.titulo, dto.tipo, opcoes);
    }
}
