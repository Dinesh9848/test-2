import React from 'react';
import{Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ClientsList from './ClientsList';
import { padding } from '@mui/system';
import{Link,useNavigate} from 'react-router-dom';


function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, number, gender) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Number',number);
        localStorage.setItem('Gender',gender);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = ClientsList.map(function(e){
            return e.id
        }).indexOf(id);

        ClientsList.splice(index,1)

        history('/');
    }
    return(
        <div style={{margin:"20px"}}>
            <Table style={{margin:"20px"}}>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ClientsList && ClientsList.length > 0
                        ?
                        ClientsList.map((item) =>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Number}
                                    </td>
                                    <td>
                                        {item.Gender}
                                    </td>
                                    <td>
                                    <Link to={`/edit`}>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Number, item.Gender)}>Edit</Button>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </Link>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "There is no data avalible..."
                    }
                </tbody>
            </Table>
            <br>                
            </br>
            <Link className='d-grid gap-2' to="/create">
                <Button size='lg'>Create</Button>
            </Link>
        </div>
    )
}

export default Home;