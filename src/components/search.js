import React, { useState } from "react";

const Search = (props) => {
  
  return (
    <div className="headerContainer">
      <div className="logoContainer">
      <img className="logo" src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt={props.title}/>
      </div>
    <p>Search Hacker News</p>
      <div className="searchContainer">
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Search stories by title, url or author"
          />
          </div>
          </div>
        </div>
  );
};

export default Search;
