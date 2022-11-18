import React from 'react';
// import '../Search/Search.Style.css'
import Dokhtar from "../../Imags/img.jpg"
import { Grid, Button, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
const Search = ({search,setSearch}) => {
      // search
      const handleSearch = e =>{
         setSearch(e.target.value)
      }
 
    return (
        // <div  className='search' >
            
        //     <input className='input-search'  value={search} onChange={handleSearch} placeholder='Search New User...' />
        //     <img className='img-search' src={Dokhtar} />
        // </div>
        <Grid item display={'flex'} sx={{ border: "1px solid #8888 ", borderRadius: "10px" }} xs={12} mb={2}>
        <IconButton type="button" sx={{ p: "11px" }} aria-label="جستجو">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleSearch}
          placeholder='جستجوی عبارت مورد نظر ...'
        />
      </Grid>
        
    );
};

export default Search;