import React from 'react';
import styles from './styles.scss';

type Props = {
  hunter: Object
};

export default class HunterInfo extends React.PureComponent<Props> {

  getHealthBar() {
    const percentHealth = this.props.hunter.resources.get('health') / 100;
    const greenValue = (percentHealth * 255) - 80;
    return `radial-gradient(transparent, rgba(${ 255 - greenValue },${ greenValue },0,${ percentHealth }))`;
  }

  renderHealthBar() {
    return (
      <div className={ styles.HealthBar } style={{ background: this.getHealthBar() }}>
        HP: { this.props.hunter.resources.get('health') }
      </div>
    )
  }

  renderResource(name, value) {
    return (
      <div className={ styles.Resource }>
        <span>{ name }</span>
        <span>{ value }</span>
      </div>
    );
  }

  render() {
    const { hunter } = this.props;
    const resources = hunter.resources.toObject();
    const stats = hunter.stats.toObject();
    return (
      <div className={ styles.HunterInfo }>
        <div className={ styles.Name  }>{ hunter.name }</div>
        <div className={ styles.Section }>
          { this.renderHealthBar() }
        </div>
        <div className={ styles.Section }>
          <div className={ styles.Label }>Resources</div>
          { this.renderResource('Stamina', resources.stamina) }
          { this.renderResource('Focus', resources.focus) }
          { this.renderResource('Gist', resources.gist) }
        </div>
        <div className={ styles.Section }>
          <div className={ styles.Label }>Defence</div>
          { this.renderResource('Parry', resources.parry) }
          { this.renderResource('Block', resources.block) }
          { this.renderResource('Dodge', resources.dodge + '%') }
        </div>
        <div className={ styles.Section }>
          <div className={ styles.Label }>Stats</div>
          { this.renderResource('Actions', stats.actions) }
          <div className={ styles.SubLabel }>Physical</div>
          { this.renderResource('Grit', stats.grit) }
          { this.renderResource('Agility', stats.agility) }
          { this.renderResource('Dexterity', stats.dexterity) }
          <div className={ styles.SubLabel }>Mental</div>
          { this.renderResource('Perception', stats.perception) }
          { this.renderResource('Wil', stats.will) }
          { this.renderResource('Intellect', stats.intellect) }
        </div>
      </div>
    );
  }
}
