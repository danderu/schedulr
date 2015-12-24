import React from 'react';
import Day from '../atoms/day';

export default class Week extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return(
      <tr>
        { this.props.week.map((day, index) => <Day day={day} key={index} />) }
      </tr>
    );
  }
};

Week.propTypes = {
  week: React.PropTypes.array
};

Week.defaultPropTypes = {
  week: []
};
