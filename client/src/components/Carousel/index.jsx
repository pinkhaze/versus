import { Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/Home.css'

// import CarouselPhotoOne from "./assets/images/carousel-photo-one.PNG";


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
          <div className="box fix">
         
          </div>
          <div className="box fix">
          </div>
          <div className="box fix">
          </div>
          </Slider>
        </Container>
    
        
      </div>
    );
  }

  export default Carousel;