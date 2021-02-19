import { CardType } from '../data/Type';
import { Paper, Box } from '@material-ui/core';
import WordAudio from './WordAudio';

type CardProps = {
  card: CardType
}

function Card(props: CardProps) {
  const { word, transcription, translation } = props.card;
  return (
    <Paper elevation={3} style={{width: "50vw", height: "40vh", margin: "100px auto", padding: "50px"}}>
      <div>
        <Box display="flex">
          <span style={{marginRight: "20px"}}>{word}</span>
          <WordAudio word={word} />
        </Box>
        <p>{transcription}</p>
        <p>
          {translation}
        </p>
      </div>
    </Paper>
  );
}

export default Card;