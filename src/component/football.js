import { useState } from 'react'
import { HeaderContainer, Header, ImageContainer, Img } from '../style/football'
import { Container, Slideshow, Slides, DotsContainer, Dot } from '../style/index'
import Information from './info'
import Footballer from '../asset/footballer.png'
import FootballConfig from '../information/football'
import { changeSlide } from '../util'

const Football = ({
  windowType, windowWidth,
}) => {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <Container>
      <HeaderContainer>
        <Header>ATHLETS</Header>
      </HeaderContainer>
      <ImageContainer imgLeft={windowWidth}><Img src={Footballer}/></ImageContainer>
      <Slideshow height={'229px'}>
        <Slides slideIndex={slideIndex} top={'-55px'}>
          {
            FootballConfig[windowType].map((football, index) => {
              return (
                <Information
                  key={index}
                  left={football.left}
                  backgroundColor={football.backgroundColor}
                  textColor={football.textColor}
                  order={football.order}
                  bulletColor={football.bulletColor}
                  bulletLineColor={football.bulletLineColor}
                  title={football.title}
                  info={football.info}
                  height={football.height}
                  letterSpace={football.letterSpace}
                  maxWidth={football.maxWidth}
                  index={index}
                  slideIndex={slideIndex}
                />
              )
            })
          }
        </Slides>
        <DotsContainer top={'-93px'}>
          {
            FootballConfig[windowType].map((v, index) => {
              return (
                <Dot
                  key={index}
                  className={slideIndex === index ? 'active' : ''}
                  activeBgColor={'#090C35'}
                  onClick={() => changeSlide(index, setSlideIndex)}
                />
              )
            })
          }
        </DotsContainer>
      </Slideshow>
    </Container>
  )
}

export default Football