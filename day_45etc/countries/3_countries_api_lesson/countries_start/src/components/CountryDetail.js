import FaveCountry from "./FaveCountry";

const CountryDetail = ({country, faveCountries, setFaveCountries}) => {
    return (
        <div className="country-detail">
            <p id="info">
            <strong>{country.name.common} {country.flag} {country.name.official}</strong>
            

            The capital of {country.name.common} is {country.capital}.
            <br></br>


            It is home to {country.population} people.
            <br></br>
            

            It is in {country.subregion}.
            </p>

            <FaveCountry country={country} faveCountries={faveCountries} setFaveCountries={setFaveCountries}/>

        </div>
        
    )
}

export default CountryDetail;