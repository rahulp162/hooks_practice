import { useRef } from "react"

const UseRefHook = ()=>{
    const buttonRef = useRef(null)
    const click2 = ()=>{
        console.log("2222222222")
        buttonRef.current.click()
    }
    const click1 = ()=>{
        console.log("1111111111")
    }
    return (
        <>
            <button name="ref_button" onClick={click1} ref={buttonRef} id="ref_button" >button 1</button>
            <button onClick={click2} >button 2</button>
        </>
    )
}
export default UseRefHook