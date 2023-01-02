import {
    Editor,
    ErroExisteQuestaoEmEdicao,
    ErroQuestaoSolicitadaNaoEncontrada,
} from '@/dominio/editor/Editor';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Questao } from '@/dominio/editor/Questao';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';

describe('Editor', () => {
    describe('editarQuestao', () => {
        test('faz com que a questão entre em edição', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0],
            );
            expect(questao0.getEmEdicao()).toBeFalsy();
            sut.editarQuestao(questao0);
            expect(questao0.getEmEdicao()).toBeTruthy();
        });
        test('lança erro se uma questão já está em edição', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1],
            );
            sut.editarQuestao(questao0);
            expect(() => {
                sut.editarQuestao(questao1);
            }).toThrow(ErroExisteQuestaoEmEdicao);
        });
        test('lança erro se solicitada a edição de uma questão que não faz parte do formulário', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0],
            );
            expect(() => {
                sut.editarQuestao(questao1);
            }).toThrow(ErroQuestaoSolicitadaNaoEncontrada);
        });
    });
    describe('subirQuestao', () => {
        test('altera o índice das questões', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const questao2 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                2,
            );
            const questao3 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                3,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1, questao2, questao3],
            );
            sut.subirQuestao(questao1);
            expect(questao1.getIndice()).toBe(2);
            expect(questao2.getIndice()).toBe(1);
        });
        test('o índice se mantém caso a questão já seja a última', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const questao2 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                2,
            );
            const questao3 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                3,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1, questao2, questao3],
            );
            sut.subirQuestao(questao3);
            expect(questao3.getIndice()).toBe(3);
        });
        test('lança erro se solicitada uma questão que não faz parte do formulário', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0],
            );
            expect(() => {
                sut.subirQuestao(questao1);
            }).toThrow(ErroQuestaoSolicitadaNaoEncontrada);
        });
    });
    describe('descerQuestao', () => {
        test('altera o índice das questões', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const questao2 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                2,
            );
            const questao3 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                3,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1, questao2, questao3],
            );
            sut.descerQuestao(questao2);
            expect(questao2.getIndice()).toBe(1);
            expect(questao1.getIndice()).toBe(2);
        });
        test('o índice se mantém caso a questão já seja a primeira', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1],
            );
            sut.descerQuestao(questao0);
            expect(questao0.getIndice()).toBe(0);
        });
        test('lança erro se solicitada uma questão que não faz parte do formulário', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0],
            );
            expect(() => {
                sut.descerQuestao(questao1);
            }).toThrow(ErroQuestaoSolicitadaNaoEncontrada);
        });
    });
    describe('excluirQuestao', () => {
        test('exclui da lista a questão solicitada', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const questao2 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                2,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1, questao2],
            );
            sut.excluirQuestao(questao1);
            expect(() => {
                sut.excluirQuestao(questao1);
            }).toThrow(ErroQuestaoSolicitadaNaoEncontrada);
        });
        test('reordena o índice das questões', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const questao2 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                2,
            );
            const questao3 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                3,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0, questao1, questao2, questao3],
            );
            sut.excluirQuestao(questao0);
            expect(questao1.getIndice()).toBe(0);
            expect(questao2.getIndice()).toBe(1);
            expect(questao3.getIndice()).toBe(2);
        });
        test('lança erro se solicitada uma questão que não faz parte do formulário', () => {
            const questao0 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                0,
            );
            const questao1 = new Questao(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                1,
            );
            const sut = new Editor(
                new IdFormulario('id'),
                new Titulo('titulo'),
                new Subtitulo('subtitulo'),
                [questao0],
            );
            expect(() => {
                sut.excluirQuestao(questao1);
            }).toThrow(ErroQuestaoSolicitadaNaoEncontrada);
        });
    });
});
