import commentsReducer from 'store/reducers/comments'

describe('commentsReducer', () => {
    it('handles actions of type SAVE_COMMENT', () => {
        const action = {
            type: 'SAVE_COMMENT',
            payload: 'New Test Comment'
        }

        const newState = commentsReducer([], action)

        expect(newState).toEqual(['New Test Comment'])
    })

    it('handles actions with unknown type', () => {

        const newState = commentsReducer([], {
            type: 'undefined'
        })

        expect(newState).toEqual([])
    })
})
