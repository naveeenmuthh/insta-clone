import InstaProfileImg from "../../public/insta_profile_sample.jpg";

const StoryComponent = () => {


const data = [{
 profile_name:"user_1",
 prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
 redirect:"story_user_1", 
},{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 },{
  profile_name:"user_1",
  prof_img:<img src={InstaProfileImg} className="story-profile-img"></img>,
  redirect:"story_user_1", 
 }
]

  return (
    <div className="story-container">
        <div className="story-items-container">
        {data.map((d,i)=>{

return <div className="story-items" key={i}>
  {d.prof_img}
  {d.profile_name}
</div>
})}
        </div>
    </div>
  )
}

export default StoryComponent
