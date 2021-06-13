import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../API/unsplash";
class App extends React.Component {
  state = { imgs: [] };
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ imgs: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.imgs.length}
      </div>
    );
  }
}

export default App;
