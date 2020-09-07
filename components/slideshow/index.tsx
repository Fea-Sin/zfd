import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import velocity from 'velocity-animate';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Icon from '../icon';

export interface SlideShowProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  customizePrefixCls?: string;
  open?: boolean;
  onChange: () => void;
  onEnd?: (exists: boolean) => void;
  duration?: number;
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
  animateEnter = (node, done) => {
    const { duration } = this.props;
    let ok = false;

    function complete() {
      if (!ok) {
        ok = true;
        done();
      }
    }

    node.style.display = 'none';

    velocity(node, 'slideDown', {
      duration: duration || 500,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        complete();
      },
    };
  };
  animateLeave = (node, done) => {
    const { duration } = this.props;
    let ok = false;

    function complete() {
      if (!ok) {
        ok = true;
        done();
      }
    }

    node.style.display = 'block';

    velocity(node, 'slideUp', {
      duration: duration || 500,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        complete();
      },
    };
  };
  handleEnd = (_, exists) => {
    const { onEnd } = this.props;
    if (onEnd) {
      onEnd(exists);
    }
  };

  componentDidMount() {}

  renderSlideShow = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { customizePrefixCls, children, title, open } = this.props;

    const prefixCls = getPrefixCls('slideshow', customizePrefixCls);
    const slideshowCls = classNames(prefixCls, {
      [`${prefixCls}-open`]: !!open,
    });
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    };

    return (
      <div className={slideshowCls}>
        <div className={`${prefixCls}-panel`} onClick={this.panelClick}>
          <div className={`${prefixCls}-panel-title`}>{title}</div>
          <div className={`${prefixCls}-panel-decoration`}>
            {open ? <Icon type="caret-up" /> : <Icon type="caret-down" />}
          </div>
        </div>
        <Animate component="" showProp="data-show" animation={anim} onEnd={this.handleEnd}>
          <div
            data-show={open}
            className={classNames(`${prefixCls}-content`)}
            style={{ display: open ? 'block' : 'none' }}
          >
            {children}
          </div>
        </Animate>
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSlideShow}</ConfigConsumer>;
  }
}
