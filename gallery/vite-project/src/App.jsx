import { useEffect, useState } from 'react'
import Load from './components/loading';
import Search from './components/search';
import NOTFound from './components/noTfound';

import ImgCard from './components/ImgCard'

import './App.css'

function App() {
  const[image,setImage]=useState([]);
  const[isloading, setloading]=useState(true);
  const[term , setterm]= useState('');
  const apiKey = import.meta.env.VITE_API_KEY;



  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`).then(res=>res.json())
    .then(data=>{
      const delay=500;
      setTimeout(() => {
        setImage(data.hits)
      setloading(false)
      }, delay);
      
      
    }).catch(err=>console.log(err));
    return ()=>{

    };

  }, [term])
  return (
    
<div className="mx-auto container">
<Search searchText={(text)=>setterm(text)}/>

  {!isloading && image.length==0 && <NOTFound/>}

{
  isloading ? <Load/> :
   <div className="grid grid-cols-3 gap-4 mt-8">
   
  {image.map(img=>(
    <ImgCard  key={img.id} images={img}/>
  ))}
</div>
}
</div>
 
       
  )
}

export default App
