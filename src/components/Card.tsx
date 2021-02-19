import { CardType } from '../data/Type';

type CardProps = {
  card: CardType
}

function Card(props: CardProps) {
  const { word, transcription, translation } = props.card;
  return (
    <div>
      <p>{word}</p>
      <p>{transcription}</p>
      <p>{translation}</p>
      
    </div>
  );
}

export default Card;