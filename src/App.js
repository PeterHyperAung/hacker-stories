import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark,",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchItem, updateData] = useState("");

  const handleSearch = (event) => {
    updateData(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchItem)
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>{/* {welcome.greeting} {getTitle()} */}</h2>
        <Search onSearch={handleSearch} />
        <hr />
        {/* render the list here */}
        <List list={searchedStories} />
        {/* and by the way: that's who you do comments in JSX */}
      </header>
    </div>
  );
};

export default App;
