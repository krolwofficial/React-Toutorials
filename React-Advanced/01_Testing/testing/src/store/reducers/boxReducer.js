const uuidv4 = require('uuid/v4');

const initialState = [
    {
        id: uuidv4(),
        text: 'Lorem Ipsum  1'
    },
    {
        id: uuidv4(),
        text: 'Lorem Ipsum  2'
    },
    {
        id: uuidv4(),
        text: 'Lorem Ipsum  3'
    }
]

const boxReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'TEST_ACTION':
            return [
                ...state, {
                    id: uuidv4(),
                    text: payload
                }
            ]
        default:
            return state
    }
}

export default boxReducer
