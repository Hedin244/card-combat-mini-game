import React from 'react';
import styles from './styles.scss';

export default class Button extends React.PureComponent {

  render() {
    return (
      <div className={ styles.Button }>
        { React.Children.toArray(this.props.children) }
      </div>
    );
  }
}
