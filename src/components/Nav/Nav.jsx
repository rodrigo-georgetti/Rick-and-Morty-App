import React from 'react'
import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'
const Nav = (props) => {
    const { onSearch } = props;
    return (
    
    <div>
      <Link to = '/About'>
      About
      </Link>  
      <Link to = '/Home'>
      Home
      </Link>  
      <Link to = '/Favorites'>
      Favorites
      </Link> 
    <SearchBar onSearch = {onSearch}/>

    </div>
  )
}

export default Nav
