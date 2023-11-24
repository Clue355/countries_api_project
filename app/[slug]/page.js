"use client";
import Image from "next/image";
import Link from "next/link";

import countries from "../data.json";
import { binarySearch } from "../../utils/binarySearch";
import { findObject } from "../../utils/findObject";
import NavBar from "../../components/navbar";

import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/themeAtom";

export default function CountryPage({ params }) {
    const [theme, setTheme] = useAtom(themeAtom);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const decodedTarget = decodeURIComponent(params.slug);
    const slugInfo = binarySearch(decodedTarget, countries);
    const borderList = slugInfo.borders;

    const borderCountries = (alpha3Codes, dataSet) => {
        const matchingObjects = [];
        alpha3Codes.forEach((code) => {
            dataSet.forEach((obj) => {
                if (obj.alpha3Code === code) {
                    matchingObjects.push(obj);
                }
            });
        });
        return matchingObjects;
    };

    const borderCountriesList = slugInfo.borders ? borderCountries(borderList, countries) : [];

    const currencies = slugInfo.currencies ? (
        slugInfo.currencies.map((currency, index) => (
            <span key={index}>
                {currency.name}
                {index < slugInfo.currencies.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Currency</span>
    );

    const languages = slugInfo.languages ? (
        slugInfo.languages.map((language, index) => (
            <span key={index}>
                {language.name}
                {index < slugInfo.languages.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Languages</span>
    );

    const borders = borderCountriesList.length ? (
        borderCountriesList.map((border, index) => (
            <span key={index}>
                <Link
                    href={`/${border.name}`}
                    className={`w-[8rem] h-max mr-[.5rem] mb-[.5rem] py-[.5rem] px-[2rem] break-words text-center shadow-md border-none rounded flex items-center justify-center ${
                        theme === "dark" ? "bg-darkModeE text-darkModeT" : "bg-lightModeE text-lightModeT"
                    }`}
                >
                    {border.name}
                </Link>
            </span>
        ))
    ) : (
        <span>No Border Countries</span>
    );

    return (
        <div className={`${theme === "dark" ? "text-darkModeT" : "text-lightModeT"} min-h-screen flex flex-col`}>
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <div
                className={`flex-grow pt-[2rem] flex flex-wrap h-full justify-center ${
                    theme === "dark" ? "bg-darkModeBG" : "bg-lightModeBG"
                }`}
            >
                <div className="w-max">
                    {/* back button */}

                    <div
                        className={`my-[3rem] w-[8rem] h-[2.5rem] text-center shadow-md border-none rounded flex items-center justify-center ${
                            theme === "dark" ? "bg-darkModeE" : "bg-lightModeE"
                        }`}
                    >
                        <Link href="/" className="px-[2rem] py-[.5rem] w-max flex items-center justify-center">
                            <Image
                                src={`${theme === "dark" ? "/images/wback-arrow.png" : "/images/back-arrow.png"}`}
                                width={20}
                                height={30}
                                alt="arrow_left"
                                className="mr-[.5rem]"
                            />
                            <p className="h-max">Back</p>
                        </Link>
                    </div>

                    {/* slug info parent div */}
                    <div className="ms:w-min ml:w-max max-[1320px]:w-[10rem] max-[1320px]:flex-col flex">
                        {/* image div */}
                        <div className="min-[768px]:w-[40rem] min-[768px]:h-[23rem] ml:w-[24rem] ml:h-[17rem] ms:w-[19rem] ms:h-[14rem] max-[1320px]:mb-[2rem] min-[1321px]:mr-[7rem] max-[1320px]:justify-center relative ">
                            <Image src={slugInfo.flag} fill={true} alt={`${slugInfo.name}_flag`} />
                        </div>

                        {/* country information div */}
                        <div className="ml:w-max ms:w-[5rem] h-min flex flex-col">
                            {/* title country name */}
                            <h2 className=" my-[2rem] font-bold text-2xl">{slugInfo.name}</h2>

                            {/* object property divs */}
                            <div className="h-[13rem] max-[768px]:h-max ms:w-[12rem] ml:w-max min-[768px]:flex-row ms:flex-col flex justify-between ">
                                {/* left container */}
                                <div className="w-max h-min ml:mr-[8rem] ms:mr-0 ms:mb-[3rem]">
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Native Name: </span>
                                        {slugInfo.nativeName ? slugInfo.nativeName : "No Native Name"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Population: </span>
                                        {slugInfo.population ? slugInfo.population : "No Population"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Region: </span>
                                        {slugInfo.region ? slugInfo.region : "No Region"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Sub Region: </span>
                                        {slugInfo.subregion ? slugInfo.subregion : "No Sub Region"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Capital: </span>
                                        {slugInfo.capital ? slugInfo.capital : "No Capital"}
                                    </p>
                                </div>

                                {/* right container */}
                                <div className="w-max h-max max-[768px]:mb-[3rem]">
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Top Level Domain: </span>
                                        {slugInfo.topLevelDomain ? slugInfo.topLevelDomain : "No Top Level Domain"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Currencies: </span>
                                        {currencies}
                                    </p>
                                    <p>
                                        <span className="font-semibold w-max">Languages: </span>
                                        {languages}
                                    </p>
                                </div>
                            </div>
                            {/* border countries section */}
                            <div className="mb-[2rem] h-max min-[425px]:w-[26rem] min-[425px]:flex-row min-[320px]:w-[18.5rem]  min-[768px]:w-[36rem] max-[768px]:w-[20rem] flex flex-wrap  ">
                                <p className="mr-[1rem] font-semibold  min-[425px]:w-max min-[320px]:w-full">
                                    Border Countries:
                                </p>
                                {borders}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
