import styled from 'styled-components'
import Cat from '../asset/cat.png'

const FootballContainer = styled.div`
  background-color: #F2F2F2;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Header = styled.h1`
  width: 50%;
  color: #E7E7E7;
`

const ImageContainer = styled.div`
  float: left;
  position: absolute;
  top: 0;
`

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
`

const BulletLine = styled.div`
  height: 5px;
  width: 19px;
  background-color: ${props => props.bgColor};
  border-radius: 2.5px;
  margin: 0 12px 0 0;
`

const Title = styled.h2`
  color: #C2C2C2;
  letter-spacing: 1.5px;
`

const Football = () => {
  return (
    <FootballContainer>
      <HeaderContainer>
        <Header>ATHLETS</Header>
      </HeaderContainer>
      <ImageContainer><img src={Cat} width={'300px'}/></ImageContainer>
      <div>
        <InfoBackground>
          <InfoWrapper>
            <TitleContainer>
              <div>
                01
                <BulletLine bgColor={'#603EBE'}/>
              </div>
              <Title>CONNECTION</Title>
            </TitleContainer>
            <p>Connect with coaches directly, you can ping coaches to view profile.</p>
          </InfoWrapper>
        </InfoBackground>
        <InfoBackground bgColor={'##F5F4F9'} height={'256px'}>
          <InfoWrapper>
            <TitleContainer>
              <div>
                02
                <BulletLine bgColor={'#603EBE'}/>
              </div>
              <Title>COLLABORATION</Title>
            </TitleContainer>
            <p>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
          </InfoWrapper>
        </InfoBackground>
        <InfoBackground bgColor={'#5E3DB3'} height={'302px'}>
          <InfoWrapper color={'white'}>
            <TitleContainer>
              <div>
                03
                <BulletLine bgColor={'#FFFFFF'}/>
              </div>
              <Title>GROWTH</Title>
            </TitleContainer>
            <p>Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </p>
          </InfoWrapper>
        </InfoBackground>
      </div>
    </FootballContainer>
  )
}

export default Football