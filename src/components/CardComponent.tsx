
import { Card } from "react-bootstrap";

const CardComponent = ({pokemon}) => {

    
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={pokemon.photo} alt={pokemon.name} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;