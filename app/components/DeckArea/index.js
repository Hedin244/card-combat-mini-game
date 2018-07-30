import React from 'react';
import Hand from "../Hand";
import CardStack from "../CardStack";
import styles from './styles.scss';

type Props = {
  drawDeck: Array,
  discardedCards: Array,
  handCards: Array
};

export default class DeckArea extends React.PureComponent<Props> {

  render() {
    return (
      <div className={ styles.DeckArea }>
        <CardStack cards={ this.props.drawDeck } onClick={ this.props.drawCard } />
        <Hand cards={ this.props.handCards } />
        <CardStack cards={ this.props.discardedCards } />
      </div>
    );
  }
}
