import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {}
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
