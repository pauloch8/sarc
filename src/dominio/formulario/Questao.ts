import { Observable } from './Observable';
import { Observer } from './Observer';

export abstract class Questao extends Observable {
    public abstract readonly semRamificacao: boolean;
    private questaoAnterior?: Questao | null = null;
    public readonly proximasquestoes: string[] = [];

    constructor(public id: string) {
        super();
    }

    get ehPrimeiraQuestao() {
        if (!this.questaoAnterior) return true;
    }

    get ativo(): boolean {
        if (this.ehPrimeiraQuestao) {
            return true;
        }
        if (this.questaoAnterior?.proximasquestoes.includes(this.id)) {
            return true;
        }
        return false;
    }

    ativar(questaoAnterior: Questao) {
        this.questaoAnterior = questaoAnterior;
        questaoAnterior.register(
            new Observer('respondido', (respostas: unknown) => {
                if (!(respostas as string[]).includes(this.id)) {
                    this.questaoAnterior = null;
                }
            }),
        );
    }
}
