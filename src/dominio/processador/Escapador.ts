export class Escapador {
    constructor(
        private questaoId: string,
        private opcaoId: string,
        private categoriaId: string,
    ) {}
    compararQuestao(questaoId: string): unknown {
        return this.questaoId === questaoId;
    }
}
