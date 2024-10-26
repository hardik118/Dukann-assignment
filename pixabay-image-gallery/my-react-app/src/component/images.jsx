import React , {useState}from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Example icon

function MyCard({images,setdialog, setimg}) {
  function handledialog(){
    setdialog(true);
    setimg(images.webformatURL)
  }

  return (
    <div style={{marginLeft:"30px", marginTop:"10px"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={images.webformatURL}
        alt="Card Image"
      />
      <CardContent>
        <Typography gutterBottom component="div">
       by- {images.user}
        </Typography>
        
      </CardContent>
      <IconButton 
      size="small" 
      color="primary" 
      aria-label="delete"
      onClick={handledialog}
      
    >
      <FavoriteIcon />
    </IconButton>
      
    </Card>
    </div>
  );
}

export default MyCard;
