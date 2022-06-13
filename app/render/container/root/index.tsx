import React from 'react';
import './index.less'
import Logo from '../../../../assets/logo.png';

const Root = () => {
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
                <div key={index} styleName="item">{text}</div>
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
