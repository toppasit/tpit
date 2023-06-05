import { useState } from 'react'
import { HeaderContainer, Header, ImageContainer, Img } from '../style/basketball'
import { Container, Slideshow, Slides, DotsContainer, Dot } from '../style/index'
import Information from './info'
import BasketballPlayer from '../asset/basketball-player.png'
import BasketballConfig from '../information/basketball'
import { changeSlide } from '../util'

const Basketball = ({
  windowType,
}) => {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <Container>
      <HeaderContainer>
        <Header>PLAYERS</Header>
      </HeaderContainer>
      <ImageContainer><Img src={BasketballPlayer}/></ImageContainer>
      <Slideshow height={'203px'}>
        <Slides slideIndex={slideIndex} top={'-35px'}>
          {
            BasketballConfig[windowType].map((basketball, index) => {
              return (
                <Information
                  left={basketball.left}
                  backgroundColor={basketball.backgroundColor}
                  textColor={basketball.textColor}
                  order={basketball.order}
                  bulletColor={basketball.bulletColor}
                  bulletLineColor={basketball.bulletLineColor}
                  title={basketball.title}
                  info={basketball.info}
                  height={basketball.height}
                  letterSpace={basketball.letterSpace}
                  maxWidth={basketball.maxWidth}
                  index={index}
                  slideIndex={slideIndex}
                />
              )
            })
          }
        </Slides>
        <DotsContainer top={'-119px'}>
          {
            BasketballConfig[windowType].map((v, index) => {
              return (
                <Dot
                  className={slideIndex === index ? 'active' : ''}
                  activeBgColor={'#603EBE'}
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

export default Basketball