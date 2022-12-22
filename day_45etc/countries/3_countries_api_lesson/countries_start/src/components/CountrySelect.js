import OptionItem from "./OptionItem";

const CountrySelect = ({countries, onCountrySelected}) => {
    
    const selectDatCountry = function(event) {
        const choosenedCountry = countries[event.target.value];
        onCountrySelected(choosenedCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <OptionItem key={index} country={country} index={index}/>
      })

    return (
        <select id="select-country" defaultValue="" onChange={selectDatCountry}>
            <option value="" selected>Tell me about...</option>
            {countryOptions}
        </select>

    )



}


// const CountrySelect = ({countries, onCountrySelected}) => {

//     const handleChange = function(event) {
//         const chosenCountry = countries[event.target.value];
//         onCountrySelected(chosenCountry);
//     }
    
//     const countryOptions = countries.map((country, index) => {
//       return <OptionItem key={index} country={country} index={index}/>
//     })

//     return (
//         <select defaultValue="" onChange={handleChange}>
//             <option value="" selected>What's the capital of?</option>
//             {countryOptions}
//         </select>
//     )
// }
export default CountrySelect;