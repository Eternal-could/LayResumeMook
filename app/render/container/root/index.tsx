import React from 'react';
import './index.less'
import { useHistory } from 'react-router'
import Logo from '../../../../assets/logo.png';

const Root = () => {
  // 通过 history.push 进行跳转
  const history = useHistory()
  const onRouterToLink = (text: string) => {
    if (text === '简历') {
      console.log('跳转到简历页面')
      history.push('/resume')
    } else {
      console.log('进入到 github')
    }
  }
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt=""/>
        <div styleName="title">LayResumeMook</div>
        <div styleName="tips">一个简单的模板简历制作平台, 更容易实现一个完整的简历 ~</div>
        <div styleName="action">
          {
            ['介绍', '简历', '源码'].map( (text, index) => {
              return (
                <div
                  key={index}
                  styleName="item"
                  onClick={()=>{onRouterToLink(text)}}
                >{text}</div>
              )
            })
          }
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright &copy; 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By LeiYongJiu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
