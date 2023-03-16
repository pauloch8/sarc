import {
    ErroTituloComMenosDeTresCaracteres,
    ErroTituloEmBranco,
    Titulo,
} from '@/dominio/comum/Titulo';

describe('Titulo', () => {
    describe('valida na instanciação', () => {
        test('retorna um objeto se o parâmetro estiver correto', () => {
            const teste = new Titulo('teste');
            expect(teste.toString()).toBe('teste');
        });
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
    });

    test('remove os espaços em branco ao redor (trim)', async () => {
        expect(() => {
            new Titulo('         ');
        }).toThrow(ErroTituloEmBranco);
        const teste = new Titulo('       teste           ');
        expect(teste.toString()).toBe('teste');
    });
});
