import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import ClientsList from './ClientsList';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'

const Edit = () => {

    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [gender,setGender] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = ClientsList.map(function(e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a,b,c = ClientsList[index];
        a.Name = name;
        b.Number = number;
        c.Gender = gender;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setNumber(localStorage.getItem('Number'))
        setId(localStorage.getItem('Id'))
    },[])


  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15px"}}>
            <Form.Group className='mb-3' controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formNumber">
                <Form.Control type="text" placeholder="Enter Number" value={number} required onChange={(e) => setNumber(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formGender">
                <Form.Control type="text" placeholder="Enter Gender" value={gender} required onChange={(e) => setGender(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>
  )
}

export default Edit