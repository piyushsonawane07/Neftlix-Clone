import React from 'react'
import './DownloadComponent.css'
import gifDownload from '../../images/downloadgif.gif'
import boxShot from '../../images/boxshot.png'

export default function DownloadComponent() {
  return (
    <>
      <div className="feature__2__poster__container">
        <div className="poster__container">
          <img
            src={boxShot}
            alt=""
            className="poster"
          />
        </div>
        <div className="poster__details">
          <h4>Stranger Things</h4>
          <h6>Downloading...</h6>
        </div>
        <div className="download__gif__container">
          <img
            src={gifDownload}
            alt=""
            className="gif"
          />
        </div>
      </div>
    </>
  )
}
