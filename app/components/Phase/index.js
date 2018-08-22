import React from 'react';
import classNames from 'classnames';
import Action from '../Action';
import styles from './styles.scss';

type Props = {
  className: Array,
  phase: {
    actionSlots: Array
  }
};

export default class Phase extends React.PureComponent<Props> {

  render() {
    const stockAction = {
      keyWords: [],
    };
    const className = classNames(styles.Phase, {
      [this.props.className]: this.props.className,
    });
    return (
      <div className={ className }>
        { this.props.phase.actionSlots.toArray().map((actionSlot, index) => {
          return (
            <Action action={ actionSlot.get('empty') ? stockAction : actionSlot.get('action')} key={ index } />
          );
        }) }
      </div>
    );
  }
}
