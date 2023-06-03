import { useRef } from "react"
import styled from "styled-components"
import Football from "../component/football"
import Basketball from "../component/basketball"
import Test from '../component/test'
import { getWindowType } from '../util'

const Mainpage = () => {
  const windowInnerWidth = useRef([window.innerWidth])
  const windowWidth = windowInnerWidth.current[0]
  const windowType = getWindowType(windowWidth)
  // desktop 1920 1867
  // tablet 768 1609
  // mobile 320 1133
  return (
    <>
      <Football windowType={windowType}/>
      {/* <Basketball windowType={windowType}/> */}
      {/* <Test/> */}
    </>
  )
}

export default Mainpage