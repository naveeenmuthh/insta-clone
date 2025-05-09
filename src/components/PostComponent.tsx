import InstaProfileImg from "../../public/insta_profile_sample.jpg";

import SamplePostImg from "../../public/sample_post_img.jpg"

const PostComponent = () => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-top-bar">
            <div className="profile-content-info">
            <div className="post-profile-img-container">
            <img src={InstaProfileImg} className="post-profile-img"></img>
            </div>
              <div className="profile-name">
                <span>user_1</span>
                <span>Original audio</span>
              </div>
             <div className="post-timeline">
             <span >• 3d • </span> 
             <span className="post-follow">Follow</span>
             </div>
            </div>
            <svg aria-label="More options"  fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </div>
        <div className="post-content">
        <img className="post-img" src={SamplePostImg} alt="Sample Post Image" />
        </div>
        <div className="post-activity-info">
        <div className="post-actions">
        <svg aria-label="Unlike" fill={"red"} height="24" role="img" viewBox="0 0 48 48" width="24"><title>Unlike</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        <svg aria-label="Comment" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <svg aria-label="Share"  fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
        <svg aria-label="Save"  fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
      </div>
    </div>
  )
}

export default PostComponent
