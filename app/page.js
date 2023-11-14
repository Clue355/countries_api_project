import Image from "next/image";
import Navbar from "./components/navbar";

import data from "./data.json";
import CountryCard from "./components/country_card";

export default function Home() {
    return (
        <main className="">
            <Navbar />
            {data.map((item) => (
                <CountryCard key={item.name} name={item.name} />
            ))}
        </main>
    );
}
