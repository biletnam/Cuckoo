import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
	    <div>
	      <h2> 404 </h2>
	      <Link to="/"> Back Home </Link>
	    </div>
    )
  }
}

export default NotFound;
