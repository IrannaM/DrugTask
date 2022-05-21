import { Link } from '@mui/material';
import React, { Component } from 'react';

class DesignPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDetails: [],
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: 15 }}>
        <h1>
          <Link href='/drug1details'>Drug1 Details</Link>
        </h1>
        <h1>
          <Link href='/drug2details'>Drug2 Details</Link>
        </h1>
        <h1>
          <Link href='/Functioncomponent'>Function Component</Link>
        </h1>
      </div>
    );
  }
}

export default DesignPart;
