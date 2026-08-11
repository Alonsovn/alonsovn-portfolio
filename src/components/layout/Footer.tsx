import { Layout, Typography, Space, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, HeartFilled } from '@ant-design/icons';

const { Text, Link } = Typography;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Layout.Footer
      style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'transparent',
      }}
    >
      <Space direction="vertical" size="small">
        <Space size="middle">
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/Alonsovn"
            target="_blank"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/alonsovn"
            target="_blank"
          />
        </Space>
        <Text type="secondary">
          Built with <HeartFilled style={{ color: '#ff4d4f' }} /> using React, TypeScript, and Ant Design
        </Text>
        <Text type="secondary">
          &copy; {year} Alonso. All rights reserved.
        </Text>
        <Space size="small">
          <Link href="https://github.com/EndToEndLabCR" target="_blank">
            EndToEndLabCR
          </Link>
          <Text type="secondary">|</Text>
          <Link href="https://github.com/NaranjoSolutions" target="_blank">
            NaranjoSolutions
          </Link>
        </Space>
      </Space>
    </Layout.Footer>
  );
}
