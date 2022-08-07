import React, { useEffect, useState } from "react";
import "./App.css"
console.clear();

function App() {
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
    <section className="storyContainer">
      <ul>
        {stories.map((hits, id) => (
          <article className="story" key={id}>
            {/* <a className="title" href="https://news.ycombinator.com/item?id={id}">{hits.title}</a> ({hits.url}) Algolia actually uses a function here to return the proper ycombinator url, but alas. */}
            <a className="title" href={hits.url}>{hits.title}</a> &nbsp; 
            <span className="link">({hits.url})</span>
            <p className="subTitle">{hits.points} points | {hits.author} | {hits.num_comments} comments</p>
          </article>
        ))}
      </ul>
    </section>
    </div>
  );
}

export default App;
