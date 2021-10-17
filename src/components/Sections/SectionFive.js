import React from 'react'
import './SectionFive.css'
import img5 from '../../images/img5.png'

export default function FifithSection() {
    return (
        <>
            <div className="row section-five">

                <div className="col-md-6 col-sm-12">
                    <div className="feature__image__container feature__3__image__container">
                        <img
                            src={img5}
                            alt=""
                            className="feature__5__image"
                        />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h1 className="head-tag5">Create profiles for children.</h1>
                    <p className="p-tag5">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>

            </div>
        </>
    )
}

