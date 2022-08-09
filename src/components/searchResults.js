import React, { useEffect, useState } from "react";
import Story from "./story";
// import Search from "./search";

function SearchResults() {
    const [stories, setStories] = useState([]);

async function getStories() {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search?tags=story"
  );
  const data = await response.json();

  setStories(data.hits);
}

useEffect(() => {
  getStories();
}, []);    
    return (
        
        <div className="container">
          {stories.map((story) => {
            return <Story key={story.objectID} {...story} />;
          })}
          <div>
        
      </div>
        </div>
  );
}

export default SearchResults;