import React from 'react';
import './index.less'
import Logo from '../../../../assets/logo.png';

const Root = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt=""/>
        <div>LayResumeMook</div>
        <div>一个简单的模板简历制作平台, 更容易实现一个完整的简历 ~</div>
        <div>
          {
            ['介绍', '简历', '源码'].map( (text, index) => {
              return (
                <div key={index}>{text}</div>
              )
            })
          }
        </div>
        <div>
          <div>
            <p>
              Copyright &copy; 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By LeiYongJiu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
