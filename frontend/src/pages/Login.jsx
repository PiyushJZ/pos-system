import { Button, Form, Input, Layout, Space, Typography } from 'antd';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const { Title } = Typography;
const { Header, Content } = Layout;

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '35vw',
};

export const Component = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <Space
      direction='vertical'
      style={{ width: '100%', alignItems: 'center' }}
    >
      <Header style={{ backgroundColor: 'white' }}></Header>
      <Content style={contentStyle}>
        <Title level={2}>Login Here</Title>
        <Form
          layout='vertical'
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label='Email'
            name='email'
            style={{ padding: '10px' }}
            rules={[
              {
                required: true,
                message: 'Please enter your Email!',
              },
            ]}
          >
            <Input
              size='large'
              placeholder='Enter email'
              type='email'
              prefix={<AiOutlineUser />}
            />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            style={{ padding: '10px' }}
            rules={[
              {
                required: true,
                message: 'Please enter your Password!',
              },
              {
                len: 6,
                message: 'Password is at least 6 characters long!',
              },
            ]}
          >
            <Input.Password
              size='large'
              placeholder='Enter password'
              prefix={<RiLockPasswordLine />}
              iconRender={visible =>
                visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />
          </Form.Item>
          <Form.Item style={{ padding: '10px' }}>
            <Button
              type='primary'
              htmlType='submit'
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Space>
  );
};
