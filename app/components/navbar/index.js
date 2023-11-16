import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="max-[500px]:px-[1rem] w-full flex flex-row justify-between items-center  h-[5rem] px-[4rem] py-[1rem] shadow-md">
            {/* navbar title */}
            <h2 className="font-bold text-3xl max-[600px]:text-xl max-[460px]:text-sm">Where in the world?</h2>

            {/* button for light/dark mode */}
            <button className="p-[1rem] h-max">
                <div className="w-[6.5rem] h-max flex items-center justify-between justify-between content-center">
                    <div className="h-[1rem] w-[1rem] relative font-medium">
                        <Image
                            src="/images/moon.svg"
                            className="w-full h-full object-cover"
                            width={16}
                            height={16}
                            alt="dark-light_mode_button"
                        ></Image>
                    </div>
                    <p className="tracking-normal h-full font-medium">Dark Mode</p>
                </div>
            </button>
        </div>
    );
}
