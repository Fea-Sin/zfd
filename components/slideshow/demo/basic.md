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
import { SlideShow, Icon } from 'zfd'; // eslint-disable-line

const title = <div className='zf-demo-slideshow-title'>特殊检查</div>

class Basic extends React.Component {
  
  handleEnd = (val) => {
    console.log('动画执行----', val)
  }

  render() {
    return (
      <div>
        <SlideShow
          title={title}
          onEnd={this.handleEnd}
          duration={300}
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

