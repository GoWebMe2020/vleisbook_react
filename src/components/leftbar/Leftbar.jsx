import './leftbar.css';
import { Users } from "../../dummyData"
import FriendList from "../friendList/FriendList"

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <div className="leftbarIcon"><i className="fas fa-rss"></i></div>
            <span className="leftbarListItemText">Feed</span>
          </li>

          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="fas fa-comment-dots"></i>
            </div>
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="fas fa-play-circle"></i>
            </div>
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="fas fa-users"></i>
            </div>
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="far fa-bookmark"></i>
            </div>
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="far fa-question-circle"></i>
            </div>
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="fas fa-briefcase"></i>
            </div>
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="far fa-calendar-alt"></i>
            </div>
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map(u => (
            <FriendList key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
