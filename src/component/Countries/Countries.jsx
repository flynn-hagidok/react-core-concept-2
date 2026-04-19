import { use, useState } from "react"
import './Countries.css'
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {

    const [countryFlag, setCountryFlag] = useState([])

    const handleFlag = (flag) => {
        // console.log('flag added...!', flag)
        const newFlags = [...countryFlag, flag]
        setCountryFlag(newFlags)
    }

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
            <h2>Visited Countries Numbers: {visitedCountries.length}</h2>
            <h3>Visited Flag Numbers: {countryFlag.length}</h3>
            
            <ol>
                {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>

            <div>
                {
                    countryFlag.map((flags, index) => <img className='flagContainer' key={index} src={flags}></img>)
                }
            </div>

            <div className='Countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleFlag={handleFlag}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries