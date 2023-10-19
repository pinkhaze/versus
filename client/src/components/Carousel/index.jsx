import { Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/home.css'

import CarouselPhotoOne from "../../assets/images/carousel-photo-one.png";
import CarouselPhotoTwo from "../../assets/images/carousel-photo-two.png";
import CarouselPhotoThree from "../../assets/images/carousel-photo-three.png";

function Carousel() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

    return (
      <div className="carousel-container">
        <Container >
          <Slider {... settings}>
            <div className="carousel-image-box">
              <img className="carousel-image" src={CarouselPhotoOne} alt="app photo one"/>
            </div>
            <div className="carousel-image-box">
              <img className="carousel-image" src={CarouselPhotoTwo} alt="app photo one"/>
            </div>
            <div className="carousel-image-box">
              <img className="carousel-image" src={CarouselPhotoThree} alt="app photo one"/>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }

  export default Carousel;