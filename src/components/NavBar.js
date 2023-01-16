import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import ModalSign from "./ModalSign";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import alertContext from "../contexts/alertContext";
import { logoutGames } from "../actions/gamesActions";
import { deleteUser } from "../actions/userActions";

const NavBar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const { setAlert, initialAlert, setShow } = useContext(alertContext);
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(logout());
    dispatch(logoutGames());
    localStorage.removeItem("userInfo");
    localStorage.removeItem("games");
    setAlert(initialAlert);
  };

  const handlerDeleteAccount = () => {
    dispatch(deleteUser(user.token, user.id, setAlert, setShow));
    dispatch(logoutGames());
    localStorage.removeItem("userInfo");
    localStorage.removeItem("games");
    setAlert(initialAlert);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                <img
                  src={process.env.PUBLIC_URL + "gameback.png"}
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
                  <Button variant="outline-light" onClick={handlerLogOut}>
                    Log Out
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={handlerDeleteAccount}
                  >
                    Delete Account
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
