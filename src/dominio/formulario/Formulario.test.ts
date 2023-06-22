import {
    Formulario,
    ErroPosicaoDoIdIrParaNaoLocalizada,
    ErroPosicaoDoIdIrParaNaoEstaEmFrenteAoAtual,
} from './Formulario';
import {
    QuestaoSemRamificacaoStub,
    QuestaoComRamificacaoNaoRespondidaStub,
    QuestaoComRamificacaoRespondidaStub,
    QuestaoFimDoQuestionarioStub,
} from './questoes/Questao.dubles';

describe('Formulario', () => {
    describe('getQuestoes', () => {
        test('retorna as questões sequenciais que não têm ramificação', () => {
            const questoes = [
                new QuestaoSemRamificacaoStub('id-q0', 'titulo-q0', 'opção'),
                new QuestaoSemRamificacaoStub('id-q1', 'titulo-q1', 'opção'),
                new QuestaoSemRamificacaoStub('id-q2', 'titulo-q2', 'opção'),
            ];
            const sut = new Formulario('id-teste', 'titulo-teste', questoes);
            const actual = sut.getQuestoes();
            expect(actual).toHaveLength(3);
        });
        test('retorna as questões sequenciais até encontrar uma questão com ramificação', () => {
            const questoes = [
                new QuestaoSemRamificacaoStub('id-q0', 'titulo-q0', 'opção'),
                new QuestaoSemRamificacaoStub('id-q1', 'titulo-q1', 'opção'),
                new QuestaoComRamificacaoNaoRespondidaStub(
                    'id-q2',
                    'titulo-q2',
                    'opção',
                ),
                new QuestaoSemRamificacaoStub('id-q3', 'titulo-q3', 'opção'),
                new QuestaoComRamificacaoNaoRespondidaStub(
                    'id-q4',
                    'titulo-q4',
                    'opção',
                ),
                new QuestaoComRamificacaoNaoRespondidaStub(
                    'id-q5',
                    'titulo-q5',
                    'opção',
                ),
            ];
            const sut = new Formulario('id-teste', 'titulo-teste', questoes);
            const actual = sut.getQuestoes();
            expect(actual).toHaveLength(3);
        });
        describe('se uma questão com ramificação for respondida', () => {
            describe('se a ramificação for ir para um id', () => {
                test('a próxima questão segue sua ramificação', () => {
                    const questoes = [
                        new QuestaoSemRamificacaoStub(
                            'id-q0',
                            'titulo-q0',
                            'opção',
                        ),
                        new QuestaoSemRamificacaoStub(
                            'id-q1',
                            'titulo-q1',
                            'opção',
                        ),
                        new QuestaoComRamificacaoRespondidaStub(
                            'id-q4',
                            'id-q2',
                            'titulo-q2',
                            'opção',
                        ),
                        new QuestaoSemRamificacaoStub(
                            'id-q3',
                            'titulo-q3',
                            'opção',
                        ),
                        new QuestaoComRamificacaoNaoRespondidaStub(
                            'id-q4',
                            'titulo-q4',
                            'opção',
                        ),
                        new QuestaoComRamificacaoNaoRespondidaStub(
                            'id-q5',
                            'titulo-q5',
                            'opção',
                        ),
                    ];
                    const sut = new Formulario(
                        'id-teste',
                        'titulo-teste',
                        questoes,
                    );
                    const actual = sut.getQuestoes();
                    expect(actual).toHaveLength(4);
                });
                test('a próxima questão segue sua ramificação e abre as próximas sem ramificação', () => {
                    const questoes = [
                        //retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q0',
                            'titulo-q0',
                            'opção',
                        ),
                        //retorna
                        new QuestaoComRamificacaoRespondidaStub(
                            'id-q4',
                            'id-q1',
                            'titulo-q1',
                            'opção',
                        ),
                        //não retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q2',
                            'titulo-q2',
                            'opção',
                        ),
                        //não retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q3',
                            'titulo-q3',
                            'opção',
                        ),
                        //retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q4',
                            'titulo-q4',
                            'opção',
                        ),
                        //retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q6',
                            'titulo-q6',
                            'opção',
                        ),
                        //retorna
                        new QuestaoSemRamificacaoStub(
                            'id-q7',
                            'titulo-q7',
                            'opção',
                        ),
                    ];
                    const sut = new Formulario(
                        'id-teste',
                        'titulo-teste',
                        questoes,
                    );
                    const actual = sut.getQuestoes();
                    expect(actual).toHaveLength(5);
                });
            });
            test('lança erro se a posição do próximo id não for encontrada', () => {
                const questoes = [
                    new QuestaoSemRamificacaoStub(
                        'id-q0',
                        'titulo-q0',
                        'opção',
                    ),
                    new QuestaoComRamificacaoRespondidaStub(
                        'id-q7',
                        'id-q2',
                        'titulo-q1',
                        'opção',
                    ),
                    new QuestaoSemRamificacaoStub(
                        'id-q2',
                        'titulo-q2',
                        'opção',
                    ),
                ];
                const sut = new Formulario(
                    'id-teste',
                    'titulo-teste',
                    questoes,
                );
                expect(() => {
                    sut.getQuestoes();
                }).toThrow(ErroPosicaoDoIdIrParaNaoLocalizada);
            });
            test('lança erro se a posição do próximo id for anterior à atual', () => {
                const questoes = [
                    new QuestaoSemRamificacaoStub(
                        'id-q0',
                        'titulo-q0',
                        'opção',
                    ),
                    new QuestaoComRamificacaoRespondidaStub(
                        'id-q0',
                        'id-q1',
                        'titulo-q1',
                        'opção',
                    ),
                    new QuestaoSemRamificacaoStub(
                        'id-q2',
                        'titulo-q2',
                        'opção',
                    ),
                ];
                const sut = new Formulario(
                    'id-teste',
                    'titulo-teste',
                    questoes,
                );
                expect(() => {
                    sut.getQuestoes();
                }).toThrow(ErroPosicaoDoIdIrParaNaoEstaEmFrenteAoAtual);
            });
            test('termina se a ramificação for ir para fim do questionário', () => {
                const questoes = [
                    //retorna 1
                    new QuestaoSemRamificacaoStub(
                        'id-q0',
                        'titulo-q0',
                        'opção',
                    ),
                    //retorna 2
                    new QuestaoComRamificacaoRespondidaStub(
                        'id-q4',
                        'id-q1',
                        'titulo-q1',
                        'opção',
                    ),
                    //não retorna
                    new QuestaoSemRamificacaoStub(
                        'id-q2',
                        'titulo-q2',
                        'opção',
                    ),
                    //não retorna
                    new QuestaoSemRamificacaoStub(
                        'id-q3',
                        'titulo-q3',
                        'opção',
                    ),
                    //retorna 3
                    new QuestaoSemRamificacaoStub(
                        'id-q4',
                        'titulo-q4',
                        'opção',
                    ),
                    //retorna 4 e termina
                    new QuestaoFimDoQuestionarioStub(
                        'id-q5',
                        'titulo-q5',
                        'opção',
                    ),
                    //não retorna
                    new QuestaoSemRamificacaoStub(
                        'id-q6',
                        'titulo-q6',
                        'opção',
                    ),
                ];
                const sut = new Formulario(
                    'id-teste',
                    'titulo-teste',
                    questoes,
                );
                const actual = sut.getQuestoes();
                expect(actual).toHaveLength(4);
            });
        });
    });
});
