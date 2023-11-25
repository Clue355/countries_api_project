"use client";
import Image from "next/image";
import Link from "next/link";

import { binarySearch } from "../../utils/binarySearch";
import { findObject } from "../../utils/findObject";
import NavBar from "../../components/navbar";

import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/themeAtom";
import { apiDataAtom } from "../../atoms/apiAtom";
import { Noto_Sans_Telugu } from "next/font/google";
import { decode } from "punycode";

export default function CountryPage({ params }) {
    const [theme, setTheme] = useAtom(themeAtom);
    const [apiData, setApiData] = useAtom(apiDataAtom);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const decodedTarget = decodeURIComponent(params.slug);
    const slugInfo = binarySearch(decodedTarget, apiData);
    const borderList = slugInfo.borders;

    const borderCountries = (alpha3Codes, dataSet) => {
        const dataMap = new Map(dataSet.map((obj) => [obj.cca3, obj]));
        return alpha3Codes.map((code) => dataMap.get(code)).filter((obj) => obj !== undefined);
    };

    console.log(borderCountries(borderList, apiData));
    const borderCountriesList = slugInfo.borders ? borderCountries(borderList, apiData) : [];

    const currencies = slugInfo.currencies ? (
        Object.keys(slugInfo.currencies).map((code, index, array) => (
            <span key={code}>
                {code}
                {index < array.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Currency</span>
    );

    const languages = slugInfo.languages ? (
        Object.values(slugInfo.languages).map((language, index, array) => (
            <span key={index}>
                {language}
                {index < array.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Language</span>
    );

    const borders = borderCountriesList.length ? (
        borderCountriesList.map((border, index) => (
            <span key={index}>
                <Link
                    href={`/${border.name.common}`}
                    className={`w-[8rem] h-max mr-[.5rem] mb-[.5rem] py-[.5rem] px-[2rem] break-words text-center shadow-md border-none rounded flex items-center justify-center ${
                        theme === "dark" ? "bg-darkModeE text-darkModeT" : "bg-lightModeE text-lightModeT"
                    }`}
                >
                    {border.name.common}
                </Link>
            </span>
        ))
    ) : (
        <span>No Border Countries</span>
    );

    const capitals = slugInfo.capital ? (
        slugInfo.capital.map((capital, index, array) => (
            <span key={index}>
                {capital}
                {index < array.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Capital</span>
    );

    const firstNativeNameKey = Object.keys(slugInfo.name.nativeName)[0];
    const officialNativeName = slugInfo.name.nativeName[firstNativeNameKey].common;

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
                            <Image src={slugInfo.flags.svg} fill={true} alt={`${slugInfo.name.common}_flag`} />
                        </div>

                        {/* country information div */}
                        <div className="ml:w-max ms:w-[5rem] h-min flex flex-col">
                            {/* title country name */}
                            <h2 className=" my-[2rem] font-bold text-2xl">{slugInfo.name.common}</h2>

                            {/* object property divs */}
                            <div className="h-[13rem] max-[768px]:h-max ms:w-[12rem] ml:w-max min-[768px]:flex-row ms:flex-col flex justify-between ">
                                {/* left container */}
                                <div className="w-max h-min ml:mr-[8rem] ms:mr-0 ms:mb-[3rem]">
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Native Name: </span>
                                        {officialNativeName ? officialNativeName : "No Native Name"}
                                    </p>
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Population: </span>
                                        {slugInfo.population ? slugInfo.population.toLocaleString() : "No Population"}
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
                                        {capitals}
                                    </p>
                                </div>

                                {/* right container */}
                                <div className="w-max h-max max-[768px]:mb-[3rem]">
                                    <p className="mb-[.5rem] w-max">
                                        <span className="font-semibold">Top Level Domain: </span>
                                        {slugInfo.tld[0] ? slugInfo.tld[0] : "No Top Level Domain"}
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
