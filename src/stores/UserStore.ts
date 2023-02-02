import { IUserStore, url } from "../models/types";
import { makeAutoObservable, makeObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import axios from "axios";

const userInitialState: IUserStore = {
    id: 0,
    email: "",
    username: "",
    roles: [],
    favorites: [],
    loggedIn: false,
};

export class UserStore {
    @persist("object") user: IUserStore;

    constructor() {
        this.user = userInitialState;
        makeAutoObservable(this);
    }

    setUser({ id, username, roles, favorites, email }: IUserStore) {
        this.user = {
            id,
            username,
            email,
            favorites,
            roles,
            loggedIn: true,
        };
    }

    removeUser() {
        this.user = userInitialState;
    }

    async register(data: {
        email: string;
        username: string;
        password: string;
    }) {
        await axios.post(`${url}/user/register`, data).then((res) => {
            return res.data.successful;
        });
    }

    async login(data: { username: string; password: string }) {
        await axios.post(`${url}/user/login`, data).then((res) => {
            this.setUser(res.data);
            return res.data.successful;
        });
    }
}

const hydrate = create({
    storage: localStorage,
});

export const userStore = new UserStore();

hydrate("user", userStore).then(() => {
    console.log("user has been hydrated");
});
