import React, { useEffect, useState } from 'react'
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    
    const history = useHistory();
 
    const handleChange= (e) => {
        if (e.target.value === 0) history.push("/")
        else if (e.target.value === 1) history.push("/Movies")
        else if (e.target.value === 2) history.push("/Series")
        else if (e.target.value === 3) history.push("/Search")
       
    }
    return (
        <div>
        <div className="nav">
        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
        <ul onClick =  {(e) =>handleChange(e)} >
        <li value="0">
        <WhatshotIcon /> Trending
        </li>
        <li value="1">
        <MovieIcon /> movies
        </li>
        <li value="2">
        <TvIcon /> tv series
        </li>
        <li value="3">
        <SearchIcon /> search
        </li>
        
        </ul>
        </div>
           
        </div>
    )
}

export default NavBar
