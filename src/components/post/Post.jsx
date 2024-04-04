import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <Link className="link" to={"/post/ID"}>
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to={"/post/ID"}>
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat
        itaque sunt eaque asperiores ut assumenda corrupti et nihil sapiente
        dolorem laudantium quam exercitationem cupiditate iste, amet labore
        voluptate perspiciatis!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nisi quaerat itaque sunt eaque asperiores ut assumenda
        corrupti et nihil sapiente dolorem laudantium quam exercitationem
        cupiditate iste, amet labore voluptate perspiciatis!Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nisi quaerat itaque sunt eaque
        asperiores ut assumenda corrupti et nihil sapiente dolorem laudantium
        quam exercitationem cupiditate iste, amet labore voluptate
        perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nisi quaerat itaque sunt eaque asperiores ut assumenda corrupti et nihil
        sapiente dolorem laudantium quam exercitationem cupiditate iste, amet
        labore voluptate perspiciatis!
      </div>
    </div>
  );
}
