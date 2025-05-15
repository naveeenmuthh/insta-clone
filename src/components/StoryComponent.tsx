import { useRef } from "react";
import InstaProfileImg from "../../public/insta_profile_sample.jpg";


const StoryComponent = () => {

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction:number)=>{
const scrollAmount = 60; 
if(sliderRef.current){
  sliderRef.current.scrollBy({left:direction*scrollAmount, behavior:"auto"});
}
  }

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
      <button className="prev-container nav-button" onClick={()=>scroll(-1)}>prev</button>
        <div className="story-items-container" ref={sliderRef}>
        {data.map((d,i)=>{

return <div className="story-items" key={i}>
  {d.prof_img}
  {d.profile_name}
</div>
})}
        </div>
        <button className="next-container nav-button" onClick={()=>scroll(1)}>next</button>
    </div>
  )
}

export default StoryComponent
