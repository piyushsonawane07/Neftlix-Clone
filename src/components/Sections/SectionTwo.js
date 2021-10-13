import React from 'react';
import "./SectionTwo.css";
import video1 from '../../images/video-1.m4v';
import video1Cover from '../../images/v1-cover.png';

export default function SectionTwo() {
    return (
        <>
            <div className="row">

                <div className="col-md-6">
                    <h1 className="head-tag2">Enjoy on your TV.</h1>
                    <p className="p-tag2">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

                <div className="col-6 featuretwo">
                    <div class="feature__image__container">
                        <img
                            src={video1Cover}
                            alt=""
                            class="feature__image"
                        />
                        <div class="feature__backgroud__video__container">
                            <video autoPlay loop muted class="feature__backgroud__video">
                                <source src={video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
