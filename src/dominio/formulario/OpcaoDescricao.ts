import { OpcaoValor } from './OpcaoValor';

export class OpcaoDescricao {
    constructor(
        public tipo: 'uma resposta' | 'várias respostas',
        public valores: OpcaoValor[],
        public adicionarOutrasOpcoes?: boolean,
    ) {}
}
