import styled, { keyframes } from "styled-components";

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

const InfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.left ? 'flex-start' : 'flex-end'};
  justify-content: center;
  background-color: ${props => props.bgColor};
  height: ${props => props.height};
  width: 100vw;

  @media only screen and (max-width: 320px) {
    width: calc(100% - 19px);
    flex: 0 0 100%;
    height: 284px;
    animation: ${slideAnimation} 0.5s ease-in-out;
    align-items: flex-start;
    &.active {
      display: flex;
    }
  }
`

const InfoWrapper = styled.div`
  width: 50%;
  color: ${props => props.color};
  margin-left: ${props => props.left ? '322px' : '0'};

  @media only screen and (max-width: 768px) {
    width: 62%;
    margin-left: ${props => props.left ? '33px' : '0'};
  }

  @media only screen and (max-width: 320px) {
    width: calc(100% - 19px);
    animation: ${slideAnimation} 0.5s ease-in-out;
    margin: 0 0 0 19px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.5px;
  line-height: 42px;
`

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.5px;
  color: ${props => props.bulletColor ? props.bulletColor : '#000000'};
`

const BulletLine = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${props => props.bgColor};
  border-radius: 2.5px;
  margin: 4px 0 0 0;
`

const Title = styled.h2`
  color: #C2C2C2;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 1.5px;
  margin: 0;
`

const Info = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: ${props => props.letterSpace};
  max-width: ${props => props.maxWidth};

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const Information = ({
  left, backgroundColor, height, textColor, order, bulletColor, bulletLineColor, title, info, letterSpace, maxWidth, index, slideIndex,
}) => {
  console.log('maxWidth', maxWidth)
  console.log(slideIndex, index)
  return (
    <InfoBackground bgColor={backgroundColor} height={height} left={left} className={slideIndex === index ? 'active' : ''}>
      <InfoWrapper color={textColor} left={left}>
        <TitleContainer>
          <BulletContainer bulletColor={bulletColor}>
            {order}
            <BulletLine bgColor={bulletLineColor}/>
          </BulletContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Info letterSpace={letterSpace} maxWidth={maxWidth}>{info}</Info>
      </InfoWrapper>
    </InfoBackground>
  )
}

export default Information