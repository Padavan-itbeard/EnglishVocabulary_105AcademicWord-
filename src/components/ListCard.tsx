import Card from './Card';
import { CardPropsType } from './App';


function ListCard(props: CardPropsType) {

  return (
    <div>
      {
        props.list.map(card => <Card key={card.word} card={card} />)
      }
    </div>
  );
}

export default ListCard;