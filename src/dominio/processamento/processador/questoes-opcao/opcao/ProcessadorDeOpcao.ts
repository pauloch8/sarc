import { RespostaDeOpcao } from '../../../../formulario/respostas/Respostas';
import { NomeDeEscapador } from '../../../../comum/escapador/nome/NomeDeEscapador';
import { EscapadorDeVariavelFactory } from '../../../../comum/escapador/variavel/EscapadorDeVariavelFactory';
import { ITexto } from '../../texto/Texto';

export interface IProcessadorDeOpcao {
    compararId(id: string): boolean;
    processar(resposta: RespostaDeOpcao): ITexto[];
}

export class ProcessadorDeOpcao implements IProcessadorDeOpcao {
    private escapadorFactory = new EscapadorDeVariavelFactory();

    constructor(private id: string, private textos: ITexto[]) {}

    compararId(id: string): boolean {
        return id === this.id;
    }

    processar(resposta: RespostaDeOpcao): ITexto[] {
        const textos: ITexto[] = this.textos.map(texto => {
            const escapadores = this.escapadorFactory.criarEscapadoresDeTexto(
                texto.texto,
            );
            let textoProcessado = texto.texto;
            escapadores.forEach(escapador => {
                const respostaDaVariavel = resposta.variaveis?.find(variavel =>
                    escapador.compararNome(variavel.id),
                );
                if (!respostaDaVariavel) {
                    throw new ErroRespostaDaVariavelNaoEcontrada(
                        escapador.getNome(),
                    );
                }
                textoProcessado = textoProcessado.replaceAll(
                    escapador.toString(),
                    respostaDaVariavel.resposta,
                );
                respostaDaVariavel.resposta;
            });
            return {
                categoria: texto.categoria,
                texto: textoProcessado,
            };
        });
        return textos;
    }
}

export class ErroRespostaDaVariavelNaoEcontrada extends Error {
    constructor(nomeDeEscapador: NomeDeEscapador) {
        super(`Resposta da variável ${nomeDeEscapador} não encontrada`);
    }
}
