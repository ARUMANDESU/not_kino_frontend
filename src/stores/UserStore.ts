import { IUserStore, url } from "../models/types";
import { action, makeAutoObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import axios from "axios";

const userInitialState: IUserStore = {
    id: 0,
    email: "",
    username: "",
    avatar_url: "",
    roles: [],
    favorites: [],
    loggedIn: false,
};

export class UserStore {
    @persist("object") @observable user: IUserStore;

    constructor() {
        this.user = userInitialState;
        makeAutoObservable(this);
    }

    @action setUser({
        id,
        username,
        roles,
        favorites,
        email,
        avatar_url,
    }: IUserStore) {
        this.user = {
            id,
            username,
            email,
            avatar_url,
            favorites,
            roles,
            loggedIn: true,
        };
    }

    @action removeUser() {
        this.user = userInitialState;
    }

    @action async register(data: {
        email: string;
        username: string;
        password: string;
    }) {
        await axios.post(`${url}/user/register`, data).then((res) => {
            return res.data.successful;
        });
    }

    @action async login(data: { username: string; password: string }) {
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
