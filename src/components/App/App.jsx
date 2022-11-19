import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Works from '../Works/Works'
import Data from '../../worksData';
import MyCarousel from '../Carousel/Carousel';
import SocialIcons from '../SocialIcons/SocialIcons';

function App() {
  const [state, setState] = React.useState({works:Data})
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // const windowWidth = window.innerWidth;

  React.useEffect(() => {
    window.addEventListener("resize", function() {
      console.log(this.window.innerWidth)
        setWindowWidth(()=>{
          return this.window.innerWidth;
        })
    })
}, [])



  const worksList = state.works.map((ele)=>{
    return <Works key={ele.id} work={ele}/>
  })

  function handleClick(event, clickID){
    let holdWork = state.works.findIndex((val)=>{
      return val.id == clickID
    })

    let items = state.works
    let newItems = items.map((val)=>{
      return {
        ...val, selected:false
      }
    })
    newItems[holdWork] = {...newItems[holdWork], selected:true}
    setState((prevState)=>{
      return {
        ...prevState, works:newItems
      }
    })
  }

  return (
    <div className="--app-app-container">
      <Header />
      <SocialIcons />
      {windowWidth < 1024 ? <div className='--app-works-container-wrapper'>{worksList}</div> : <MyCarousel works={state.works} clicked={handleClick}/>}
      
      
    </div>
  )
}

export default App
