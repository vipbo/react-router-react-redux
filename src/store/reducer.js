
export default function reducer(initState = 0, action) {
    switch (action.type) {
        case 'ADDTYPE':
            return initState + action.n;
        case 'SUBTYPE':
            return initState - action.n;
        default:
            return initState;
    }
}