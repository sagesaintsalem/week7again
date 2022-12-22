const MusicItem = ({musicChart, position}) => {
    return (
        <>
        <h2>{position} <img id='image' alt='Song art' src={musicChart['im:image'][0].label}></img> </h2>
        <h2>{musicChart['im:name'].label}</h2>
        <h4>by {musicChart['im:artist'].label}</h4>
        
        
        </>
    )

}







export default MusicItem;