import "../scss/layout/Country";


function Country({ countryData }) {
    console.log(countryData);

  return (
    <li className="country-data">
        
        <p>{countryData.flag}</p>
        <h1>{countryData.name.official}</h1>
        <p>{countryData.capital}</p>
        <p>{countryData.continents}</p>

    </li>

    
  )
}

export default Country