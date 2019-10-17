import action from './action'

export default function reducer(initState = 0, action) {
    console.log('action', action)
    switch (action.type) {
        case 'ADDTYPE':
            return initState + action.n;
            break;
        case 'SUBTYPE':
            return initState - action.n;
            break;
        default:
            return initState;
    }
}