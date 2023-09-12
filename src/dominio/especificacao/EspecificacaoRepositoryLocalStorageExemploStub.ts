import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { EspecificacaoRepositoryLocalStorage } from '@/infrastrutura/portas/memoria/EspecificacaoRepositoryLocalStorage';
import { ErroEspecificacaoNaoEncontrada } from './EspecificacaoRepository';
import especificacao from './assets/especificacao.json';

/**
 * Repository Stub que retorna uma especificação exemplo padrão caso não encontre no local storage
 */
export class EspecificacaoRepositoryLocalStorageExemploStub extends EspecificacaoRepositoryLocalStorage {
    carregar(id: string): EspecificacaoDTO {
        try {
            return super.carregar(id);
        } catch (e) {
            if (e instanceof ErroEspecificacaoNaoEncontrada) {
                console.log(especificacao);
                debugger;
                return especificacao as EspecificacaoDTO;
            }
            throw e;
        }
    }
}
