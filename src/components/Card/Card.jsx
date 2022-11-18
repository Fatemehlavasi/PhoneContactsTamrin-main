import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import Delete from "../Delete/Delete"
import { grey } from '@mui/material/colors';
const Card = ({ setForm, setFormStatus, setTodos, todos, todo }) => {

    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    console.log(handelCheck)
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    //  Delete
    const [showMsg, setShowMag] = useState('none');
    const [user, setuser] = useState('0')

    const handelDelet = () => {
        setTodos(todos.filter(todo => todo.user !== user))
        handelShowDisMsg()

    }

    const handelShowMsg = user => {
        setShowMag('flex')
        setuser(user)

    }
    const handelShowDisMsg = () => {
        setShowMag('none')
    }
    // del

    return (
        <>
            <TableRow key={user.id}>
                <TableCell sx={{ width: '5%' }}>
                    <Link to={`/contacts/${todo.user}`}>
                        <img style={{ width: '50px' }} src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`} alt="avatar" />
                    </Link>
                </TableCell>
                <TableCell>
                    <Grid>
                        {todo.fullname}
                    </Grid>
                    <Grid style={{ color: '#747d8c' }}>
                        {todo.phone}
                    </Grid>
                </TableCell>
                <TableCell>
                    <Grid sx={{ display: { md: "flex", xs: "none" }, width: '5%' }}>
                        {todo.City}
                    </Grid>
                </TableCell>
                <TableCell>
                    <Grid sx={{ display: { md: "flex", xs: "none" } }}>
                        {todo.email}
                    </Grid>
                </TableCell>
                <TableCell sx={{ width: '1%' }}>
                    <Grid onClick={() => handelCheck(todo.user)}  >
                        {todo.state ? <i class="fa-solid fa-heart text-danger" ></i> : <i class="fa-regular fa-heart " ></i>}
                    </Grid>
                </TableCell>
                <TableCell sx={{ width: '4%' }}>
                    <Grid >
                        <Delete handelDelet={handelDelet} showMsg={showMsg} handelShowDisMsg={handelShowDisMsg} />
                    </Grid>
                </TableCell>
                <TableCell sx={{ width: '1%' }}><DeleteIcon style={{ cursor: 'pointer' }} onClick={() => handelShowMsg(todo.user)} /></TableCell>
                <TableCell sx={{ width: '1%' }} >  <Link to={`/Form`}><EditIcon sx={{ cursor: 'pointer' }} onClick={() => handleUpdate(todo)} /> </Link></TableCell>
            </TableRow>
        </>
    );

};

export default Card;