/* build delete story component here*/
import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";

class DeleteStory extends React.Component{

    constructor(){
        super();
        this.state = { id: '', deletedStory: '' }
    }

    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/posts/${this.state.id}`)
        .then(res => {
            console.log(res)
            alert(`Deleted story with id of: ${this.state.id}`);
        })
        .catch(err => console.log("Error Deleting a Story",err))
    }

    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }

    render(){
        return(

            <div className="DeleteStory">
                <h2>Delete Friend :(</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id"/>
                    <button>Delete</button>
                </form>
            </div>

        )
    }

}

export default DeleteStory