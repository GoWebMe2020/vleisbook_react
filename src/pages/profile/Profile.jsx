import Topbar from "../../components/topbar/Topbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/posts/post5.jpg" alt="Profile cover" />
              <img className="profileUserImg" src="assets/person/pp7.jpg" alt="Profile" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">JP Ferreira</h4>
              <span className="profileInfoDesc">Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;
