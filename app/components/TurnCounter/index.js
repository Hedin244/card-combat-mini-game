import React from 'react';
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
    return (
      <div className={ styles.Wrapper }>
        <span className={ styles.Number }>
          { this.props.turn }
        </span>
        <button className={ styles.Button } onClick={ this.props.endPhase }>
          End Phase
        </button>
        <button className={ styles.Button } onClick={ this.props.endTurn }>
          End Turn
        </button>
      </div>
    );
  }
}
