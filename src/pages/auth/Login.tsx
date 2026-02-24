import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { instance } from '../../hooks';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../paths';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [, setCookie] = useCookies(['token']);

  const LoginFn = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      instance().post('auth/login', data),
    onSuccess: (res) => {
      setTimeout(() => {
        toast.success('sucessfully logged in!');
      }, 800);
      setTimeout(() => {
        setLoading(false);
        setCookie('token', res.data.data.tokens.accessToken);
        navigate(Path.home);
      }, 1300);
    },
    onError: (err: any) => {
      const status = err?.response?.status;
      setTimeout(() => {
        setLoading(false);
        switch (status) {
          case 404:
            toast.error("User doesn't exist");
            break;
          case 401:
            toast.error('Invalid credentials');
            break;
          case 500:
            toast.error('Server error. Try again later.');
            break;
          default:
            toast.error(err?.message || 'Something went wrong');
        }
      }, 500);
    },
  });

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    LoginFn.mutate(values);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0a0a0a]">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ minWidth: 400, maxWidth: 440 }}
        onFinish={onFinish}
        className="relative px-8! pt-10! pb-10! rounded-2xl bg-[#0f0f0f] border border-[#2a2a2a]"
      >
        {/* Top shadow effect */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-t-2xl" />
        
        {/* Title */}
       
        <h2 className="text-3xl font-medium text-white text-center mb-10 relative z-10">
          Welcome Back
        </h2>

        {/* Email field */}
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        
        >
          <Input
            prefix={<UserOutlined  />}
            placeholder="email address"
            size="large"
            allowClear
            className="py-2! "
          />
        </Form.Item>

        {/* Password field */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined  />}
            placeholder="Password"
            size="large"
            allowClear
            className="py-2! mt-1"
          />
        </Form.Item>

        {/* Login Button */}
        <Form.Item>
          <Button
            loading={loading}
            block
            type="primary"
            htmlType="submit"
            size="large"
            className="font-semibold! text-base! h-11! mt-2.5 bg-blue-600 hover:bg-blue-700 border-none rounded-lg"
          >
            Login
          </Button>
        </Form.Item>

        {/* OR Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="text-gray-500 text-sm uppercase">OR</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        {/* Sign up link */}
        <div className="text-center mt-6 text-gray-400 text-sm flex flex-col gap-0.5">
          <p>Don't have an account yet?{' '}</p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Add your sign-up navigation logic here
            }}
          >
            Contact to Manager
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Login;