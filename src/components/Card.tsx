import { CardType } from '../data/Type';
import WordAudio from './WordAudio';

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
      <WordAudio word={word} />
    </div>
  );
}

export default Card;