import React, { Component } from 'react';

class Headline extends Component {

  render() {
    const { heading, desc } = this.props;

    if(!heading) {
      return null;
    }

    return(
      <div>
        <h1>{heading}</h1>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Headline;