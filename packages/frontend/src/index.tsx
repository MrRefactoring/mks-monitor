import * as React from 'react';
import { App } from './app';
import { hot } from 'react-hot-ts';
import { render } from 'react-dom';
import 'reflect-metadata';
import './index.less';

hot(module)(
  render(
    <App />,
    document.querySelector('#root'),
  ),
);
