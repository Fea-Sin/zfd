import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Icon from '../icon';

export interface SlideShowProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  customizePrefixCls?: string;
  open?: boolean;
  onChange: () => void;
}

export interface SlideShowState {}

export default class SlideShow extends React.Component<SlideShowProps, SlideShowState> {
  state: SlideShowState = {};

  panelClick = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    }
  };

  renderSlideShow = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { customizePrefixCls, children, title, open } = this.props;

    const prefixCls = getPrefixCls('slideshow', customizePrefixCls);
    const slideshowCls = classNames(prefixCls, {
      [`${prefixCls}-open`]: !!open,
    });

    return (
      <div className={slideshowCls}>
        <div className={`${prefixCls}-panel`} onClick={this.panelClick}>
          <div className={`${prefixCls}-panel-title`}>{title}</div>
          <div className={`${prefixCls}-panel-decoration`}>
            {open ? <Icon type="caret-up" /> : <Icon type="caret-down" />}
          </div>
        </div>
        <div className={`${prefixCls}-content`}>
          <div>{open && children}</div>
        </div>
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSlideShow}</ConfigConsumer>;
  }
}
