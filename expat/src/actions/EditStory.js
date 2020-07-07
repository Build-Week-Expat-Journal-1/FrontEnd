
import React, { useState, useEffect, useReducer} from "react";
import axios from 'axios';
import { storyReducer, initialState } from "../reducers/reducer";
import { connect } from 'react-redux';
import { editStoryAction } from "../actions/index";
 

const StoryPutUpdate = (props, match, history)=>{
    const [storyEdit, setStoryEdit] = useState(
        {
            id: "",
            category: "",
            photo: "",
            posted_date: "",
            story: ""
        }
    );

    const [state, dispatch] = useReducer(storyReducer, initialState)

    console.log("console log state in EditStory",state);


    useEffect(()=>{
        axios
        .get(`https://expat-digital-journal.herokuapp.com/api/posts/${props.match.params.id}`)
        .then( res=>{
            console.log("get story update", res.data);
            setStoryEdit(res.data);})
        
    }, [props.match.params.id]);

    const handleChange = event =>{
        setStoryEdit({ ...storyEdit,
             [event.target.name]: event.target.value});
    }

    const handleSubmit = event =>{
        event.preventDefault();
        axios
        .put(`https://expat-digital-journal.herokuapp.com/api/posts/${props.match.params.id}`, storyEdit)
        .then(res =>{
            console.log("story updated", res);
            setStoryEdit({
                id: "",
                category: "",
                photo: "",
                posted_date: "",
                story: "" 
            })
            props.setSavedList([...props.savedList, res])
            props.history.push('/stories')
        })
        .catch(error =>{console.log('story did not Update', error)})
    };

    // const editStoryAction = e => {
    //     dispatch({type: "EDIT_STORY", payload: storyEdit })
    // }
    return(
        <div>
            <h2>Edit Story</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category</label>
            <input
            id= "category"
            type= 'text'
            name= "category"
            placeholder= 'Enter category'
            onChange={handleChange}
            value={storyEdit.category}
            />
            <label htmlFor='story'>Story</label>
            <input
            id= "story"
            type= 'text'
            name= "story"
            placeholder= 'Enter story'
            onChange={handleChange}
            value={storyEdit.story}
            />
            <label htmlFor='photo'>Photo</label>
              <input
            id= "photo"
            type= 'text'
            name= "photo"
            placeholder= 'Enter photo'
            onChange={handleChange}
            value={storyEdit.photo}
            />
            <button onClick={() => props.editStoryAction(storyEdit)}>Update Story</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return{
        categoryOnProps: state.category,
        storyOnProps: state.story,
        photoOnProps: state.photo
    };
};

export default connect(
    mapStateToProps,
    {editStoryAction}
)(StoryPutUpdate);