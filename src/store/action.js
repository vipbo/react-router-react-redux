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