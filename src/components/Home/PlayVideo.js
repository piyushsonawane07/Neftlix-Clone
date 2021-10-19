import React from 'react'
import './PlayVideo.css'

export default function PlayVideo() {

    return (
        <>
            <video controls id="video-background" autoPlay>
                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" />
            </video>
        </>
    )
}
