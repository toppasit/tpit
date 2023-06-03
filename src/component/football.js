import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Information from './information'
import Footballer from '../asset/footballer.png'
import FootballConfig from '../information/football'

const FootballContainer = styled.div`
  background-color: #FFFFFF;
  font-family: roboto;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  overflow: hidden;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
  margin: 24px 0 0;

  @media only screen and (max-width: 768px) {
    margin: 81px 99px 0 0;
  }

  @media only screen and (max-width: 320px) {
    margin: 0;
    font-size: 50px;
    line-height: 58.59px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  left: 175px;
  top: 35px;

  @media only screen and (max-width: 768px) {
    left: -161px;
    top: 121px;
  }

  @media only screen and (max-width: 320px) {
    top: 0;
    left: 0;
    margin: 70px 50px 0 70px;
    display: block;
  }
`

const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 498px;
    height: 699px;
  }

  @media only screen and (max-width: 320px) {
    width: 200px;
    height: 281px;
  }
`

const slideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const Slides = styled.div`
  @media only screen and (max-width: 320px) {
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
    top: -28px;
  }
`

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
`

const Football = ({
  windowType,
}) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const goToSlide = (index) => {
    setSlideIndex(index)
  }
  return (
    <FootballContainer>
      <HeaderContainer>
        <Header>ATHLETS</Header>
      </HeaderContainer>
      {/* <ImageContainer><Img src={Footballer}/></ImageContainer> */}
      <div>
        <Slides slideIndex={slideIndex}>
          <Information
            backgroundColor={'#FFFFFF'}
            height={FootballConfig[windowType][0].height}
            order={'01'}
            bulletLineColor={'#603EBE'}
            title={'CONNECTION'}
            info={'Connect with coaches directly, you can ping coaches to view profile.'}
            letterSpace={FootballConfig[windowType][0].letterSpace}
            maxWidth={FootballConfig[windowType][0].maxWidth}
            index={0}
            slideIndex={slideIndex}
          />
          <Information
            backgroundColor={'#F5F4F9'}
            height={FootballConfig[windowType][1].height}
            order={'02'}
            bulletLineColor={'#603EBE'}
            title={'COLLABORATION'}
            info={'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'}
            letterSpace={FootballConfig[windowType][1].letterSpace}
            maxWidth={FootballConfig[windowType][1].maxWidth}
            index={1}
            slideIndex={slideIndex}
          />
          <Information
            backgroundColor={'#5E3DB3'}
            height={FootballConfig[windowType][2].height}
            textColor={'#FFFFFF'}
            order={'03'}
            bulletLineColor={'#FFFFFF'}
            title={'GROWTH'}
            info={'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc'}
            letterSpace={FootballConfig[windowType][2].letterSpace}
            maxWidth={FootballConfig[windowType][2].maxWidth}
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
      </div>
    </FootballContainer>
  )
}

export default Football