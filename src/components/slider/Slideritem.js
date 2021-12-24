import React from 'react'

export default function Slideritem(props) {
     
    return (
        <>
        <div className={`carousel-item ${props.active}`}>
            <img src={props.img} className="d-block w-100 mySliderImgSize" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heading}</h5>
              <p>{props.details}</p>
            </div>
          </div>
        

        </>
    )
}
