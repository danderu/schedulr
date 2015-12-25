import React from 'react';
import Day from '../atoms/day';

export default class Week extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return(
      <div className='sc-Week'>
        <table>
          <tbody>
            <tr>
              { this.props.week.map((day, index) => <Day day={day} key={index} />) }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

Week.propTypes = {
  week: React.PropTypes.array
};

Week.defaultPropTypes = {
  week: []
};
