
import './App.css';
import './App.scss';
import Header from './components/HeaderSection/HeaderSection';
import Main from './pages/Main/Main.jsx';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video/:idFromParams" element={<Main />} />
        <Route path="/video-upload" element={<VideoUpload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;