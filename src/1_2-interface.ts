// const film: {title: string; duration: number} = {title: '', duration: 123};

// interface Base {
//     source: string;
// }

interface Movie {
    readonly title: string;
    readonly director: string;
    readonly awards?: string[];
    // data: string | number;
}

// interface Film extends Movie, Base {
interface Film extends Movie {
    duration: number;
    // data: number;
}

// interface TvSeries extends Movie, Base {
interface TvSeries extends Movie {
    seasonCount: number;
}

// interface Film {
//     title: string;
//     duration: number;
//     director: string;
//     // seasonCount?: number;
//     awards?: string[];
// }

// interface TvSeries {
//     title: string;
//     director: string;
//     seasonCount: number;
//     awards?: string[];
// }

const film: Film = {title: '', duration: 123, director: ''};
const newFilm: Film = {title: '', duration: 123, director: ''};

// interface Movie {
//     name: string
// }
