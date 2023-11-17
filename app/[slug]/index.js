import { countries } from "../data.json";
import binarySearch from "../../utils/binarySearch";

export default function CountryPage() {
    const router = useRouter();
    const { slug } = router.query;

    const slugInfo = binarySearch(slug, countries);

    console.log(slugInfo);

    return (
        <div>
            <h1>Post: {slug}</h1>
            {/* Display the content of the blog post */}
        </div>
    );
}
