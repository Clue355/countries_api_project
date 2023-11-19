import Image from "next/image";
import Link from "next/link";

import countries from "../data.json";
import { binarySearch } from "../../utils/binarySearch";
import NavBar from "../../components/navbar";

export default function CountryPage({ params }) {
    const decodedTarget = decodeURIComponent(params.slug);

    const slugInfo = binarySearch(decodedTarget, countries);

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
                                        {`${slugInfo.nativeName}`}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Population: </span>
                                        {`${slugInfo.population}`}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Region: </span>
                                        {`${slugInfo.region}`}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Sub Region: </span>
                                        {`${slugInfo.subregion}`}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Capital: </span>
                                        {`${slugInfo.capital}`}
                                    </p>
                                </div>

                                {/* right container */}
                                <div className="w-max">
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Top Level Domain: </span>
                                        {`${slugInfo.topLevelDomain}`}
                                    </p>
                                    <p className="mb-[.5rem]">
                                        <span className="font-semibold">Currencies: </span>
                                        {slugInfo.currencies.map((currency, index) => (
                                            <span key={index}>
                                                {currency.name}
                                                {index < slugInfo.currencies.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Languages: </span>
                                        {slugInfo.languages.map((language, index) => (
                                            <span key={index}>
                                                {language.name}
                                                {index < slugInfo.languages.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            {/* border countries section */}
                            <div className="mt-[3rem]">
                                <p className="font-semibold">Border Countries:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
