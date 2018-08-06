import React from 'react';
import className from 'classnames';
import styles from './styles.scss';

type Props = {
  endTurn: () => void,
  endPhase: () => void,
  turn: number
};

export default class TurnCounter extends React.PureComponent<Props> {

  componentDidMount() {
    if(this.props.turn === 0) { this.props.endTurn(); }
  }

  render() {
    const endButtonClass = className(styles.EndButton, {
      [styles.EndTurn]: false,
    });
    return (
      <div className={ styles.Wrapper }>
        <div className={ endButtonClass } onClick={ this.props.endPhase }>
          end phase
        </div>
      </div>
    );
  }
}
