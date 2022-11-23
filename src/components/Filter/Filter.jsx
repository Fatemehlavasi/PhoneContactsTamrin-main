import React from 'react';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Grid, Button, Typography } from '@mui/material';

const filterData = [
    {id: 1, title: 'allContact'},
    {id: 2, title: 'favorite'},
    {id: 3, title: 'unFavorite'},
  ]
const Filter = ({ setFilter , filter }) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }
    return (
        <Grid display={"flex"} alignItems={"center"} xs={12} justifyContent={"space-between"} p={1} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <Grid   >
                <FilterAltOffIcon />
            </Grid>
          
            <Grid gap={3} md={4} display={"flex"} justifyContent={"space-around"}>
            {filterData.map(filterBtn => (
                        <Button onClick={() => handleFilterBtn(filterBtn.title)}
                                style={{backgroundColor: filterBtn.title === filter ? '#FCA008' : 'white'}}>
                            {filterBtn.title}
                        </Button>
                    ))}
            </Grid>
              

        </Grid>
    );
};

export default Filter;