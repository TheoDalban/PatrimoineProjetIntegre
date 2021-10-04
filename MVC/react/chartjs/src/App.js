import React from 'react'

import BarChart from './components/BarChart'
import Line from './components/Line'
import Doughnut from './components/Pie';
import './App.css';


const App = () => {
  return (
    <div>
    <BarChart />
    <Line />
    <Doughnut />
    </div>
  )
}

export default App