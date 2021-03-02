import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="header-slider">
        <Slider {...settings}>
          <div>
            <h3>Women Empowerment</h3>
          </div>
          <div>
            <h3>Empowerment</h3>
          </div>
          <div>
            <h3>Life Style</h3>
          </div>
          <div>
            <h3>Confident</h3>
          </div>
          <div>
            <h3>Health and Fitness</h3>
          </div>
          <div>
            <h3>Motivation/ Inspiration</h3>
          </div>
        </Slider>
      </div>
    );
  }
}