import styled from 'styled-components'

export const HeaderContainer = styled.div`
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

export const Header = styled.h1`
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

export const ImageContainer = styled.div`
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

export const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 691px;
    height: 568px;
  }

  @media only screen and (max-width: 320px) {
    width: 302px;
    height: 249px;
  }
`

export default HeaderContainer