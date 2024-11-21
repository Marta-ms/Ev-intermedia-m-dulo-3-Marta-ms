import "../scss/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "../components/ListCountries";




function App() {


  return (
    <>
    <header>
      <h1>Country Info App</h1>

    </header>
    <main>
      <ListCountries countriesList={countriesData}/>

    </main>
    </>
  )
}

export default App

