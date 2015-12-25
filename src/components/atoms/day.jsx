import React from 'react';
import cx from 'classnames';

export default class Day extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const classes = cx({
      'sc-Day--highlighted': this.props.highlighted
    });

    return(
      <td className={classes}>
        {this.props.day > 0 && this.props.day}
      </td>
    );
  }
};

Day.propTypes = {
  day: React.PropTypes.number,
  highlighted: React.PropTypes.bool
};

Day.defaultPropTypes = {
  day: 0,
  highlighted: false
};
