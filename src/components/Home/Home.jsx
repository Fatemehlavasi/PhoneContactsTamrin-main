import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Card from '../Card/Card';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { Grid, Typography } from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import pic from '../../Imags/contact.png'
const Home = ({ todos, setTodos, setForm, setFormStatus }) => {
    // search
    const [search, setSearch] = useState('')
    //  filter
    const [filter, setFilter] = useState('allData')
    return (
        <Grid container justifyContent={'center'} >
            <Grid item p={1} md={10} xs={12} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Grid >
                    <Grid justifyContent={'space-between'} display={"flex"} alignItems={"center"} p={2} mt={2}>
                        <Grid>
                            <Typography variant='h5'>PhoneContect</Typography>
                            contact:{todos.length}
                        </Grid>
                        <Grid>
                            <Link to={`/Form`}>
                                {/* <GroupAddIcon /> */}
                                    <img width={"70px"} src={pic} alt="" />
                            </Link>
                        </Grid>

                    </Grid >
                    <Grid mt={8}>
                        <Grid display={"flex"}>
                            <Filter filter={filter} setFilter={setFilter} />
                        </Grid>
                        <Grid mt={5}>
                            <Search search={search} setSearch={setSearch} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid className='container-card' >
                    <TableContainer component={Paper} className={'MainPhone_Table'}>
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableBody>

                                {/* <Delete handelDelet={handelDelet} showMsg={showMsg} handelShowDisMsg={handelShowDisMsg}  handelShowMsg={handelShowMsg} /> */}
                                {todos.filter(todo => todo.fullname.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : todo.state === filter)).map(todo => (
                                    <Card todo={todo} setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} />
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;