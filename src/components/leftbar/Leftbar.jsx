import './leftbar.css';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <div className="leftbarIcon"><i class="fas fa-rss"></i></div>
            <span className="leftbarListItemText">Feed</span>
          </li>
          
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="fas fa-comment-dots"></i>
            </div>  
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="fas fa-play-circle"></i>
            </div>
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="fas fa-users"></i>
            </div>
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="far fa-bookmark"></i>
            </div>
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="far fa-question-circle"></i>
            </div>
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="fas fa-briefcase"></i>
            </div>
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="far fa-calendar-alt"></i>
            </div>
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <div className="leftbarIcon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr"/>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp2.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp3.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp4.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp5.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp6.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp7.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp8.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp9.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp8.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendProfilePicture" src="/assets/person/pp9.jpg" alt="friend profile picture"/>
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default Leftbar;
