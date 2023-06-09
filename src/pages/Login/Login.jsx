import "./Login.css";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { handleLogin, authError } = useAuth();

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  return (
    <main className="login-page-container">
      <section className="login-video-container">
        <ReactPlayer
          url="https://res.cloudinary.com/darwtgzlk/video/upload/v1686325123/socialMedia/heroVideo/pexels-kampus-production-7800162-2160x3840-25fps_bepbjw.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </section>
      <section className="login-form-container">
        <h1 className="login-form-heading">Welcome</h1>
        <h3>Login here</h3>
        <form
          onSubmit={(e) => {
            handleLogin(e, loginForm.username, loginForm.password);
            setLoginForm({ username: "", password: "" });
          }}
          className="login-form-body"
        >
          <div className="username-container">
            <label htmlFor="username">Username:</label>
            <input
              placeholder="Enter Username"
              value={loginForm.username}
              required
              onChange={(e) =>
                setLoginForm({
                  ...loginForm,
                  username: e.target.value,
                })
              }
              id="username"
              type="text"
            />
          </div>
          <div className="username-container">
            <label htmlFor="password">Password:</label>
            <div>
              <input
                placeholder="Enter Password"
                value={loginForm.password}
                required
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                id="password"
                type={!hidePassword ? "text" : "password"}
              />
              {hidePassword ? (
                <BsEyeSlash onClick={() => setHidePassword(false)} />
              ) : (
                <BsEye
                  onClick={() => {
                    setHidePassword(true);
                  }}
                />
              )}
            </div>
          </div>
          {authError && <div className="error-message">{authError}</div>}
          <div className="btn-container">
            <input value="Login" type="submit" />
            <button
              onClick={(e) => {
                handleLogin(e, "Neha", "Neha");
                setLoginForm({ username: "", password: "" });
              }}
            >
              Login as a Guest
            </button>
          </div>
          <p>
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
};
