import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        {this.props.list.map(story => {
          return (
            <NavLink
              to={`/stories/${story.id}`}
              key={story.id}
              activeClassName="saved-active"
            >
              <span className="saved-story">{story.id}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}