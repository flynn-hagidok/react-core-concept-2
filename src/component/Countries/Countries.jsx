import { use } from "react"
import Country from "../Country/Country";

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise)
    // console.log(countriesData);
    const countries = countriesData.countries;
    // console.log(countries)

    return(
        <div>
            <h2>Total Countries: {countries.length}</h2>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    )
}

export default Countries