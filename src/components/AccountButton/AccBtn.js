import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import Menu from "@material-ui/core/Menu";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import "./acc-btn.css";

function AccBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    auth.signOut();
    setAnchorEl(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="header__dropdown">
      <IconButton
        className="iconBtn"
        onClick={handleClick}
        aria-controls="dropdown__menu"
        aria-haspopup="true"
      >
        <AccountCircleIcon
          className="dropdown__button"
          style={{ color: "white" }}
          fontSize="large"
        />
      </IconButton>
      <Menu
        className="dropdown__content"
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        {user ? (
          <div>
            <MenuItem>
              <Link to="" onClick={handleClose}>
                My account
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="" onClick={signOut}>
                Logout
              </Link>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <LoginPage />
            </MenuItem>

            <MenuItem>
              <RegisterPage />
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}

export default AccBtn;
