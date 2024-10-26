import { useState } from "react";
import { TextField } from "@mui/material"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';


export default function Form({searchText, getLimit}){

    const [tag, setTag]= useState('');
const [limit, setLimit]= useState(10);


  
    const handleChange = (event) => {
       setLimit(event.target.value);
      
    };
    const handleTag = (event) => {
      setTag(event.target.value);
     
   };



    function handleSubmit(e){
      e.preventDefault();
      searchText(tag);
      getLimit(limit);
      console.log(tag);


      
    }

    return (
     <div style={{
        marginTop:'20PX',
        padding: '20px',
        backgroundColor: '#f4f4f4', // Light background for form content
        height: '100%' // Ensures it stretches to fill the space
      }}>
        <TextField 
        
         label="Search"
         variant="outlined"
         value={tag}
         onChange={handleTag}
         
         margin="normal"
         style={{ maxWidth: '400px'}} // Optional: to limit width
       />

<FormControl fullWidth>
      <InputLabel id="dropdown-label">Select Option</InputLabel>
      <Select
        labelId="dropdown-label"
        value={limit}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
    </FormControl>
    <br />
    <br />
    <Button 
      variant="Acontained" 
      color="primary" 
      onClick={handleSubmit}
    >
      Submit
    </Button>
     


     

    </div>
    )
   
}