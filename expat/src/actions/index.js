import axios from "axios";
// import getData from "./AddStory";

export const ADD_STORY = "ADD_STORY";
export const EDIT_STORY = "EDIT_STORY";

export const getData = () => dispatch => {
    dispatch({ type: ADD_STORY });
    axios
        .get("https://expat-digital-journal.herokuapp.com/api/posts")
        .then(response => {
            dispatch({ type: EDIT_STORY, payload: response.data.cards})
        })
        .catch(err => {
            console.error("Error fetching data from api: ", err)
            // dispatch({ type: SET_ERROR, payload: "Error fetching data from api"})
    })
}

export const editStoryAction = storyEdit => {
    return ({type: "EDIT_STORY", payload: storyEdit })
}