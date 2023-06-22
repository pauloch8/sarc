import EscapadoresDisponiveisVue from './EscapadoresDisponiveis.vue';
import { criarEscapadoresFake } from '@/dominio/comum/escapador/Escapador.dubles';
import { mount } from '@vue/test-utils';

describe('EscapadoresDisponiveis', () => {
    test('exibe os escapadores disponíveis', () => {
        const escapadoresStr = ['primeiro', 'segundo', 'terceiro'];
        const escapadores = criarEscapadoresFake(escapadoresStr);
        const sut = mount(EscapadoresDisponiveisVue, {
            props: {
                escapadores,
            },
        });
        expect(sut.text()).toContain(escapadoresStr[0]);
    });
    test('marca os escapadores usados', () => {
        const escapadoresStr = ['primeiro', 'segundo', 'terceiro'];
        const escapadoresUsadosStr = ['primeiro', 'segundo'];
        const escapadores = criarEscapadoresFake(escapadoresStr);
        const escapadoresUsados = criarEscapadoresFake(escapadoresUsadosStr);

        // espera que a classe seja a mesma instância (Objeto de Valor)
        expect(escapadores[0]).toBe(escapadoresUsados[0]);

        const sut = mount(EscapadoresDisponiveisVue, {
            props: {
                escapadores,
                escapadoresUsados,
            },
        });
        const elemento0 = sut.find(`li[aria-label="${escapadoresStr[0]}"]`);
        expect(elemento0.text()).toContain(escapadoresStr[0]);
        expect(elemento0.classes()).toContain('usado');

        const elemento1 = sut.find(`li[aria-label="${escapadoresStr[1]}"]`);
        expect(elemento1.text()).toContain(escapadoresStr[1]);
        expect(elemento1.classes()).toContain('usado');

        const elemento2 = sut.find(`li[aria-label="${escapadoresStr[2]}"]`);
        expect(elemento2.text()).toContain(escapadoresStr[2]);
        expect(elemento2.classes()).not.toContain('usado');
    });
});
