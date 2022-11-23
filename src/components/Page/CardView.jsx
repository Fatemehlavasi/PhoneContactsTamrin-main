import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const CardView = ({ todos }) => {
    const [contact, setContact] = useState({})
    const { user } = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user === Number(user))[0])
    }, [])

    return (
        <Grid container display={"flex"} justifyContent={'center'} mt={15} >
            <Grid container md={3} item mt={1} pt={5} justifyContent={'center'} borderRadius={4} bgcolor={"#FD9A07"} sx={{bgcolor:{ xs: "#fff", md: "#FD9A07" } , p:{ xs: "35px", md: "0"}}} >
                    <Grid item border={1} borderRadius={40} height={"90px"} width={"90px"} mt={2} p={1} >
                        <img src={`https://avatars.dicebear.com/api/avataaars/:${contact.user}.svg`} alt="avatar" />
                    </Grid>
                    <Grid item  xs={12} justifyContent={'center'} >
                        <Typography variant='h5' textAlign={'center'}> {contact.fullname}</Typography>
                    </Grid>
            </Grid>
            <Grid sx={{'& > :not(style)': {m: 1, width: '100%'}}} ml={1} md={5} xs={12}>
                <TextField disabled value={contact.fullname} id="input-with-icon-textfield" label="User Name" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle/></InputAdornment>),}} variant="standard"/>
                <TextField disabled value={contact.phone} id="input-with-icon-textfield" label="Number" InputProps={{startAdornment: (<InputAdornment position="start"><PhoneIcon/></InputAdornment>),}} variant="standard"/>
                <TextField disabled value={contact.City} id="input-with-icon-textfield" label="City" InputProps={{startAdornment: (<InputAdornment position="start"><LocationCityIcon/></InputAdornment>),}} variant="standard"/>
                <TextField disabled value={contact.email} id="input-with-icon-textfield" label="Email" InputProps={{startAdornment: (<InputAdornment position="start"><ContactMailIcon/></InputAdornment>),}} variant="standard"/>
            <Grid display={"flex"} alignItems={"center"} justifyContent={"space-between"}  mt={5}  color={"red"}>
              <Typography variant='h6' color={"#000"}>  Favorite Contact</Typography>
                <h1>{contact.favorite ==="favorite"  ? <Favorite/> : <FavoriteBorder/>}</h1>   
            </Grid>
                <Link to={'/'}>
                        <KeyboardBackspaceIcon />
                </Link>
            </Grid>
        </Grid>
    );
};

export default CardView;