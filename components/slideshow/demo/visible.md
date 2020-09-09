---
order: 1
title:
  zh-CN: 外部数据控制展开收起
  en-US: Visible Case
---

## zh-CN

外部数据控制展开收起

## en-US

visible case


````jsx
import { SlideShow, Icon } from 'zfd'; // eslint-disable-line

const title = <div className='zf-demo-slideshow-title'>特殊检查</div>

class Basic extends React.Component {

  state = {
    slideOpen: false,
  }

  handleClick = () => {
    this.setState({
      slideOpen: !this.state.slideOpen,
    })
  }

  operateClick = () => {
    this.setState({
      slideOpen: !this.state.slideOpen,
    })
  }
  
  handleEnd = (val) => {
    console.log('动画执行----', val)
  }

  render() {
    const { slideOpen } = this.state

    return (
      <div>
        <div className='zf-demo-slideshow-operate'>
          <div onClick={this.operateClick}>外部操作</div>
        </div>
        <SlideShow
          title={title}
          visible={slideOpen}
          onChange={this.handleClick}
          onEnd={this.handleEnd}
          duration={300}
          icon={<Icon type="caret-up" style={{color: '#3E7AFA'}} />}
        >
          <div className='zf-demo-slideshow-content'>
            <div>这是内容</div>
          </div>
          <div className='zf-demo-slideshow-table'>
            这里是一个表格
          </div>
        </SlideShow>
      </div>
    )
  }
}

ReactDOM.render(
  <Basic />,
  mountNode
);
````
<style>
  .zf-demo-slideshow-title {
    color: #3E7AFA;
  }
  .zf-demo-slideshow-content {
    height: 100px;
    /* border: 1px solid green; */
    padding: 20px;
    background: red;
    color: white;
  }
  .zf-demo-slideshow-operate {
    padding: 10px;
    border: 1px solid red;
    margin-bottom: 10px;
    display: inline-block;
    cursor: pointer;
  }
  .zf-demo-slideshow-operate > div {
    display: inline-block;
  }
  .zf-demo-slideshow-table {
    background-color: #3E7AFA;
    height: 80px;
    color: white;
  }
</style>
