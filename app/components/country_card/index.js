import Image from "next/image";

export default function CountryCard({ name, image }) {
    return (
        <div className="h-[25rem] w-[17rem] shadow-lg mt-28 mr-20 relative rounded">
            <div className="h-[10rem] w-full relative">
                <Image className="rounded-t" src={image} layout="fill" objectFit="cover" alt={`{name}_flag`} />
            </div>
            <div className=" w-full h-full p-10 justify-between">
                <p className="font-bold mb-[1rem]">{name}</p>
                <div className="flex flex-col justify-between">
                    <p>Population:</p> <p>Region:</p> <p>Capitol:</p>
                </div>
            </div>
        </div>
    );
}
