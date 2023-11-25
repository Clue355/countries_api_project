import { useAtom } from "jotai";
import { apiDataAtom } from "../atoms/apiAtom";

const useFetchData = () => {
    const [, setApiData] = useAtom(apiDataAtom);

    const fetchData = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            const data = await response.json();
            setApiData(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return fetchData;
};

export default useFetchData;
