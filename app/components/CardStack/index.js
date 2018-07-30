import React from 'react';
import styles from './styles.scss';

type Props = {
  cards: Array
};

export default class CardStack extends React.PureComponent<Props> {

  render() {
    const { cards } = this.props;
    return (
      <div className={ styles.Stack } onClick={ () => this.props.onClick(cards[0]) }>
        { cards.length }
      </div>
    );
  }
}
