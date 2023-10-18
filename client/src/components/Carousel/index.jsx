import { Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/home.css'


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
            <img className="carousel-image" src="https://i.ytimg.com/vi/2L_D5fBq1ao/maxresdefault.jpg" alt="goku vs luffy"/>
          </div>
          <div className="carousel-image-box">
            <img className="carousel-image" src="https://i.ytimg.com/vi/NtMkWjmBVe8/maxresdefault.jpg" alt="kakshi vs gojo"/>
          </div>
          <div className="carousel-image-box">
            <img className="carousel-image" src="https://i.ytimg.com/vi/ZvLxn3km2qs/maxresdefault.jpg" alt="Marvel vs DC"/>
          </div>
          </Slider>
        </Container>
      </div>
    );
  }

  export default Carousel;