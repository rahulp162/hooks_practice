import { createContext, useState } from "react";
import UseCtx from "./useCtx";
var ThemeContext = createContext(1);

const SetContext=()=>{
    
    const [theme,setTheme] = useState(1);
    
    const changeTheme = ()=> setTheme((prevTheme)=>!prevTheme)

    return(
        <>
            <button onClick={changeTheme}>🔁</button>
            <ThemeContext.Provider value={theme}>
                <UseCtx/> 
            </ThemeContext.Provider>
        </>
    )
    
}

export default SetContext
export {ThemeContext}