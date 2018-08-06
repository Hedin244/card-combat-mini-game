import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Action extends React.PureComponent {

  render() {
    const {
      name,
      description,
      keyWords,
      type,
    } = this.props.action;

    const { className } = this.props;

    const actionClass = classNames(styles.Action, {
      [className]: className,
    });

    return (
      <div className={ actionClass }>
        <div className={ styles.Name }>{ name }</div>
        <div className={ styles.Description }>{ description }</div>
        <div className={ styles.ExpandedInfo } >
          <span>{ type }</span>
          {
            keyWords.map((word, index) => {
              return <span key={ index }>{ word }</span>
            })
          }
        </div>
      </div>
    )
  }
}
