import loading from './abc.svg';
import RecipeCard from '../recipeCard/card'
import React,{useState,useEffect} from 'react'
import './itemDisplay.css'

function ItemDisplay(props){
    const [point,setPoint] = useState({...props.pageData})
    const [currentPage,setCurrentPage] = useState(props.currentPage)
    const [recipe,setRecipe]=useState(null)

    useEffect(()=>{
        if( recipe && currentPage>recipe.hits.length / 20 && currentPage!==1 ) {
          props.fetchMore()
          console.log(recipe)
        }
    },[currentPage])

    useEffect(()=>{
      setPoint({...props.pageData})
    },[props.pageData])
    useEffect(()=>{
    setCurrentPage(props.currentPage)
    },[props.currentPage])
    useEffect(()=>{
      setRecipe(props.recipes)
    },[props.recipes])
    
    
    return (
      <div className='itemDisplay'>
        <div className='container'>
        {recipe ?
            (recipe.hits.slice(point.start,point.end+1).map((element,index)=><RecipeCard id={index} key={index} recipe={element.recipe}/>))
            : <img src={loading} className='loading'/>}
      </div>
      </div>
    )
}

export default ItemDisplay