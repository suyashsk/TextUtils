import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const[text,setText] = useState("");


  const ref = useRef();
  function copyClip(){
    if(text === ''){
      toast.error("Text area is empty")
      return;
    }
    ref.current.select()
    window.navigator.clipboard.writeText(text)
    toast.success("Text Copied to Clipboard")
  }

  function removeExtraSpace(){
    if(text === ''){
      toast.error("Text area is empty")
      return;
    }
    const temp = text.trim().split(/\s+/).join(" ")
    setText(temp)
    toast.success("Extra spaces are removed")
  }
  function clearText(){
    setText("")
    toast.success("Text cleard")
  }

  function lowerCase(){
    if(text === ''){
      toast.error("Text area is empty")
      return;
    }
    const temp = text.toLowerCase()
    setText(temp)
    toast.success("Text converted to lowercase")
  }
  function upperCase(){
    if(text === ''){
      toast.error("Text area is empty")
      return;
    }
    const temp = text.toUpperCase()
    setText(temp)
    toast.success("Text converted to uppercase")
  }
  return (
    <div>
      <div className='title'>
        <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      </div>
      <div className='text_area'>
        <p className='entertext'>Enter Your Text Here:</p>
        <textarea className='text_container' value={text} onChange={(e)=>setText(e.currentTarget.value)} placeholder='Enter your text here' ref={ref} cols={100} rows={18}/>
        <div className='various_btns'>
        <Button variant="contained" style={{backgroundColor:"#0d6efd"}} onClick={upperCase}>Convert Uppercase</Button>
        <Button variant="contained" style={{backgroundColor:"#0d6efd"}} onClick={lowerCase}>Convert LowerCase</Button>
        <Button variant="contained" style={{backgroundColor:"#dc3545"}} onClick={clearText}>Clear Text</Button>
        <Button variant="contained" style={{backgroundColor:"#198754"}} onClick={copyClip}>Copy to Clipboard</Button>
        <Button variant="contained" style={{backgroundColor:"#0d6efd"}} onClick={removeExtraSpace}>Remove Extra Spaces</Button>
        </div>
      </div>
      
      <div className='summary_container'>
        <h2 className='summary_heading'>Summery of Your Text </h2>
        <p className='wordscount'>Number of Words: {text.split(/\s+/).filter((element)=>{
          return element.length !==0;
        }).length}  </p>
        <p className='charcount'>Number of Characters: {text.length} </p>
        <p className='readtime'>Reading time: {0.008 * text.split(/\s+/).filter((element)=>{
          return element.length !==0;
        }).length} </p>
        <label className='pre'>Preview Document</label>
        <textarea className='preview' rows={10} cols={100} readOnly value={text} />
      </div>
      <ToastContainer />
      <iframe
      src="https://app.gpt-trainer.com/widget/b1f22ce7d1884e5eb1b6be414d186d94"
      width="100%"
      height="500px"
      frameborder="0"
    allow="clipboard-read; clipboard-write"
></iframe>

    </div>
  )
}

export default Home