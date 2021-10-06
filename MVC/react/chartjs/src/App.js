import React from 'react'

import BarChart from './components/BarChart'
import Line from './components/Line'
import Doughnut from './components/Pie';
import Pie from './components/Doughnut'
import Banner from './components/BannerMonument';
import Liste from './components/ListeMonument';

import './styles/App.css';


const App = () => {
  return (
    <div>
    <Liste />
    <Banner />
    <BarChart />
    <Line />
    <Doughnut />
    <Pie />
    </div>
  )
}

export default App