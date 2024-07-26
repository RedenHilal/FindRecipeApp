import { Link } from 'react-router-dom'
import React, { useEffect, useState,useRef } from "react";
import './navbar.css'


function Navbar(props){
    const data = props.recipes
    const [input,setInput] = useState('')
    const [recipe,setRecipe]=useState(null)
    const [show,setShow] = useState(true)

    const menuref = new useRef()

    useEffect(()=>{
      let handler = (e)=>{
        if(!menuref.current.contains(e.target)){
          setShow(true)
        }
      }
      document.addEventListener('mousedown',handler)
      return (()=>document.removeEventListener('mousedown',handler))
    },[])

    useEffect(()=>{
      setRecipe(data)
    },[data])

    function handleChange(event){
        setInput(event.target.value)
        props.onRegexChange(event.target.value)
    }

    return(
        <div className="Navbar">
          <div>
            <nav>
                <input type="text" placeholder="What are you looking for..."
                value={input} onChange={handleChange} onClick={()=>setShow(false)}/>
                <Link to='/' onClick={()=>props.onButtonClick()} ><button >Search</button></Link>
                
            </nav>
            <ul key='lol' ref={menuref} className={show? 'hidden':'ka'}>
                {recipe?recipe.hits.map((e,i)=>
                  <Link key={i} to={`recipe/b/${i}`} onClick={()=>props.setNav(recipe)} className='navLink'>
                    <li >{e.recipe.label}</li>
                  </Link>
                ):<li key='special'>Edamame is delicioous</li>}
            </ul>
        </div>
        </div>
    )
}

export default Navbar