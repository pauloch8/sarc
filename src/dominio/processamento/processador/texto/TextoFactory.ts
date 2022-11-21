import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITexto, Texto } from './Texto';

export interface ITextoFactory {
    criarDeEspecificacao(textosDto: TextoDTO[]): ITexto[];
}

export class TextoFactory implements ITextoFactory {
    criarDeEspecificacao(textosDto: TextoDTO[]) {
        const retorno = textosDto.map(dto => {
            return new Texto(dto.categoria, dto.texto);
        });
        return retorno;
    }
}
