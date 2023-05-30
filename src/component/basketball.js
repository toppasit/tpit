import styled from "styled-components";
import Information from "./information";
import BasketballPlayer from '../asset/basketball-player.png'

const FootballContainer = styled.div`
  background-color: #F2F2F2;
  font-family: roboto;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 322px;
`

const Header = styled.h1`
  width: 50%;
  color: #E7E7E7;
  font-weight: 400;
  font-size: 90px;
  line-height: 105px;
`

const ImageContainer = styled.div`
  position: relative;
  left: 175px;
  top: 35px;
`

const Basketball = () => {
  return (
    <FootballContainer>
      <HeaderContainer>
        <Header>PLAYERS</Header>
      </HeaderContainer>
      {/* <ImageContainer><img src={BasketballPlayer}/></ImageContainer> */}
      <div>
        <Information
          left={true}
          backgroundColor={'#F2F2F2'}
          height={'485px'}
          order={'01'}
          bulletLineColor={'#603EBE'}
          title={'CONNECTION'}
          info={'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'}
        />
        <Information
          left={true}
          backgroundColor={'#F5F4F9'}
          height={'245px'}
          order={'02'}
          bulletLineColor={'#603EBE'}
          title={'COLLABORATION'}
          info={'Work with recruiter to increase your chances of finding talented athlete.'}
        />
        <Information
          left={true}
          backgroundColor={'#090C35'}
          height={'268px'}
          textColor={'#FFFFFF'}
          order={'03'}
          bulletColor={'#8F6BE8'}
          bulletLineColor={'#FFFFFF'}
          title={'GROWTH'}
          info={'Save your time, recruit proper athlets for your team.'}
        />
      </div>
    </FootballContainer>
  )
}

export default Basketball