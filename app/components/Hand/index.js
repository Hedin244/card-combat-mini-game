import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from '../../containers/Card';
import styles from './styles.scss';
import CardStyles from '../../components/Card/styles.scss';

type Props = {
  cards: Array
};

export default class Hand extends React.PureComponent<Props> {

  render() {
    return (
      <TransitionGroup className={ styles.Hand }>
        {this.props.cards.map(card => (
          <CSSTransition
            key={ card.id }
            timeout={ 200 }
            classNames={ CardStyles }
          >
            <Card card={ card } />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
