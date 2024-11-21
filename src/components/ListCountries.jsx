import Country from "./Country";




function ListCountries({ countriesList }) {
    //console.log(countriesList);

    const countriesItems = countriesList.map((countriesItems) => {
        //console.log(countriesItems);
        return <Country countryData={countriesItems} key={countriesItems.name.official}/>
    });



  return (
    <section>
        <ul> { countriesItems } </ul>
    </section>
  )
}

export default ListCountries