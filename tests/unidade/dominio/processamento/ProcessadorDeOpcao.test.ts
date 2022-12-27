import { RespostaDeOpcao } from '@/dominio/formulario/respostas/Respostas';
import { ITexto } from '@/dominio/processamento/processador/texto/Texto';
import { ProcessadorDeOpcao } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcao';

describe('ProcessadorDeOpcao', () => {
    describe('processar', () => {
        test('retorna os textos da opção sem variáveis sem modificação', async () => {
            const textofake: ITexto = {
                categoria: 'categoria1',
                texto: 'Texto fake',
            };
            const sut = new ProcessadorDeOpcao('opcao-teste', [textofake]);
            const respostaFake: RespostaDeOpcao = {
                id: 'resposta-fake',
            };
            const retorno = sut.processar(respostaFake);
            expect(retorno).toStrictEqual([textofake]);
        });
        test('retorna os textos da opção com variáveis processados', async () => {
            const textofake: ITexto = {
                categoria: 'categoria1',
                texto: 'Texto fake ${variavel1}',
            };
            const sut = new ProcessadorDeOpcao('opcao-teste', [textofake]);
            const respostaFake: RespostaDeOpcao = {
                id: 'resposta-fake',
                variaveis: [
                    { id: 'variavel1', resposta: 'conteúdoDaVariável' },
                ],
            };
            const retorno = sut.processar(respostaFake);
            expect(retorno).toStrictEqual([
                {
                    categoria: 'categoria1',
                    texto: 'Texto fake conteúdoDaVariável',
                },
            ]);
        });
    });
});
