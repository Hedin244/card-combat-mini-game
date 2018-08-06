import React from 'react';
import classNames from 'classnames';
import Action from '../Action';
import styles from './styles.scss';

export default class Phase extends React.PureComponent {

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
