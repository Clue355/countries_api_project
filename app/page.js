"use client";
import Image from "next/image";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";

import data from "./data.json";
import CountryCard from "../components/country_card";
import SearchBar from "../components/searchbar";

import { findObject } from ".././utils/findObject";

export default function Home() {
    const [input, setInput] = useState("");
    const [region, setRegion] = useState("");
    const [fData, setFData] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    // comment
    const handleDropdownChange = (event) => {
        setRegion(event.target.value);
    };

    useEffect(() => {
        let filteredData = findObject(input, data, region);
        setFData(filteredData);
    }, [input, region]);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen ">
            <NavBar />
            <SearchBar
                input={input}
                inputChange={handleInputChange}
                region={region}
                setRegion={setRegion}
                dropdownChange={handleDropdownChange}
            />
            <div className="flex flex-wrap justify-center mb-[3rem] w-full max-w-1440">
                {fData.length > 0
                    ? fData.map((item) => (
                          <CountryCard
                              key={item.name}
                              name={item.name}
                              image={item.flag}
                              pop={item.population}
                              region={item.region}
                              capital={item.capital}
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
                          />
                      ))}
            </div>
        </main>
    );
}
