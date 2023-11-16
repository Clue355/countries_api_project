import { countries } from "../data.json";

export default function CountryPage({ countryData }) {
    console.log(countryData.slug);
    return (
        <div>
            <h1>{countryData.name}</h1>
            {/* Render the rest of your country details here */}
        </div>
    );
}

export async function getServerSideProps({ params }) {
    console.log(params.slug);
    // Extract the country name from the URL parameter
    const { country } = params;
    // Find the country data in your local object
    const countryData = countries[country];

    // Pass the country data as props to the page component
    return { props: { countryData } };
}
