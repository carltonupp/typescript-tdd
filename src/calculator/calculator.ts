class NotImplemented extends Error {
    constructor() {
        super('Not implemented');
    }
}

export class Calculator {
    add(x: number, y: number): number {
        throw new NotImplemented();
    }
    subtract(x: number, y: number): number {
        throw new NotImplemented();
    }
    multiple(x: number, y: number): number {
        throw new NotImplemented();
    }
    divide(x: number, y: number): number {
        throw new NotImplemented();
    }
}
