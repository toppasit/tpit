import styled from 'styled-components'
import Information from './information'
import Footballer from '../asset/footballer.png'

const FootballContainer = styled.div`
  background-color: #F2F2F2;
  font-family: roboto;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Header = styled.h1`
  width: 50%;
  color: #E7E7E7;
  font-weight: 400;
  font-size: 90px;
  line-height: 105px;
`

const ImageContainer = styled.div`
  position: absolute;
  left: 175px;
  top: 35px;
`

const Football = () => {
  return (
    <FootballContainer>
      <HeaderContainer>
        <Header>ATHLETS</Header>
      </HeaderContainer>
      {/* <ImageContainer><img src={Footballer}/></ImageContainer> */}
      <div>
        <Information
          backgroundColor={'#F2F2F2'}
          height={'345px'}
          order={'01'}
          bulletLineColor={'#603EBE'}
          title={'CONNECTION'}
          info={'Connect with coaches directly, you can ping coaches to view profile.'}
        />
        <Information
          backgroundColor={'#F5F4F9'}
          height={'256px'}
          order={'02'}
          bulletLineColor={'#603EBE'}
          title={'COLLABORATION'}
          info={'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'}
        />
        <Information
          backgroundColor={'#5E3DB3'}
          height={'302px'}
          textColor={'#FFFFFF'}
          order={'03'}
          bulletLineColor={'#FFFFFF'}
          title={'GROWTH'}
          info={'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc'}
        />
      </div>
    </FootballContainer>
  )
}

export default Football