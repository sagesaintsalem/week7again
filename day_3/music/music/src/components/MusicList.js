import React from 'react';
import MusicItem from './MusicItem';


const MusicList = ({musicCharts}) => {
    
    const chartSongs = musicCharts.map((musicChart, index) => {
        return <MusicItem  key={index} musicChart={musicChart} position={index + 1}/>
    })


    return (
        <div className='list'>
            <ul>
                {chartSongs}
            </ul>
        </div>
    )
}

export default MusicList;