import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import 'reflect-metadata';
import './index.less';

render(<App />, document.querySelector('#root'));
