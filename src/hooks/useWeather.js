import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useWeather = () => {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [temperature, setTemperature] = useState('')
  const [isCelsius, setIsCelsius] = useState(true)

  useEffect(() => {

    const success = pos => {
      console.log(pos.coords)
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({ lat, lon })
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (latLon !== undefined) {
      const API_KEY = '76253f2c8daf787ae25e8092fa6b1ee7'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
          setIsLoading(false)
          setWeather(res.data)
          const temp = {
            celsius: `${Math.round(res.data.main.temp - 273.15)} °C`,
            farenheit: `${Math.round((res.data.main.temp - 273.15) * 9 / 5 + 32)} °F`
          }
          setTemperature(temp)
        })
        .catch(err => console.log(err))
    }
  }, [latLon])

  const toggleClick = () => setIsCelsius(!isCelsius)

 console.log(weather)

  return { latLon, weather, isLoading, temperature, isCelsius, toggleClick }
}

export default useWeather