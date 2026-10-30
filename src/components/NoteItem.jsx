
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils';

function NoteItem({ note }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${note.id}`}>
          {note.title}
        </Link>
      </h3>

      <p className="note-item__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>

      <div className="note-item__body">
        {parse(note.body)}
      </div>
    </article>
  );
}

export default NoteItem;
