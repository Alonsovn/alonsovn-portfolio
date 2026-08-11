import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function ScrollToTop() {
  const { visible, scrollToTop } = useScrollToTop(400);

  if (!visible) return null;

  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      icon={<UpOutlined />}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 999,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    />
  );
}
