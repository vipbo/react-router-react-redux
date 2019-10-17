import * as Type from './actionType'

export function add (n){
    return {
        type: Type.ADDTYPE,
        n
    }
}

export function sub (n) {
    return {
        type: Type.SUBTYPE,
        n
    }
}

export function addAsync (delay=2000){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch(add(2))
        }, delay)
    }
}