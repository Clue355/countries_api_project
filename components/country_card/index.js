import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ name, image }) {
    return (
        <div className="h-[25rem] w-[17rem] shadow-lg mt-28 mr-10 ml-10 relative rounded bg-white">
            <Link href={`/${name}/`}>
                <div className="h-[10rem] w-full relative">
                    <Image
                        className="rounded-t object-cover w-full h-full"
                        src={image}
                        fill={true}
                        alt={`{name}_flag`}
                    />
                </div>
                <div className=" w-full h-full p-10 justify-between ">
                    <p className="font-bold mb-[1rem]">{name}</p>
                    <div className="flex flex-col justify-between">
                        <p>Population:</p> <p>Region:</p> <p>Capitol:</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}