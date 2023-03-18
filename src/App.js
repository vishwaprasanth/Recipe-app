import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App ()  {
  const APP_ID = "7c7353ab";
  const APP_KEY = "34511800070f0fbae31f6d3e262f8a38";

    const[recipes,setRecipes] = useState([]);
    const[search,setSearch] = useState('');
    const[query,setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      setRecipes(data.hits);
  };

  const updateSearch = event =>{
      setSearch(event.target.value);
  }

  const getSearch = event =>{
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type={search} onChange= {updateSearch} />
        <button className='search-button' type='submit'>
          search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map(({ recipe }) => {
       const { label, calories, image, ingredients, dishType, mealType } = recipe

      return (
        <Recipe 
        key={label}
        title = {label} 
        calories = {calories}
        image = {image}
        ingredients = {ingredients}
        dishType = {dishType}
        mealType = {mealType}
        />      
      )
      }
      )}
      </div>
    </div>
  )
} 

export default App;
