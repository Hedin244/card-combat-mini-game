import React from 'react';
import classNames from 'classnames';
import Phase from "../Phase";
import styles from './styles.scss';
import PhaseStyles from '../Phase/styles.scss';

type Props = {
  activePhase: number,
  phases: Array
};

export default class ActionQueue extends React.Component<Props> {

  render() {
    return (
      <div className={ styles.ActionQueue }>
        { this.props.phases.map((phase, index) => {
          const phaseClass = classNames(styles.Phase, {
            [PhaseStyles.EnemySide]: phase.get('side') === 'enemy',
          });
          return <Phase phase={ phase.toObject() } active={ this.props.activePhase === index } key={ index } className={ phaseClass } />
        }) }
      </div>
    );
  }
}
