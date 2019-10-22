import postReducer from './reducer'

describe('Posts Reducer', () => {

    it('should return default state', () => {
        const newState = postReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it('handles action of GET_POSTS', () => {
        const action = {
            type: "GET_POSTS",
            payload: [{title: '2'}, {title: '3'}, {title: '4'}]
        }

        const newState = postReducer([{title: '1'}], action)

        expect(newState).toEqual([{title: '1'}, {title: '2'}, {title: '3'}, {title: '4'}])
    })

})
