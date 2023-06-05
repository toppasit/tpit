import styled from "styled-components"

export const Container = styled.div`
  background-color: #FFFFFF;
  font-family: roboto;
  overflow: hidden;
`

export const Slideshow = styled.div`
  @media only screen and (max-width: 414px) {
    height: ${props => props.height};
  }
`

export const Slides = styled.div`
  @media only screen and (max-width: 414px) {
    position: relative;
    top: ${props => props.top};
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.slideIndex * 100}%);
  }
`

export const DotsContainer = styled.div`
  display: none;
  @media only screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: ${props => props.top};
  }
`

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #D8D8D8;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: ${props => props.activeBgColor};
  }
`

export default Container