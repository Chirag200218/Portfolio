import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainResume from './MainResume';
import ProjectDetail from './Components/Project_section/ProjectDetail.js';

function App() {
  return (
     <>
     <BrowserRouter>
        <Routes>
             <Route path="/" element={<MainResume/>}/>
             <Route path="project" element={<ProjectDetail/>}></Route>
        </Routes>
        
     </BrowserRouter>
      
     </>
  );
}

export default App;
