import React from 'react';
import styles from './styles.scss';

export default class Rain extends React.PureComponent {

  createRain(numberOfDrops) {
    const rain = [];
    for(let i = 0; i < numberOfDrops; i += 1) {
      const delay = Math.random() + 0.2;
      const margin = Math.floor(Math.random() * Math.floor(2000));
      const raindrop = <div key={ i } className={ styles.Drop } style={{ marginLeft: margin + 'px', animationDelay: delay + 's' }} id={ 'drop' + i } />;

      rain.push(raindrop);
    }
    return rain;
  }

  render() {
    return (
      <div className={ styles.Rain }>
        { this.createRain(this.props.drops) }
      </div>
    );
  }
};
