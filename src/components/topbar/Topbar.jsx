import "./topbar.css"

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">VleisBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i class="fas fa-search"></i>
          <input placeholder="Search for ..." className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <i class="fas fa-user"></i>
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <i class="fas fa-comment-dots"></i>
          <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
          <i class="fas fa-bell"></i>
          <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/pp1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;