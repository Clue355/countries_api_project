import Link from "next/link";
import Image from "next/image";

export default function NavBar({ theme, toggleTheme }) {
    return (
        <div
            className={`w-full flex flex-row justify-center items-center  h-max py-[1rem] shadow-md ${
                theme === "dark" ? "bg-darkModeE text-darkModeT" : "bg-lightModeE text-lightModeT"
            }`}
        >
            <div className="max-[425px]:px-[1rem] max-w-1440 w-full m-0 p-0 flex justify-between items-center px-[3.6rem] ">
                {/* navbar title */}
                <h2 className="font-bold text-3xl max-[600px]:text-xl max-[460px]:text-sm">Where in the world?</h2>

                {/* button for light/dark mode */}
                <button className=" h-max" onClick={toggleTheme}>
                    <div className="w-[6.5rem] h-max flex items-center  justify-between content-center">
                        <div className="h-[1rem] w-[1rem] relative font-medium">
                            <Image
                                src={`${theme === "dark" ? "./images/sun.svg" : "./images/moon.svg"}`}
                                className="w-full h-full object-cover"
                                width={16}
                                height={16}
                                alt="dark-light_mode_button"
                            ></Image>
                        </div>
                        <p className="tracking-normal h-full font-medium">{`${
                            theme === "dark" ? "Light Mode" : "Dark Mode"
                        }`}</p>
                    </div>
                </button>
            </div>
        </div>
    );
}
