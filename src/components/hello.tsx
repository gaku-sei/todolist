import * as React from 'react';

import RaisedButton = require('material-ui/lib/raised-button');

export default class Hello extends React.Component<{}, void> {
  render() {
    return <RaisedButton label="Salut" secondary={true} />;
  }
};
