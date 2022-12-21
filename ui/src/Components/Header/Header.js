import "./Header.css";
import logo from "../Image/logo-dark.png";
import business from "../Image/download.jpeg";
import photo from "../Image/pexels-photo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../Store/LoginSlice";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Header(props) {

  const username = useSelector((state) =>state.login.username)
  let userdispatch = useDispatch();
  function logoutuser() {
    userdispatch(
      loginSlice({
        username: "",
        isUserLoggedIn: false,
      })
    );
  }
  return (
    <div className="border d-flex shadow h-100">
      <div className="d-flex">
        <div>
          <img
            src={logo}
            alt="it represents company logo"
            className="logo m-2"
          />
        </div>
        <div className="dash  ms-4" onClick={props.hidesidebar}>
          <i className="bi bi-list "></i>
        </div>
      </div>
      <div className="header-rightmenu ">
        <div className=" d-flex float-end">
          <div class="dropdown view-notification ms-4">
            <button
              className="rounded-circle border-light bell-notification-style"
              data-bs-toggle="dropdown"
              aria-hidden="false"
            >
              <i className="bi bi-bell view"></i>
            </button>
            <div className="dropdown-menu drop-menu mt-2 shadow">
              <div className="dropdown-top">
                <small className="ms-3">Notifications</small>
                <small className="text-danger float-end me-2">CLEAR ALL</small>
              </div>
              <hr></hr>
              <div className="dropdown-body">
                <div className="dropdown-style">
                  <div className="d-flex  ms-2">
                    <img
                      src={business}
                      alt="circle"
                      className="rounded-circle round"
                    />
                    <small className="ms-3 fs-6">
                      Brian Johnson paid the invoice #DF65485
                    </small>
                  </div>
                  <div className="horizantal-line"></div>
                </div>
                <div className="dropdown-style">
                  <div className="d-flex ms-2 mt-2">
                    <img
                      src={business}
                      alt="circle"
                      className="rounded-circle round"
                    />
                    <small className="ms-3 fs-6">
                      Marie canales has accepted your estimate #GTR458789
                    </small>
                  </div>
                </div>
                <div className="horizantal-line"></div>
                <div className="dropdown-style">
                  <div className="d-flex  ms-2 mt-2">
                    <img
                      src={business}
                      alt="circle"
                      className="rounded-circle round"
                    />
                    <small className="ms-3 fs-6">New user registered</small>
                  </div>
                </div>
                <div className="horizantal-line"></div>
                <div className="dropdown-style">
                  <div className="d-flex ms-2 mt-2">
                    <img
                      src={business}
                      alt="circle"
                      className="rounded-circle round"
                    />
                    <small className="ms-3 fs-6">
                      Barbara Moore Declined the invoice #RDW026896
                    </small>
                  </div>
                </div>
                <div className="horizantal-line"></div>

                <div className="dropdown-style ">
                  <div className="d-flex ms-2 mt-2">
                    <img
                      src={business}
                      alt="circle"
                      className="rounded-circle round"
                    />
                    <small className="ms-3 fs-6">
                      you have received a new message
                    </small>
                  </div>
                </div>
                <div className="horizantal-line"></div>

                <div className="dropdown-bottom text-center mt-2">
                  <small className="mb-2 ">
                    <Link
                      to="/notifications"
                      className="text-decoration-none text-dark"
                    >
                      View all Notifications
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="m-3 ms-2">
            <img src={photo} alt="circle" className="rounded-circle round" />
          </div>

          <div className="fw-bold m-4 ms-1 btn-group ">
            <div className="dropdown">
              <button
                className="btn btn-light bg"
                type="button"
                data-bs-toggle="dropdown"
                aria-hidden="false"
              >
               
                {username}
              </button>
              <ul className="dropdown-menu mt-3 ms-2 shadow">
                <li className=" dropdown-style mt-1 p-1">
                  <Link
                    to="/selectprofile"
                    className="text-decoration-none fs-5 ms-3 "
                  >
                    <i className="bi bi-person text-dark"></i>
                    <small className=" text-dark fw-lighter fs-6 ms-2">
                      Profile
                    </small>
                  </Link>
                </li>
                <li className="mt-2  dropdown-style mt-1 p-1">
                  <Link
                    to="/settings"
                    className="text-decoration-none fs-5 ms-3"
                  >
                    <i className="bi bi-gear-fill  text-dark "></i>
                    <span className=" text-dark fw-lighter fs-6 ms-2">
                      settings
                    </span>
                  </Link>
                </li>
                <li className=" mt-2 ps-4 dropdown-style mt-1 p-1">
                  <FiLogIn className="bi bi-gear-fill   text-dark " />
                  <span
                    className="text-dark fw-lighter fs-6 ms-2"
                    onClick={logoutuser}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
