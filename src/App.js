import React, { useEffect, useState } from "react";
import "./App.css"
import SearchResults from './components/searchResults'
import Search from "./components/search";
import Dropdown from "./components/dropdown"
console.clear();

function App() {

  return (
    <div>
    <Search />
    <Dropdown/>
    <SearchResults />
    </div>
    );
}

export default App;
