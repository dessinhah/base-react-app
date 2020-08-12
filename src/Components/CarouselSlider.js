import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="App-banner"
          src="https://i.ebayimg.com/thumbs/images/g/O~YAAOSwlZ5e9fyN/s-l1200.webp"
          alt="banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="App-banner"
          src="https://i.ebayimg.com/thumbs/images/g/DX0AAOSwLg1e9g0d/s-l1200.webp"
          alt="banner"
        />
      </Carousel.Item>
      <CarouselItem>
      <img
          className="App-banner"
          src="https://i.ebayimg.com/thumbs/images/g/fjIAAOSw549fIB9u/s-l1200.webp"
          alt="banner"
        />
      </CarouselItem>
    </Carousel>
  );
}
export default CarouselSlider;
