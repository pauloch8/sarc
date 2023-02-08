import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import {
    ErroEspecificacaoNaoEncontrada,
    IEspecificacaoRepository,
} from '@/dominio/especificacao/EspecificacaoRepository';

/**
 * Repositório em memória usando o LocalStorage do navegador
 */
export class EspecificacaoRepositoryLocalStorage
    implements IEspecificacaoRepository
{
    armazenar(especificacao: EspecificacaoDTO): void {
        localStorage.setItem(especificacao.id, JSON.stringify(especificacao));
    }
    carregar(id: string): EspecificacaoDTO {
        const itemStr = localStorage.getItem(id);
        if (!itemStr) {
            throw new ErroEspecificacaoNaoEncontrada(id);
        }
        const retorno = JSON.parse(itemStr);
        return retorno as EspecificacaoDTO;
    }
}
