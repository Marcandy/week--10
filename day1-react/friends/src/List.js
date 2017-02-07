import React, {Component} from 'react';

class List extends Component {
  render() {

var friends = this.props.friends.map(function (friend, i) {
  return <li key={i}> {friend} </li>
})
  return (
    <ul>
      {friends}
      </ul>
  )
  }
}

export default List;
