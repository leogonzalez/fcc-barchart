import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
