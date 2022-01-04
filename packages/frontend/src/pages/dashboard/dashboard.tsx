import * as React from 'react';
import { Header, PrintingTelemetry } from '@containers';
import './dashboard.less';

export function Dashboard() {
  return <div className='dashboard'>
    <Header/>
    <div className='dashboard__content'>
      <div className='dashboard__content__current-print'>
        <PrintingTelemetry/>
      </div>
    </div>
  </div>;
}
