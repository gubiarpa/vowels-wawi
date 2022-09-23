import React from "react";
import { getRandomInt } from "../helpers/getRandomInt";
import { useEffect } from "react";
import { useState } from "react";

export const Vowel = () => {

    const setVowels = ["a", "e", "i", "o", "u"];

    const [currentVowel, setCurrentVowel] = useState("");

    const updateCurrentVowel = () => {
        const randomInt = getRandomInt(0, 4);
        setCurrentVowel(setVowels[randomInt]);
    }

    useEffect(() => {
        updateCurrentVowel();
    }, []);

    const handleNextVowel = () => {
        updateCurrentVowel();
    }

    return (
        <>
            <div className="img-container">
                <img src={`./images/vowel-${currentVowel}.jpg`} />
            </div>
            <br />
            <button onClick={handleNextVowel}>Next</button>
        </>
    )
}