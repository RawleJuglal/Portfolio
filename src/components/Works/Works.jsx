import React from 'react'
import './Works.css'

export default function Works(props){
    
    return(
        <div className='--works--works-container'>
            <h1 className='--works-work-title'>{props.work.title}</h1>
            <div className='--works-image-overlay --works-image-colorize'>
                <img className='--works-img --works-item1' src={props.work.imgUrl}></img>
            </div>
            <div className='--works-btns-container'>
                <div className='--works-viewerBTN-container'>
                    <a className='--works-viewer-link --works-link' href={props.work.siteLink}>
                        <img className="--works-viewer-btn --works-btn" src="/Portfolio/icons/viewerBTN.png" alt="viewer button"></img>
                        <span className='--works-viewer-text --works-text'>Viewer</span>
                    </a>
                </div>
                <div className='--works-repoBTN-container'>
                    <a className='--works-repo-link --works-link' href={props.work.githubLink}>
                        <img className="--works-repo-btn --works-btn" src="/Portfolio/icons/repoBTN.png" alt="repository button"></img>
                        <span className='--works-repo-text --works-text'>Repo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}