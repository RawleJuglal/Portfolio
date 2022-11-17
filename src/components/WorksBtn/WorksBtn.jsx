import React from 'react'
import './WorksBtn.css'

export default function WorksBtn(props){
    const styleInvis={backgroundColor:'rgba(255, 255, 255, 0.16)'}
    const styleVisible={backgroundColor:'rgba(0, 255, 242, 0.4)'}

    return(
        <div className='--works-btns-container'>
            <div className='--works-viewerBTN-container' style={props.site.length == 0 ? styleInvis : styleVisible }>
                <a className='--works-viewer-link --works-link' href={props.site.length == 0 ? void(0) : props.site}>
                    <img className="--works-viewer-btn --works-btn" src="/Portfolio/icons/viewerBTN.png" alt="viewer button"></img>
                    <span className='--works-viewer-text --works-text'>Viewer</span>
                </a>
            </div>
            <div className='--works-repoBTN-container'>
                <a className='--works-repo-link --works-link' href={props.repo}>
                    <img className="--works-repo-btn --works-btn" src="/Portfolio/icons/repoBTN.png" alt="repository button"></img>
                    <span className='--works-repo-text --works-text'>Repo</span>
                </a>
            </div>
        </div>
    )
}
