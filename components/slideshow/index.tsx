import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import CSSMotion from 'rc-animate/lib/CSSMotion';
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
  onCollapse = () => ({ height: 0 });

  componentDidMount() {}

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
        <CSSMotion
          visible={open}
          motionName={`${prefixCls}-transition`}
          onAppearStart={this.onCollapse}
          onEnterStart={this.onCollapse}
          onLeaveActive={this.onCollapse}
        >
          {({ style, className }, ref) => (
            <div className={classNames(`${prefixCls}-content`, className)} style={style}>
              <div>{children}</div>
            </div>
          )}
        </CSSMotion>
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSlideShow}</ConfigConsumer>;
  }
}
