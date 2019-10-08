import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CountryDetail from './CountryDetail'

const App = () => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [showCountry, setShowCountry] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${search}`).then(response => {    
            setCountries(response.data)
        })
        setShowCountry(Array(countries.length).fill(false))
        console.log(showCountry)
    }, [search])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleShowCountry = (i) => {
        const show = !showCountry[i]
        console.log(show)
        setShowCountry([...showCountry.slice(0, i), show, ...showCountry.slice(i + 1)])
    }

    return (
        <div>
         find countries: <input onChange={handleSearch} type="text"/>
         <br/>
         {countries.map((country, i) => {
             const show = showCountry[i]
             return(
            <React.Fragment key = {i}>
            {country.name}
            <button onClick={(i) => handleShowCountry(i)}>show</button>
            { show && <CountryDetail countries={[]} country={country}/>}
            <br/>
            </React.Fragment>
             )
         })}
        <CountryDetail countries={countries}/>

        </div>
    )
}

export default App
