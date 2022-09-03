import React, { useState } from "react";

const Search = (props) => {
  const [searchItem, updateData] = useState("");
  const handleChange = (event) => {
    updateData(event.target.value);
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchItem}</strong>
      </p>
    </div>
  );
};

export default Search;
