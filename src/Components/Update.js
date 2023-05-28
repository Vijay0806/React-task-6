import React,{useState,useEffect} from 'react'
import { FormField ,Form,Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Constrants/URL';
import axios from 'axios';

function Update() {
    const [name, setName] = useState("");
    const [classs, setClasss] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [tamilTeacher, setTamilTeacher] = useState("");
    const [englishTeacher, setEnglishTeacher] = useState("");
    const [mathsTeacher, setMathsTeacher] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const updateUser = async () => {
        await axios.put(API_URL + "/" + id, {
          name, classs, rollNumber, tamilTeacher, englishTeacher, mathsTeacher
        })
        navigate("/read")
    }
    
    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName (localStorage.getItem('name'));
        setClasss(localStorage.getItem('classs'));
        setTamilTeacher(localStorage.getItem("tamilTeacher"))
        setRollNumber(localStorage.getItem("rollNumber"))
        setEnglishTeacher(localStorage.getItem("mathsTeacher"))
        setMathsTeacher(localStorage.getItem("englishTeacher"))
    },[])
  return (
    <Form>
            <FormField>
                <label>Name</label>
                <input placeholder='Enter The Name' value={name} 
                 onChange={event=>setName(event.target.value)} />
            </FormField> 
            <FormField>
                <label>Class</label>
                <input placeholder='Enter The Class' value={classs} 
                onChange={event=>setClasss(event.target.value)} />
            </FormField>
            <FormField>
                <label>Roll Number</label>
                <input placeholder='Enter The RollNumber' value={rollNumber}
                onChange={event=>setRollNumber(event.target.value)}  /> 
            </FormField>
            <FormField>
                <label> Tamil Teacher</label>
                <input placeholder='Enter The Teacher Name' value={tamilTeacher} 
                onChange={event=>setTamilTeacher(event.target.value)}  /> 
            </FormField>
            <FormField>
                <label>English Teacher</label>
                <input placeholder='Enter The Teacher Name' value={englishTeacher} 
                onChange={event=>setEnglishTeacher(event.target.value)}  /> 
            </FormField><br></br>
            <FormField>
                <label>Maths Teacher</label>
                <input placeholder='Enter The Teacher Name' value={mathsTeacher} 
                onChange={event=>setMathsTeacher(event.target.value)} /> 
            </FormField> <br />

            <Button id='button' onClick={updateUser}>Update</Button>
            
         </Form>
    
  )
}

export default Update