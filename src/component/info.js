import { InfoBackground, InfoWrapper, TitleContainer, BulletContainer, BulletLine, Title, Info } from'../style/info'

const Information = ({
  left, backgroundColor, textColor, order, bulletColor, bulletLineColor, title, info, height, letterSpace, maxWidth, index, slideIndex,
}) => {
  return (
    <InfoBackground bgColor={backgroundColor} height={height} left={left} className={slideIndex === index ? 'active' : ''}>
      <InfoWrapper color={textColor} left={left}>
        <TitleContainer>
          <BulletContainer bulletColor={bulletColor}>
            {order}
            <BulletLine bgColor={bulletLineColor}/>
          </BulletContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Info letterSpace={letterSpace} maxWidth={maxWidth}>{info}</Info>
      </InfoWrapper>
    </InfoBackground>
  )
}

export default Information