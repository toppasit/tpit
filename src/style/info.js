import styled, { keyframes } from 'styled-components'

export const slideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const InfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.left ? 'flex-start' : 'flex-end'};
  justify-content: center;
  background-color: ${props => props.bgColor};
  height: ${props => props.height};
  overflow: hidden;
  width: 100%;

  @media only screen and (max-width: 414px) {
    width: calc(100% - 19px);
    flex: 0 0 100%;
    height: 284px;
    animation: ${slideAnimation} 0.5s ease-in-out;
    align-items: flex-start;
    justify-content: flex-start;
    &.active {
      display: flex;
    }
  }
`

export const InfoWrapper = styled.div`
  width: 47%;
  color: ${props => props.color};
  margin-left: ${props => props.left ? '322px' : '0'};

  @media only screen and (max-width: 768px) {
    width: 62%;
    margin-left: ${props => props.left ? '33px' : '0'};
  }

  @media only screen and (max-width: 414px) {
    width: calc(100% - 19px);
    animation: ${slideAnimation} 0.5s ease-in-out;
    margin: 0 0 0 19px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.5px;
  line-height: 42px;

  @media only screen and (max-width: 414px) {
    margin: 72px 0 0 0;
  }
`

export const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.5px;
  color: ${props => props.bulletColor ? props.bulletColor : '#000000'};

  @media only screen and (max-width: 414px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const BulletLine = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${props => props.bgColor};
  border-radius: 2.5px;
  margin: 4px 0 0 0;

  @media only screen and (max-width: 414px) {
    height: 4px;
  }
`

export const Title = styled.h2`
  color: #C2C2C2;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 1.5px;
  margin: 0;

  @media only screen and (max-width: 414px) {
    font-size: 28px;
    line-height: 33px;
  }
`

export const Info = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: ${props => props.letterSpace};
  max-width: ${props => props.maxWidth};

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.74px;
  }
`
export default InfoBackground
