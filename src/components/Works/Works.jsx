import React from 'react'
import './Works.css'

export default function Works(props){
    
    return(
        <div className='--works--works-container'>
            <h1 className='--works-work-title'>{props.work.title}</h1>
            <div className='--works-image-overlay --works-image-colorize'>
                <img className='--works-img --works-item1' src="/Portfolio/images/proof.jpg"></img>
            </div>
        </div>
    )
}