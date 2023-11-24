"use client";
import Image from "next/image";
import NavBar from "../components/navbar";

import data from "./data.json";
import CountryCard from "../components/country_card";
import SearchBar from "../components/searchbar";

import { useState, useEffect } from "react";

import Head from "next/head";

import { findObject } from ".././utils/findObject";

import { useAtom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";

export default function Home() {
    const [input, setInput] = useState("");
    const [region, setRegion] = useState("");
    const [fData, setFData] = useState([]);
    const [theme, setTheme] = useAtom(themeAtom);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setRegion(event.target.value);
    };

    useEffect(() => {
        let filteredData = findObject(input, data, region);
        setFData(filteredData);
        // theme stored in local storage
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [input, region, setTheme]);

    // colors: {
    //     darkModeBG: "hsl(207, 26%, 17%)",
    //     darkModeE: "hsl(209, 23%, 22%)",
    //     darkModeT: "hsl(0, 0%, 100%)",
    //     lightModeBG: "hsl(0, 0%, 98%)",
    //     lightModeT: "hsl(200, 15%, 8%)",
    //     lightModeI: "hsl(0, 0%, 52%)",
    // },

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <main
            className={`flex flex-col justify-center items-center min-h-screen ${
                theme === "dark" ? "bg-darkModeBG text-darkModeT" : "bg-lightModeBG text-lightModeT"
            }`}
        >
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <SearchBar
                input={input}
                inputChange={handleInputChange}
                region={region}
                setRegion={setRegion}
                dropdownChange={handleDropdownChange}
                theme={theme}
            />
            <div className="flex flex-wrap justify-center mb-[12rem] w-full max-w-1440">
                {fData.length > 0
                    ? fData.map((item) => (
                          <CountryCard
                              key={item.name}
                              name={item.name}
                              image={item.flag}
                              pop={item.population}
                              region={item.region}
                              capital={item.capital}
                              theme={theme}
                          />
                      ))
                    : data.map((item) => (
                          <CountryCard
                              key={item.name}
                              name={item.name}
                              image={item.flag}
                              pop={item.population}
                              region={item.region}
                              capital={item.capital}
                              theme={theme}
                          />
                      ))}
            </div>
        </main>
    );
}
