import React, { useEffect, useState } from "react";
import "./App.css"
import SearchResults from './components/searchResults'
import Search from "./components/search";

console.clear();

function App() {

  return (
    <div>
    <Search />
    <SearchResults />
    </div>
    );
}

export default App;
