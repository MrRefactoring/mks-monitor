import * as React from 'react';
import { Header } from '@containers';
import { PrintingTelemetry } from '@containers/printingTelemetry/printingTelemetry';
import './dashboard.less';

export function Dashboard() {
  return <div className='dashboard'>
    <Header/>
    <div className='dashboard__content'>
      <PrintingTelemetry/>
    </div>
  </div>;
}
