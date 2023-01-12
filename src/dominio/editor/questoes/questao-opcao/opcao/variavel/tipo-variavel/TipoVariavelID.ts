import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITipoVariavelID extends IIdFormulario {}

export class TipoVariavelID extends IdFormulario implements ITipoVariavelID {}
