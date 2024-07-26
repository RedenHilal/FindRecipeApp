import axios from 'axios'
import ItemDisplay from './component/itemDisplay/itemDisplay'
import Navbar from './component/Navbar/navbar'
import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import RecipePage from './component/WholeRecipe/recipepage'
import PageButton from './component/pageButton/pageButton'
import NavRecipePage from './component/WholeRecipe/NavrecipePage'
import Category from './component/CategoryComponent/CategoryComp'


function App() {

  const [data,setData] = useState(null)
  const [regex,setRegex] = useState(null)
  const [timer,updateTimer]= useState(null)
  const [recipeDisplay,setRecipeDisplay] = useState(null)
  const [toggleButton,setToggle] = useState(false)

  const [NavRecipe, setNavRecipe] = useState(null)
  const [Filter,setLabelType] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [dataPage,setDataPage] = useState({start:0,end:19})

  useEffect(()=>{
    if(data){clearTimeout(timer)
    const time = setTimeout(()=>{
      fetchRecipe(regex)
    },750)
    updateTimer(time)}
  },[regex])

    async function fetchRecipe(){
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=60a2809f&app_key=88ca5cfd40b30b1f2cde8b66642df71d${regex? `&q=${regex}`:(Filter?'':'&q=edamame')}${Filter? `&${Filter}`:''}`);
        setData(response.data)
        return response.data
      }

      async function fetchMoreRecipe(){
        const response = await axios.get(recipeDisplay._links.next.href)
        const newData = response.data
        setRecipeDisplay((recipeDisplay)=>({
          ...recipeDisplay, 
          "to" : recipeDisplay.to + 20,
          "_links" : {
            "next":{
              ...recipeDisplay._links.next,
              "href":newData._links.next.href,
            }
          },
          "hits":[
            ...recipeDisplay.hits,
            ...newData.hits
          ]
        }))};
      
    function handlePageChange(page){
      setCurrentPage(page)
    }
      async function updatePage ()
        {
          try {
            setRecipeDisplay(null)
            const fetched = await fetchRecipe();
            setCurrentPage(1);
            setRecipeDisplay(fetched);
            setTotalPage(Math.ceil(fetched.count / 20));
          } catch (error) {
            console.error("Error updating page:", error);
          }
      }

    useEffect(()=>{
      setDataPage({ start: (currentPage - 1) * 20, end: ((currentPage - 1) * 20) + 19 });
    },[currentPage])

    useEffect(()=>{
      updatePage()
    },[])
     
    
  return (
    <Router>
      <div className='Navbar'>
        <Navbar  recipes={data} onRegexChange={setRegex} onButtonClick={updatePage} toggledata={toggleButton} setNav={setNavRecipe}></Navbar>
      </div>
      <div className='appContainer'>
        <div className='Recommendation'>
        </div>
        <div className='mainContent'>
          
          <Routes>
            <Route path='/'element={<>
              <ItemDisplay recipes={recipeDisplay} dataregex={regex} currentPage={currentPage} fetchMore={fetchMoreRecipe} pageData={dataPage}/>
              <PageButton currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} onSetPage={setDataPage}/>
             </>}></Route>
            <Route path='/recipe/a/:id' element={<RecipePage recipes={recipeDisplay} />}></Route>  
            <Route path='/recipe/b/:id' element={<NavRecipePage recipes={NavRecipe}/>}></Route>
          </Routes>  
        </div> 
        <div className='CategoryContent'>
          <Category LabelSet={setLabelType}/>
        </div>
      </div>
    </Router>
  )
}

export default App
