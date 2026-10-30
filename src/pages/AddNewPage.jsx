import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function AddNewPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const { addNoteHandler } = useNotes();

  function onBodyInputHandler(event) {
    setBody(event.currentTarget.innerHTML);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!title.trim() || !bodyRef.current?.innerText.trim()) {
      alert("Judul dan isi catatan wajib diisi.");
      return;
    }

    addNoteHandler({
      title: title.trim(),
      body,
    });

    navigate("/");
  }

  return (
    <main>
      <header>
        <h1>Tambah Catatan</h1>

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Batal</Link>
            </li>
          </ul>
        </nav>
      </header>

      <form onSubmit={onSubmitHandler}>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Judul catatan..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-label="Judul catatan"
            required
          />

          <div
            ref={bodyRef}
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah..."
            contentEditable
            suppressContentEditableWarning
            onInput={onBodyInputHandler}
            role="textbox"
            aria-label="Isi catatan"
            aria-multiline="true"
          />
        </div>

        <div className="add-new-page__action">
          <button
            className="action"
            type="submit"
            aria-label="Simpan catatan"
            title="Simpan catatan"
          >
            ✓
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddNewPage;
