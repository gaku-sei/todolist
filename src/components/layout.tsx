import * as React from 'react';
import Hello from './hello';

import AppBar = require('material-ui/lib/app-bar');

export default class Layout extends React.Component<{}, void> {
  render() {
    return <div>
      <AppBar title="Titre" />
      <Hello />
    </div>
  }
}
