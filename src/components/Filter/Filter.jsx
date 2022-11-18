import React from 'react';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Grid, Button, Typography } from '@mui/material';
// import "../Filter/Filter.style.css"
const filterData = [
    { id: 1, title: 'allData' },
    { id: 2, title: 'favoriteData' },
    { id: 3, title: 'unfavoriteData' },
  ]
const Filter = ({ setFilter }) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }
    
    return (
        <Grid display={"flex"} alignItems={"center"} xs={12} justifyContent={"space-between"} p={1} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <Grid   >
                <FilterAltOffIcon />
            </Grid>
            <Grid display={"flex"}>
                {filterData.map(filterBtn => (
                    <p >
                        <input name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)} />
                        {filterBtn.title}
                    </p>

                ))}
            </Grid>

        </Grid>
    );
};

export default Filter;