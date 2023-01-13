// eslint-disable-next-line @typescript-eslint/ban-types
export function objetoDeValor<T extends { new (...args: any[]): {} }>(
    constructor: T,
) {
    return class ObjetoDeValor extends constructor {
        private static readonly instancias: Map<
            string,
            WeakRef<ObjetoDeValor>
        > = new Map();

        constructor(...args: any[]) {
            super(...args);
            const instancia = ObjetoDeValor.instancias
                .get(this.valueOf().toString())
                ?.deref();
            if (instancia) {
                return instancia;
            } else {
                ObjetoDeValor.instancias.set(
                    this.valueOf().toString(),
                    new WeakRef(this),
                );
            }
        }
    };
}
