import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="w-full h-[5rem] px-[4rem] flex justify-between items-center ">
            <div>
                <input type="text" id="search-bar" name="search-bar" placeholder="Search..."></input>
            </div>
            <div>
                <select id="options" name="options" className="bg-white">
                    <option value="option1" disabled selected hidden>
                        Filter by Region
                    </option>
                    <option value="option2">Africa</option>
                    <option value="option3">America</option>
                    <option value="option3">Asia</option>
                    <option value="option3">Europe</option>
                    <option value="option3">Oceana</option>
                </select>
            </div>
        </div>
    );
}
