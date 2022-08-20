import React, { useState } from "react";

const Search = (props) => {
  
  return (
    <div className="headerContainer">    
      <img className="logo" src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt={props.title}/>
      <div className="textAfterLogo">
          <h4>Search <br></br> Hacker News</h4>
      </div>  
      
      <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Search stories by title, url or author"
          />
          
</div>
</div>
  );
};

export default Search;
