export const getWindowType = (width) => {
  if (width <= 320) return 'mobile'
  else if (width > 320 && width <= 768) return 'tablet'
  else return 'desktop'
}

export const changeSlide = () => {
  
}

export default getWindowType