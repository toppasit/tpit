import styled from "styled-components";

const InfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.left ? 'flex-start' : 'flex-end'};
  justify-content: center;
  background-color: ${props => props.bgColor};
  height: ${props => props.height};
`

const InfoWrapper = styled.div`
  width: 50%;
  color: ${props => props.color};
  margin-left: ${props => props.left ? '322px' : '0'};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.5px;
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
  letter-spacing: ${props => props.letterSpace ? props.letterSpace : '0'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '717px'};
`

const Information = ({
  left, backgroundColor, height, textColor, order, bulletColor, bulletLineColor, title, info, letterSpace, maxWidth,
}) => {
  return (
    <InfoBackground bgColor={backgroundColor} height={height} left={left}>
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