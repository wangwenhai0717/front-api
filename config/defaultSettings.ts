import {ProLayoutProps} from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  splitMenus: false,
  navTheme: 'light',

  colorPrimary: '#1677FF',
  layout: "top",
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: true,
  title: '讯号API接口开放平台',
  pwa: true,
  logo: 'https://lowcode-3gjxs6di23304e1a-1327162105.tcloudbaseapp.com/resources/2024-07/lowcode-1873316',
  iconfontUrl: '',
};

export default Settings;
