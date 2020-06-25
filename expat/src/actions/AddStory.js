/* build add story component here*/
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddStory extends React.Component{

    constructor(){
        super();
        this.state = {story: {
            id: '',
            category: '',
            story: '',
            posted_date: '',
            photo: ''
        }}
    }

    submitHandler = (event) =>{
        event.preventDefault();
        axiosWithAuth()
        .post("/posts", this.state.story)
        .then(res => {
            console.log("Add Post Values", this.state.story)
        })
        .catch(err => console.log("Add Post Error", err))
    }

    changeHandler = (event) => {
        this.setState( {story: {...this.state.story, [event.target.name]: event.target.value}})
        console.log("Changes Handled", this.state)
    }


    render(){
        return(
            <div className="AddStory">
                <h2>Add a Story</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="category" name="category" />
                    <input onChange={this.changeHandler} placeholder="story" name="story" />
                    <input onChange={this.changeHandler} placeholder="photo" name="" />
                    <button>Add Stroy</button>
                </form>
            </div>
        )
    }
}

export default AddStory