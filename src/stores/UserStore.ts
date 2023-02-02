import { IUserStore } from "../models/types";
import { makeObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";

const userInitialState: IUserStore = {
    id: 0,
    email: "",
    username: "",
    loggedIn: false,
};

export class UserStore {
    @persist("object") user: IUserStore;

    constructor() {
        this.user = userInitialState;
        makeObservable(this, {
            user: observable,
        });
    }

    setUser(id: number, username: string, email: string) {
        this.user = {
            id,
            username,
            email,
            loggedIn: true,
        };
    }

    removeUser() {
        this.user = userInitialState;
    }
}

const hydrate = create({
    storage: localStorage,
});

export const userStore = new UserStore();

hydrate("user", userStore).then(() => {
    console.log("user has been hydrated");
});
