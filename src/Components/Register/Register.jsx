import React from "react";
import "./Register.css";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";

const Register = () => {
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
            <div className="input-box">
              <span className="details">Konfirmasi Kata Sandi</span>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                required
              />
            </div>
            <div className="registration">
              <p>
                Sudah punya akun?{" "}
                <a href="login.html">
                  <b>Masuk</b>
                </a>
              </p>
              <a href="login.html"></a>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Daftar" />
          </div>
          <center style={{ margin: "10px", fontSize: "13px" }}>Atau</center>
          <div className="button">
            <div className="wrapper">
              <img className="comment-profile-pic" src={google} alt="google" />
            </div>
            <input type="submit" value="Daftar dengan google" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
