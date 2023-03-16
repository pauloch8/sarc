import { ITitulo, Titulo } from './Titulo';

export interface ITituloFactory {
    /**
     * Cria um objeto do tipo Titulo a partir de uma string
     * @param tituloString titulo com três ou mais caracteres
     * @throws {ErroTituloEmBranco} se o parâmetro for uma string vazia
     * @throws {ErroTituloComMenosDeTresCaracteres} se o parâmetro for uma string com menos de três caracteres
     * @throws {ErroTituloComQuebraDeLinha} se o parâmetro for uma string com quebra de linha
     */
    criar(titulo: string): ITitulo;
}

export class TituloFactory implements ITituloFactory {
    criar(titulo: string) {
        return new Titulo(titulo);
    }
}
