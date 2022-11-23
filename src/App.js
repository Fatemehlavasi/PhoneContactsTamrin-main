import React,{useState} from 'react';
import "./App.css"
import Home from './components/Home/Home';
import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom";
import Form from './components/Form/Form';
import CardView from './components/Page/CardView';
import { DataForm } from './components/Data/Data';

const App =()=> {
   const [todos, setTodos] = useState(DataForm)
   const [form, setForm] = useState({  fullname: '', phone: '',  City: '', email: '' })
  const [FormStatus, setFormStatus] = useState('add')
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home  todos={todos} setTodos={setTodos} setForm={setForm} setFormStatus={setFormStatus}/>,
    },
    {
        path: "/Form",
        element: <Form  setTodos={setTodos} todos={todos} form={form}setForm={setForm} setFormStatus={setFormStatus} FormStatus={FormStatus}/>,
    },
    {
      path: "/contacts/:user",
      element: <CardView todos={todos} />,
    },
  ]);
    return (
      <RouterProvider router={router} />
    );

}

export default App;