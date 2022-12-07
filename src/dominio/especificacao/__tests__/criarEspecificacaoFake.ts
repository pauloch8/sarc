import { EspecificacaoDTO } from '../EspecificacaoDTO';

export function criarEspecificacaoFake() {
    const especificacaoFake: EspecificacaoDTO = {
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
    return especificacaoFake;
}
