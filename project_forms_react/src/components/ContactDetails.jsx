import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css"

export class ContactDetails extends Component {
continue=e=>{
    e.preventDefault();
    this.props.nextStep();


}
previous=e=>{
    e.preventDefault();
    this.props.prevStep();

}
    
  render() {
    const{values, handlesChanges}= this.props;

    return (
     
        <React.Fragment>
           
        <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          User Detail Form
        </Typography>
      </Toolbar>
    </AppBar>
              <div className='center-container'>
              <TextField
        label="phonenumber"
        variant="outlined"
        fullWidth
        onChange={handlesChanges("phonenumber")}
        defaultValue={values.phonenumber}
        margin="normal"
        style={{ maxWidth: '400px' }} // Optional: to limit width
      />
               <TextField
        label="password"
        variant="outlined"
        fullWidth
        onChange={handlesChanges("password")}
        defaultValue={values.password}
        margin="normal"
        style={{ maxWidth: '400px' }} // Optional: to limit width
      />
      <div className='center-but'>
        <Button
        variant="contained"
        color="primary"
        onClick={this.previous}
    
      >
        previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={this.continue}
    
      >
        Continue
      </Button>
      </div>

</div>
        </React.Fragment>
      
      
    )
  }
}

export default ContactDetails