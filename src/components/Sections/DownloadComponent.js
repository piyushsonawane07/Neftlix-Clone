import React from 'react'
import './DownloadComponent.css'
import gifDownload from '../../images/downloadgif.gif'
import boxShot from '../../images/boxshot.png'

export default function DownloadComponent() {
  return (
    <>
      <div class="feature__2__poster__container">
        <div class="poster__container">
          <img
            src={boxShot}
            alt=""
            class="poster"
          />
        </div>
        <div class="poster__details">
          <h4>Stranger Things</h4>
          <h6>Downloading...</h6>
        </div>
        <div class="download__gif__container">
          <img
            src={gifDownload}
            alt=""
            class="gif"
          />
        </div>
      </div>
    </>
  )
}
