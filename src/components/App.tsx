import { CardType } from '../data/Type';
import ListCard from './ListCard';

export type CardPropsType = {
  list: CardType[]
}

function App(props: CardPropsType) {

  return (
    <div>
      <ListCard list={props.list} />
    </div>
  );
}

export default App;
