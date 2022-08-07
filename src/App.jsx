import './App.css'
import Loading from './components/Loading'
import useWeather from './hooks/useWeather'
import WeatherCard from './components/WeatherCard'

function App() {

  const { weather, isLoading, temperature, isCelsius, toggleClick } = useWeather()

  return (
    <div className="App">
      {
        isLoading ?
        <Loading />
        :
        <WeatherCard
        weather={weather}
        temperature={temperature}
        isCelsius={isCelsius}
        toggleClick={toggleClick}
        />
      }
    </div>
  )
}
export default App
