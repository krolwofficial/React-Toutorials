export default (state=[], {type, payload}) => {
    switch(type){
        case 'GET_POSTS':
            return [...state, ...payload]
        default:
            return state
    }
}
