import * as React from 'react';
import { Progress } from 'antd';
import './printingTelemetry.less';

export function PrintingTelemetry() {
  return <div className='printing-telemetry'>
    <div className='printing-telemetry__title'>
      Print name
      <div className='printing-telemetry__title__sub'>original_name</div>
    </div>
    <Progress status='active' type='circle' percent={50} strokeColor='#2196f3' />
  </div>;
}
