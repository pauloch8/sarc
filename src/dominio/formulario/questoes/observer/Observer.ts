export class Observer {
    constructor(readonly event: string, readonly callback: CallBack) {}
}

type CallBack = (data: unknown) => void;
