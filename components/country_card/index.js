import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ name, image, pop, region, capital, theme }) {
    return (
        <div
            className={`h-[25rem] w-[17rem] shadow-lg mt-28 mr-10 ml-10 relative rounded ${
                theme === "dark" ? "bg-darkModeE" : "bg-lightModeE"
            }`}
        >
            <Link href={`/${name}/`} className="">
                <div className="h-[10rem] w-full relative">
                    <Image
                        className="rounded-t object-cover w-full h-full"
                        src={image}
                        fill={true}
                        alt={`{name}_flag`}
                    />
                </div>
                <div className=" w-full h-[15rem] p-10 justify-between ">
                    <p className="font-bold mb-[1rem]">{name}</p>
                    <div className="flex flex-col justify-between">
                        <p className="mb-[.5rem]">
                            <span className="font-semibold">Population: </span>
                            {pop ? pop : "No Population"}
                        </p>{" "}
                        <p className="mb-[.5rem]">
                            <span className="font-semibold">Region: </span>
                            {region ? region : "No Region"}
                        </p>{" "}
                        <p>
                            <span className="font-semibold">Capital: </span>
                            {capital ? capital : "No Capital"}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
