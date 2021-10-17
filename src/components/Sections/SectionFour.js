import React from 'react'
import './SectionFour.css'
import video2 from '../../images/video-2.m4v';
import video2cover from '../../images/v2-cover.png';

export default function SectionFour() {
    return (
        <>
            <div className="row">

                <div className="col-md-6">
                    <h1 className="head-tag4">Enjoy on your TV.</h1>
                    <p className="p-tag4">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

                <div className="col-md-6">
                    <div className="feature__image__container ">
                        <img
                            src={video2cover}
                            alt=""
                            className="feature__image feature__4__image"
                        />
                        <div className="feature__backgroud__video__container feature__backgroud__3__video__container">
                            <video
                                autoPlay
                                loop
                                muted
                                className="feature__backgroud__video feature__4__backgroud__video"
                            >
                                <source
                                    src={video2}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
