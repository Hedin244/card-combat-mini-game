import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

type Props = {
  className?: string,
  action: {
    name?: string,
    description?: string,
    keyWords?: Array,
    type?: string
  }
};

export default class Action extends React.PureComponent<Props> {

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
      [styles.Filled]: this.props.action.name,
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
