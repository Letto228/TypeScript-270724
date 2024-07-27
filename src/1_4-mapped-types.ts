interface Movie {
    readonly title: string;
    readonly director: string;
    readonly awards?: string[];
}

// type MovieKeys = 'title' | 'director' | 'awards';
// type MovieKeys = keyof Movie;

// const key: MovieKeys = ''

// type MovieCopy = {
//     [Propery in MovieKeys]: number;
// }

// type MovieTitle = Movie['awards'];

type MovieCopy = {
    // [Propery in MovieKeys]: Movie[Propery];
    [Propery in keyof Movie]: Movie[Propery];
}

/**
 * {
 *      title: ;
 *      director: ;
 *      awards: ;
 * }
 */

/**
 * type MovieCopy = MovieKeys.reduce(
 *      (Property, MovieCopy) => {...MovieCopy, [Propery]: Movie[Propery]},
 *      {},
 * )
 */


const sizes: ('s' | 'm' | 'l')[] = ['s', 'm', 'l'];
// const size = ['s', 'm', 'l'] as const;

type SizeNames = (typeof sizes)[number];

type SizeMap = {
    [SizeName in SizeNames]: number;
}

const sizeMap: SizeMap = {
    s: 10,
    m: 100,
    l: 1000,
}

interface ExtendedSizeMap extends SizeMap {
    xs: number
}

const extendedSizeMap: ExtendedSizeMap = {
    xs: 1,
    s: 10,
    m: 100,
    l: 1000,
}

type Overvrite = {
    awards: boolean[];
}

type MovieOvervriteCopy = {
    [Propery in keyof Movie]: Propery extends (keyof Overvrite)
        ? Overvrite[Propery]
        : Movie[Propery];
}

type OptionalMovie = {
    [Propery in keyof Movie]?: Movie[Propery];
}

type RequiredMovie = {
    [Propery in keyof Movie]-?: Movie[Propery];
}

type ReadonlyMovie = {
    readonly [Propery in keyof Movie]: Movie[Propery];
}

type EditableMovie = {
    -readonly [Propery in keyof Movie]: Movie[Propery];
}

type MovieSetters = {
    [Propery in keyof Movie as `set${Capitalize<Propery>}`]: (value: Movie[Propery]) => void;
}

type MovieGetters = {
    [Propery in keyof Movie as `get${Capitalize<Propery>}`]: () => Movie[Propery];
}

type CompletedMovie = Movie & MovieGetters & MovieSetters;

const completedMovie: CompletedMovie = {
    title: '',
    setTitle: (newTitle: string) => {},
    getTitle: () => '',
    director: '',
    setDirector: (newDirector: string) => {},
    getDirector: () => '',
}

/**
 * type MovieSetters = (keyof Movie).reduce(
 *      (Property, MovieCopy) => {...MovieCopy, [as(Propery)]: Movie[Propery]},
 *      {},
 * )
 */
