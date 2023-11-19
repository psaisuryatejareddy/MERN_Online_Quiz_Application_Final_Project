import React from "react";
import { Form, message } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import './login.css'
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Login() {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await loginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/home";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
      <div className="card-3d-wrap">
        <div className="card-3d-wrapper">
          <div className="card-front">
            <div className="center-wrap">
              <h1 className="text-2xl text-white">
               Online Quiz APP - LOGIN <i className="ri-login-circle-line"></i>
              </h1>
              <div className="divider"></div>
              <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                <Form.Item name="email" label={<span className="label-text  mt-1">Email</span>}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style gap-2"
                      placeholder="Your email"
                    />
                    
                  </div>
                </Form.Item>
                <Form.Item name="password" label={<span className="label-text mt-1">password</span>}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Your password"
                    />
                  </div>
                </Form.Item>

                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="btn mt-2 w-100"
                  >
                    Login
                  </button>
                  <Link to="/register" className="link">
                    Not a member? Register
                  </Link>
                </div>
              </Form>
            </div>
          </div>
          <div className="card-back"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
