import React from 'react'
import './SectionThree.css'
import imgsection3 from '../../images/img-section3.png'
import DownloadComponent from './DownloadComponent'



export default function SectionThree() {
    return (
        <>
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <div className="feature__image__container">
                        <img src={imgsection3} alt="" className="feature__3__image" />

                        <div className="downloadComponent">
                            <DownloadComponent />
                        </div>
                        
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h1 className="head-tag3">Download your shows to watch offline.</h1>
                    <p className="p-tag3">Save your favourites easily and always have something to watch.</p>
                </div>

            </div>
        </>
    )
}
