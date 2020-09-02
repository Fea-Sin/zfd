---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单使用，展示信息

## en-US

````jsx
import { SlideShow } from 'zfd'; // eslint-disable-line

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
      slideOpen: true,
    })
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
          open={slideOpen}
          onChange={this.handleClick}
        >
          <div className='zf-demo-slideshow-content'>
            <div>这是内容</div>
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
    width: 500px;
    height: 300px;
    border: 1px solid green;
    padding: 20px;
  }
  .zf-demo-slideshow-operate {
    padding: 20px;
    border: 1px solid red;
    margin-bottom: 10px;
  }
  .zf-demo-slideshow-operate > div {
    display: inline-block;
  }
</style>

