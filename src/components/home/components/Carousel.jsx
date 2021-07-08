import React from "react";
import { Carousel } from "antd";
import "./styles.css";

export default function HomeCarousel() {
  const carouselprops = {
    dotPosition: "left",
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <React.Fragment>
      <Carousel autoplay {...carouselprops} effect="fade" className="card-con">
        <div className="card carousel-card1"></div>
        <div className="card carousel-card2"></div>
        {/* <div className="card carousel-card3"></div>
        <div className="card carousel-card4"></div> */}
      </Carousel>
    </React.Fragment>
    // <React.Fragment>
    //   <Carousel autoplay {...props} effect="fade">
    //     <div className="cards carousel-card1"> </div>
    //     <div className="cards carousel-card2"> </div>
    //     <div className="cards carousel-card3"> </div>
    //     <div className="cards carousel-card4"> </div>
    //   </Carousel>
    // </React.Fragment>
  );
}
