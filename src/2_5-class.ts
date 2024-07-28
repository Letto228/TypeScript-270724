// export class Film {
//     title: string;
//     duration: number;
// }

// let film: Film;

// film = new Film();

// export class Film {
//     title: string;
//     duration: number;

//     constructor(title: string, duration: number) {
//         this.title = title;
//         this.duration = duration;
//     }
// }

// export class Film {
//     protected inner = '';

//     constructor(public title: string, public duration: number) {}
// }

// type Movie = {
//     releaseYear: number;
//     play(): void;
// }

// type Controll = {
//     controller: unknown;
// }

// export class Film implements Movie, Controll {
//     controller: unknown;

//     private duration: number = 0;
//     public releaseYear: number = 2024;

//     constructor(public title: string) {}

//     play(): void {
//         throw new Error("Method not implemented.");
//     }
// }

// function play(movie: Movie) {
//     movie.play();
// }

abstract class GraphNode {
    x: number = 0;
    y: number = 0;

    abstract readonly type: string;

    abstract paint(): number;

    calculateSize(): number {
        return 100;
    }
}

class StorageNode extends GraphNode {
    readonly type: string = 'StorageNode';

    paint(): number {
        throw new Error("Method not implemented.");
    }
}

class FabricNode extends GraphNode {
    readonly type: string = 'FabricNode';

    paint(): number {
        throw new Error("Method not implemented.");
    }
}

class CarNode extends GraphNode {
    readonly type: string = 'CarNode';

    paint(): number {
        throw new Error("Method not implemented.");
    }
}
