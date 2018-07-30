import React from 'react';
import styles from './styles.scss';

type Props = {
  actionSlot: {
    owner: string,
    action: {
      name?: string
    }
  }
};

export default class ActionSlot extends React.PureComponent<Props> {

  render() {
    return (
      <div className={ styles.ActionSlot }>
        <div>{ this.props.actionSlot.owner }</div>
        <div>{ this.props.actionSlot.action.name }</div>
      </div>
    );
  }
}
