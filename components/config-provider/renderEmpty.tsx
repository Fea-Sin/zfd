import * as React from 'react';
import { ConfigConsumer, ConfigConsumerProps } from '.';

const renderEmpty = (componentName?: string): React.ReactNode => (
  <ConfigConsumer>
    {({ getPrefixCls }: ConfigConsumerProps) => {
      const prefix = getPrefixCls('empty');

      switch (componentName) {
        case 'Table':
        case 'List':
          return '暂无数据1';
        case 'Select':
        case 'TreeSelect':
        case 'Casecader':
        case 'Transfer':
          return <div className={`${prefix}-small`} />;
        default:
          return '暂无数据';
      }
    }}
  </ConfigConsumer>
);

export type RenderEmptyHandler = typeof renderEmpty;

export default renderEmpty;
