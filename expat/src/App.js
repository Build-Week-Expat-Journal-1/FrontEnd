import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import StoriesList from './components/StoriesList';
import PrivateRoute from "./components/PrivateRoute";
// import AddStory from "./actions/AddStory";


function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        {/* <Route  exact path="/" component={Login} /> */}
        <PrivateRoute exact path="/stories" component={StoriesList} />
        {/* <StoriesList /> */}
        {/* <AddStory /> */}
      </div>
    </Router>
  );
}

export default App;
