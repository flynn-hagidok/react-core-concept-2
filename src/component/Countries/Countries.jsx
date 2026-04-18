import { use } from "react"

const Countries = ({countriesPromise}) =>{

    const countriesData = use(countriesPromise)
    // console.log(countriesData);
    const countries = countriesData.countries;
    console.log(countries)

    return(
        <div>
            <h2>Total Countries: {countries.length}</h2>
        </div>
    )
}

export default Countries