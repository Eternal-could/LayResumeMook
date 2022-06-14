import React, {useEffect} from 'react';
import './index.less';
import {shell} from 'electron';
import {useHistory} from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import Logo from '@assets/logo.png';
import {ROUTER_ENTRY, ROUTER_KEY} from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

const Root = () => {
  // 通过 history.push 进行跳转
  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(router.url);
      } else {
        history.push(router.url);
      }
    }
  };

  const dispatch = useDispatch()
  const appName = useSelector((state: any)=>{
    return state.globalModel.appName
  })

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('3s 后修改');
  //     dispatch({
  //       type: 'globalModel/setStore',
  //       payload: {
  //         key: 'appName',
  //         values: 'LayResumeMook',
  //       }
  //     })
  //   }, 3000)
  // },[])
  //
  // useEffect(() => {
  //   console.log('appName = ', appName);
  // }, [appName]);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt=""/>
        <div styleName="title">LayResumeMook</div>
        <div styleName="tips">一个简单的模板简历制作平台, 更容易实现一个完整的简历 ~</div>
        <div styleName="action">

          {
            ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return (
                <div
                  key={router.key}
                  styleName="item"
                  onClick={() => {
                    onRouterToLink(router);
                  }}
                >{router.text}</div>
              );
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
  );
};

export default Root;
