import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Button } from "@chakra-ui/react";

const ColorModeComp = () => {
    const [colorMode, setColorMode] = useState<string | null>("");

    useEffect(() => {
        setColorMode(localStorage.getItem("chakra-ui-color-mode"));
    }, []);

    const handleBtnClick = () => {
        if (colorMode === "white") {
            setColorMode("dark");
            localStorage.setItem("chakra-ui-color-mode", "dark");
            window.location.reload();
            return;
        }
        if (colorMode === "dark") {
            setColorMode("white");
            localStorage.setItem("chakra-ui-color-mode", "white");
        }
        window.location.reload();
        return;
    };

    return (
        <>
            <Button colorScheme="teal" onClick={handleBtnClick}>
                {colorMode == "white" ? <BiSun /> : <BiMoon />}
            </Button>
        </>
    );
};

export default ColorModeComp;
