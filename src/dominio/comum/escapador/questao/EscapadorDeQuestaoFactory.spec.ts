import { EscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { EscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { IdFormulario } from '@/dominio/comum/IdFormulario';

describe('EscapadorDeQuestaoFactory', () => {
    test('cria um escapador a partir de um id de questão e id de categoria do texto', () => {
        const sut = new EscapadorDeQuestaoFactory();
        const idQuestao = new IdFormulario('titulo');
        const idCategoria = new IdFormulario('categoria');
        expect(
            sut.criarDeIdQuestaoIdCategoria(idQuestao, idCategoria),
        ).toBeInstanceOf(EscapadorDeQuestao);
    });
});
