import './post.css'

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfilePicture"  src="/assets/person/pp3.jpg" alt="" />
            <span className="postUsername">Genevieve Stone</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
          <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! This is amazing. This is my first post on VleisBook!!!</span>
          <img className="postImg" src="/assets/posts/post1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="postLikeIconBorder"><i class="far fa-thumbs-up likeIcon"></i></div>
            <div className="postHeartIconBorder"><i class="fas fa-heart likeIcon"></i></div>
            <span className="postLikeCounter">21 like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
