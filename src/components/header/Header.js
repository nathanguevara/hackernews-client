import React from "react"
import ButtonWithDropDownCmpt from "../../buttonDropDownCmpt"

function Header(props) {
  return (
    <>
      <header>
        <h1>Search Hacker News</h1>
        <form onSubmit={props.searchHandler}>
          <input id="searchBar"
            type="text"
            onChange={e => {
              props.searchChange(e)
            }}
            
            value={props.state.searchText}
            placeholder="Search stories by title, url or author"
          ></input>
          <input type="submit" value="Search"></input>
        </form>
       <ButtonWithDropDownCmpt></ButtonWithDropDownCmpt>
      </header>
    </>
  )
}



export default Header