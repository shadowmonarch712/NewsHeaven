import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} key="" pageSize="5" country="in" category="general"></News>
            </Route>
            <Route exact path="/buisness">
              <News setProgress={this.setProgress}
                key="buisness"
                pageSize="5"
                country="in"
                category="buisness"
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress}
                key="entertainment"
                pageSize="5"
                country="in"
                category="entertainment"
              ></News>
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress}
                key="science"
                pageSize="5"
                country="in"
                category="science"
              ></News>
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress}
                key="technology"
                pageSize="5"
                country="in"
                category="technology"
              ></News>
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress}
                key="health"
                pageSize="5"
                country="in"
                category="health"
              ></News>
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress}
                key="general"
                pageSize="5"
                country="in"
                category="general"
              ></News>
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}
                key="sports"
                pageSize="5"
                country="in"
                category="sports"
              ></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
