import './Card.css';

const Card = (props) => {
  return (
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{props.title}</h4>
            <p class="card-text">{props.descp}</p>
            
        </div>
    </div>
    
  )
}

export default Card