import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import {
    IMovie,
    IMovieComment,
    IMovieWatchabilityItem,
    url,
} from "../models/types";

configure({ enforceActions: "observed" });

class MovieStore {
    movies: IMovie[] = [];
    title: string = "";
    description: string = "";
    rate: {
        kp: number;
        imdb: number;
    } = {
        kp: 0,
        imdb: 0,
    };
    votes: {
        kp: number;
        imdb: number;
    } = {
        kp: 0,
        imdb: 0,
    };
    watchability: {
        items: IMovieWatchabilityItem[];
    } = {
        items: [],
    };
    length: number = 0;
    year: number = 0;
    type: string = "";
    poster: {
        url: string;
        previewUrl: string;
    } = {
        url: "",
        previewUrl: "",
    };
    comments: IMovieComment[] = [];
    editing: boolean = false;
    movieId: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    async getMovies(limit: number = 50) {
        await axios.get(`${url}/movie/?limit=${limit}`).then((res) => {
            this.movies = res.data;
        });
    }

    async addMovie(e: any) {
        e.preventDefault();
        const newMovie = {
            title: this.title,
            description: this.description,
            rate: this.rate,
            votes: this.votes,
            watchability: this.watchability,
            length: this.length,
            year: this.year,
            type: this.type,
            poster: this.poster,
            comments: this.comments,
        };
        await axios.post(`${url}/movie`, newMovie);
        this.getMovies();
        this.restoreToDefault();
    }

    async restoreToDefault() {
        this.title = "";
        this.description = "";
        this.rate = { kp: 0, imdb: 0 };
        this.votes = { kp: 0, imdb: 0 };
        this.watchability = { items: [] };
        this.length = 0;
        this.year = 0;
        this.type = "";
        this.poster = { url: "", previewUrl: "" };
        this.comments = [];
    }
}

const movieStore = new MovieStore();
export default movieStore;
