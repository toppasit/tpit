export const getWindowType = (width) => {
  // desktop 1920 1867
  // tablet 768 1609
  // mobile 320 1133
  if (width <= 320) return 'mobile'
  else if (width > 320 && width <= 768) return 'tablet'
  else return 'desktop'
}

export const changeSlide = (index, setState) => {
  setState(index)
}

export default getWindowType