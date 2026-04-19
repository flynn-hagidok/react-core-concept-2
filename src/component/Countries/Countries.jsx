import { use, useState } from "react"
import './Countries.css'
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        // console.log('handle visited countries clicked!',country )
        const visitedCountry = [...visitedCountries, country]
        setVisitedCountries(visitedCountry)
    }

    const countriesData = use(countriesPromise)
    // console.log(countriesData);
    const countries = countriesData.countries;
    // console.log(countries)

    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <h2>Visited Countries Number: {visitedCountries.length}</h2>
            <ol>
                {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='Countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    )
}

export default Countries