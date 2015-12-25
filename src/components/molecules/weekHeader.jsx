import React from 'react';
import Day from '../atoms/day';

export default class WeekHeader extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return(
      <div className='sc-Week--header'>
        <table>
          <thead>
            <tr>
              {this.props.dayNames && this.props.dayNames.map((dayName, index) => <th key={index}>{dayName}</th>)}
            </tr>
          </thead>
        </table>
      </div>
    );
  }
};

WeekHeader.propTypes = {
  dayNames: React.PropTypes.array
};

WeekHeader.defaultPropTypes = {
  dayNames: []
};
