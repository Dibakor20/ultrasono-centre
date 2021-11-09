import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser, user, setUser] =
    useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);


  const signOut = () => {
    const logout = window.confirm("Are you sure you want to Log Out?");
    if (logout) {
      const updateUser = {
        isSignedIn: false,
        name: "",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        success: false,
        error: "",
        newUser: false,
      };
      setLoggedInUser(updateUser);
      setUser(updateUser);
      sessionStorage.setItem("email", "");
      sessionStorage.setItem("displayName", "");
      history.push("/");
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-color px-0">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mx-5">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                <i class="fas fa-home "></i>   হোম <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/aboutDetails" class="nav-link" href="#">
                <i class="fas fa-info-circle"></i>  আমাদের সম্পর্কে
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/doctorsDetails" class="nav-link" href="#">
                <i class="fas fa-users"></i>  ডাক্তার
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-briefcase-medical"></i>  সার্ভিস
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/appointment">
                  আল্ট্রাসনোগ্রাফি
                </Link>
                <Link class="dropdown-item" href="/appointment">
                  চেম্বার
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/appointment">
                  বুক ভিডিও কল
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link to="/blogDetails" class="nav-link" href="#">
                <i class="fas fa-blog"></i>  ব্লগ
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/contact" class="nav-link" href="#">
                <i class="fas fa-envelope"></i>  যোগাযোগ
              </Link>
            </li>
          </ul>


          <div class={`social-icon ${screenWidth < 576 ? 'float-none' : 'float-right'}`}>
            <ul className="d-flex justify-content-lg-end justify-content-center mx-5">

              <a href="" className="mr-2">
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
              </a>
              <a href="" className="mr-2">
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </a>
              <a href="" className="mr-2">
                <li>
                  <i class="fab fa-linkedin"></i>
                </li>
              </a>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
