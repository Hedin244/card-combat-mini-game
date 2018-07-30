import React from 'react';
import styles from './styles.scss';
import ActionSlot from "../ActionSlot";

type Props = {
  actionQueue: Array
};

export default class ActionQueue extends React.Component<Props> {

  render() {
    return (
      <div className={ styles.ActionQueue }>
        { this.props.actionQueue.map(action => {
          return <ActionSlot actionSlot={ action.toObject() } key={ action.get('id') } />;
        })}
      </div>
    );
  }
}
