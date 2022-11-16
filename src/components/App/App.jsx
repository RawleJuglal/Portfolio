import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Works from '../Works/Works'
import Data from '../../worksData';

function App() {
  const [state, setState] = React.useState({works:Data})

  const worksList = state.works.map((ele)=>{
    return <Works key={ele.id} work={ele}/>
  })

  return (
    <div className="--app-app-container">
      <Header />
      {worksList}
    </div>
  )
}

export default App
