import styled from "styled-components";
import Information from "./information";
import BasketballPlayer from '../asset/basketball-player.png'

const FootballContainer = styled.div`
  background-color: #FFFFFF;
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
  margin: 124px 0 0;
`

const ImageContainer = styled.div`
  position: absolute;
  left: 804px;
  top: 898px;
`

const Basketball = () => {
  return (
    <FootballContainer>
      <HeaderContainer>
        <Header>PLAYERS</Header>
      </HeaderContainer>
      <ImageContainer><img src={BasketballPlayer}/></ImageContainer>
      <div>
        <Information
          left={true}
          backgroundColor={'#FFFFFF'}
          height={'256px'}
          order={'01'}
          bulletLineColor={'#603EBE'}
          title={'CONNECTION'}
          info={'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'}
          maxWidth={'571px'}
        />
        <Information
          left={true}
          backgroundColor={'#F5F4F9'}
          height={'245px'}
          order={'02'}
          bulletLineColor={'#603EBE'}
          title={'COLLABORATION'}
          info={'Work with recruiter to increase your chances of finding talented athlete.'}
          letterSpace={'0.65px'}
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
          letterSpace={'0.65px'}
        />
      </div>
    </FootballContainer>
  )
}

export default Basketball