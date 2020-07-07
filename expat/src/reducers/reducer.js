import { ADD_STORY, EDIT_STORY } from "../actions";

export const initialState = {
    //state for adding a story
    story: {
        id: '',
        category: '',
        story: '',
        posted_date: '',
        photo: ''
    }
}


export const storyReducer = (state = initialState, action) => {
    console.log("state & action from reducer.js",state, action)
    switch(action.type) {
        case ADD_STORY:
            return {
                ...state,
                category: action.payload.category,
                story: action.payload.story,
                photo: action.payload.photo
            }
        case EDIT_STORY:
            return {
                ...state,
                category: action.payload.category,
                story: action.payload.story,
                photo: action.payload.photo
            }
        default:
            return state
    }


}
export default storyReducer