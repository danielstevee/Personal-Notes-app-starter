
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import AddNewPage from './pages/AddNewPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/notes/new" element={<AddNewPage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
