export type MyString = string;
export type Size = 's' | 'm' | 'l';

export const size: Size = 's';

type Movie = {
    readonly title: string;
    readonly director: string;
    readonly awards?: string[];
    data: string;
}

type Film = Movie & {
    duration: number;
    data: number;
}

type TvSeries = Movie & {
    seasonCount: number;
}

const film: Film = {title: '', duration: 123, director: ''};
const tvSeries: TvSeries = {title: '', seasonCount: 123, director: ''};

// type Movie = {}
