import './post.css'
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfilePicture" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="postLikeIconBorder" onClick={likeHandler}><i className="far fa-thumbs-up likeIcon"></i></div>
            <div className="postHeartIconBorder" onClick={likeHandler}><i className="fas fa-heart likeIcon"></i></div>
            <span className="postLikeCounter">{likes} like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
