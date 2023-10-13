import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";

import DotGroup from "../../components/DotGroup";

const Carousel = () => (
  <div>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
      >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://picsum.photos/200/300" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image circular src="https://picsum.photos/200/300" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://picsum.photos/200/300" />
      </Slide>
    </Slider>
    <Divider />
    <DotGroup slides={3} />
  </CarouselProvider>



  </div>

);

export default Carousel;
