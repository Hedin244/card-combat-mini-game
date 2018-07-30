import React from 'react';
import styles from './styles.scss';

type Props = {
  hunter: Object
};

export default class HunterInfo extends React.PureComponent<Props> {

  render() {
    const { hunter } = this.props;
    const resources = hunter.resources.toObject();
    return (
      <div className={ styles.HunterInfo }>
        <div>
          Name: { hunter.name }
        </div>
        <div>
          Stamina: { resources.stamina }
        </div>
        <div>
          Health: { resources.health }
        </div>
      </div>
    );
  }
}
