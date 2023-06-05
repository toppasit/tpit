import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (max-width: 320px) {
    margin: 0 0 0 19px;
    align-items: flex-start;
  }
`

export const Header = styled.h1`
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

export const ImageContainer = styled.div`
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
    position: relative;
    display: flex;
    justify-content: center;
    margin: 11px 0 0 0;
    z-index: 2;
  }
`

export const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 498px;
    height: 699px;
  }

  @media only screen and (max-width: 320px) {
    width: 200px;
    height: 281px;
  }
`

export default HeaderContainer