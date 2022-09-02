import React from "react";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";

const App = () => {
  // const title = "React";
  const welcome = {
    greeting: "Hey",
    title: "React",
  };

  function getTitle() {
    return welcome.title;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {welcome.greeting} {getTitle()}
        </h2>
        <Search />
        <hr />
        {/* render the list here */}
        <List />
        {/* and by the way: that's who you do comments in JSX */}
      </header>
    </div>
  );
};

export default App;
