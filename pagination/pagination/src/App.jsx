import { useState, useEffect } from 'react'
import axios from "axios";
import Post from './component/post';
import NAV from './component/navbar';
import Pagination from './component/pagination';


import './App.css'

function App() {
  const[post , setpost]=useState([]);
  const [loading, setloading]=useState(false);
  const[pre_page, setpre_page]= useState(1);
  const[postCount, setpostcount]=useState(10);


  useEffect(()=>{
    const callPost= async ()=>{
      setloading(true)
      const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
      setpost(res.data);
      setloading(false);


    }
    callPost();

  },[])


  
const indexoflastpost=pre_page*postCount;
const indexoffirstpost=indexoflastpost- postCount;
const slicepost=post.slice(indexoffirstpost, indexoflastpost);
  
  return <div>
    <NAV/>
  {
    slicepost.map(p=>(
      <Post key={p.id} post={p} loading={loading}/>
    ))
  }
  <Pagination totalpages={post.length} postperpage={postCount} setpre_page={setpre_page} />
  </div>
}

export default App
