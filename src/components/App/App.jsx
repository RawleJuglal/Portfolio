import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Works from '../Works/Works'
import Data from '../../worksData';
import MyCarousel from '../Carousel/Carousel';

function App() {
  const [state, setState] = React.useState({works:Data})
  const windowWidth = window.innerWidth;
  console.log(windowWidth)

  const worksList = state.works.map((ele)=>{
    return <Works key={ele.id} work={ele}/>
  })

  return (
    <div className="--app-app-container">
      <Header />
      {windowWidth < 321 ? worksList : <MyCarousel works={state.works}/>}
      
      
    </div>
  )
}

export default App
