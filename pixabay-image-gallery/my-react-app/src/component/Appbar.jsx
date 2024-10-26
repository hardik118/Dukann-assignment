import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
export default function Appbar(){
    return (
        <div>
        <React.Fragment>
        <div style={{
      backgroundColor: '#333', // Dark background
      color: '#fff', // White text
      padding: '10px',
      textAlign: 'center',
      marginBottom:'20px'
    }}>
        <AppBar  style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          Your Own Search
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
        </React.Fragment>


        </div>
    )
}

