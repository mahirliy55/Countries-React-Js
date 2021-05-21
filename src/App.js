import React, { Component } from "react";
import "./App.scss";
import Countries from "./components/Countries";
import Filters from "./components/Filters";
import Nav from "./components/Nav";
import Country from "./components/Country";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    data: [],
    searchData: [],
    text: "",
    search: false,
    selectValue: "",
    darkMode: false,
  };

  componentDidMount() {
    this.allFlag();
  }

  allFlag = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await response.json();
    this.setState({
      data: data,
    });
  };

  searchFlag = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.state.text}`
    );
    const data = await response.json();
    this.setState({
      searchData: data,
      search: true,
    });
  };

  filterRegion = async (e) => {
    console.log(this.state.selectValue);
    e.preventDefault();
    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${this.state.selectValue}`
    );
    const data = await response.json();
    this.setState({
      searchData: data,
      search: true,
    });
  };

  darkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onFilter = async (e) => {
    await this.setState({ selectValue: e.target.value });
    this.filterRegion(e);
  };

  render() {
    return (
      <>
        <Router>
          <Nav mode={this.darkMode} darkModeStatus={this.state.darkMode} />

          <Switch>
            <Route exact path="/">
              <Filters
                filterRegion={this.filterRegion}
                filter={this.searchFlag}
                change={this.onChange}
                changeFilter={this.onFilter}
                darkModeStatus={this.state.darkMode}
              />
              <Countries
                flags={this.state.data}
                filterFlag={this.state.searchData}
                searchStatus={this.state.search}
                darkModeStatus={this.state.darkMode}
                darkModeFunc={this.darkMode}
              />
            </Route>
            <Route
              path="/country/:name"
              exact
              render={(props) => (
                <Country
                  {...props}
                  all={this.state.data}
                  darkModeStatus={this.state.darkMode}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
