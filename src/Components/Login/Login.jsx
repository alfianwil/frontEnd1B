import React from "react";
import "./Login.css";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";
const Login = () => {
  return (
    <div className="container">
      <div className="title">
        <img src={chill} alt="chill" />
        <br />
        Masuk
        <br />
        <h6>Selamat datang kembali!</h6>
      </div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Masukkan username" required />
            </div>
            <div className="input-box">
              <span className="details">Kata sandi</span>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                required
              />
            </div>
            <div className="registration">
              <p>
                Belum punya akun? <a href="login.html">daftar</a>
              </p>
              <a href="login.html">Lupa kata sandi?</a>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Masuk" />
          </div>
          <center style={{ margin: "10px", fontSize: "13px" }}>Atau</center>
          <div className="button">
            <div className="wrapper">
              <img className="comment-profile-pic" src={google} alt="google" />
            </div>
            <input type="submit" value="Masuk dengan google" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
