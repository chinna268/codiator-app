import React from 'react'
import Slideritem from './Slideritem'
import SliderBtn from './SliderBtn'
import img1 from "../../assets/images/img1.jpg"
export default function Slider(props) {
  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"> */}
        <div className="carousel-indicators">
          <SliderBtn sNo="0" sCaption="first" Active="active"/>
          <SliderBtn sNo="1" sCaption="second"/>
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
            
          </button> */}
        </div>
        <div className="carousel-inner mySliderSize">
          <Slideritem img={img1} active="active" heading=" my first heading" details=" first details of today s" />
          <Slideritem img={img1} active="" heading=" my Second heading" details=" Second details of today s" />
          {/* <div className="carousel-item">
            <img src={props.img} className="d-block w-100 mySliderImgSize" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div> */}
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  )
}
