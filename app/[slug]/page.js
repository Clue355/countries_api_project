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

                    <div className="my-[3rem] w-[8rem] h-[2.5rem] text-center bg-white shadow-md border-none rounded flex items-center justify-center">
                        <Link href="/" className="px-[2rem] py-[.5rem] w-max flex items-center justify-center">
                            <Image
                                src="/images/arrow-back.svg"
                                width={20}
                                height={20}
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
                            <div className="mb-[5rem]">
                                <p className="font-semibold w-max">Border Countries:</p>
                                {borders}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
