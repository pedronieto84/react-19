
import { Card } from "react-bootstrap";

const CardsComponent = ({pokeCard}) => {

    
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={user.photo} alt={user.name} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;