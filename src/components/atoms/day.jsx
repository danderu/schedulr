import React from 'react';

export default class Day extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return(
      <td>
        {this.props.day > 0 && this.props.day}
      </td>
    );
  }
};

Day.propTypes = {
  day: React.PropTypes.number
};

Day.defaultPropTypes = {
  day: 0
};
