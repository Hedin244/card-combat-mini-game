import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './styles.scss';

export default class HomePage extends React.PureComponent {

  render() {
    return (
      <div className={ styles.HomeScene } data-tid="container">
        <h1>Home</h1>
        <Link to="/combat"><Button>Combat</Button></Link>
      </div>
    );
  }
};
