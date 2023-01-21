import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import ModalSign from "./ModalSign";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import alertContext from "../contexts/alertContext";
import { logoutGames } from "../actions/gamesActions";
import { useConfirm } from "../useHooks/useConfirm";
import Confirm from "./Confirm";

const DOMAIN = process.env.REACT_APP_DOMAIN;

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const { setAlert, initialAlert } = useContext(alertContext);
  const { showConfirm, handlerShowConfirm, message, setConfirm } = useConfirm(
    dispatch,
    user?.token,
    user?.id
  );

  const handlerLogOut = () => {
    dispatch(logout());
    dispatch(logoutGames());
    localStorage.removeItem("userInfo");
    localStorage.removeItem("games");
    setAlert(initialAlert);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to={`${DOMAIN}`}>
                <img
                  src={process.env.PUBLIC_URL + "/gameback.png"}
                  height={100}
                  alt="logo-gameback"
                />
              </Link>
            </Nav>
            <Nav>
              {!user ? (
                <ModalSign />
              ) : (
                <>
                  <Button
                    variant="outline-light m-2"
                    size="sm"
                    onClick={handlerLogOut}
                  >
                    Log Out
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-light m-2"
                    onClick={handlerShowConfirm}
                  >
                    Delete Account
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Confirm
        showConfirm={showConfirm}
        handlerShowConfirm={handlerShowConfirm}
        message={message}
        setConfirm={setConfirm}
      />
    </>
  );
};

export default NavBar;
