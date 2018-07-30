import { connect } from 'react-redux';
import DeckArea from '../../components/DeckArea';
import { moveCard } from '../../reducers/CardsReducer/actions';

function mapStateToProps(state) {
  return {
    drawDeck: state.cards.get('drawDeck').toArray(),
    discardedCards: state.cards.get('discardedCards').toArray(),
    handCards: state.cards.get('handCards').toArray(),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    drawCard: card => dispatch(moveCard({ card, from: 'drawDeck', to: 'handCards' }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckArea);
