import React, { Component } from 'react';

class Header extends Component {
  render() {
    let colnameslist = this.props.headers.map(function (value) {
      return (
        <th>{value}</th>
      );
    });
    return (
      <tr>
        {colnameslist}
      </tr>
    );
  }
}

export default Header;