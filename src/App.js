//import logo from './logo.svg';
import './App.css';
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from "./Components/Update"
import  Box  from '@mui/material/Box';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes,Route,useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
         <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
           <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit"  onClick={() => navigate("/create")}>Add</Button>   
            <Button color="inherit"  onClick={() => navigate("/read")}>Details</Button> 
            <Button color="inherit"  onClick={() => navigate("/update")}>Edit Details</Button> 
          </Toolbar>          
          </AppBar>
         </Box>
      <h1 style={{color:"blueviolet"}}>  STUDENT & TEACHER MANAGEMENT </h1>
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>


    </div>
  );
}

export default App;
