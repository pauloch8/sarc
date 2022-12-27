import {
    ErroTituloComMenosDeTresCaracteres,
    ErroTituloEmBranco,
    TituloFactory,
} from '@/dominio/editor/TituloFactory';

describe('TituloFactory', () => {
    describe('criar', () => {
        describe('lança erro', () => {
            test('se for uma string vazia', async () => {
                const tituloFactory = new TituloFactory();
                expect(() => {
                    tituloFactory.criar('');
                }).toThrow(ErroTituloEmBranco);
            });
            test('se for uma string com menos de três caracteres', async () => {
                const tituloFactory = new TituloFactory();
                expect(() => {
                    tituloFactory.criar('12');
                }).toThrow(ErroTituloComMenosDeTresCaracteres);
            });
            test('se tiver quebra de linha', async () => {
                const tituloFactory = new TituloFactory();
                expect(() => {
                    tituloFactory.criar(`Título 
                    com
                    quebra
                    de
                    linha`);
                }).toThrow();
            });
        });
    });
});
