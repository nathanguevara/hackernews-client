export default function DropDownCard({setType, setDate, setTimeOrPop }) {

    return (
      <div className="select-menu">
        <label>Search </label>
        <select
          className="select"
          onChange={(e) => setType(e.target.value)}
          name="storiesComments"
        >
          <option value="story">All</option>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
        </select>
        <label> by </label>
        <select
          className="select"
          onChange={(e) => setTimeOrPop(e.target.value)}
          name="popularityDate"
        >
          <option value="search">Popularity</option>
          <option value="search_by_date">Date</option>
        </select>
        <label> for </label>
        <select className="select" onChange={(e) => setDate(e.target.value)}>
          <option value={Date.now()}>All time</option>
          <option value={Date.now() - 86400}>Last 24h</option>
          <option value={Date.now() - 604800}>Past Week</option>
          <option value={Date.now() - 2630000}>Past Month</option>
          <option value={Date.now() - 31536000}>Past Year</option>
        </select>
      </div>
    );
  }
