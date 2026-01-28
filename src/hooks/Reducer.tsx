import {useReducer} from 'react'
import { Button } from '../components/ui/button';
function reducer(state:any,action:any){
      switch(action.type){
            case "increment" : return {count: state.count+1};
            case "decrement" : return {count: state.count-1};
            default: return state

      }
}
const Reducer = () => {
      const [state,dispatch] = useReducer(reducer,{count:0});;

  return <>
  <h1>{state.count}</h1>
  <Button onClick={()=>{dispatch({type:"increment"})}}>+</Button>
  <Button onClick={()=>{dispatch({type:"decrement"})}}>-</Button>

  </>
}

export default Reducer