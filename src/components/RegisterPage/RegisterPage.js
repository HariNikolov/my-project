import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./register-page.css";
import Dialog from "@material-ui/core/Dialog";
import { auth } from "../../firebase/firebase";

function RegisterPage() {
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
    setOpen(false);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <Link to="/register" onClick={handleClickOpen}>
        Register
      </Link>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="register__container">
          <div className="register__row">
            <div className="col-md-6">
              <div className="register__content">
                <form className="register__box">
                  <h1>Register</h1>
                  <p>Please enter your email and password</p>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    name="RepeatPassword"
                    placeholder="Repeat password"
                  />
                  <Link className="forgot text-muted" to="">
                    Login?
                  </Link>
                  <Link onClick={onSubmit} type="submit" to="home">
                    Register
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

export default RegisterPage;
