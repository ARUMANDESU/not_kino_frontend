export interface IUserStore {
    id: number;
    email: string;
    username: string;
    roles: string[];
    favorites: { id: string }[];
    loggedIn: boolean;
}

export interface IMovieComment {
    date: Date;
    user_id: string;
    text: string;
}

export interface IMovieWatchabilityItem {
    logo: { url: string };
    name: string;
    url: string;
}
export interface IMovie {
    _id: string;
    title: string;
    description: string;
    rate: {
        kp: number;
        imdb: number;
    };
    votes: {
        kp: number;
        imdb: number;
    };
    watchability: {
        items: [IMovieWatchabilityItem];
    };
    length: number;
    year: number;
    type: string;
    poster: {
        url: string;
        previewUrl: string;
    };
    comments: [IMovieComment];
}
export const url = "http://localhost:4000";
