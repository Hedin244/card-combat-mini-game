import React from 'react';
import classNames from 'classnames';
import Action from '../Action';
import styles from './styles.scss';
import actionStyles from '../Action/styles.scss';

type Props = {
  className?: string,
  active: boolean,
  phase: {
    side: string,
    actionSlots: List
  }
};

export default class Phase extends React.PureComponent<Props> {

  render() {
    const stockAction = {
      keyWords: [],
    };
    const phaseClass = classNames(styles.Phase, {
      [this.props.className]: this.props.className,
      [styles.Active]: this.props.active,
    });
    return (
      <div className={ phaseClass }>
        { this.props.phase.actionSlots.toArray().map((actionSlot, index) => {
          const actionClass = classNames({
            [actionStyles.Active]: this.props.active,
            [actionStyles.Hunter]: actionSlot.get('owner') === 'hunter',
            [actionStyles.Monster]: actionSlot.get('owner') === 'monster',
          });
          return (
            <Action action={ actionSlot.get('empty') ? stockAction : actionSlot.get('action')} className={ actionClass } key={ index } />
          );
        }) }
      </div>
    );
  }
}
