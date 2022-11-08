import { GabaritoDTO } from '../gabarito/GabaritoDTO';
import { Formulario } from './Formulario';
import { QuestaoFactory } from './questoes/QuestaoFactory';

export class FormularioFactory {
    static criarDeGabarito(gabarito: GabaritoDTO) {
        const questoes = gabarito.questoes.map(questao =>
            QuestaoFactory.criarDeDto(questao),
        );
        const formulario = new Formulario(
            gabarito.titulo,
            questoes,
            gabarito.subtitulo,
        );
        return formulario;
    }
}
