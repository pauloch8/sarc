import { IOpcao } from '../Opcao';
import { QuestaoDeOpcoes } from '../QuestaoDeOpcoes';

describe('QuestaoDeOpcoes', () => {
    describe('irPara', () => {
        describe('se todas as questoes forem ramificação avançar', () => {
            test('retorna avançar', () => {
                const opcoes: IOpcao[] = [
                    {
                        getId: () => 'id-1',
                        getRamificacao: () => ({ irPara: 'avançar' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    },
                    {
                        getId: () => 'id-2',
                        getRamificacao: () => ({ irPara: 'avançar' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    },
                ];
                const sut = new QuestaoDeOpcoes(
                    'id-teste',
                    'titulo-teste',
                    'opção',
                    opcoes,
                );
                expect(sut.irPara).toBe('avançar');
            });
        });
        describe('se tiver ramificações', () => {
            describe('se não estiver respondida', () => {
                test('retorna nulo', () => {
                    const opcoes: IOpcao[] = [
                        {
                            getId: () => 'id-1',
                            getRamificacao: () => ({ irPara: 'id-2' }),
                            getResposta() {
                                throw 'Não implementado';
                            },
                            getVariaveis: () => undefined,
                        },
                        {
                            getId: () => 'id-2',
                            getRamificacao: () => ({ irPara: 'avançar' }),
                            getResposta() {
                                throw 'Não implementado';
                            },
                            getVariaveis: () => undefined,
                        },
                    ];
                    const sut = new QuestaoDeOpcoes(
                        'id-teste',
                        'titulo-teste',
                        'opção',
                        opcoes,
                    );
                    expect(sut.irPara).toBe(null);
                });
            });
            describe('se estiver respondida', () => {
                test('retorna o id, se ramificação de id', () => {
                    const opcaoFake1 = {
                        getId: () => 'id-1',
                        getRamificacao: () => ({ irPara: 'id-2' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    };
                    const opcaoFake2 = {
                        getId: () => 'id-2',
                        getRamificacao: () => ({ irPara: 'avançar' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    };
                    const opcoes: IOpcao[] = [opcaoFake1, opcaoFake2];
                    const sut = new QuestaoDeOpcoes(
                        'id-teste',
                        'titulo-teste',
                        'opção',
                        opcoes,
                    );
                    sut.setValorSelecionado(opcaoFake1);
                    expect(sut.irPara).toBe('id-2');
                });
                test('retorna avançar se for o caso', () => {
                    const opcaoFake1 = {
                        getId: () => 'id-1',
                        getRamificacao: () => ({ irPara: 'id-2' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    };
                    const opcaoFake2 = {
                        getId: () => 'id-2',
                        getRamificacao: () => ({ irPara: 'avançar' }),
                        getResposta() {
                            throw 'Não implementado';
                        },
                        getVariaveis: () => undefined,
                    };
                    const opcoes: IOpcao[] = [opcaoFake1, opcaoFake2];
                    const sut = new QuestaoDeOpcoes(
                        'id-teste',
                        'titulo-teste',
                        'opção',
                        opcoes,
                    );
                    sut.setValorSelecionado(opcaoFake2);
                    expect(sut.irPara).toBe('avançar');
                });
            });
        });
    });
});
