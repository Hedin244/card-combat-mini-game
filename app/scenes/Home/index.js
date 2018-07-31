import React from 'react';
import { Link } from 'react-router-dom';
import Rain from '../../components/Rain';
import styles from './styles.scss';

export default class HomePage extends React.PureComponent {

  render() {
    return (
      <div className={ styles.HomeScene } data-tid="container">
        <Rain drops={ 600 } />
        <h1>Home</h1>
        <div className={ styles.Menu }>
          <Link to="/combat" className={ styles.MenuButton }>Combat</Link>
          <Link to="/" className={ styles.MenuButton }>Hunter</Link>
          <Link to="/" className={ styles.MenuButton }>Monster</Link>
          <Link to="/" className={ styles.MenuButton }>Library</Link>
        </div>
      </div>
    );
  }
};
