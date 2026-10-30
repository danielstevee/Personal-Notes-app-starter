
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteItem from '../components/NoteItem';

function ArchivePage() {
  const { notes } = useNotes();

  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <main>
      <header>
        <h1>Arsip Catatan</h1>

        <nav className="navigation">
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/archives">Arsip</Link></li>
          </ul>
        </nav>
      </header>

      {archivedNotes.length > 0 ? (
        <section className="notes-list">
          {archivedNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </section>
      ) : (
        <section className="notes-list-empty">
          <p>Arsip kosong</p>
        </section>
      )}
    </main>
  );
}

export default ArchivePage;
