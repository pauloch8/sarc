import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { Formulario } from './Formulario';
import { Questao } from './questoes/Questao';
import {
    QuestaoFactory,
    TipoDeQuestaoNaoReconhecida,
} from './questoes/QuestaoFactory';

export interface IFormularioFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): Formulario;
}

export class FormularioFactory implements IFormularioFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO) {
        const questoes = especificacao.listaQuestoes
            .map(questao => {
                try {
                    return QuestaoFactory.criarDeDto(questao);
                } catch (e) {
                    if (e instanceof TipoDeQuestaoNaoReconhecida) {
                        return;
                    }
                    throw e;
                }
            })
            .filter(element => !!element) as Questao[];

        const formulario = new Formulario(
            especificacao.id,
            especificacao.titulo,
            questoes,
            especificacao.subtitulo,
        );
        return formulario;
    }
}

export class ErroDesconhecidoAoCriarFormularioDeGabarito extends Error {
    constructor(private e: unknown) {
        super('Ocorreu um erro desconhecido ao criar o formulário');
    }
}
