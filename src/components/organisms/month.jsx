import React from 'react';
import Week from '../molecules/week';

export default class Month extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return(
      <table>
        <tbody>
          <tr>
            <td>
              {this.props.weeks.map((week, index) => <Week week={week} key={index} />) }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
};

Month.propTypes = {
  weeks: React.PropTypes.array
};

Month.defaultPropTypes = {
  weeks: []
};
