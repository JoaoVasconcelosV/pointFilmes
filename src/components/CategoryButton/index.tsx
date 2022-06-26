import "./styles.scss"

import Icon from "../Icon"

interface CategoryButtonProps  {
  icon: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror';
  title: string,
  isActive: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror';
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CategoryButton (props: CategoryButtonProps) {
  return (
    <button 
      className="categoryButton" 
      onClick={props.onClick} 
      style={props.isActive === props.icon ? { backgroundColor: "#228dc2a2" } : { backgroundColor: "#1153746c" }}
    >
      <Icon fill={props.isActive === props.icon ? "#20dad8" : "#fff"} iconName={props.icon} />
      <span style={props.isActive === props.icon ? { color: "#20dad8" } : { color: "#fff" }}>{props.title}</span>
    </button>
  )
}