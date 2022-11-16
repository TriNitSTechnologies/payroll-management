import "./Header.css";
import logo from "../Image/logo-dark.png";
import photo from "../Image/pexels-photo.jpeg";
function Header() {
  return (
    <div className="border d-flex shadow">
      <div className="d-flex">
        <div>
          <img
            src={logo}
            alt="it represents company logo"
            className="logo m-2"
          />
        </div>
          <div className="dash  ms-4">
            <i className="bi bi-list "></i>
          </div>
        </div>
        <div className="flex ">
            <div className="float-end d-flex">
          <div className="notification  ms-4">
            <i className="bi bi-bell"></i>
          </div>
          <div className="m-3 ms-2">
            <img src={photo} alt="circle" className="rounded-circle round" />
          </div>
          <div className="fw-bold m-4 ms-1">Trinits Technologies</div>
          </div>
        </div>
      </div>
  
  );
}
export default Header;
