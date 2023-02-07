import { action, configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { IMovie, IMovieComment, IMovieWatchabilityItem } from "../models/types";

configure({ enforceActions: "observed" });

class MovieStore {
    movies: IMovie[] = [];
    _id: string = "";
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
        items: IMovieWatchabilityItem[] | null;
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

    constructor() {
        makeAutoObservable(this);
    }

    @action async getMovies(limit: number = 50, type: string | null = null) {
        await axios
            .get(
                `${
                    process.env.REACT_APP_BACKEND_BASE_URL
                }/movie/?limit=${limit}${type != null ? `&type=${type}` : ""}`
            )
            .then((res) => {
                this.setMovies(
                    res.data.sort(function (a: IMovie, b: IMovie) {
                        return b.rate.kp - a.rate.kp;
                    })
                );
            });
    }

    @action async addMovie(e: any) {
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
        await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/movie`,
            newMovie
        );
        this.getMovies();
        this.restoreToDefault();
    }

    @action async restoreToDefault() {
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

    @action async getOneMovie(id: string | undefined) {
        await axios
            .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/movie/${id}`)
            .then((res) => {
                this.setData(res.data);
            });
    }
    @action setData(data: IMovie) {
        this._id = data._id;

        this.title = data.title;
        this.description = data.description;
        this.rate = data.rate;
        this.votes = data.votes;
        this.watchability = data.watchability;
        this.length = data.length;
        this.year = data.year;
        this.type = data.type;
        this.poster = data.poster;
        this.comments = data.comments;
        console.log(this.title);
    }
    @action setMovies(value: IMovie[]) {
        this.movies = value;
    }
}

const movieStore = new MovieStore();
export default movieStore;
