import React from 'react';
import styles from './styles.scss';

type Props = {
  monster: Object
};

export default class MonsterInfo extends React.PureComponent<Props> {

  render() {
    const { monster } = this.props;
    const resources = monster.resources.toObject();
    if (monster.resources.health < 1) console.log('WINNER!!!');
    return (
      <div className={ styles.MonsterInfo }>
        <div>
          Name: { monster.name }
        </div>
        <div>
          Attack: { monster.attack }
        </div>
        <div>
          Health: { resources.health }
        </div>
      </div>
    );
  }
}
