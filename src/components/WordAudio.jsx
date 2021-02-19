import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

const WordAudio = (props) => {
  const word = props.word.toLowerCase();
  const src = `https://wooordhunt.ru/data/sound/sow/us/${word}.mp3` || '#';

  return (
    <span>
      <audio id={word} preload="auto">
        <source src={src} type="audio/mpeg"></source>
      </audio>
      <RecordVoiceOverIcon 
        color="primary"
        onClick={() => document.getElementById(word).play()}
      >
      </RecordVoiceOverIcon>
    </span>
  )
}

export default WordAudio;

