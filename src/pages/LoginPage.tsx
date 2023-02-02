import React from "react";
import { userStore } from "../stores/UserStore";

const LoginPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        userStore.login({
            username: data.get("username") as string,
            password: data.get("password") as string,
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="username"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    placeholder="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
