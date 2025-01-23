import { useReducer } from "react"

const reducer = (state,action)=>{
    switch(action.type){
        case "+":
            return state+1
        case "-":
            return state-1
        default:
            return state
    }
}
const UseReducerHook = ()=>{
    const [state,dispatch] = useReducer(reducer,0)
    return(<>
        <button onClick={()=>dispatch({type:"-"})} >-</button>
        {state}
        <button onClick={()=>dispatch({type:"+"})} >+</button>
    </>)
}

export default UseReducerHook