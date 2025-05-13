import './App.css'
import './styles/leftBarStyles.css'
import './styles/postStyles.css'
import './styles/rightBarStyles.css'
import './styles/storyStyles.css'
import LeftBarComponent from './components/LeftBarComponent'
import PostComponent from './components/PostComponent'
import RightBarComponent from './components/RightBarComponent'
import StoryComponent from './components/StoryComponent'

import {useMediaQuery} from "react-responsive";
import LeftBarResponsive from './components/leftBarResponsive'
import LeftBarMobile from './components/leftBarMobile'

function App() {

  const screen1 = useMediaQuery({query:'(max-width:1265px)'});
  const screen2 = useMediaQuery({query:'(max-width:1160px)'});
  const screen3 = useMediaQuery({query:'(max-width:768px)'});

  console.log(screen1,screen2,screen3,"hi");


  return (
    <>
     {!screen3? <div className="main-container">
       {screen1?<LeftBarResponsive/>:<LeftBarComponent/>}
           <div className="movable-container">
           <div className="mid-container">
       <StoryComponent/>
       <PostComponent/>
       </div>
       {!screen2 && <RightBarComponent/> }
           </div>
       </div> : <div className='main-mobile-container'>
       <div className="movable-container">
           <div className="mid-container">
       <StoryComponent/>
       <PostComponent/>
       </div>
       {!screen2 && <RightBarComponent/> }
           </div>
           <LeftBarMobile/>
        </div>}
    </>
  )
}

export default App