import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="w-full flex flex-row justify-between items-center  h-[5rem] px-[4rem] py-[1rem] shadow-md">
            {/* navbar title */}
            <h2 className="font-bold text-3xl">Where in the world?</h2>

            {/* button for light/dark mode */}
            <button className="p-[1rem] h-max">
                <div className="w-[6.5rem] h-max flex items-center justify-between justify-between content-center">
                    <div className="h-[1rem] w-[1rem] relative font-medium">
                        <Image
                            src="/images/moon.svg"
                            layout="fill"
                            objectFit="cover"
                            alt="dark-light_mode_button"
                        ></Image>
                    </div>
                    <p className="tracking-normal h-full font-medium">Dark Mode</p>
                </div>
            </button>
        </div>
    );
}
