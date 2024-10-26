import { Fragment, useState } from "react";
import Message from "./msg";
import axios from "axios";
import Loader from "./progress";




export default function Fileupload(){
    const  [file, setfile]= useState('');
    const [filename, setfilename]= useState('choose file');
    const [uploadfile, setuploadfile]= useState({});
    const [state, setstate]= useState(false);
    const [msg, setmsg]= useState('');
    const [percnetUpload, setpercentUpload]= useState(0);

    function onchange(e){
      
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);

    }
    async function onsubmit(e){
        e.preventDefault();
        const formdata= new FormData();
        formdata.append('file', file);

try {
    const res= await axios.post('http://localhost:5000/upload', formdata, {
        headers:{
        'Content-Type':"multipart/form-data"
        },
        onUploadProgress: ProgressEvent=>{
            setpercentUpload(parseInt(Math.round((ProgressEvent.loaded*100)/ProgressEvent.total)));
            setTimeout(() => setpercentUpload(0), 10000)


        }

    }

 
)

console.log(res);
const {Filename, Filepath}= res.data;
console.log(Filename, Filepath);
setuploadfile({Filename, Filepath});
setstate(true);
setmsg("THe file is uploaded");




    
} catch (error) {
    setmsg("Some error has come ");



    
    
}

    
    }

    return (
     <Fragment>
        <form onSubmit={onsubmit}>
        {msg ? <Message msg={msg}/> : null}

        <div>
  <label htmlFor="formFileLg" className="form-label">{filename}</label>
  <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={onchange}/>
</div>
<Loader percent={percnetUpload} />
<input type="submit" value="upload" className="btn btn-primary btn-block mt-4 mb-4 "  />
        </form>
        <div className="container">
        {
            state ? <div className="row mt-7 ">
                <div>
                    <h5 className="font-weight-normal mb-3">{uploadfile.Filename}</h5>
                    <img className="w-25 h-25 rounded" src={uploadfile.Filepath} alt="uploaded img" />
                </div>
            </div> : <div className="mt-5 "> drop you files over there </div>
        }
        </div>
      
     </Fragment>
    )
}