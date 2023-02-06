import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CategoryPage from "./pages/CategoryPage";

function App() {
    return (
        <ChakraProvider>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Navigate to="/home" />} />
                <Route path={"/home"} element={<HomePage />} />
                <Route path={"/movie/:id"} element={<MoviePage />} />
                <Route path={"/lists"} element={<CategoryPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/register"} element={<RegisterPage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
