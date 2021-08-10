import "./friendList.css";

const FriendList = ({ user }) => {
  return (
    <li className="leftbarFriend">
      <img className="leftbarFriendProfilePicture" src={user.profilePicture} alt="Friend List profile" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

export default FriendList;
