import Image from "next/image";
import { useEffect } from "react";

export default function SearchBar({ input, inputChange, region, setRegion, dropdownChange }) {
    useEffect(() => {
        setRegion("");
    }, [setRegion]);

    return (
        <div className="w-full h-[5rem] min-[768px]:px-[4rem] ms:px-[2rem] flex flex-wrap justify-between items-center mt-4 ">
            {/* input box container */}
            <div className="shadow-lg relative ms:w-full min-[821px]:w-[30rem] ">
                {/* search image */}
                <div className="absolute inset-y-0 left-4 pl-5 flex items-center pointer-events-none">
                    <Image src="/images/search.svg" width={20} height={20} alt="Search_icon" />
                </div>
                {/* search box */}
                <input
                    className="w-full h-[3.5rem] rounded bg-white pl-20 bg-white"
                    value={input}
                    onChange={inputChange}
                    type="text"
                    id="search-bar"
                    name="search-bar"
                    placeholder="Search for a country..."
                ></input>
            </div>

            {/* dropbox container */}
            <div className="bg-white shadow-lg border-none rounded w-[12rem] h-[3.5rem] relative max-[821px]:mt-[3rem] min-[821px]:mt-0 ">
                <select
                    id="options"
                    name="options"
                    className="bg-white border-none h-full w-full rounded px-4 appearance-none"
                    value={region}
                    onChange={dropdownChange}
                >
                    <option value="" disabled hidden>
                        Filter by Region
                    </option>
                    <option value="none">None</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceana">Oceana</option>
                </select>
                {/* down image */}
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                    <Image src="/images/down.svg" width={15} height={15} alt="dark-light_mode_button"></Image>
                </div>
            </div>
        </div>
    );
}
