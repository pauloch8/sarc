import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export const especificacaoDTOFake: EspecificacaoDTO = {
    id: 'teste',
    listaQuestoes: [],
    listaModelos: [
        {
            id: 'teste',
            titulo: 'titulo',
            texto: 'template',
        },
    ],
    titulo: 'Teste',
};
