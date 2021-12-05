import React from 'react'

import BarChart from './components/BarChart'
import Line from './components/Line'
import Doughnut from './components/Pie';
import Pie from './components/Doughnut'
import Banner from './components/BannerMonument'
import Liste from './components/ListeMonument'
import './styles/App.css';


const App = () => {
  return (
    <div className="bg-white">
    <div id="ListeMonument" style={{display: 'none'}}>
      <Liste />
    </div>
    <div id="accueil">
      <Banner />
      <BarChart />
      <Line />
      <Pie />
      <Doughnut />
    </div>
    </div>
  )
}

export default App