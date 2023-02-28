import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import ClientsList from './ClientsList';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'

const Add = () => {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [gender,setGender] = useState('');

    let history = useNavigate();
  
     const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = number,
        c = gender;

        ClientsList.push({id: uniqueId, Name : a, Number : b, Gender : c});

        history("/")

     }
  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15px"}}>
            <Form.Group className='mb-3' controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formNumber">
                <Form.Control type="text" placeholder="Enter Number" required onChange={(e) => setNumber(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formGender">
                <Form.Control type="text" placeholder="Enter Gender" required onChange={(e) => setGender(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default Add