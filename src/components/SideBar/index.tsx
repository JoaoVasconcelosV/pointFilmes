import CategoryButton from "../CategoryButton"
import "./styles.scss"

import logo from "../../assets/logo.svg"

interface Categories {
  id: number,
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror',
  title: string
}

interface SideBarProps {
  categories: Categories[],
  selectCategory: ({id, name, title}: Categories) => void
  selectedCategory: Categories
}

export default function SideBar(props: SideBarProps) {
  function categoryHandler(
    id: number, 
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror', 
    title: string
  ) {
    const category = {
      id,
      name,
      title
    };
    props.selectCategory(category);
  }

  return(
    <div className="sideBar">
      <img id="logo" src={logo} alt="logo" />
      <div className="categories">
        {props.categories.map((category) => (
          <CategoryButton 
            key={category.id} 
            icon={category.name} 
            title={category.title} 
            onClick={() => categoryHandler(category.id, category.name, category.title)} 
            isActive={props.selectedCategory.name} 
          />
        ))}                     
      </div>
    </div>
  )
}