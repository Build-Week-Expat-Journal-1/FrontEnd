import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "../src/App.css";

import Login from "./components/Login";
import StoriesList from './components/StoriesList';
import PrivateRoute from "./components/PrivateRoute";
import StoryPutUpdate from './actions/EditStory';
import AddStory from "./actions/AddStory";


function App() {
  const [savedList, setSavedList] = useState([]);

  return (
    <Router>

      <div className="App">
        <Route  exact path="/" component={Login} />
        <PrivateRoute exact path="/stories" component={StoriesList} />
        <PrivateRoute exact path="/add-story" component={AddStory} />
        <Route
      path='/update-story/:id'
      render={props => {
        return <StoryPutUpdate {...props} savedList={savedList} 
        setSavedList={setSavedList}/>
      }}
      />
      </div>
    </Router>
  );
}

export default App;
