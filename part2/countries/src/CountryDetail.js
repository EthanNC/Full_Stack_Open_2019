import React, {useEffect, useState} from 'react'
import axios from 'axios'

const CountryDetail = ({countries, country}) => {

    const [weather, setWeather] = useState({})
    const search  = countries && countries[0] ? countries[0].name : ''
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=58e19e7bd5140e137f042d905c13a5d4&query=${search}`).then(response => {
            console.log(response.data)
            setWeather(response.data)
        })
    }, [search])

    return(
        <div>
        {countries.length === 1 && (
            <div>
                <h2>{countries[0].name}</h2>
                Capital: {countries[0].capital}
                <ul>
                {countries[0].languages.map((language, i) => (
                <React.Fragment key = {i}>
                <li>
                {language.name}
                </li>
                </React.Fragment>
                ))}
                </ul>
                <img src={countries[0].flag}/>
                <h2>Weather in {countries[0].capital}</h2>
                {console.log(weather)}
                {weather && weather.current && <React.Fragment>
                    <b>temperature:</b>{weather.current.temperature + ' Celcius'}
                    <br/>
                    <img src={weather.current.weather_icons[0]} alt=""/>
                    <br/>
                    <b>wind:</b>{weather.current.wind_speed + ' kph' + ' direction ' + weather.current.wind_dir}
                    
                </React.Fragment>}
            </div>
        )}
        {country && 
            (
            <div>
                <h2>{country.name}</h2>
                Capital: {country.capital}
                <ul>
                {country.languages.map((language, i) => (
                <React.Fragment key = {i}>
                <li>
                {language.name}
                </li>
                </React.Fragment>
                ))}
                </ul>
                <img src={country.flag}/>
            </div>
            )
        }

        </div>
    )
}

export default CountryDetail
