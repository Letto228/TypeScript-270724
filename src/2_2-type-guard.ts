// function toUperCase(value: number | string): string {
//     if (typeof value === 'string') {
//         return value.toUpperCase();
//     }

//     return `${value}`;
// }

// interface Movie {
//     duration: number;
// }

// export function playMovie(movie?: Movie | null): number | undefined {
//     // movie

//     // if (movie) {
//     //     return movie.duration;
//     // }

//     // if (!movie) {
//     //     return;
//     // }

//     // return movie.duration;

//     // return movie?.duration;

//     // return movie && movie.duration;

//     return movie ? movie.duration : undefined;
// }

// function calculate(a: number | string, b: number | boolean): number | undefined {
//     if (a === b) {
//         return a + b;
//     }
// }

// type Dog = {
//     name: string;
//     bark: () => void;
// }

// type Cat = {
//     name: string;
//     meow: () => void;
// }

// type Wolf = {
//     run: () => void;
//     bark: () => boolean;
// }

// type Human = {
//     run: () => void;
//     talk: () => boolean;
// }

// function makeSomeNoise(pet: Dog | Cat | Wolf | Human) {
//     if ('bark' in pet) {
//         pet.bark();

//         return;
//     }

//     if ('meow' in pet) {
//         pet.meow();

//         return;
//     }
// }

// function log(date: Date | string) {
//     if (date instanceof Date) {
//         console.log(date.toISOString());

//         return;
//     }

//     console.log(date);
// }

// My type guard

// export type Film = {
//     title: string;
//     duration: number;
// }

// type Response = {
//     status: string;
//     result: unknown;
// }

// function isFilm(entity: unknown, additionalInfo: unknown): entity is Film {
//     const film: Film = entity as Film;

//     return !!film
//         && typeof film.title === 'string'
//         && typeof film.duration === 'number';
// }

// function getFilm(): Film | undefined {
//     const response: Response = {
//         status: 'success',
//         result: {title: '', duration: 123},
//     };

//     const {result} = response;

//     if (isFilm(result, {})) {
//         return result;
//     }
// }

// discriminated union

// type TvType = 'TvSeries' | 'TvShow' | 'Catchup'

// export type TvSeries = {
//     type: 'TvSeries',
//     seasoneCount: number;
// }

// type TvShow = {
//     type: 'TvShow',
//     episodeCount: number;
// }

// type Catchup = {
//     type: 'Catchup',
//     endDate: number;
// }

// type Collection = {
//     title: string;
//     items: (TvSeries | TvShow | Catchup)[]
//     // items: [TvSeries, TvShow, Catchup]
// }

// type CollectionItemsType = Collection['items'][number]['type']

// function play(collection: Collection): void {
//     collection.items.forEach(item => {
//         if (item.type === 'TvSeries') {
//             console.log(item.seasoneCount);
//         }

//         if (item.type === 'Catchup') {
//             console.log(item.endDate);
//         }
//     });
// }

type UserConfig = {
    isAdmin: boolean;
    hasShop: boolean;
    name: string;
    status: string;
}

// const userConfig = {
//     isAdmin: true,
//     hasShop: false,
//     name: 'Egor',
//     status: 'offline',
// } as const satisfies UserConfig;

// const otherUserConfig = {
//     isAdmin: false,
//     hasShop: true,
//     name: 'No name',
//     status: 'online',
// } as const;

// userConfig.name

// type UserConfigOmit = Omit<UserConfig, 'name' | 'hasShop'>
type OmitedProperty = Exclude<keyof UserConfig, 'name' | 'hasShop'>;
type UserConfigOmit = Pick<UserConfig, OmitedProperty>
type UserConfigPick = Pick<UserConfig, 'name' | 'hasShop'>

type TestExlude = Exclude<'a' | 'b' | 'c', 'd' | 'c'>;
