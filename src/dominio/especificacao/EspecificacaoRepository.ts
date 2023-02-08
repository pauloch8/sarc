import { EspecificacaoDTO } from './EspecificacaoDTO';

/**
 * Repositório de Especificações que armazena e carrega especificações como objetos literais
 * Esses objetos servem para construir objetos de domínio específico como do Editor e de Respostas
 */
export interface IEspecificacaoRepository {
    armazenar(especificacao: EspecificacaoDTO): void;
    carregar(id: string): EspecificacaoDTO;
}

/**
 * Erro gerado ao não encontrar uma especificação de um ID solicitado
 */
export class ErroEspecificacaoNaoEncontrada extends Error {
    constructor(id: string) {
        super(`Especificação com o id ${id} não localizada no repositório`);
    }
}
