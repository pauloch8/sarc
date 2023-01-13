import { objetoDeValor } from '@/dominio/comum/ObjetoDeValor';

@objetoDeValor
class ObjetoDeValorRetornaValor1Stub {
    constructor(private valor: string) {}

    valueOf() {
        return this.valor;
    }
}

@objetoDeValor
class ObjetoDeValorRetornaValor2Stub {
    constructor(private valor: string) {}

    valueOf() {
        return this.valor;
    }
}

describe('ObjetoDeValor', () => {
    test('para cada valor cria somente uma instância (FlyWeight)', () => {
        const sut1 = new ObjetoDeValorRetornaValor1Stub('a');
        const sut2 = new ObjetoDeValorRetornaValor1Stub('a');
        expect(sut1 === sut2).toBeTruthy();
        expect(sut1).toBe(sut2);
    });
    test('classes diferentes guardam diferentes instâncias', () => {
        const sut1 = new ObjetoDeValorRetornaValor1Stub('a');
        const sut2 = new ObjetoDeValorRetornaValor2Stub('a');
        expect(sut1).not.toBe(sut2);
    });
});
