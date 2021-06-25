import './share.css';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/pp1.jpg" className="shareProfilePicture" alt="" />
          <input placeholder="What's on your mind JP?" className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <i className="fas fa-photo-video shareIcon"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-tag shareIcon"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
            <i class="fas fa-map-marker-alt shareIcon"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-grin shareIcon"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
