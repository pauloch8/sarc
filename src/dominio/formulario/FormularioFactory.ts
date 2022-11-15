import { GabaritoDTO } from '../gabarito/GabaritoDTO';
import { Formulario } from './Formulario';
import { Questao } from './questoes/Questao';
import {
    QuestaoFactory,
    TipoDeQuestaoNaoReconhecida,
} from './questoes/QuestaoFactory';

export class FormularioFactory {
    static criarDeGabarito(gabarito: GabaritoDTO) {
        const questoes = gabarito.questoes
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
            gabarito.titulo,
            questoes,
            gabarito.subtitulo,
        );
        return formulario;
    }
}

export class ErroDesconhecidoAoCriarFormularioDeGabarito extends Error {
    constructor(private e: unknown) {
        super('Ocorreu um erro desconhecido ao criar o formulário');
    }
}
