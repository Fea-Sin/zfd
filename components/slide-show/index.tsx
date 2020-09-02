import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface SlideShowProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  customizePrefixCls: string;
}

export interface SlideShowState {
  open: boolean;
}

export default class SlideShow extends React.Component<SlideShowProps, SlideShowState> {
  state: SlideShowState = {
    open: false,
  };

  renderSlideShow = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { customizePrefixCls, children, title } = this.props;

    const { open } = this.state;
    const prefixCls = getPrefixCls('slideshow', customizePrefixCls);
    const slideshowCls = classNames(prefixCls, {
      [`${prefixCls}-open`]: !!open,
    });

    return (
      <div className={slideshowCls}>
        <div>SLIDE SHOW OPEN</div>
        <div className={`${prefixCls}-panel`}>
          <div>{title}</div>
        </div>
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSlideShow}</ConfigConsumer>;
  }
}
