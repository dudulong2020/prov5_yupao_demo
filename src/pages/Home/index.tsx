// import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './index.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <div className={styles.Header_login_wrap}>
        <div className={styles.Header_headerLoginImg}>

        </div>
      </div>
      <GridContent>
      
      <Card>
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
    </div>
    
  );
};

export default Home;
