export class Animal {
    feed(): void {}
}

export class Movable {
    move(): void {}
}

export class Horse {
    name: string = '';
}
export interface Horse extends Animal, Movable {}

type Constructor = new (...args: any[]) => {};

function applyMixins(child: Constructor, parents: Constructor[]): void {
    parents.forEach(parent => {
        Object.getOwnPropertyNames(parent.prototype).forEach(name => {
            child.prototype[name] = parent.prototype[name];
        })
    })
}

applyMixins(Horse, [Animal, Movable]);

let horse = new Horse();

horse.move
