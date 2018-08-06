import React from 'react';
import { Link } from 'react-router-dom';
import DeckArea from "../../containers/DeckArea";
import styles from './styles.scss';
import HunterInfo from "../../containers/HunterInfo";
import ActionQueue from "../../containers/ActionQueue";
import MonsterInfo from "../../containers/MonsterInfo";
import TurnCounter from "../../containers/TurnCounter";

export default class CombatScene extends React.PureComponent {
  render() {
    return (
      <div className={ styles.CombatScene }>
        <div className={ styles.Header }>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={ styles.MainScreen }>
          <HunterInfo />
          <ActionQueue />
          <MonsterInfo />
        </div>
        <TurnCounter />
        <DeckArea />
      </div>
    );
  }
}
