
import { Link, useSearchParams } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useNotes } from '../context/NotesContext';
import NoteItem from '../components/NoteItem';

function HomePage() {
  const { notes } = useNotes();
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';

  const activeNotes = notes.filter((note) => !note.archived);

  const filteredNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  function onKeywordChangeHandler(event) {
    const value = event.target.value;

    if (value) {
      setSearchParams({ keyword: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Catatan Aktif</h1>

        <section className="search-bar">
          <input
            type="text"
            placeholder="Cari berdasarkan judul ..."
            value={keyword}
            onChange={onKeywordChangeHandler}
            aria-label="Cari berdasarkan judul"
          />
        </section>

        {filteredNotes.length > 0 ? (
          <section className="notes-list">
            {filteredNotes.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </section>
        ) : (
          <section className="notes-list-empty">
            <p>Tidak ada catatan</p>
          </section>
        )}
      </main>

      <div className="homepage__action">
        <Link
          to="/notes/new"
          className="action"
          aria-label="Tambah catatan"
          title="Tambah catatan"
        >
          <Plus size={32} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
