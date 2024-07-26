import { FoodCategories } from "../nameResource/categories"
import React,{useEffect, useState} from "react"
import './categoryComp.css'


function Category(props){
    const [activeElements, setActiveElements] = useState({})
    const [labelType,setLabelType] = useState(null)
    const [Ctype, setCtype] = useState(Object.keys(FoodCategories))

    const [filter,setFilter] = useState([])
    useEffect(()=>{
        setCtype(Object.keys(FoodCategories))
    },[FoodCategories])

    function handleFilter (event,e ){
        setActiveElements(prev => (
            {...prev,
                [e.apiParameter]:!prev[e.apiParameter]
            }
        ))
        
        if(filter.includes(`${labelType}=${encodeURIComponent(e.apiParameter)}`)){
            setFilter([...filter.filter((element)=>element!==`${labelType}=${encodeURIComponent(e.apiParameter)}`)])
            return
        }
        setFilter([...filter,`${labelType}=${encodeURIComponent(e.apiParameter)}`])
        
    }
    useEffect(()=>{
        props.LabelSet(filter.join('&'))
    },[filter])

    return(
        <div className="CategoryContainer">
            <div className="labelType">
                {Ctype.map((e,i)=>
                    <div className={`label ${e}`} key={i} 
                    onClick={()=>e===labelType? setLabelType(null):setLabelType(e)}>{e}
                    </div>)}
            </div>
            <div className="labelDisplay">
                {labelType? FoodCategories[labelType].map((element,i)=><div key={i} className={`${element.apiParameter} displayLabel ${activeElements[element.apiParameter]? 'active':''}`} onClick={(e)=>{handleFilter(e,element)}} >{element.webLabel}</div>):
                <div>Choose a filter?</div>
                }
            </div>
            <button></button>
        </div>
    )
}

export default Category