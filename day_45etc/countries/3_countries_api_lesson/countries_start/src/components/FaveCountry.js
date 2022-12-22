import { useEffect } from "react";

const FaveCountry = ({country, faveCountries, setFaveCountries}) => {
    
    const handleFaves = () => {
        setFaveCountries(faveCountries.push(country))
        var results = (faveCountries[0]['name']['common'])
        console.log(results);
        
    }

    useEffect(() => {
        favesList();
    }, [])

    const favesList = function() {
        const allTheFaves = handleFaves();
        console.log(allTheFaves)
    
    }


return (
    <div>
        <button onClick={handleFaves}>Save as Fave </button>
        <h4>List</h4>
        <ul>
            {faveCountries}
        </ul>

    </div>


)




}

export default FaveCountry;