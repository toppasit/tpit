import { useEffect, useState } from "react"
import Football from "../component/football"
import Basketball from "../component/basketball"
import { getWindowType } from '../util'

const Mainpage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const windowType = getWindowType(windowWidth)
  return (
    <>
      <Football windowType={windowType}/>
      <Basketball windowType={windowType}/>
    </>
  )
}

export default Mainpage
