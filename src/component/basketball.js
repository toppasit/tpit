import { useState } from "react";
import styled from "styled-components";
import Information from "./information";
import BasketballPlayer from '../asset/basketball-player.png'
import BasketballConfig from '../information/basketball'

const Container = styled.div`
  background-color: #FFFFFF;
  font-family: roboto;
  overflow: hidden;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 322px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }

  @media only screen and (max-width: 320px) {
    margin: 0 0 0 19px;
    align-items: flex-start;
  }
`

const Header = styled.h1`
  width: 50%;
  color: #E7E7E7;
  font-weight: 400;
  font-size: 90px;
  line-height: 105px;
  margin: 124px 0 0;

  @media only screen and (max-width: 768px) {
    margin: 52px 0 34px 31px;
  }

  @media only screen and (max-width: 320px) {
    margin: 0;
    font-size: 50px;
    line-height: 58.59px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  left: 804px;
  top: 898px;

  @media only screen and (max-width: 768px) {
    left: 331px;
    top: 852px;
    width: 437px;
    overflow: hidden;
  }

  @media only screen and (max-width: 320px) {
    top: 0;
    left: 0;
    position: relative;
    display: flex;
    margin: 11px 0 0 0;
    width: 100%;
    z-index: 2;
  }
`

const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 691px;
    height: 568px;
  }

  @media only screen and (max-width: 320px) {
    width: 302px;
    height: 249px;
  }
`

const Slideshow = styled.div`
  @media only screen and (max-width: 320px) {
    height: 203px;
  }
`

const Slides = styled.div`
  @media only screen and (max-width: 320px) {
    position: relative;
    top: -35px;
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.slideIndex * 100}%);
  }
`

const DotsContainer = styled.div`
  display: none;
  @media only screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -100px;
  }
`

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #D8D8D8;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #603EBE;
    ;
  }
`

const Basketball = ({
  windowType,
}) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const goToSlide = (index) => {
    setSlideIndex(index)
  }
  return (
    <Container>
      <HeaderContainer>
        <Header>PLAYERS</Header>
      </HeaderContainer>
      <ImageContainer><Img src={BasketballPlayer}/></ImageContainer>
      <Slideshow>
        <Slides slideIndex={slideIndex}>
          <Information
            left={true}
            backgroundColor={'#FFFFFF'}
            height={BasketballConfig[windowType][0].height}
            order={'01'}
            bulletLineColor={'#603EBE'}
            title={'CONNECTION'}
            info={'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'}
            letterSpace={BasketballConfig[windowType][0].letterSpace}
            maxWidth={BasketballConfig[windowType][0].maxWidth}
            index={0}
            slideIndex={slideIndex}
          />
          <Information
            left={true}
            backgroundColor={'#F5F4F9'}
            height={BasketballConfig[windowType][1].height}
            order={'02'}
            bulletLineColor={'#603EBE'}
            title={'COLLABORATION'}
            info={'Work with recruiter to increase your chances of finding talented athlete.'}
            letterSpace={BasketballConfig[windowType][1].letterSpace}
            maxWidth={BasketballConfig[windowType][1].maxWidth}
            index={1}
            slideIndex={slideIndex}
          />
          <Information
            left={true}
            backgroundColor={'#090C35'}
            height={BasketballConfig[windowType][2].height}
            textColor={'#FFFFFF'}
            order={'03'}
            bulletColor={'#8F6BE8'}
            bulletLineColor={'#FFFFFF'}
            title={'GROWTH'}
            info={'Save your time, recruit proper athlets for your team.'}
            letterSpace={BasketballConfig[windowType][2].letterSpace}
            maxWidth={BasketballConfig[windowType][2].maxWidth}
            index={2}
            slideIndex={slideIndex}
          />
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
      </Slideshow>
    </Container>
  )
}

export default Basketball