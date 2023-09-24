import React from "react";
import { useState } from "react";

const Searcher = () => {
  const [searcher, setSearcher] = useState("");
  const searcherHandler = (event) => {
    setSearcher(event.target.value);
  };
  return (
    <div className="searcher">
      <input
        type="text"
        className="searchInput"
        placeholder="Search a torrent"
        value={searcher}
        onChange={searcherHandler}
      />
      <button>Search</button>
    </div>
  );
};

export default Searcher;
