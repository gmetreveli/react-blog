import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"} className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link className="link" to={"/settings"}>
              <img
                className="topImg"
                src="https://images.pexels.com/photos/20654442/pexels-photo-20654442/free-photo-of-a-cat-sitting-on-top-of-a-red-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cat on a car"
              />
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
