import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import './recipe.css'
import { FoodCategories } from "../nameResource/categories";

function NavRecipePage(props){
    const dietInfo = [...FoodCategories.Diet]

    const {id} = useParams()
    const srecipe = props.recipes?.hits?.find((e, i) => i == id);
    const [recipeData,setdata] = useState(srecipe)
    useEffect(()=>{
        setdata(srecipe)
    },[srecipe])

  if (!recipeData) {
    return <div>Loading...</div>;
  }

    
    return(
        <div className="RecipePage">
            <div className="firstSec">
                <img src={recipeData.recipe.image}/>
                <h2>{recipeData.recipe.label}</h2>
                <p>{recipeData.recipe.source}</p>
            </div>
            <div>
                <div className="DietLabelC">
                    
                    {recipeData.recipe.dietLabels? recipeData.recipe.dietLabels.map((e,i)=>{
                        return <div className="tag-container">
                            <div className="tag" >{e}</div>
                            <div className="tagDescription">{dietInfo.find((element)=> element.webLabel===e).definition}</div>
                        </div>
                        }):<p>loading...</p>}
                </div>
                <ul>
                    {recipeData.recipe.ingredients.map((e,i)=><li key={i}>{e.text}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default NavRecipePage