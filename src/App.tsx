import './App.css'
import './styles/leftBarStyles.css'
import './styles/postStyles.css'
import './styles/rightBarStyles.css'
import './styles/storyStyles.css'
import LeftBarComponent from './components/LeftBarComponent'
import PostComponent from './components/PostComponent'
import RightBarComponent from './components/RightBarComponent'
import StoryComponent from './components/StoryComponent'

function App() {

  return (
    <>
       <div className="main-container">
       <LeftBarComponent/>
       <div className="mid-container">
       <StoryComponent/>
       <PostComponent/>
       </div>
       <RightBarComponent/> 
       </div>
    </>
  )
}

export default App