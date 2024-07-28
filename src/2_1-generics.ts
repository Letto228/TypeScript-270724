// // export function sum(a: number, b: number): number {
// //     return a + b;
// // }

// export type Film = {
//     title: string;
//     duration: number;
// }

// type ResponceStatuses = 'success' | 'error' | 'pending';

// export type Responce<Result = unknown, Status = ResponceStatuses> = {
//     isSuccess: boolean;
//     status: Status;
//     result: Result;
// }

// // export type FilmResponce = Responce<Film>;
// // export type FilmResponce = {
// //     isSuccess: boolean;
// //     result: Film;
// // }

// // export type FilmsResponce = Responce<Film[]>
// // export type FilmsResponce = {
// //     isSuccess: boolean;
// //     result: Film[];
// // }

// // function getFilm(): FilmResponce {
// function getFilm(): Responce<Film, 'success' | 'pending'> {
//     throw "getFilm";
// }

// function getFilms(): Responce<Film[]> {
//     throw "getFilms";
// }


// // function baseMovie(director: unknown) {
// //     return {
// //         title: 'string',
// //         director,
// //     }
// // }

// // function tvSeries(episode: unknown, u: unknown) {
// //     return {
// //         ...baseMovie(u),
// //         episode: episode,
// //     }
// // }

// type BaseMovie<DirectorG> = {
//     title: string;
//     director: DirectorG;
// }

// interface TvSeries<EpisodeG, DirectorG> extends BaseMovie<DirectorG> {
//     episode: EpisodeG[]
// }

// type Episode = {
//     duration: number;
// }

// function playMovie<MovieG>(movie: MovieG): MovieG {
//     return movie;
// }

// playMovie<TvSeries<Episode, string>>({title: 'Title', director: '', episode: [{duration: 123}]});


// function playTvSeries<EpisodeG, MovieG = TvSeries<EpisodeG, string>>(episode: EpisodeG): MovieG {
//     throw '';
// }

// playTvSeries<Episode>({duration: 123});

// const playEpisode = <EpisodeG>(episode: EpisodeG): EpisodeG => {
//     return episode;
// }

// playEpisode<Episode>({duration: 123});

// --------------------------------------------------

// function getProperty<EntityG extends object>(entity: EntityG, key: keyof EntityG): EntityG[keyof EntityG] {
// function getProperty<EntityG extends object, KeyG extends (keyof EntityG)>(
//     entity: EntityG,
//     key: KeyG,
// ): EntityG[KeyG] {
//     return entity[key];
// }

// type Constructor = new (...args: unknown[]) => object

// getProperty<{a: string, b: number, c: {title: string}}, 'c'>(
//     {a: 'A', b: 123, c: {title: 'Title'}},
//     'c',
// );

// type Moved = {
//     run: () => void;
// }

// type Auto = Moved & {
//     clacson: boolean;
// }

// type Airpline = Moved & {
//     maxHeightPline: number;
// }

// function moived(machine: Moved) {
//     machine.run();
// }

// function moived<MachineG extends Moved>(machine: MachineG) {
//     machine.run();
// }

// moived<Auto>({clacson: true, run: () => {}});
// moived<Airpline>({maxHeightPline: 2000, run: () => {}});

interface Movie {
    readonly title: string;
    readonly director: string;
    readonly awards?: string[];
}

type EntitySetters<EntityG extends object> = {
    [Propery in keyof EntityG as `set${Capitalize<Propery & string>}`]: (value: EntityG[Propery]) => void;
}

// type Test = EntitySetters<{a: number, b: string, 1: number}>

type EntityGetters<EntityG extends object> = {
    [Propery in keyof EntityG as `get${Capitalize<Propery & string>}`]: () => EntityG[Propery];
}

type CompletedEntity<EntityG extends object> = EntityG & EntityGetters<EntityG> & EntitySetters<EntityG>;

export type CompletedMovie = CompletedEntity<Movie>;

const completedMovie: CompletedMovie = {
    title: '',
    setTitle: (newTitle: string) => {},
    getTitle: () => '',
    director: '',
    setDirector: (newDirector: string) => {},
    getDirector: () => '',
}

export type CompletedTest = CompletedEntity<{name: string}>;

const completedTest: CompletedTest = {
    name: '123',
    getName: () => '123',
    setName: (newName: string) => {},
}

