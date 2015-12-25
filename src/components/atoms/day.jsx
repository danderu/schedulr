import React from 'react';
import cx from 'classnames';
import Event from './event';

export default class Day extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleClick(e){

  }

  render() {
    const classes = cx({
      'sc-Day--highlighted': this.props.highlighted
    });

    return(
      <td className={classes} onClick={this.handleClick}>
        {this.props.day.number > 0 && this.props.day.number}
        {this.props.day.events.map(event => <Event title={event.title} />)}
      </td>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.object,
  highlighted: React.PropTypes.bool
};

Day.defaultPropTypes = {
  highlighted: false
};
