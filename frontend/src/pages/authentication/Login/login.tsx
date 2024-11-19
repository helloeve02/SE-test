import React from "react";
import "./login.css";
import logo from "../../../assets/shoppoologo.png";
import Topbar from "../../../components/third-patry/topbar";
import { SignInInterface } from "../../../interfaces/SignIn";
import { SignIn } from "../../../services/https/index";

import { Button, Card, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: SignInInterface) => {
    try {
      // ปรับค่าชื่อฟิลด์ให้ตรงกับ API (ถ้าจำเป็น)
      const payload = {
        UserName: values.UserName,  // หรือ username ตามที่ API คาดหวัง
        Password: values.Password,
      };

      let res = await SignIn(payload);

      if (res.status === 200) {
        messageApi.success("Sign-in successful");

        // Store user data in localStorage
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("page", "dashboard");
        localStorage.setItem("token_type", res.data.token_type);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);

        // Navigate to dashboard
        setTimeout(() => {
          navigate("/"); // ปรับเส้นทางให้ถูกต้อง
        }, 2000);
      } else {
        messageApi.error(res.data.error || "An error occurred during sign-in");
      }
    } catch (error) {
      messageApi.error("An error occurred during sign-in");
    }
  };

  return (
    <div>
      {contextHolder}
      <Topbar />
      <div className="login-container">
        <div className="login-left">
          <div className="logo">
            <img src={logo} alt="Shoppoo Logo" />
          </div>
        </div>
        <div className="login-right">
          <h2>Log In</h2>
          <Form
            name="login-form"
            onFinish={onFinish}
            layout="vertical"
            className="login-form"
          >
            <Form.Item
              name="UserName"
              label="Username"
              rules={[{ required: true, message: "Please enter your username" }]}
            >
              <Input placeholder="UserName" />
            </Form.Item>
            <Form.Item
              name="Password"
              label="Password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
            <Form.Item>
              <Button className="loginbutton" htmlType="submit" block>
                Log In
              </Button>
            </Form.Item>
          </Form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
