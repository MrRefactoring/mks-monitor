import 'reflect-metadata';
// eslint-disable-next-line sort-imports
import * as React from 'react';
import { App } from './app';
import { hot } from 'react-hot-ts';
import { render } from 'react-dom';
import './index.less';

hot(module)(
  render(
    <App />,
    document.querySelector('#root'),
  ),
);
