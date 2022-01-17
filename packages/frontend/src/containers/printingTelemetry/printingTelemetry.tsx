import * as React from 'react';
import { Progress, Typography } from 'antd';
import { useStore } from '@hooks';
import './printingTelemetry.less';

export function PrintingTelemetry() {
  const { jobs: { activeJobs } } = useStore();

  const activeJob = activeJobs[0];

  if (!activeJob) {
    return <></>;
  }

  return <div className='printing-telemetry'>
    <div className='printing-telemetry__header'>
      <Typography.Paragraph
        className='printing-telemetry__header__title'
        editable={{
          triggerType: ['text'],
          tooltip: 'click to edit',
          onChange: (value) => { activeJob.displayName = value; },
        }}
      >
        {activeJob.displayName}
      </Typography.Paragraph>
      <span className='printing-telemetry__header__subtitle'>{activeJob.name}</span>
      <Progress
        className='printing-telemetry__header__job-progress'
        status='active'
        size='small'
        percent={activeJob.complete}
        strokeColor='#2196f3'
      />
    </div>
  </div>;
}
