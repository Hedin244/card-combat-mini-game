import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import actionStyles from '../Action/styles.scss';
import Action from "../Action";

type Props = {
  actionQueue: Array
};

export default class ActionQueue extends React.Component<Props> {

  render() {
    const stockAction = {
      keyWords: [],
    };
    return (
      <div className={ styles.ActionQueue }>
        { this.props.actionQueue.map(actionSlot => {
          const actionClass = classNames({
            [actionStyles.Monster]: actionSlot.get('owner') === 'monster',
          });
          return <Action action={ actionSlot.get('empty') ? stockAction : actionSlot.get('action') } className={ actionClass } key={ actionSlot.get('id') } />;
        })}
      </div>
    );
  }
}
