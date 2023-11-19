import { Form, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import '../Login/login.css';
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);

      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
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
      <div className="card-3d-wrap2">
        <div className="card-3d-wrapper">
          <div className="card-front">
            <div className="center-wrap">
              <h1 className="text-2xl text-white">
                Online Quiz App - REGISTER<i className="ri-user-add-line"></i>
              </h1>
              <div className="divider"></div>
              <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                <Form.Item name="name" label={<span className="label-text mt-1">Name</span>}>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Your Name"
                    />
                  </div>
                </Form.Item>
                <Form.Item name="email" label={<span className="label-text mt-1">Email</span>}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Your Email"
                    />
                  
                  </div>
                </Form.Item>
                <Form.Item name="password" label={<span className="label-text mt-1">Password</span>}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Your Password"
                    />
                  </div>
                </Form.Item>

                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="btn mt-2 w-100"
                  >
                    Register
                  </button>
                  <Link to="/login" className="link">
                    Already a member? Login
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

export default Register;
