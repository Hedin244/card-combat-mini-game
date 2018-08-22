import React from 'react';
import styles from './styles.scss';

type Props = {
  card: {
    costs: {
      stamina: number
    }
  },
  playCard?: () => {}
};

export default class Card extends React.PureComponent<Props> {

  render() {
    const { card } = this.props;
    return (
      <div className={ styles.Card } onClick={ this.props.playCard ? () => this.props.playCard({ card, method: 'onPlay' }) : () => {} }>
        <div className={ styles.CardTopInfoIcons }>
          <div className={ styles.CardTopIcon } />
          <div className={ styles.CardTopIcon } />
          <div className={ styles.CardTopIcon } />
        </div>
        <div className={ styles.CardMainImage }>

        </div>
        <div className={ styles.CardMiddleBar }>
          <div className={ styles.CardCostIcons }>
            S { card.costs.stamina }
          </div>
          <div className={ styles.CardName }>
            { card.name }
          </div>
        </div>
        <div className={ styles.CardInfoText }>
          { card.description }
        </div>
      </div>
    );
  }
}
