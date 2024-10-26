import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css"

export class FormDetails extends Component {
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();

  }
  render() {
   
    const { values, handlesChanges } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          User Deatil Form
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="center-container">
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        onChange={handlesChanges("firstname")}
        defaultValue={values.firstname}
        margin="normal"
        style={{ maxWidth: '400px' }} // Optional: to limit width
      />
    
      <TextField
        label="last Name"
        variant="outlined"
        fullWidth
        onChange={handlesChanges("lastname")}
        defaultValue={values.lastname}
        margin="normal"
        style={{ maxWidth: '400px' }} // Optional: to limit width
      />
     
      <TextField
        label="email"
        variant="outlined"
        fullWidth
        onChange={handlesChanges("email")}
        defaultValue={values.email}
        margin="normal"
        style={{ maxWidth: '400px' }} // Optional: to limit width
      />
       
      <Button
        variant="contained"
        color="primary"
        onClick={this.continue}
    
      >
        Continue
      </Button>
     
    
    </div>
   
       
      </React.Fragment>
    );
  }
}

export default FormDetails;
