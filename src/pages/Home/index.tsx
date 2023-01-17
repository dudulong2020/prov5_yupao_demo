// import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Layout, Typography, Input, Select, Button, Divider, Carousel } from 'antd';
import { SearchOutlined, SendOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-layout';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './index.less';
import Register from './register111';

import FactoryImg from '../../assets/home_img_factory_banner.png';
import BottomImg01 from '../../assets/home_img_logistic_banner.png';
import BottomImg02 from '../../assets/home_img_ypbx_banner.png';
import RightImg01 from '../../assets/home_img_ypgcy_banner.png';
import RightImg02 from '../../assets/home_img_ypgdjg_banner.png';
import RightImg03 from '../../assets/home_img_ypgdkq_banner.png';
import RightImg04 from '../../assets/home_img_ypsyxj_banner.png';


const { Option } = Select;
const { Search } = Input;

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const RightImgs = [
  { id: 1, name: "", address: RightImg01 },
  { id: 2, name: "", address: RightImg02 },
  { id: 3, name: "", address: RightImg03 },
  { id: 4, name: "", address: RightImg04 },
]

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '178px',
  // color: '#fff',
  lineHeight: '178px',
  // textAlign: 'center',
  // background: '#364d79',
};

const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className={styles.Header_login_wrap}>
        <div className={styles.Header_headerLoginImg} />

        <div className={styles.Header_logins__fL__R}>
          <span className={styles.LoginCollection_home_contain}>
            <Register />
          </span>
        </div>
      </div>
      {/* <GridContent className={styles.home_bg}> */}
      <GridContent>
        <div className={styles.home_top_wrap}>
          <div className={styles.home_content_search}>
            <div className={styles.searchInput}>
              <div className={styles.searchInput_top}>
                <div style={{ display: 'flex' }}>
                  <Input.Group compact size='large' className={styles.searchInput_search_input_wrap}>
                    <Select defaultValue="找活干" style={{ width: 120 }}>
                      <Option value="Option1">找活干</Option>
                      <Option value="Option2">找工人</Option>
                    </Select>
                    <Divider type='vertical' style={{ height: 36 }} />
                    <Input style={{ border: 0 }} placeholder="搜索你想要的宝贝" />
                    <Button type="primary" icon={<SearchOutlined />} className={styles.searchInput_search_input_button}> 搜索 </Button>
                  </Input.Group>

                  <Button type="primary" icon={<SendOutlined />} style={{ width: 160, height: 56 }} className={styles.searchInput_search_input_button}> 免费发布招工 </Button>
                </div>
              </div>
              <div className={styles.searchInput_tabcard}>
                <span>热门搜索：</span>
                <span className={styles.searchInput_tabcard_tagList}>
                  <span className={styles.searchInput_tabcard_tag}>
                    氩弧焊
                  </span>
                  <span className={styles.searchInput_tabcard_tag}>
                    水电工
                  </span>
                  <span className={styles.searchInput_tabcard_tag}>
                    弱电
                  </span>
                  <span className={styles.searchInput_tabcard_tag}>
                    电缆
                  </span><span className={styles.searchInput_tabcard_tag}>
                    穿线
                  </span>
                </span>

              </div>

            </div>


          </div>

          <div className={styles.category_top_categorybox}>
            <div className={styles.category_top_categorybox_left}>

            </div>
            <div className={styles.category_top_categorybox_right}>
              <div className={styles.category_pic_left}>
                <a>
                  <img src={FactoryImg} alt='工厂' className={styles.category_Factory_img} />
                </a>
                <Carousel autoplay={true}
                // afterChange={onChange}
                >
                  <div>
                    <img src={BottomImg01} style={contentStyle} alt='工厂' className={styles.category_bottom_img} />
                  </div>
                  <div>
                    <img src={BottomImg02} style={contentStyle} alt='工厂' className={styles.category_bottom_img} />
                  </div>
                </Carousel>
              </div>
              <div className={styles.category_pic_right}>

                {
                  RightImgs.map((item, index) => (
                    <a className={styles.category_pic_right_box} key={index}>
                      <img src={item.address} alt='工厂' className={styles.category_pic_right_item} />
                    </a>
                  ))
                }


              </div>
            </div>
          </div>


        </div>


        <Card >
          <Alert
            message={intl.formatMessage({
              id: 'pages.welcome.alertMessage',
              defaultMessage: 'Faster and stronger heavy-duty components have been released.',
            })}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 24,
            }}
          />
          <Typography.Text strong>
            <a
              href="https://procomponents.ant.design/components/table"
              rel="noopener noreferrer"
              target="__blank"
            >
              <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
            </a>
          </Typography.Text>
          <CodePreview>yarn add @ant-design/pro-components</CodePreview>
        </Card>
      </GridContent>

      {/* <div className={styles.home_bg}>

      </div> */}
    </>

  );
};

export default Home;
