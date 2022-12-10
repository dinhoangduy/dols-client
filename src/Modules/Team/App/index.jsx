import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Project from '../Project';

import './fontStyles.css';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    <Project/>
  </Fragment>
);

export default App;
