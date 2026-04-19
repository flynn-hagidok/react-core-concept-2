import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false)
    // console.log(country.flags.flags.png)
    const handleBtn = () => {
        // console.log('visited')
        // setVisied(true)
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // {setVisited(visited ? false : true)}
        setVisited(!visited)
        handleVisitedCountries(country)

    }

    return (
        // <div className={`Country ${visited && 'countryVisited'}`}>
        <div className={`Country ${visited ? 'countryVisited' : ''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Population: {country.population.population}</h3>
            <h3>Areas: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</h3>
            <button className='visitBtn' onClick={handleBtn}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;