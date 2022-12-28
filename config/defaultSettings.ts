import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  // contentWidth: 'Fluid',
  contentWidth: "Fixed",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '纸飞机',
  headerHeight: 64,
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;

// {
//   "navTheme": "light",
//   "primaryColor": "#1890ff",
//   "layout": "top",
//   "contentWidth": "Fixed",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": false,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//   "headerHeight": 48,
//   "splitMenus": false
// }
