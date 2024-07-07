import {GithubOutlined, InfoCircleOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {Tooltip} from "antd";

const Footer: React.FC = () => {
  const defaultMessage = '讯号出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={<>
        {`${currentYear} ${defaultMessage}`} |{' '}
        <a target={'_blank'} href={"https://beian.miit.gov.cn/"} rel="noreferrer"> 闽ICP备2024059368号-1</a>
        {" | "}
        <a target={'_blank'} href={'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35052102000594'}
           rel="noreferrer">
          <img src="https://img.qimuu.icu/typory/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png"
               alt={'闽公网安备 35052102000594号'}/> 闽公网安备 35052102000594号
        </a>

      </>}
      links={[
        {
          key: 'github',
          title: (
            <Tooltip title="查看本站技术及源码，欢迎 star">
              <GithubOutlined/> 支持项目
            </Tooltip>
          ),
          href: 'https://baidu.com',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
