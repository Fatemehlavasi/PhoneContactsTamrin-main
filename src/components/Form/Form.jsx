import { Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import pic from '../../Imags/pic.png'
const Form = ({ setTodos, todos, form, setForm, setFormStatus, FormStatus }) => {
    const back = useNavigate();

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        back('/')
        event.preventDefault()
        if (FormStatus === 'add') {
            setTodos([...todos, { user: Math.floor(Math.random() * 1000), fullname: form.fullname, phone: form.phone, City: form.City, email: form.email }])
        }
        else {
            setTodos(todos.map(todo => todo.user === form.user ? form : todo))
        }
        setForm({ fullname: '', phone: '', City: '', email: '' })
        setFormStatus('add')
    }

 
    return (

        <Grid container justifyContent={'center'} flexDirection={'column'} alignItems={'center'} dir={'rtl'} xs={12} >
            <Grid p={2} bgcolor="#052E67" sx={{width:{ lg:"80%" , xs:"100%"}}} dir={'ltr'}>
                <Typography color={"#FFF"} variant='h4'>ContactsUs</Typography >
                <Typography color={"#FFF"}>The best contacts I have and I love them</Typography>

            </Grid>
            <Grid display={"flex"} justifyContent={"space-around"} alignItems={"center"} mt={8} sx={{ flexDirection: { md: "row", xs: "column" } }}>
                <Grid  sx={{display:{xs:"none" , md:"flex"}}}>
                        <img src={pic} alt="" />
                </Grid>
                <Grid>
                    <form onSubmit={handleSubmit}  >
                        <Grid container maxWidth={'600px'} spacing={3} p={2} >
                            <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                                <TextField name={'fullname'} value={form.fullname} onChange={handleChange} required sx={{
                                    width: '80%',
                                    '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                                }} label="ّFullName" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                                <TextField type={"number"} name={'phone'} value={form.phone} onChange={handleChange} required sx={{
                                    width: '80%',
                                    '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                                }} label="Phone" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                                <TextField name={'City'} value={form.City} onChange={handleChange} required sx={{
                                    width: '80%',
                                    '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                                }} label="City" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                                <TextField name={'email'} value={form.email} onChange={handleChange} required
                                    sx={{
                                        width: '80%',
                                        '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                                    }}
                                    label="email" variant="outlined" />

                            </Grid>

                            <Grid display={"flex"} mr={5} mt={2} md={9.5} justifyContent={"flex-end"}  >
                                <Button  variant='contained' type='submit' onClick={handleSubmit} className="btn-submit" >
                                    {FormStatus === 'add' ? <PersonAddIcon /> : <CreateIcon />}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid sx={{ cursor: 'pointer' }} item justifyContent={'flex-end'}>
                <Link to={`/`}>
                   <KeyboardBackspaceIcon />
                </Link>
            </Grid>
        </Grid>
    );
};

export default Form;