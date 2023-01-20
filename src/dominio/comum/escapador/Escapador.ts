export interface IEscapador {
    toString(): string;
}

export abstract class Escapador implements IEscapador {
    abstract toString(): string;
}
