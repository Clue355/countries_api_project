import Image from "next/image";
import NavBar from "./components/navbar";

import data from "./data.json";
import CountryCard from "./components/country_card";
import SearchBar from "./components/searchbar";

export default function Home() {
    return (
        <main className="">
            <NavBar />
            <SearchBar />
            <div className="flex flex-wrap w-full justify-center">
                {data.map((item) => (
                    <CountryCard key={item.name} name={item.name} image={item.flag} />
                ))}
            </div>
        </main>
    );
}
