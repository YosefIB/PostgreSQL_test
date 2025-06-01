import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoff = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#3b82f6" }} className="py-3">
      {" "}
      <Container fluid>
        {/* לוגו */}
        <div className="d-flex align-items-center">
          <Navbar.Brand
            onClick={() => handleNavigation("/main")}
            className="text-white fw-bold fs-4"
            style={{ cursor: "pointer" }}
          >
            Food X Change
          </Navbar.Brand>
        </div>

        {/* כפתור המבורגר - עכשיו בצד ימין */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto border-white"
          style={{
            borderColor: "rgba(255,255,255,0.5)",
            width: "60px",
            minWidth: "10px",
          }}
        />

        {/* תפריט שנפתח */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* תפריט ניווט */}
          <Nav className="mx-auto text-center">
            <Nav.Link
              onClick={() => handleNavigation("/aboutus")}
              className="text-white px-3 py-2"
              style={{ cursor: "pointer" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/connectus")}
              className="text-white px-3 py-2"
              style={{ cursor: "pointer" }}
            >
              Connect us
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/buy")}
              className="text-white px-3 py-2"
              style={{ cursor: "pointer" }}
            >
              Buy item
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/fillForm")}
              className="text-white px-3 py-2"
              style={{ cursor: "pointer" }}
            >
              טופס קניין
            </Nav.Link>
          </Nav>

          {/* כפתור יציאה */}
          <div className="text-center d-lg-none mb-2">
            <Button
              variant="outline-light"
              onClick={handleLogoff}
              className="px-4"
            >
              Log Off
            </Button>
          </div>
        </Navbar.Collapse>

        <div className="d-none d-lg-block">
          <Button
            variant="link"
            className="text-white fs-4 border-0 text-decoration-none"
            onClick={handleLogoff}
            title="Log Off"
          >
            X
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
