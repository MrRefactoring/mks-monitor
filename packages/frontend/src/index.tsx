import * as React from 'react';
import { App } from './app';
import { render } from 'react-dom';
import 'reflect-metadata';
import './index.less';

render(<App />, document.querySelector('#root'));
