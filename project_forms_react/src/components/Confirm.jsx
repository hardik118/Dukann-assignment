import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem,ListItemText  } from '@mui/material';
import "../App.css"

export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    
    
    }
    previous=e=>{
        e.preventDefault();
        this.props.prevStep();
    
    }
  render() {
    const {values}= this.props;

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
            
   <List>
    <ListItem>
        <ListItemText primary="Firstname" secondary={values.firstname}/>
    </ListItem>
    <ListItem>
        <ListItemText primary="Lastname" secondary={values.firstname}/>
    </ListItem>
    <ListItem>
        <ListItemText primary="Email" secondary={values.lastname}/>
    </ListItem>
    <ListItem>
        <ListItemText primary="Phonenumber" secondary={values.phonenumber}/>
    </ListItem>
    <ListItem>
        <ListItemText primary="Password" secondary={values.password}/>
    </ListItem>
    <ListItem>
        <ListItemText primary="City" secondary={values.city}/>
    </ListItem>



   </List>
         
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

export default Confirm