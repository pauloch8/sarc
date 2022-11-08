import { Observer } from './Observer';

export class Observable {
    observers: Observer[] = [];

    register(observer: Observer) {
        this.observers.push(observer);
    }

    notify(event: string, data: unknown) {
        for (const observer of this.observers) {
            if (observer.event === event) {
                observer.callback(data);
            }
        }
    }
}
