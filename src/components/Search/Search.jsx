import React from 'react';
import { Grid} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
const Search = ({search,setSearch}) => {
      const handleSearch = e =>{
         setSearch(e.target.value)
      }
 
    return (
        <Grid item display={'flex'} sx={{ border: "1px solid #8888 ", borderRadius: "10px" }} xs={12} mb={2}>
        <IconButton type="button" sx={{ p: "11px" }} aria-label="جستجو">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleSearch}
          placeholder='Search...'
        />
      </Grid>
        
    );
};

export default Search;