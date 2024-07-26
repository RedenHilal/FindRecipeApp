import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import './card.css'

const Container = styled.div`
  box-shadow: 0 4px 8px 0 #a39fa5;
  background: linear-gradient(to bottom, rgb(33, 33, 33), rgb(97, 97, 97));
  border-radius: 5%;
  padding: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 98%;
  height: auto;
`;

const Title = styled.h2`
  color: #e1e5ea;
  overflow:hidden;
  text-overflow: ellipsis;
`

const TextContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a3a3b5;
  text-decoration: none;
`;

function RecipeCard(props) {
  return (
    <Link className="cardLink" to={`/recipe/a/${props.id}`}>
      <Container >
        <Image src={props.recipe.image} alt={props.recipe.label} />
        <TextContainer>
          <Title>{props.recipe.label}</Title>
          <p>{props.recipe.source}</p>
        </TextContainer>
      </Container>
    </Link>
  );
}

export default RecipeCard;