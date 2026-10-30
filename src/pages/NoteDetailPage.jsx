
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Archive, ArchiveRestore, Trash2 } from 'lucide-react';
import parse from 'html-react-parser';
import { useNotes } from '../context/NotesContext';
import { showFormattedDate } from '../utils';

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    notes,
    deleteNoteHandler,
    archiveNoteHandler,
    unarchiveNoteHandler,
  } = useNotes();

  const note = notes.find((item) => item.id === id);

  if (!note) {
    return (
      <main>
        <h2>Catatan tidak ditemukan</h2>
        <Link to="/">Kembali ke beranda</Link>
      </main>
    );
  }

  function onDeleteHandler() {
    const confirmed = window.confirm(
      `Yakin ingin menghapus catatan "${note.title}"?`
    );

    if (!confirmed) return;

    deleteNoteHandler(id);
    navigate('/');
  }

  function onArchiveHandler() {
    if (note.archived) {
      unarchiveNoteHandler(id);
    } else {
      archiveNoteHandler(id);
    }

    navigate('/');
  }

  return (
    <main>
      <header>
        <h1>Detail Catatan</h1>

        <nav className="navigation">
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/archives">Arsip</Link></li>
          </ul>
        </nav>
      </header>

      <article className="detail-page">
        <h2 className="detail-page__title">{note.title}</h2>

        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>

        <div className="detail-page__body">
          {parse(note.body)}
        </div>
      </article>

      <div className="detail-page__action">
        <button
          className="action"
          type="button"
          onClick={onArchiveHandler}
          aria-label={
            note.archived ? 'Kembalikan catatan' : 'Arsipkan catatan'
          }
          title={
            note.archived ? 'Kembalikan catatan' : 'Arsipkan catatan'
          }
        >
          {note.archived ? (
            <ArchiveRestore size={24} />
          ) : (
            <Archive size={24} />
          )}
        </button>

        <button
          className="action"
          type="button"
          onClick={onDeleteHandler}
          aria-label="Hapus catatan"
          title="Hapus catatan"
        >
          <Trash2 size={24} />
        </button>
      </div>
    </main>
  );
}

export default NoteDetailPage;
