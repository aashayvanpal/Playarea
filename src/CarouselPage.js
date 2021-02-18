import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require("./images/vadapav.jpg"),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require("./images/2.jpg"),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require("./images/3.png"),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const ShowCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="500px" width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container fluid style={{ "padding": "0px" }}>
      <Row>
        <Col>.col
      <div>

            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />


            </Carousel>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div style={{ "background": "#0099ff" }}>This is the div</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

          </div >
        </Col>
      </Row>
    </Container>


  );
}

export default ShowCarousel;