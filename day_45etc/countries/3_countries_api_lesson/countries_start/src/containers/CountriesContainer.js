import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
// import CountryList from '../components/CountryList';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [faveCountries, setFaveCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => { 
            countries.sort((countryA, countryB) => countryA.name.common.localeCompare(countryB.name.common))
            setCountries(countries)})
    }


    // const onCountryClicked = function(country) {
    //     setSelectedCountry(country);
    // }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    

    return (
        <>
        <div className="main-container">
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked} /> */}
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail country={selectedCountry} faveCountries={faveCountries} setFaveCountries={setFaveCountries}/> : null}
            
        </div>
        
        </>
    )
}

export default CountryContainer;
