import { ISubtitulo, Subtitulo } from './Subtitulo';

export interface ISubtituloFactory {
    /**
     * Cria um objeto do tipo Subtitulo. Espera receber como parâmetro uma string válida, caso contrário lança uma exceção
     * @param {string} subtitulo subtítulo com três ou mais caracteres
     * @throws {ErroSubtituloEmBranco} se parâmetro for uma string vazia
     * @throws {ErroSubtituloComMenosDeTresCaracteres} se parâmetro for uma string com menos de três caracteres
     */
    criar(subtitulo: string): ISubtitulo;
}

export class SubtituloFactory implements ISubtituloFactory {
    criar(subtitulo: string) {
        return new Subtitulo(subtitulo);
    }
}
