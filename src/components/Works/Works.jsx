import React from 'react'
import './Works.css'
import WorksBtn from '../WorksBtn/WorksBtn'

export default function Works(props){
    
    return(
        <div className='--works-works-container'>
                <h1 className='--works-work-title'>{props.work.title}</h1>
                <div className='--works-image-overlay --works-image-colorize'>
                    <img className='--works-img --works-item1' src={props.work.imgUrl}></img>
                </div>
                <WorksBtn site={props.work.siteLink} repo={props.work.githubLink}/>
        </div>
    )
}