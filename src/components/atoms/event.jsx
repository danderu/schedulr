import React from 'react';

export default class Event extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render(){
    return(
      <div className='sc-Event'>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

Event.propTypes = {
  title: React.PropTypes.string
};
