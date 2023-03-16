import { IdFormulario, IIdFormulario } from './IdFormulario';
import { Titulo } from './Titulo';
import accents from 'remove-accents';

export interface IIdFormularioFactory {
    /**
     * Cria um IdFormulário a partir de uma string. Este método espera receber como parâmetro uma string já formatada e retorna erro se for uma string de IdFormulário inválida
     * @param texto String de texto já formato esperado
     * @throws {ErroIdStringInvalida} se recebido um parâmetro inválido
     */
    criarDeString(texto: string): IIdFormulario;

    /**
     * Cria um IdFormulario a partir de um objeto Titulo. Este método formata a string do título para o formato esperado pela classe IdFormulario
     * @param titulo Objeto do tipo Titulo
     */
    criarDeTitulo(titulo: Titulo): IIdFormulario;
}

export class IdFormularioFactory implements IIdFormularioFactory {
    criarDeString(idString: string) {
        return new IdFormulario(idString);
    }
    criarDeTitulo(titulo: Titulo) {
        const tituloStr = titulo.toString();
        const id = accents
            .remove(tituloStr.toLowerCase().replaceAll(' ', '_'))
            .replaceAll(/[^a-z0-9_-]/g, '');
        return new IdFormulario(id);
    }
}
