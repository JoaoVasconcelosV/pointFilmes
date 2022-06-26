import Card from "../Card";
import "./styles.scss";

export default function Content (props: any) {  
  return (
    <div className="content">
      <h3>{props.category}</h3>
      <div className="cards">
        {props.movies.map((movie: any, i: number) => (
          <Card key={i} title={movie.Title} img={movie.Poster} rate={movie.Ratings[0].Value} duration={movie.Runtime} link={movie.Site} />        
        ))}
      </div>
    </div>
  )
}