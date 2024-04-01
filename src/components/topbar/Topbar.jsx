import "./topbar.css";

export default function Topbar() {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/20654442/pexels-photo-20654442/free-photo-of-a-cat-sitting-on-top-of-a-red-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cat on a car"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
