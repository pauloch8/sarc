import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export const especificacaoDTOFake: EspecificacaoDTO = {
    id: 'teste',
    questoes: [],
    templates: [
        {
            id: 'teste',
            titulo: 'titulo',
            texto: 'template',
        },
    ],
    titulo: 'Teste',
};
