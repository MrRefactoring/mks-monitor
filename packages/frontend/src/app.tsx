import * as React from 'react';
import { Header, PrinterInfo } from './containers';
import './app.less';

export function App() {
  return <div className='app'>
    <Header/>

    <div className='printer-info-position'>
      <PrinterInfo/>
    </div>
  </div>;
}
