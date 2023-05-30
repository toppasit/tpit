import styled from "styled-components";

const InfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: ${props => props.bgColor};
  height: ${props => props.height}
`

const InfoWrapper = styled.div`
  width: 50%;
  color: ${props => props.color};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
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
`

const Information = ({
  backgroundColor, height, textColor, order, bulletLineColor, title, info
}) => {
  return (
    <InfoBackground bgColor={backgroundColor} height={height}>
      <InfoWrapper color={textColor}>
        <TitleContainer>
          <BulletContainer>
            {order}
            <BulletLine bgColor={bulletLineColor}/>
          </BulletContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Info>{info}</Info>
      </InfoWrapper>
    </InfoBackground>
  )
}

export default Information