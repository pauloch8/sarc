import {
    ErroTituloComMenosDeTresCaracteres,
    ErroTituloEmBranco,
    Titulo,
} from '@/dominio/editor/Titulo';

describe('Titulo', () => {
    describe('instanciar', () => {
        describe('lança erro', () => {
            test('se for uma string vazia', async () => {
                expect(() => {
                    new Titulo('');
                }).toThrow(ErroTituloEmBranco);
            });
            test('se for uma string com menos de três caracteres', async () => {
                expect(() => {
                    new Titulo('12');
                }).toThrow(ErroTituloComMenosDeTresCaracteres);
            });
            test('se tiver quebra de linha', async () => {
                expect(() => {
                    new Titulo(`Título 
                    com
                    quebra
                    de
                    linha`);
                }).toThrow();
            });
        });
        test('remove os espaços', async () => {
            expect(() => {
                new Titulo('         ');
            }).toThrow(ErroTituloEmBranco);
            const teste = new Titulo('       teste           ');
            expect(teste.toString()).toBe('teste');
        });
    });
});
