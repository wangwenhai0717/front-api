import {AvatarDropdown, Footer} from '@/components';
import {BarsOutlined, ExportOutlined, FileTextOutlined, GithubOutlined} from '@ant-design/icons';
import {SettingDrawer} from '@ant-design/pro-components';
import type {RunTimeLayoutConfig} from '@umijs/max';
import {history, useModel} from '@umijs/max';
import {requestConfig} from './requestConfig';
import {getLoginUserUsingGet} from "@/services/xhapi-backend/userController";
import Settings from '../config/defaultSettings';
import {InitialState} from "@/typings";
import {FloatButton} from "antd";
import NoFoundPage from "@/pages/404";

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

const baiduStatistics = () => {
  const hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1c3c7a064d6a39da5a90bf71821b4a9a";
  const s = document.getElementsByTagName("script")[0];
  // @ts-ignore
  s.parentNode.insertBefore(hm, s);
};

const stats: InitialState = {
  loginUser: undefined,
  settings: Settings,
  open: false
}

export async function getInitialState(): Promise<InitialState> {
  //当页面首次加载时，获取要全局保存的数据，比如用户登录信息
  try {
    const res = await getLoginUserUsingGet();
    if (res.data) {
      stats.loginUser = res.data;
    }
  } catch (error) {
    history.push(loginPath);
  }
  return stats;
}
// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    waterMarkProps: {
      content: initialState?.loginUser?.userName,
    },
    footerRender: () => <>
      <Footer/>
      <FloatButton.Group
        trigger="hover"
        style={{right: 94}}
        icon={<BarsOutlined/>}
      >
        <FloatButton
          tooltip={"📘 接口在线文档"}
          icon={<FileTextOutlined/>}
          onClick={() => {
            location.href = "https://www.baidu.com/"
          }
          }
        />
        <FloatButton
          tooltip={"分享此网站"}
          icon={<ExportOutlined/>}
          onClick={() => {
            if (!initialState?.loginUser && location.pathname !== loginPath) {
              message.error("请先登录")
              history.push(loginPath);
              return
            }
            setInitialState({loginUser: initialState?.loginUser, settings: Settings, open: true})
          }
          }/>
        <FloatButton
          tooltip={"查看本站技术及源码，欢迎 star"}
          icon={<GithubOutlined/>}
          onClick={() => {
            location.href = "https://www.baidu.com"
          }
          }
        />
      </FloatButton.Group>
    </>,
    avatarProps: {
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>
      },
    },
    onPageChange: () => {
      // 百度统计
      baiduStatistics()
      const {location} = history;
      // if (!whiteList.includes(location.pathname)) {
      //   getInitialState();
      // }
      // 如果没有登录，重定向到 login
      if (!initialState?.loginUser && !/^\/\w+\/?$/.test(location.pathname) && location.pathname !== '/'
        && location.pathname !== '/interface/list' && !location.pathname.includes("/interface_info/")) {
        history.push(loginPath);
      }
    },
    // 自定义 403 页面
    unAccessible: <NoFoundPage/>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading/>;
      return (
        <>
          {children}
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = requestConfig;
