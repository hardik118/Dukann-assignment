import { useEffect, useState } from "react";
import  Appbar from "./component/Appbar"
import Form from "./component/Form";
import Mycard from "./component/images"
import SkeletonLoader from "./component/loading";
import {Dialog} from "./component/dialog";

function App() {
  const[image, setImage]=useState([]);
  const[term,setTerm]= useState(' ');
  const[num, setNum]=useState(10);
  const[isload, setload]= useState(true);
  const [dialog, setdialog]=useState(false);
  const [img, setimg]=useState('');




  

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`).then(res=>res.json()).then(data=>
      {const delay =500;
        setTimeout(() => {
          setImage(data.hits)
          setload(false);
        }, delay);
       


      }
    
    ).catch(err=>console.log(err));
  },[term])
 const imagelimit= image.slice(0, num);
 console.log(dialog);
return (

  <div>

    
    
<Appbar></Appbar>
{dialog && <Dialog setdialog={setdialog} webformatURL={img}/>}

<Form searchText={(tag)=>setTerm(tag)} getLimit={(limit)=>setNum(limit)} />

{
  isload ? <SkeletonLoader/> : <div   style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:"10px" }} 
  >
{
  imagelimit.map(img=>(
<Mycard key={img.id} images={img}  setdialog={setdialog} setimg={setimg}
/>



  ))
  
}


</div>
}

</div>
  )
}

export default App
