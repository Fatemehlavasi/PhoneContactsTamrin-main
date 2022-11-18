import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid, Typography } from '@mui/material';

const CardView = ({ todos }) => {

    const [contact, setContact] = useState({})
    const { user } = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user === Number(user))[0])
    }, [])

    return (
        <Grid container justifyContent={'center'} mt={20} >
            <Grid container alignItems={'center'} item p={1} direction={'column'} justifyContent={'center'} md={4} xs={12} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Grid container item mt={1} justifyContent={'center'} >
                    <Grid item border={1} borderRadius={40} height={"90px"} width={"90px"} p={1} mb={5}>
                        <img src={`https://avatars.dicebear.com/api/avataaars/:${contact.user}.svg`} alt="avatar" />
                    </Grid>
                    <Grid item bgcolor={"blue"} xs={12} justifyContent={'center'} >
                        <Typography textAlign={'center'}>fullname : {contact.fullname}</Typography>
                    </Grid>
                </Grid>
                <Grid  >
                    <Grid >
                        <h5> phone : {contact.phone}</h5>
                    </Grid>
                    <Grid class="card-body" style={{ cursor: 'pointer' }}>
                        <h5>state : {contact.state ? <i class="fa-solid fa-heart text-danger" ></i> : <i class="fa-regular fa-heart " ></i>}</h5>
                    </Grid>
                    <Grid class="card-body" >
                        <h5>City : {contact.City}</h5>
                    </Grid>
                    <Grid class="card-body" >
                        <h5> Email :{contact.email}</h5>
                        {/* <TextField disabled value={contact.email} id="input-with-icon-textfield" label="User Name" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle/></InputAdornment>),}} variant="standard"/> */}
                    </Grid>
                </Grid>
                <Link to={'/'}>
                    <KeyboardBackspaceIcon />
                </Link>
            </Grid>
        </Grid>
    );
};

export default CardView;