import styled from "styled-components";
import Information from "./information";
import BasketballPlayer from '../asset/basketball-player.png'
import BasketballConfig from '../information/basketball'

const Container = styled.div`
  background-color: #FFFFFF;
  font-family: roboto;
  overflow: hidden;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 322px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`

const Header = styled.h1`
  width: 50%;
  color: #E7E7E7;
  font-weight: 400;
  font-size: 90px;
  line-height: 105px;
  margin: 124px 0 0;

  @media only screen and (max-width: 768px) {
    margin: 52px 0 34px 31px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  left: 804px;
  top: 898px;

  @media only screen and (max-width: 768px) {
    left: 331px;
    top: 852px;
    width: 437px;
    overflow: hidden;
  }
`

const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 691px;
    height: 568px;
  }
`

const Basketball = ({
  windowType,
}) => {
  return (
    <Container>
      <HeaderContainer>
        <Header>PLAYERS</Header>
      </HeaderContainer>
      <ImageContainer><Img src={BasketballPlayer}/></ImageContainer>
      <div>
        <Information
          left={true}
          backgroundColor={'#FFFFFF'}
          height={BasketballConfig[windowType][0].height}
          order={'01'}
          bulletLineColor={'#603EBE'}
          title={'CONNECTION'}
          info={'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'}
          letterSpace={BasketballConfig[windowType][0].letterSpace}
          maxWidth={BasketballConfig[windowType][0].maxWidth}
        />
        <Information
          left={true}
          backgroundColor={'#F5F4F9'}
          height={BasketballConfig[windowType][1].height}
          order={'02'}
          bulletLineColor={'#603EBE'}
          title={'COLLABORATION'}
          info={'Work with recruiter to increase your chances of finding talented athlete.'}
          letterSpace={BasketballConfig[windowType][1].letterSpace}
          maxWidth={BasketballConfig[windowType][1].maxWidth}
        />
        <Information
          left={true}
          backgroundColor={'#090C35'}
          height={BasketballConfig[windowType][2].height}
          textColor={'#FFFFFF'}
          order={'03'}
          bulletColor={'#8F6BE8'}
          bulletLineColor={'#FFFFFF'}
          title={'GROWTH'}
          info={'Save your time, recruit proper athlets for your team.'}
          letterSpace={BasketballConfig[windowType][2].letterSpace}
          maxWidth={BasketballConfig[windowType][2].maxWidth}
        />
      </div>
    </Container>
  )
}

export default Basketball