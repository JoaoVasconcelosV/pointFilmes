import { useState, useEffect } from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import { Api } from './services/api'
import './App.scss'

interface Movie {  
  title: string,
  img: string,
  rate: string,
  duration: string,
  link: string,
  genreId: number
}

interface Categories {
  id: number,
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror',
  title: string
}

const initialCategorySelectedState: Categories = {
  id: 1,
  name: "action",
  title: "Ação"
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [categorySelected, setCategorySelected] = useState<Categories>(initialCategorySelectedState);

  useEffect(() => {
    (async function req() {
      const genres = await Api.get("/genres");
      
      setCategories(genres.data);
    }())
  }, [])

  useEffect(() => {    
    (async function req() {
      const movies = await Api.get(`/movies/?Genre_id=${categorySelected.id}`);      

      setMovies(movies.data);
    }())    
  }, [categorySelected])  

  return (
    <div className="container">
      <SideBar categories={categories} selectCategory={setCategorySelected} selectedCategory={categorySelected} />
      <Content category={categorySelected.title} movies={movies}/>
    </div>
  )
}

export default App;
