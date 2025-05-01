import { ACTIONS } from "./App";

export function OperationButton({dispatch, operation}){
    return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATIION, payload:{operation} })}>{operation}</button>
    
}