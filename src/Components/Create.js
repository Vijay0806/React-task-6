import axios from 'axios';
import React,{useState} from 'react'
import { FormField ,Form,Button} from 'semantic-ui-react'
import { API_URL } from '../Constrants/URL';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [name, setName] = useState("");
  const [classs, setClasss] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [tamilTeacher, setTamilTeacher] = useState("");
  const [englishTeacher, setEnglishTeacher] = useState("");
  const [mathsTeacher, setMathsTeacher] = useState("");
  const navigate=useNavigate();

  const postData= async()=>{
  await axios.post(API_URL,{
    name,classs,rollNumber,tamilTeacher,englishTeacher,mathsTeacher
 })
 navigate('/read');
  console.log(postData) 
//   console.log(name);
//     console.log(classs);
//     console.log(tamilTeacher);
//     console.log(englishTeacher);
//     console.log(mathsTeacher);
     }
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

            <Button id='button' onClick={postData}>Submit</Button>
            
         </Form>
         )

}

export default Create