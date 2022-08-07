import React from 'react'
import NewDate from './NewDate'

const WeatherCard = ({ weather, temperature, isCelsius, toggleClick }) => {

  return (
    <>
      <article className='weather__container'>
        <NewDate />
        <h1 className='weather__title'>Weather app</h1>
        <h2 className='weather__location'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <ul>
          <li className='weather__list'><i className="fa-solid fa-wind"></i><span className='weather__mayus'>Wind Speed: </span>{weather?.wind.speed} m/s</li>
          <li className='weather__list'><i className="fa-solid fa-cloud"></i><span className='weather__mayus'>Clouds: </span>{weather?.clouds.all} %</li>
          <li className='weather__list'><i className="fa-solid fa-temperature-half"></i><span className='weather__mayus'>Pressure: </span>{weather?.main.pressure} mb</li>
        </ul>
        <img className='weather__image' src={`http://openweathermap.org/img/wn/${weather && weather?.weather[0].icon}@4x.png`} alt="" />
        <h2 className='weather__temperature'>Temperature: {isCelsius ? temperature.celsius : temperature.farenheit}</h2>
        <button className='weather__btn' onClick={toggleClick}> Degrees °F/°C</button>
      </article>
    </>
  )
}

export default WeatherCard