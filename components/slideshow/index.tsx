import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import velocity from 'velocity-animate';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Icon from '../icon';

export interface SlideShowProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  customizePrefixCls?: string;
  open?: boolean;
  visible?: boolean;
  onChange: () => void;
  onEnd?: (exists: boolean) => void;
  duration?: number;
}

export interface SlideShowState {
  status: boolean;
}

export default class SlideShow extends React.Component<SlideShowProps, SlideShowState> {
  state: SlideShowState = {
    status: false,
  };

  panelClick = () => {
    const { onChange } = this.props;
    this.setState({
      status: !this.state.status,
    });
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
    const { customizePrefixCls, children, title, icon, visible } = this.props;
    const { status } = this.state;
    const open = typeof visible === 'undefined' ? status : visible;

    const prefixCls = getPrefixCls('slideshow', customizePrefixCls);
    const slideshowCls = classNames(prefixCls, {
      [`${prefixCls}-open`]: !!open,
    });
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    };
    const iconNode = icon || <Icon type="caret-up" />;

    return (
      <div className={slideshowCls}>
        <div className={`${prefixCls}-panel`} onClick={this.panelClick}>
          <div className={`${prefixCls}-panel-title`}>{title}</div>
          <div
            className={classNames(`${prefixCls}-panel-decoration`, {
              [`${prefixCls}-panel-up`]: open,
            })}
          >
            <div className={`${prefixCls}-panel-decoration-inbox`}>{iconNode}</div>
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
