const WordAudio = (props) => {
  const word = props.word.toLowerCase();
  const src = `https://wooordhunt.ru/data/sound/sow/us/${word}.mp3` || '#';

  return (
    <div style={{ height: "100px", width: "100px", backgroundColor: "red" }} 
      onClick={() => {
        const el = document.getElementById(word);
        el && el.play()
      }}
    >
      <audio id={word} preload="auto">
        <source src={src} type="audio/mpeg"></source>
      </audio>
    </div>
  )
}

export default WordAudio;

