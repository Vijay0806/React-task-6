import axios from 'axios';
import React,{useState,useEffect} from 'react'
import{Table,Button} from 'semantic-ui-react'
import { API_URL } from '../Constrants/URL';
import { useNavigate } from 'react-router-dom';

function Read() {
            const[apiData,setAPIData]=useState([]);
            const navigate=useNavigate();
            
            const updateUser=({ name, classs, rollNumber, tamilTeacher, englishTeacher, mathsTeacher, id }) =>{
                localStorage.setItem('id',id);
                localStorage.setItem("name", name);
                localStorage.setItem("classs", classs);
                localStorage.setItem("rollNumber", rollNumber);
                localStorage.setItem("tamilTeacher", tamilTeacher);
                localStorage.setItem("englishTeacher", englishTeacher);
                localStorage.setItem("mathsTeacher", mathsTeacher);
                
                navigate('/update')
            }
            const deleteUser=async (id)=>{
             await axios.delete(API_URL+ "/"+ id);
             callGetAPI();
            }
            const callGetAPI=async () =>{
            const resp= await axios.get(API_URL);
            setAPIData(resp.data);
            }
                useEffect(() => {
                    callGetAPI();
                    }, []);

  return (
    <div className='read'>
    <Table singleLine>
     <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Roll Number</Table.HeaderCell>
          <Table.HeaderCell>Tamil Teacher</Table.HeaderCell>
          <Table.HeaderCell>English Teacher</Table.HeaderCell>       
          <Table.HeaderCell>Maths Teacher</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>  
     </Table.Header>
     <Table.Body>
        {
            apiData.map(data=>(
                <Table.Row key={data.id}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.classs}</Table.Cell>
                <Table.Cell>{data.rollNumber}</Table.Cell>
                <Table.Cell>{data.tamilTeacher}</Table.Cell>
                <Table.Cell>{data.englishTeacher}</Table.Cell>
                <Table.Cell>{data.mathsTeacher}</Table.Cell>
                <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button> </Table.Cell>
                <Table.Cell><Button onClick={()=>updateUser(data)}>Update</Button></Table.Cell>
            </Table.Row>
            ))
        }
        
     </Table.Body>
    </Table>
    </div>
  )
}

export default Read