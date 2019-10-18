//const uuidv4 = require('uuid/v4');
// ...state, {
//     id: uuidv4(),
//     text: payload
// }

const initialState = []

const boxReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'SAVE_COMMENT':
            return [
                ...state, payload
            ]
        case 'FETCH_COMMENTS':
            return [
                ...state, ...payload
            ]
        default:
            return state
    }
}

export default boxReducer
