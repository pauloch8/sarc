import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { EspecificacaoRepositoryLocalStorage } from '@/infrastrutura/portas/memoria/EspecificacaoRepositoryLocalStorage';
import { especificacao } from './assets/especificacao';
import { ErroEspecificacaoNaoEncontrada } from './EspecificacaoRepository';

/**
 * Repository Stub que retorna uma especificação exemplo padrão caso não encontre no local storage
 */
export class EspecificacaoRepositoryLocalStorageExemploStub extends EspecificacaoRepositoryLocalStorage {
    carregar(id: string): EspecificacaoDTO {
        try {
            return super.carregar(id);
        } catch (e) {
            if (e instanceof ErroEspecificacaoNaoEncontrada) {
                return especificacao;
            }
            throw e;
        }
    }
}
