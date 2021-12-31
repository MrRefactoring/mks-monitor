import * as React from 'react';
import { Button, Dropdown } from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import './header.less';

export function Header() {
  return <div className='header'>
    <div className='header__left-side'>
      HEADER
    </div>
    <div className='header__right-side'>
      <Dropdown overlay={<>TEST</>}>
        <Button>
          Flying Bear Ghost 5 <DownOutlined />
        </Button>
      </Dropdown>
      <SettingOutlined onClick={() => {}} />
    </div>
  </div>;
}
