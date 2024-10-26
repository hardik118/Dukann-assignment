import React, { Component } from 'react'
import "../App.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export class Sucess extends Component {
  render() {
    return (
        <div>
        <React.Fragment>
         <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          User Detail Form
        </Typography>
      </Toolbar>
    </AppBar>
        
      <div className='center-container'>
        <div className='sucessbox'>
           <div className='done'>
            <h2>Success</h2>
           </div>

        </div>

      </div>
      </React.Fragment>
      </div>
    )
  }
}

export default Sucess