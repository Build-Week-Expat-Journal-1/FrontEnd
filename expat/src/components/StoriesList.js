/* build stories list here*/
import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import DeleteStory from "../actions/DeleteStory";


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
        {this.state.isLoading && <p>Loading...</p>}
        <div className="ListOfPosts">
          {this.state.stories.map((story) => (
            <div key={story.id}>
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default StoriesList;