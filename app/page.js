"use client";
import Image from "next/image";
import Head from "next/head";

import { useState, useEffect } from "react";

import data from "./data.json";

import NavBar from "../components/navbar";
import CountryCard from "../components/country_card";
import SearchBar from "../components/searchbar";

import { findObject } from ".././utils/findObject";

import { useAtom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";
import { filteredDataAtom, apiDataAtom, inputAtom, regionAtom } from "../atoms/apiAtom";

import useFetchData from "../hooks/useFetchData";

export default function Home() {
    const [input, setInput] = useAtom(inputAtom);
    const [region, setRegion] = useAtom(regionAtom);
    const [theme, setTheme] = useAtom(themeAtom);
    const [fData, setFData] = useAtom(filteredDataAtom);
    const [apiData, setApiData] = useAtom(apiDataAtom);

    const fetchData = useFetchData();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setRegion(event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const currentInput = input;
        const currentRegion = region;
        const currentApiData = apiData;

        const filtered = findObject(currentInput, currentApiData, currentRegion);
        setFData(filtered);

        // theme stored in local storage
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [setTheme, input, region, apiData, setFData]);

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
        <>
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <main
                className={`flex flex-col justify-center items-center  ${
                    theme === "dark" ? "bg-darkModeBG text-darkModeT" : "bg-lightModeBG text-lightModeT"
                }`}
            >
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
                                  key={item.name.common}
                                  name={item.name.common}
                                  image={item.flags.png}
                                  pop={item.population}
                                  region={item.region}
                                  capital={item.capital}
                                  theme={theme}
                              />
                          ))
                        : apiData.map((item) => (
                              <CountryCard
                                  key={item.name.common}
                                  name={item.name.common}
                                  image={item.flags.png}
                                  pop={item.population}
                                  region={item.region}
                                  capital={item.capital}
                                  theme={theme}
                              />
                          ))}
                </div>
            </main>
        </>
    );
}
