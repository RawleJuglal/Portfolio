import React from 'react'
import './SocialIcons.css'

export default function SocialIcons(){
    return(
        <div className='--socialicons-socialicon-container'>
          <a href='https://github.com/RawleJuglal'><i className="--socialicons-fa-github fa-brands fa-github"></i></a> 
          <a href='https://codepen.io/collection/YyZBrE?grid_type=grid'><i className="--socialicons-fa-codepen fa-brands fa-codepen"></i></a> 
          <a href='https://www.freecodecamp.org/rawlejuglal'><i className="--socialicons-fa-free-code-camp fa-brands fa-free-code-camp"></i></a> 
        </div>
    )
}