import { useContext } from "react"
import { ThemeContext } from "./setContext"

const UseCtx = ()=>{
    const theme = useContext(ThemeContext)
    console.log("theme: ",theme)
    return (<>
        {theme?"☀️":"🌑"}
    </>)
}
export default UseCtx