import "./styles.scss";
import rateIcon from "../../assets/star.png"
import durationIcon from "../../assets/clock.png"

interface CardProps {  
  title: string,
  img: string,
  rate: string,
  duration: string,
  link: string
}

export default function Card (props: CardProps) {  
  return (
    <div className="card">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img className="image" src={props.img} alt={props.title} />      
        <span className="rate">
          <img className="icon" src={rateIcon} alt="rate icon" />
          {props.rate}
        </span>
        <span className="duration">
          <img className="icon" src={durationIcon} alt="duration icon" />
          {props.duration}
        </span>
      </a>
      <span className="title">{props.title}</span>
    </div>
  )
}