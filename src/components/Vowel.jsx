import React from "react";
import { shuffleArray } from "../helpers/shuffle";
import { useEffect } from "react";
import { useState } from "react";

export const Vowel = () => {

    const [vowelList, setVowelList] = useState([]);
    const [vowelIndex, setVowelIndex] = useState(0);

    useEffect(() => {

        const vowelData = shuffleArray([
            "a", "e", "i", "o", "u",
            "aa", "ae", "ai", "ao", "au",
            "ea", "ee", "ei", "eo", "eu",
            "ia", "ie", "ii", "io", "iu",
            "oa", "oe", "oi", "oo", "ou",
            "ua", "ue", "ui", "uo", "uu",
        ]);

        setVowelList(vowelData);

    }, []);

    const handleNextVowel = () => {
        setVowelIndex(x => (x == vowelList.length - 1 ? 0 : x + 1));
    }

    return (
        <>
            <div className="question">
                {vowelList[vowelIndex]}
            </div>
            <button onClick={handleNextVowel}>Next</button>
        </>
    )
}