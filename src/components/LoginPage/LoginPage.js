import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./login-page.css";
import Dialog from "@material-ui/core/Dialog";
import { auth } from "../../firebase/firebase";

function LoginPage() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  return (
    <Fragment>
      <Link to="/login" onClick={handleClickOpen}>
        Login
      </Link>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login__container">
          <div className="login__row">
            <div className="col-md-6">
              <div className="login__content">
                <form className="login__box">
                  <h1>Login</h1>
                  <p>Please enter your email and password</p>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Link className="forgot text-muted" to="">
                    Forgot Password?
                  </Link>
                  <Link onClick={onSubmit} type="button" to="/home">
                    Login
                  </Link>
                  <div className="col-md-12">
                    <ul className="social-network social-circle">
                      <Link to="" className="icoFacebook" title="Facebook">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link to="" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus"></i>
                      </Link>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
}

export default LoginPage;
