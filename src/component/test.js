import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(props) => props.slideIndex * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  color: #333;
  font-size: 24px;
  animation: ${slideAnimation} 0.5s ease-in-out;

  &.active {
    display: flex;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #333;
  }
`;

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <Slides slideIndex={slideIndex}>
        <Slide className={slideIndex === 0 ? 'active' : ''}>
          Slide 1
        </Slide>
        <Slide className={slideIndex === 1 ? 'active' : ''}>
          Slide 2
        </Slide>
        <Slide className={slideIndex === 2 ? 'active' : ''}>
          Slide 3
        </Slide>
      </Slides>
      <DotsContainer>
        <Dot
          className={slideIndex === 0 ? 'active' : ''}
          onClick={() => goToSlide(0)}
        ></Dot>
        <Dot
          className={slideIndex === 1 ? 'active' : ''}
          onClick={() => goToSlide(1)}
        ></Dot>
        <Dot
          className={slideIndex === 2 ? 'active' : ''}
          onClick={() => goToSlide(2)}
        ></Dot>
      </DotsContainer>
    </div>
  );
};

export default Slideshow;
