import React, {useEffect, useState} from 'react';
import MusicList from '../components/MusicList';
import './Chart.css';

const MusicChart = () => {

  const [musicCharts, setmusicCharts] = useState([]);

  useEffect(() => {
    getCharts();
  }, [])

  const getCharts = function(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(musicCharts => setmusicCharts(musicCharts.feed.entry))
  }



  return (
    <div className='container'>
        <MusicList musicCharts={musicCharts}/>
           
    </div>
  )
}


export default MusicChart;