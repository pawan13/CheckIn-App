import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import expoLogo from "../../assets/expoLogo.jpeg";
import { logOutAdminUserAction } from "../../Pages/signup-signin/AdminAction";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleOnLogOutClick = () => {
    try {
      console.log(location.pathname);
      dispatch(logOutAdminUserAction());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={expoLogo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* <div className="d-flex align-items-center"> */}
          <Button variant="primary" className="mx-2 ">
            Home
          </Button>
          {location.pathname === "/main" ? (
            <Button variant="primary" className="mx-2 ">
              <Link
                to="/clientInfo"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Client Info
              </Link>
            </Button>
          ) : (
            <Button variant="primary" className="mx-2 ">
              <Link
                to="/main"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                VisitorType Info
              </Link>
            </Button>
          )}
          <Button
            onClick={handleOnLogOutClick}
            variant="primary"
            className="mx-2"
          >
            LogOut
          </Button>
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
