import InstaProfileImg from "../../public/insta_profile_sample.jpg";

const RightBarComponent = () => {
  return (
    <div className="right-bar-container">
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_1</span>
              </div>
              <div className="pers-name">
              <span>User!1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Switch</span>
       </div>
      </div>
      <div className="suggested-for-you-right-bar">
            <div className="suggested-for-you">
              <span>Suggested for you</span>
            </div>
            <div className="see-all">
              <span>See All</span>
            </div>
      </div>
      <div className="follow-profiles">
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_2</span>
              </div>
              <div className="pers-name">
              <span>Followed by user_1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Follow</span>
       </div>
      </div>
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_3</span>
              </div>
              <div className="pers-name">
              <span>Followed by user_1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Follow</span>
       </div>
      </div>
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_4</span>
              </div>
              <div className="pers-name">
              <span>Followed by user_1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Follow</span>
       </div>
      </div>
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_5</span>
              </div>
              <div className="pers-name">
              <span>Followed by user_1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Follow</span>
       </div>
      </div>
      <div className="profile-right-bar">
       <div className="profile-info">
        <div className="personal-profile">
          <div className="profile-image">
            <img src={InstaProfileImg} alt="Instagram DP" />
          </div>
          <div className="profile-text">
              <div className="pers-user-name">
              <span>user_6</span>
              </div>
              <div className="pers-name">
              <span>Followed by user_1</span>
              </div>
          </div>
        </div>
        <span className="follow-switch">Follow</span>
       </div>
      </div>
      </div>
      <div className="about-right-bar">
        <div className="references">
          <div>
          <span>About <li> • Help</li> <li> • Press</li>
          <li> • API</li><li> • Jobs </li><li> • Privacy</li><li> • Terms</li></span>
          </div>
          <div>
          <span><li> • Locations</li><li> • Language</li><li> • Meta Verified</li></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBarComponent
