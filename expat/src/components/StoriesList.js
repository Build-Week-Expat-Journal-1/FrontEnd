/* build stories list here*/
import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddStory from "../actions/AddStory";

import { connect } from 'react-redux';
import { getData } from "../actions";

class StoriesList extends React.Component {
  constructor() {
    super();
    this.state = { stories: [], isLoading: false };
  }
  componentDidMount() {
    this.getStoriesList();
  }
  getStoriesList = () => {
    this.setState({ ...this.state, isLoading: true });
    axiosWithAuth()
      .get("/posts")
      .then((res) => {
        console.log("Successfully got posts", res);
        this.setState({ stories: res.data });
        this.setState({ ...this.state, isLoading: false });
      })
      .catch((err) => {
        console.log("Error in getting posts", err);
        this.setState({ ...this.state, isLoading: false });
      });
  };

  saveStory = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.story);
  };


  delete = (id) => {
    axiosWithAuth()
      .delete(`/posts/${id}`)
      .then((res) => {
        console.log(res);
        alert(`Deleted story with id of: ${id}`);
        this.getStoriesList();
      })
      .catch((err) => console.log("Error Deleting a Story", err));
  };
  render() {
    return (
      
      <div className="StoriesList">
        <h2>My Stories</h2>
        <AddStory />
        {this.state.isLoading && <p>Loading...</p>}
        <div className="ListOfPosts">
          {this.state.stories.map((story) => (
            <div key={story.id} className="Post">
              <img
                src={`${story.photo}`}
                alt="StoryPhoto"
                className="StoryPhoto"
              />
              <h4>{`ID: ${story.id}`}</h4>
              <h4>{`Category: ${story.category}`}</h4>
              <h4>{`Posted on: ${story.posted_date}`}</h4>
              <br />
              <span>{`${story.story}`}</span>
              <br />
              <button onClick={() => this.delete(story.id)}>DELETE</button>
              <button> <Link to={`/update-story/${story.id}`}>Edit Story</Link></button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(StoriesList);

// export default StoriesList;