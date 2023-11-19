import Image from "next/image";
import Link from "next/link";

import countries from "../data.json";
import { binarySearch } from "../../utils/binarySearch";
import NavBar from "../../components/navbar";

export default function CountryPage({ params }) {
    const decodedTarget = decodeURIComponent(params.slug);

    const slugInfo = binarySearch(decodedTarget, countries);

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

    const borders = slugInfo.borders ? (
        slugInfo.borders.map((Border, index) => (
            <span key={index}>
                {Border.name}
                {index < slugInfo.borders.length - 1 ? ", " : ""}
            </span>
        ))
    ) : (
        <span>No Border Countries</span>
    );

    return (
        <div>
            <NavBar />
            <div className=" pt-[2rem] flex flex-wrap h-full justify-center">
                <div className="w-max">
                    {/* back button */}
                    <Link href="/">
                        <div className="my-[3rem] w-[8rem] h-[2.5rem] text-center bg-white shadow-md border-none rounded flex items-center justify-center">
                            <Image
                                src="/images/arrow-back.svg"
                                width={20}
                                height={20}
                                alt="arrow_left"
                                className="mr-[.5rem]"
                            />
                            <p className="h-max">Back</p>
                        </div>
                    </Link>

                    {/* slug info parent div */}
                    <div className="flex flex-wrap justify-center w-max">
                        {/* image div */}
                        <div className="w-[30rem] h-[23rem] mr-[5rem] relative ">
                            <Image src={slugInfo.flag} fill={true} alt={`${slugInfo.name}_flag`} />
                        </div>

                        {/* country information div */}
                        <div className=" flex flex-col flex-wrap ">
                            {/* title country name */}
                            <h2 className=" my-[2rem] font-bold text-2xl">{slugInfo.name}</h2>

                            {/* object property divs */}
                            <div className="h-[10rem]  flex flex-wrap flex-col justify-between ">
                                {/* left container */}
                                <div className="w-max mr-[8rem]">
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Native Name: </span>
                                        {slugInfo.nativeName ? slugInfo.nativeName : "No Native Name"}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Population: </span>
                                        {slugInfo.population ? slugInfo.population : "No Population"}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Region: </span>
                                        {slugInfo.region ? slugInfo.region : "No Region"}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Sub Region: </span>
                                        {slugInfo.subregion ? slugInfo.subregion : "No Sub Region"}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Capital: </span>
                                        {slugInfo.capital ? slugInfo.capital : "No Capital"}
                                    </p>
                                </div>

                                {/* right container */}
                                <div className="w-max">
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Top Level Domain: </span>
                                        {slugInfo.topLevelDomain ? slugInfo.topLevelDomain : "No Top Level Domain"}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Currencies: </span>
                                        {currencies}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Languages: </span>
                                        {languages}
                                    </p>
                                </div>
                            </div>
                            {/* border countries section */}
                            <div className="mt-[3rem]">
                                <p className="font-semibold">Border Countries:</p>
                                {borders}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
